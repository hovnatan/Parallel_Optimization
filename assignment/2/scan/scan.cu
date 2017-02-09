#include <stdio.h>

#include <cuda.h>
#include <cuda_runtime.h>
#include <driver_functions.h>

#include <thrust/scan.h>
#include <thrust/device_ptr.h>
#include <thrust/device_malloc.h>
#include <thrust/device_free.h>

#include "CycleTimer.h"

#define THREADS_PER_BLOCK 1024
extern float toBW(int bytes, float sec);

#define DEBUG

#ifdef DEBUG
#define cudaCheckError(ans) { cudaAssert((ans), __FILE__, __LINE__); }
inline void cudaAssert(cudaError_t code, const char *file, int line,
                       bool abort=true)
{
    if (code != cudaSuccess) 
    {
        fprintf(stderr, "CUDA Error: %s at %s:%d\n", 
            cudaGetErrorString(code), file, line);
        if (abort) exit(code);
    }
}
#else
#define cudaCheckError(ans) ans
#endif

/* Helper function to round up to a power of 2.
 */
static inline int nextPow2(int n) {
    n--;
    n |= n >> 1;
    n |= n >> 2;
    n |= n >> 4;
    n |= n >> 8;
    n |= n >> 16;
    n++;
    return n;
}

void print_int_device_memory(int* device_memory, int len) {
    int* device_memmory_debug = new int[len];
    cudaCheckError(cudaMemcpy(device_memmory_debug, device_memory, len * sizeof(int),
               cudaMemcpyDeviceToHost));
    printf("printing array, length: %d\n", len);
    for (int i = 0; i < len; i++) {
        printf("%d ", device_memmory_debug[i]);
    }
    printf("\n");
    delete[] device_memmory_debug;
}

__global__ void cuda_es_upsweep(int* device_result, int twod, int twod1) {
    int i = blockDim.x * blockIdx.x + threadIdx.x;
    if ((i + 1) % twod1 != 0) {
        return;
    }
    device_result[i] += device_result[i - twod];
}

__global__ void cuda_es_upsweep_varblock(int* device_result,
                                         int twod, int twod1,
                                         int rounded_length,
                                         int active_int) {
    int i = blockDim.x * blockIdx.x + threadIdx.x;
    unsigned int dst_index = (i + 1) * twod1 - 1;
    unsigned int src_index = dst_index - twod;
    unsigned int unsigned_rounded_length = rounded_length;
    if (dst_index < unsigned_rounded_length) {
        // if (active_int == 2)
        //     printf("dst_index: %d\n", dst_index);
        device_result[dst_index] += device_result[src_index];
    }
}


__global__ void cuda_es_downsweep(int* device_result, int twod, int twod1) {
    int i = blockDim.x * blockIdx.x + threadIdx.x;
    if ((i + 1) % twod1 != 0) {
        return;
    }
    int t = device_result[i - twod];
    device_result[i - twod] = device_result[i];
    device_result[i] += t;
}

__global__ void cuda_es_downsweep_varblock(int* device_result,
                                           int twod, int twod1,
                                           int rounded_length) {
    int i = blockDim.x * blockIdx.x + threadIdx.x;
    unsigned int dst_index = (i + 1) * twod1 - 1;
    unsigned int src_index = dst_index - twod;
    unsigned int rounded_length_unisigned = rounded_length;

    if (dst_index < rounded_length_unisigned) {
        int t = device_result[src_index];
        device_result[src_index] = device_result[dst_index];
        device_result[dst_index] += t;
    }
}

void exclusive_scan(int* device_start, int length, int* device_result) {
    /* Fill in this function with your exclusive scan implementation.
     * You are passed the locations of the input and output in device memory,
     * but this is host code -- you will need to declare one or more CUDA
     * kernels (with the __global__ decorator) in order to actually run code
     * in parallel on the GPU.
     * Note you are given the real length of the array, but may assume that
     * both the input and the output arrays are sized to accommodate the next
     * power of 2 larger than the input.
     */
    int threadsPerBlock = THREADS_PER_BLOCK;
    int rounded_length = nextPow2(length);
    int blockPerGrid = std::max(1, rounded_length / threadsPerBlock / 2);
    // int len = 128;
    // int device_result_debug[4096] = {0};
    // cudaMemcpy(device_result_debug, device_result, len * sizeof(int),
    //            cudaMemcpyDeviceToHost);
    // printf("printing array:\n");
    // for (int i = 0; i < len; i++) {
    //     printf("%d ", device_result_debug[i]);
    // }
    // printf("\n");
    printf("threadsPerBlock: %d, rounded_length: %d, blockPerGrid: %d\n",
            threadsPerBlock, rounded_length, blockPerGrid);
    // print_int_device_memory(device_result, length);
    // printf("\ncuda_es_upsweep\n");
    
    for (int twod = 1; twod < rounded_length / 2; twod *= 2) {
        int twod1 = twod * 2;
        cuda_es_upsweep<<<blockPerGrid, threadsPerBlock>>>(device_result, twod, twod1);
        cudaCheckError(cudaThreadSynchronize()); 
    }
    print_int_device_memory(device_result, length);
    // exit(1);
    cudaCheckError(cudaMemset(device_result + rounded_length - 1, 0, sizeof(int)));
    // exit(1);
    // print_int_device_memory(device_result, rounded_length);

    // printf("\ncuda_es_downsweep\n");
    for (int twod = rounded_length / 2; twod >=1; twod /= 2)
    {
        int twod1 = twod * 2;
        cuda_es_downsweep<<<blockPerGrid, threadsPerBlock>>>(device_result, twod, twod1);
        cudaCheckError(cudaThreadSynchronize());
    }
    // print_int_device_memory(device_result, rounded_length);
}

