// Demonstration of C++ strings
#include <string>
#include <iostream>
#include <stdio.h>

std::string stringify(char *s) {
    std::string ss = s;
    return ss;
}

int main(int arg, char *argv[]) {
    char buf[10];
    std::string strings[5];
    for (int i = 0; i < 5; i++) {
	sprintf(buf, "i=%d", i);
	strings[i] = stringify(buf);
    }
    for (int i = 0; i < 5; i++) {
	std::cout << "String " << i << ":" 
		  << strings[i] << std::endl;
    }
    return 0;
}