void exclusive_scan_varblock(int* device_start, int length, int* device_result) {
    int threadsPerBlock = THREADS_PER_BLOCK;
    int rounded_length = nextPow2(length);
    int blockPerGrid = std::max(1, rounded_length / threadsPerBlock / 2);

    printf("threadsPerBlock: %d, rounded_length: %d, blockPerGrid: %d\n",
            threadsPerBlock, rounded_length, blockPerGrid);
    // print_int_device_memory(device_result, rounded_length);
    int active_int = rounded_length / 2;
    for (int twod = 1; twod < rounded_length / 2; twod *= 2) {
        int twod1 = twod * 2;
        // printf("blockPerGrid: %d, active_int: %d\n", blockPerGrid, active_int);
        cuda_es_upsweep_varblock<<<blockPerGrid, threadsPerBlock>>>(device_result, twod, twod1, rounded_length, active_int);
        cudaCheckError(cudaThreadSynchronize());
        blockPerGrid = std::max(1, blockPerGrid/2);
        active_int /= 2;
    }
    // print_int_device_memory(device_result, rounded_length);
    // exit(1);
    cudaError_t cudaError =
                cudaMemset(device_result + rounded_length - 1, 0, sizeof(int));
    cudaCheckError(cudaError);

    int active_item = 1;
    for (int twod = rounded_length / 2; twod >=1; twod /= 2)
    {
        int twod1 = twod * 2;
        cuda_es_downsweep_varblock<<<blockPerGrid, threadsPerBlock>>>(device_result, twod, twod1, rounded_length);
        cudaCheckError(cudaThreadSynchronize());
        active_item *= 2;
        blockPerGrid = std::max(1, active_item / THREADS_PER_BLOCK);
    }

    // print_int_device_memory(device_result, rounded_length);
}


__global__ void exclusive_scan_sharedmemory(int* device_start,
                                            unsigned int rd_len,
                                            int* device_result) {
    __shared__ int work_set[THREADS_PER_BLOCK * 2];
    unsigned int i = blockDim.x * blockIdx.x + threadIdx.x;
    unsigned int src1 = 2 * i + 1;
    unsigned int src2 = 2 * i;

    if (src1 < rd_len) {
        work_set[src2] = device_result[src2];
        work_set[src1] = device_result[src1] + work_set[src2];
    }
    __syncthreads();

    unsigned int offset = 2;
    for (unsigned int work_thrds = rd_len / 4; work_thrds > 1; work_thrds /= 2) 
    {
        if (i < work_thrds) {
            int src1_index = 2 * offset * (i + 1) - 1;
            int src0_index = src1_index - offset;
            work_set[src1_index] += work_set[src0_index];
        } 
        __syncthreads();
        offset *= 2;
    }

    if (i == 0) {
        work_set[rd_len - 1] = 0;
    }

    // unsigned int work_thrds_limit = rd_len / 2;
    offset = rd_len / 2;
    for (unsigned int work_thrds = 1;
         work_thrds < rd_len;
         work_thrds *= 2) {
        if (i < work_thrds) {
            int src1_index = 2 * offset * (i + 1) - 1;
            int src0_index = src1_index - offset;
            int swap = work_set[src0_index];
            work_set[src0_index] = work_set[src1_index];
            work_set[src1_index] += swap;
        }
        // if (work_thrds == 4)
        //     break;
        __syncthreads();
        offset /= 2;
    }

    // __syncthreads();
    if (src1 < rd_len) {
        device_result[src1] = work_set[src1] ;
        device_result[src2] = work_set[src2] ;
    }
}
/* This function is a wrapper around the code you will write - it copies the
 * input to the GPU and times the invocation of the exclusive_scan() function
 * above. You should not modify it.
 */
double cudaScan(int* inarray, int* end, int* resultarray) {
    int* device_result;
    int* device_input;
    // We round the array sizes up to a power of 2, but elements after
    // the end of the original input are left uninitialized and not checked
    // for correctness.
    // You may have an easier time in your implementation if you assume the
    // array's length is a power of 2, but this will result in extra work on
    // non-power-of-2 inputs.
    int rounded_length = nextPow2(end - inarray);
    cudaMalloc((void **)&device_result, sizeof(int) * rounded_length);
    cudaMalloc((void **)&device_input, sizeof(int) * rounded_length);
    cudaMemcpy(device_input, inarray, (end - inarray) * sizeof(int),
               cudaMemcpyHostToDevice);

    // For convenience, both the input and output vectors on the device are
    // initialized to the input values. This means that you are free to simply
    // implement an in-place scan on the result vector if you wish.
    // If you do this, you will need to keep that fact in mind when calling
    // exclusive_scan from find_repeats.
    cudaMemcpy(device_result, inarray, (end - inarray) * sizeof(int),
               cudaMemcpyHostToDevice);
    // print_int_device_memory(device_result, (end - inarray));
    // exit(1);
    double startTime = CycleTimer::currentSeconds();

    // exclusive_scan(device_input, end - inarray, device_result);
    // exclusive_scan_varblock(device_input, end - inarray, device_result);
    int threadsPerBlock = THREADS_PER_BLOCK;
    int blockPerGrid = 1;
    exclusive_scan_sharedmemory<<<blockPerGrid, threadsPerBlock>>>(device_input, rounded_length, device_result);
    print_int_device_memory(device_result, end - inarray);
    exit(1);

    // Wait for any work left over to be completed.
    cudaThreadSynchronize();
    double endTime = CycleTimer::currentSeconds();
    double overallDuration = endTime - startTime;

    cudaMemcpy(resultarray, device_result, (end - inarray) * sizeof(int),
               cudaMemcpyDeviceToHost);
    return overallDuration;
}

/* Wrapper around the Thrust library's exclusive scan function
 * As above, copies the input onto the GPU and times only the execution
 * of the scan itself.
 * You are not expected to produce competitive performance to the
 * Thrust version.
 */
double cudaScanThrust(int* inarray, int* end, int* resultarray) {

    int length = end - inarray;
    thrust::device_ptr<int> d_input = thrust::device_malloc<int>(length);
    thrust::device_ptr<int> d_output = thrust::device_malloc<int>(length);

    cudaMemcpy(d_input.get(), inarray, length * sizeof(int),
               cudaMemcpyHostToDevice);

    double startTime = CycleTimer::currentSeconds();

    thrust::exclusive_scan(d_input, d_input + length, d_output);

    cudaThreadSynchronize();
    double endTime = CycleTimer::currentSeconds();

    cudaMemcpy(resultarray, d_output.get(), length * sizeof(int),
               cudaMemcpyDeviceToHost);
    thrust::device_free(d_input);
    thrust::device_free(d_output);
    double overallDuration = endTime - startTime;
    return overallDuration;
}

int find_repeats(int *device_input, int length, int *device_output) {
    /* Finds all pairs of adjacent repeated elements in the list, storing the
     * indices of the first element of each pair (in order) into device_result.
     * Returns the number of pairs found.
     * Your task is to implement this function. You will probably want to
     * make use of one or more calls to exclusive_scan(), as well as
     * additional CUDA kernel launches.
     * Note: As in the scan code, we ensure that allocated arrays are a power
     * of 2 in size, so you can use your exclusive_scan function with them if
     * it requires that. However, you must ensure that the results of
     * find_repeats are correct given the original length.
     */
    return 0;
}

/* Timing wrapper around find_repeats. You should not modify this function.
 */
double cudaFindRepeats(int *input, int length, int *output, int *output_length) {
    int *device_input;
    int *device_output;
    int rounded_length = nextPow2(length);
    cudaMalloc((void **)&device_input, rounded_length * sizeof(int));
    cudaMalloc((void **)&device_output, rounded_length * sizeof(int));
    cudaMemcpy(device_input, input, length * sizeof(int),
               cudaMemcpyHostToDevice);

    double startTime = CycleTimer::currentSeconds();

    int result = find_repeats(device_input, length, device_output);

    cudaThreadSynchronize();
    double endTime = CycleTimer::currentSeconds();

    *output_length = result;

    cudaMemcpy(output, device_output, length * sizeof(int),
               cudaMemcpyDeviceToHost);

    cudaFree(device_input);
    cudaFree(device_output);

    return endTime - startTime;
}

void printCudaInfo() {
    // for fun, just print out some stats on the machine

    int deviceCount = 0;
    cudaError_t err = cudaGetDeviceCount(&deviceCount);

    printf("---------------------------------------------------------\n");
    printf("Found %d CUDA devices\n", deviceCount);

    for (int i = 0; i < deviceCount; i++) {
        cudaDeviceProp deviceProps;
        cudaGetDeviceProperties(&deviceProps, i);
        printf("Device %d: %s\n", i, deviceProps.name);
        printf("   SMs:        %d\n", deviceProps.multiProcessorCount);
        printf("   Global mem: %.0f MB\n",
               static_cast<float>(deviceProps.totalGlobalMem) / (1024 * 1024));
        printf("   CUDA Cap:   %d.%d\n", deviceProps.major, deviceProps.minor);
    }
    printf("---------------------------------------------------------\n");
}