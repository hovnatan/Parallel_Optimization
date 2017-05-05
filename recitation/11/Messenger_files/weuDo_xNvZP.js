if (self.CavalryLogger) { CavalryLogger.start_js(["99nzc"]); }

__d("PhotoWarningScreenConfig",[],(function a(b,c,d,e,f,g){f.exports={GraphicEvents:{GRAPHIC_PHOTO_SHOWN_NO_WARNING:"GRAPHIC_PHOTO_SHOWN_NO_WARNING",GRAPHIC_PHOTO_SHOWN_WITH_WARNING:"GRAPHIC_PHOTO_SHOWN_WITH_WARNING",GRAPHIC_PHOTO_WARNING_DISMISSED:"GRAPHIC_PHOTO_WARNING_DISMISSED"},ObjectionableEvents:{INVALIDATE_CONTENT:"invalidate_content",SHOW_WARNING_SCREEN:"show_warning_screen",DISABLE_THUMBNAIL:"disable_thumbnail",WARNING_SCREEN_DISMISSED:"warning_screen_dismissed",WARNING_SCREEN_REENABLED:"warning_screen_reenabled",MARK_OBJECTIONABLE:"mark_objectionable",UNDO_MARK_OBJECTIONABLE:"undo_mark_objectionable",WARNING_SCREEN_CONTENT_FILTER_PREFS_TAPPED:"warning_screen_content_filter_prefs_tapped"},Types:{GRAPHIC:"Violence and Gore",OBJECTIONABLE:"Sexual",HATE:"Hate",PROFANY:"Profanity",POLITICAL:"Politically Charged"}};}),null);
__d("SphericalPhotoViewerLogEvents",[],(function a(b,c,d,e,f,g){f.exports={CDN_IMAGE_FAILURE:"spherical_photo_cdn_image_failure",CUBE_LOAD_TIME:"spherical_photo_cube_load_time",DRAG_MOUSE_ANIMATION:"spherical_photo_drag_mouse_animation",DRAG_START:"spherical_photo_drag_start",ENTER_FULLSCREEN:"spherical_photo_tap_feed_to_fullscreen",EXIT_FULLSCREEN:"spherical_photo_fullscreen_exited",FALLBACK_LEARNMORE:"spherical_photo_fallback_learnmore",FALLBACK_PREVIEW:"spherical_photo_fallback_preview",FEED_VP_ENTERED:"spherical_photo_feed_vp_entered",FEED_VP_EXITED:"spherical_photo_feed_vp_exited",LOADED:"spherical_photo_loaded",MOUSEOVER_START:"spherical_photo_mouseover_start",PHONE_PAN_ANIMATION:"spherical_photo_phone_pan_animation",RENDER_FRAME_RATE:"spherical_photo_render_frame_rate",RENDERER_SETUP:"spherical_photo_renderer_setup",RENDERER_STATS:"spherical_photo_renderer_stats",SHOW_VIEW_IN_VR:"spherical_photo_show_view_in_vr",SIGNIFICANT_MOVEMENT:"spherical_photo_significant_movement",TAP_HEADING_INDICATOR:"spherical_photo_tap_heading_indicator",TAP_VIEW_IN_VR:"spherical_photo_tap_view_in_vr",WEBGL_CONTEXT_LOST:"spherical_photo_webgl_context_lost",WEBGL_INIT_FAILURE:"spherical_photo_webgl_init_failure",WEBGL_RENDER_FAILURE:"spherical_photo_webgl_render_failure",M_SENSOR_SETUP_FAILURE:"spherical_photo_m_sensor_setup_failure",WWW_ENTER_SNOWLIFT:"spherical_photo_www_enter_snowlift",WWW_EXIT_SNOWLIFT:"spherical_photo_www_exit_snowlift",WWW_GYRO_START:"spherical_photo_www_gyro_start",ZOOM_START:"spherical_photo_zoom_start",INITIAL_VIEW_MODIFIED:"spherical_photo_initial_view_modified",POST_EVENT:"spherical_photo_post_event",TOGGLE_OFF:"spherical_photo_toggle_off",TOGGLE_ON:"spherical_photo_toggle_on",WWW_IVS_OPEN:"spherical_photo_www_ivs_open",WWW_IVS_CANCEL:"spherical_photo_www_ivs_cancel",WWW_IVS_ENABLE_ON_SAVE:"spherical_photo_www_ivs_enable_on_save",WWW_IVS_DISABLE_ON_SAVE:"spherical_photo_www_ivs_disable_on_save",WWW_IVS_REQUEST_DONE:"spherical_photo_www_ivs_request_done",WWW_IVS_REQUEST_FAILED:"spherical_photo_www_ivs_request_failed",WWW_IVS_REQUEST_START:"spherical_photo_www_ivs_request_start",WWW_IVS_UPDATE_DONE:"spherical_photo_www_ivs_update_done",WWW_IVS_UPDATE_FAILED:"spherical_photo_www_ivs_update_failed",WWW_IVS_UPDATE_START:"spherical_photo_www_ivs_update_start",SERVER_IVS_UPDATE_DONE:"spherical_photo_server_ivs_update_done",SERVER_IVS_UPDATE_FAILED:"spherical_photo_server_ivs_update_failed",SERVER_IVS_UPDATE_START:"spherical_photo_server_ivs_update_start",DRAG_START_DEPRECATED:"drag_start_360_photo",PHONE_PAN_ANIMATION_DEPRECATED:"phone_pan_animation_360_photo",SHOW_VIEW_IN_VR_DEPRECATED:"show_360_photo_view_in_vr",SIGNIFICANT_MOVEMENT_DEPRECATED:"significant_movement_360_photo",TAP_FEED_TO_FULLSCREEN_DEPRECATED:"tap_360_photo_feed_to_fullscreen",TAP_HEADING_INDICATOR_DEPRECATED:"tap_360_photo_heading_indicator",TAP_VIEW_IN_VR_DEPRECATED:"tap_360_photo_view_in_vr",ZOOM_START_DEPRECATED:"zoom_start_360_photo"};}),null);
__d("SpotlightViewerLoggingEvents",[],(function a(b,c,d,e,f,g){f.exports={LOADED:"loaded",LOADING:"loading",ERROR:"error",ABORT:"abort",OPEN_BEGIN:"open_begin",OPEN_COMPLETE:"open_complete",CLOSE_BEGIN:"close_begin",CLOSE_COMPLETE:"close_complete",PAGE_BEGIN:"page_begin",PAGE_COMPLETE:"page_complete",PHOTO_CHANGE_BEGIN:"photo_change_begin",PHOTO_CHANGE_COMPLETE:"photo_change_complete",DATA_FETCH_BEGIN:"data_fetch_begin",DATA_FETCH_COMPLETE:"data_fetch_complete",PHOTO_FETCH:"photo_fetch"};}),null);
__d('ObjectionableContentFilterTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){'use strict';function h(){this.clear();}h.prototype.log=function(){c('GeneratedLoggerUtils').log('logger:ObjectionableContentFilterLoggerConfig',this.$ObjectionableContentFilterTypedLogger1,c('Banzai').BASIC);};h.prototype.logVital=function(){c('GeneratedLoggerUtils').log('logger:ObjectionableContentFilterLoggerConfig',this.$ObjectionableContentFilterTypedLogger1,c('Banzai').VITAL);};h.prototype.clear=function(){this.$ObjectionableContentFilterTypedLogger1={};return this;};h.prototype.updateData=function(j){this.$ObjectionableContentFilterTypedLogger1=babelHelpers['extends']({},this.$ObjectionableContentFilterTypedLogger1,j);return this;};h.prototype.setContentID=function(j){this.$ObjectionableContentFilterTypedLogger1.content_id=j;return this;};h.prototype.setEvent=function(j){this.$ObjectionableContentFilterTypedLogger1.event=j;return this;};h.prototype.setFilterType=function(j){this.$ObjectionableContentFilterTypedLogger1.filter_type=j;return this;};h.prototype.setVC=function(j){this.$ObjectionableContentFilterTypedLogger1.vc=j;return this;};h.prototype.updateExtraData=function(j){j=c('nullthrows')(c('GeneratedLoggerUtils').serializeMap(j));c('GeneratedLoggerUtils').checkExtraDataFieldNames(j,i);this.$ObjectionableContentFilterTypedLogger1=babelHelpers['extends']({},this.$ObjectionableContentFilterTypedLogger1,j);return this;};h.prototype.addToExtraData=function(j,k){var l={};l[j]=k;return this.updateExtraData(l);};var i={content_id:true,event:true,filter_type:true,vc:true};f.exports=h;}),null);
__d('SphericalPhotoViewerTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){'use strict';function h(){this.clear();}h.prototype.log=function(){c('GeneratedLoggerUtils').log('spherical_photo_viewer_log:SphericalPhotoViewerLoggerConfig',this.$SphericalPhotoViewerTypedLogger1,c('Banzai').BASIC);};h.prototype.logVital=function(){c('GeneratedLoggerUtils').log('spherical_photo_viewer_log:SphericalPhotoViewerLoggerConfig',this.$SphericalPhotoViewerTypedLogger1,c('Banzai').VITAL);};h.prototype.clear=function(){this.$SphericalPhotoViewerTypedLogger1={};return this;};h.prototype.updateData=function(j){this.$SphericalPhotoViewerTypedLogger1=babelHelpers['extends']({},this.$SphericalPhotoViewerTypedLogger1,j);return this;};h.prototype.setAvgFrameRenderTime=function(j){this.$SphericalPhotoViewerTypedLogger1.avg_frame_render_time=j;return this;};h.prototype.setAvgTextureToScreenRatio2=function(j){this.$SphericalPhotoViewerTypedLogger1.avg_texture_to_screen_ratio2=j;return this;};h.prototype.setClientUserID=function(j){this.$SphericalPhotoViewerTypedLogger1.client_userid=j;return this;};h.prototype.setComposerSessionID=function(j){this.$SphericalPhotoViewerTypedLogger1.composer_session_id=j;return this;};h.prototype.setDevicePixelRatio=function(j){this.$SphericalPhotoViewerTypedLogger1.device_pixel_ratio=j;return this;};h.prototype.setDt=function(j){this.$SphericalPhotoViewerTypedLogger1.dt=j;return this;};h.prototype.setErrorCode=function(j){this.$SphericalPhotoViewerTypedLogger1.error_code=j;return this;};h.prototype.setErrorMessage=function(j){this.$SphericalPhotoViewerTypedLogger1.error_message=j;return this;};h.prototype.setErrorStackTrace=function(j){this.$SphericalPhotoViewerTypedLogger1.error_stack_trace=j;return this;};h.prototype.setErrorType=function(j){this.$SphericalPhotoViewerTypedLogger1.error_type=j;return this;};h.prototype.setEventType=function(j){this.$SphericalPhotoViewerTypedLogger1.event_type=j;return this;};h.prototype.setFallbackUI=function(j){this.$SphericalPhotoViewerTypedLogger1.fallback_ui=j;return this;};h.prototype.setMaxGpuMemoryUsed=function(j){this.$SphericalPhotoViewerTypedLogger1.max_gpu_memory_used=j;return this;};h.prototype.setMaxTileLevel=function(j){this.$SphericalPhotoViewerTypedLogger1.max_tile_level=j;return this;};h.prototype.setName=function(j){this.$SphericalPhotoViewerTypedLogger1.name=j;return this;};h.prototype.setNumberOfSphericalPhoto=function(j){this.$SphericalPhotoViewerTypedLogger1.number_of_spherical_photo=j;return this;};h.prototype.setPhotoID=function(j){this.$SphericalPhotoViewerTypedLogger1.photo_id=j;return this;};h.prototype.setPitch=function(j){this.$SphericalPhotoViewerTypedLogger1.pitch=j;return this;};h.prototype.setRenderMethod=function(j){this.$SphericalPhotoViewerTypedLogger1.render_method=j;return this;};h.prototype.setSphericalPhotoSessionID=function(j){this.$SphericalPhotoViewerTypedLogger1.spherical_photo_session_id=j;return this;};h.prototype.setSurface=function(j){this.$SphericalPhotoViewerTypedLogger1.surface=j;return this;};h.prototype.setTotalDataLoaded=function(j){this.$SphericalPhotoViewerTypedLogger1.total_data_loaded=j;return this;};h.prototype.setVfov=function(j){this.$SphericalPhotoViewerTypedLogger1.vfov=j;return this;};h.prototype.setViewportHeight=function(j){this.$SphericalPhotoViewerTypedLogger1.viewport_height=j;return this;};h.prototype.setViewportWidth=function(j){this.$SphericalPhotoViewerTypedLogger1.viewport_width=j;return this;};h.prototype.setYaw=function(j){this.$SphericalPhotoViewerTypedLogger1.yaw=j;return this;};var i={avg_frame_render_time:true,avg_texture_to_screen_ratio2:true,client_userid:true,composer_session_id:true,device_pixel_ratio:true,dt:true,error_code:true,error_message:true,error_stack_trace:true,error_type:true,event_type:true,fallback_ui:true,max_gpu_memory_used:true,max_tile_level:true,name:true,number_of_spherical_photo:true,photo_id:true,pitch:true,render_method:true,spherical_photo_session_id:true,surface:true,total_data_loaded:true,vfov:true,viewport_height:true,viewport_width:true,yaw:true};f.exports=h;}),null);
__d('ImageUtils',['UserAgent_DEPRECATED'],(function a(b,c,d,e,f,g){var h={hasLoaded:function i(j){if(j.naturalWidth!==undefined){return j.complete&&j.width!==0;}else if(j.height==20&&j.width==20&&j.complete){return false;}else if(j.complete===undefined&&c('UserAgent_DEPRECATED').webkit()<500){var k=new Image();k.src=j.src;return k.complete;}return j.complete;}};f.exports=h;}),null);
__d('PhotoLogger',['Event','Banzai','BanzaiScuba','SpotlightViewerLoggingEvents','SubscriptionsHandler'],(function a(b,c,d,e,f,g){function h(i){'use strict';this.$PhotoLogger1=i;this.$PhotoLogger2={};}h.prototype.log=function(i,j,k,l){'use strict';c('Banzai').post('profile_photos_view',{photo_fbid:j,source:k,profile_id:l});if(!this.$PhotoLogger2[i]){this.$PhotoLogger3(i);this.$PhotoLogger2[i]=true;}};h.prototype.$PhotoLogger3=function(i){'use strict';this.$PhotoLogger4(c('SpotlightViewerLoggingEvents').LOADING,{uri:i});var j=new (c('SubscriptionsHandler'))(),k=new Image();j.addSubscriptions(c('Event').listen(k,'load',function(){this.$PhotoLogger4(c('SpotlightViewerLoggingEvents').LOADED,{uri:i});j.release();}.bind(this)),c('Event').listen(k,'error',function(){this.$PhotoLogger4(c('SpotlightViewerLoggingEvents').ERROR,{uri:i});j.release();}.bind(this)),c('Event').listen(k,'abort',function(){this.$PhotoLogger4(c('SpotlightViewerLoggingEvents').ABORT,{uri:i});j.release();}.bind(this)));k.src=i;};h.prototype.logEvent=function(i){'use strict';this.$PhotoLogger4(i);};h.prototype.$PhotoLogger4=function(i,j){'use strict';var k=new (c('BanzaiScuba'))('photos_client_loading',null,{addBrowserFields:true});k.addNormal('event',i);k.addNormal('viewer',this.$PhotoLogger1);for(var l in j)k.addNormal(l,j[l]);k.post();};f.exports=h;}),null);
__d('PhotosConst',[],(function a(b,c,d,e,f,g){var h={VIEWER_PERMALINK:0,VIEWER_SNOWLIFT:6,VIEWER_VAULTBOX:8,VIEWER_SNOWFLAKE:14,VIEWER_COMPOSER:16,VIEWER_CAROUSEL:19,VIEWER_SPHERICAL:20,VIEWER_PERMALINK_STRING:'permalink',VIEWER_SNOWLIFT_STRING:'snowlift',VIEWER_VAULTBOX_STRING:'vaultbox',VIEWER_CAROUSEL_STRING:'carousel',BULK_EDITOR:3,BULK_EDITOR_REACT:15,EDITOR_MODAL:17,FLASH_UPLOADER:4,HTML5_UPLOADER:10,SIZE_NORMAL:'n',PIC_NORMAL_FBX_SIZE:180,ALBUM_NAME_MAXLEN:65};f.exports=h;}),null);
__d('PhotosUtils',['Vector'],(function a(b,c,d,e,f,g){function h(){}Object.assign(h,{getNearestBox:function i(j,k){var l=Infinity,m=null;for(var n in j){var o=j[n];if(o.contains(k)){var p=k.distanceTo(o.getCenter());if(p<l){l=p;m=n;}}}return m;},absoluteToNormalizedPosition:function i(j,k){var l=c('Vector').getElementPosition(j),m=c('Vector').getElementDimensions(j),n=k.sub(l).mul(100/m.x,100/m.y);n.domain='pure';return n;},normalizedToAbsolutePosition:function i(j,k){var l=c('Vector').getElementPosition(j),m=c('Vector').getElementDimensions(j),n=k.mul(m.x/100,m.y/100).add(l);n.domain='document';return n;},isFacebox:function i(j){return j.match(/^face:/);},isTag:function i(j){return j.match(/^tag:/);}});f.exports=h;}),null);
__d('SphericalMediaActionNamespaces',[],(function a(b,c,d,e,f,g){'use strict';f.exports={BASE:'BASE',CORE:'CORE',PHOTO:'PHOTO',PHOTO_EDIT:'PHOTO_EDIT',VIEW:'VIEW'};}),null);
__d('SphericalMediaActions',[],(function a(b,c,d,e,f,g){'use strict';f.exports={TURN_ON:'TURN_ON',TURN_OFF:'TURN_OFF',ENABLE_SPHERICAL:'ENABLE_SPHERICAL',DISABLE_SPHERICAL:'DISABLE_SPHERICAL',REQUEST_PHOTO_FAILED:'REQUEST_PHOTO_FAILED',REQUEST_PHOTO:'REQUEST_PHOTO',RECEIVE_PHOTO:'RECEIVE_PHOTO',UPDATE_BASE:'UPDATE_BASE',DRAG_START:'DRAG_START',GYRO_START:'GYRO_START',ZOOM_START:'ZOOM_START',SIGNIFICANT_MOVE:'SIGNIFICANT_MOVE',MOUSE_ANIMATION_START:'MOUSE_ANIMATION_START',MOUSE_ENTER:'MOUSE_ENTER',VIEWPORT_CLICKED:'VIEWPORT_CLICKED',VISIBILITY_CHANGED:'VISIBILITY_CHANGED',UPDATE_DIMENSION:'UPDATE_DIMENSION',UPDATE_INITIAL_FOV:'UPDATE_INITIAL_FOV',UPDATE_INITIAL_VIEWPORT:'UPDATE_INITIAL_VIEWPORT',SETUP_RENDERER:'SETUP_RENDERER',WEBGL_CONTEXT_LOST:'WEBGL_CONTEXT_LOST',WEBGL_INIT_FAILED:'WEBGL_INIT_FAILED',WEBGL_RENDER_FAILED:'WEBGL_RENDER_FAILED',SOURCE_ONLOAD:'SOURCE_ONLOAD',REPLACE_BASE_STATE:'REPLACE_BASE_STATE',UPDATE_VIEW:'UPDATE_VIEW',UPDATE_VIEWPORT:'UPDATE_VIEWPORT',UPDATE_FOV:'UPDATE_FOV',UPDATE_VIEWPORT_AND_FOV:'UPDATE_VIEWPORT_AND_FOV',START_ANIMATING:'START_ANIMATING',STOP_ANIMATING:'STOP_ANIMATING',UPDATE_PHOTO_EDIT:'UPDATE_PHOTO_EDIT',CANCEL_EDITING:'CANCEL_EDITING',START_EDITING:'START_EDITING',STOP_EDITING:'STOP_EDITING',UPDATE_PHOTO:'UPDATE_PHOTO',UPDATE_PHOTO_FAILED:'UPDATE_PHOTO_FAILED',UPDATE_PHOTO_DONE:'UPDATE_PHOTO_DONE',RESET_MOUSE_ANIMATION:'RESET_MOUSE_ANIMATION',START_MOUSE_ANIMATION:'START_MOUSE_ANIMATION',STOP_MOUSE_ANIMATION:'STOP_MOUSE_ANIMATION',DISABLE_SPHERICAL_ON_SAVE:'DISABLE_SPHERICAL_ON_SAVE',ENABLE_SPHERICAL_ON_SAVE:'ENABLE_SPHERICAL_ON_SAVE',ENABLE_EDITING:'ENABLE_EDITING',DISABLE_EDITING:'DISABLE_EDITING',TAKE_STATE_SNAPSHOT:'TAKE_STATE_SNAPSHOT',RESORE_STATE_FROM_SNAPSHOT:'RESORE_STATE_FROM_SNAPSHOT',REMOVE_STATE_SNAPSHOT:'REMOVE_STATE_SNAPSHOT',PHOTO_REMOVED:'PHOTO_REMOVED',UPDATE_FILE_URL:'UPDATE_FILE_URL',UPDATE_RESIZED_FILE_URL:'UPDATE_RESIZED_FILE_URL',OPEN_TAG_DIALOG:'OPEN_TAG_DIALOG',CLOSE_TAG_DIALOG:'CLOSE_TAG_DIALOG',SAVE_DIALOG_TAGS:'SAVE_DIALOG_TAGS',PHOTO_RENDERER_STATS:'PHOTO_RENDERER_STATS',ENABLE_TAGGING:'ENABLE_TAGGING',DISABLE_TAGGING:'DISABLE_TAGGING',UPDATE_SPATIAL_TAGS:'UPDATE_SPATIAL_TAGS',UPDATE_TAG_UNDER_MOUSE:'UPDATE_TAG_UNDER_MOUSE',TAGGING_START:'TAGGING_START',TAGGING_STOP:'TAGGING_STOP',UPDATE_TAG_CLICKED:'UPDATE_TAG_CLICKED',UPDATE_TAGGER:'UPDATE_TAGGER',ENTER_TAGGING_MODE:'ENTER_TAGGING_MODE',EXIT_TAGGING_MODE:'EXIT_TAGGING_MODE'};}),null);
__d('SphericalMediaBaseActions',['SphericalMediaActionNamespaces','SphericalMediaActions'],(function a(b,c,d,e,f,g){'use strict';f.exports={updateBase:function h(i){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').UPDATE_BASE,data:i};},dragStart:function h(){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').DRAG_START};},gyroStart:function h(){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').GYRO_START};},mouseAnimationStart:function h(){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').MOUSE_ANIMATION_START};},mouseEnter:function h(){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').MOUSE_ENTER};},significantMove:function h(i){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').SIGNIFICANT_MOVE,data:{view:i}};},viewportClicked:function h(){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').VIEWPORT_CLICKED};},visibilityChanged:function h(i){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').VISIBILITY_CHANGED,data:i};},zoomStart:function h(){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').ZOOM_START};},updateDimension:function h(i,j){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').UPDATE_DIMENSION,data:{width:i,height:j}};},updateInitialViewport:function h(i,j){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').UPDATE_INITIAL_VIEWPORT,data:{initialYaw:i,initialPitch:j}};},updateInitialFOV:function h(i){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').UPDATE_INITIAL_FOV,data:{initialFov:i}};},setupRenderer:function h(i,j){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').SETUP_RENDERER,data:{renderer:i,dt:j}};},webGlInitFailed:function h(i){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').WEBGL_INIT_FAILED,data:{error:i}};},webGlRenderFailed:function h(i,j){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').WEBGL_RENDER_FAILED,data:{error:i,view:j}};},webGlContextLost:function h(){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').WEBGL_CONTEXT_LOST};},sourceOnLoad:function h(){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').SOURCE_ONLOAD};},replaceBaseState:function h(i){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').REPLACE_BASE_STATE,data:i};},updateSpatialTags:function h(i){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').UPDATE_SPATIAL_TAGS,data:i};},updateTagUnderMouse:function h(i){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').UPDATE_TAG_UNDER_MOUSE,data:i};},updateFileURL:function h(i){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').UPDATE_FILE_URL,data:i};},updateResizedFileURL:function h(i){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').UPDATE_RESIZED_FILE_URL,data:i};},enableTagging:function h(){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').ENABLE_TAGGING};},disableTagging:function h(){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').DISABLE_TAGGING};},taggingStart:function h(){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').TAGGING_START};},taggingStop:function h(){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').TAGGING_STOP};},updateTagClicked:function h(i){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').UPDATE_TAG_CLICKED,data:i};},updateTagger:function h(i){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').UPDATE_TAGGER,data:i};},enterTaggingMode:function h(){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').ENTER_TAGGING_MODE};},exitTaggingMode:function h(){return {namespace:c('SphericalMediaActionNamespaces').BASE,type:c('SphericalMediaActions').EXIT_TAGGING_MODE};}};}),null);
__d('SphericalMediaConstants',[],(function a(b,c,d,e,f,g){'use strict';var h={COMP_PHOTO_EDIT_THUMB:'PhotoEditThumbanil',COMP_PHOTO_VIEWER:'PhotoViewer',EDIT_VIEWPORT_SIZE:{width:476,height:476},HI_ALPHA_BG:{start:.2,end:.5},HI_ALPHA_ELEMENT:{start:.5,end:.85},HI_ALPHA_DURATION:400,HI_SIZE_NORMAL:{width:35,height:35,center_radius:2,background_radius:17.5,inner_radius:12,arc_radius:6.3,arc_stroke:5.3,inner_stroke:1,triangle:[2,2.5,5.2],rim_radius:16.8,rim_stroke:1.4},HI_SIZE_FULL:{width:50,height:50,center_radius:3,background_radius:25,inner_radius:17.14,arc_radius:9,arc_stroke:7.57,inner_stroke:1.5,triangle:[2.85,4.29,7.9],rim_radius:24,rim_stroke:2},HI_BLINK_ARC_RAD:Math.PI/6,HI_BLINK_DURATION:400,HI_FADE_OUT_DELAY:1000,MOUSE_EXPOSURE:4000,LOGGER_SURFACES:{newsfeed:'newsfeed',timeline:'timeline',fullpage:'photo_viewer',snowlift:'www_snowlift',composer:'composer',albumComposer:'album_composer',other:'other'},LOGGER_SIGNIFICANT_MOVEMENT_DEGREE:30,LOGGER_SIGNIFICANT_MOVEMENT_MS:1000,GYRO_SLIP_FACTOR:.15,RB_SPRING_FACTOR:25,RB_MAX_SPRING_DEGREE:15,RB_MAX_STRETCH_X_DEGREE:20,RB_MAX_STRETCH_Y_DEGREE:20,RB_FRICTION:.3,TILED_CUBE_FACES:{PLUS_X:2,MINUS_X:0,PLUS_Y:4,MINUS_Y:5,PLUS_Z:3,MINUS_Z:1},TILED_CUBE_TILE_CONTENT_SIZE:510,TILED_CUBE_TILE_PADDING_PIXELS:1,TAG:'tag',TAGGED_FACEBOX:'tagged_facebox',UNTAGGED_FACEBOX:'untagged_facebox',DEFAULT_SPATIAL_TAG_SIZE_DEGREE:10};f.exports=h;}),null);
__d('SphericalPhotoViewerLoggerUtil',['CSS','FullScreen','ProfileTabUtils','SphericalPhotoViewerLogEvents','SphericalPhotoViewerTypedLogger','TimelineURI','URI','SphericalMediaConstants'],(function a(b,c,d,e,f,g){'use strict';var h='timelineLayout',i=c('SphericalMediaConstants').LOGGER_SURFACES,j=function l(){if(c('FullScreen').isFullScreen())return i.fullpage;var m=c('URI').getMostRecentURI();if(Object.prototype.hasOwnProperty.call(m.getQueryData(),'theater'))return i.snowlift;if(m.getPath()==='/'||m.getPath()==='/home.php')return i.newsfeed;var n=c('TimelineURI').getTabKeyFromURI(m),o=c('TimelineURI').getVanityFromURI(m);if(o&&c('ProfileTabUtils').isTimelineTab(n)&&c('CSS').hasClass(document.body,h))return i.timeline;return i.other;},k={logTapHeadingIndicator:function l(){var m=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];k._log(c('SphericalPhotoViewerLogEvents').TAP_HEADING_INDICATOR,m);},logDragStart:function l(){var m=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];k._log(c('SphericalPhotoViewerLogEvents').DRAG_START,m);},logMouseOverStart:function l(){var m=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];k._log(c('SphericalPhotoViewerLogEvents').MOUSEOVER_START,m);},logWWWGyroStart:function l(){var m=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];k._log(c('SphericalPhotoViewerLogEvents').WWW_GYRO_START,m);},logZoomStart:function l(){var m=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];k._log(c('SphericalPhotoViewerLogEvents').ZOOM_START,m);},logDragMouseAnimation:function l(){var m=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];k._log(c('SphericalPhotoViewerLogEvents').DRAG_MOUSE_ANIMATION,m);},logEnterSnowlift:function l(){var m=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];k._log(c('SphericalPhotoViewerLogEvents').WWW_ENTER_SNOWLIFT,m);},logExitSnowlift:function l(){var m=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];k._log(c('SphericalPhotoViewerLogEvents').WWW_EXIT_SNOWLIFT,m);},logEnterFullScreen:function l(){var m=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];k._log(c('SphericalPhotoViewerLogEvents').ENTER_FULLSCREEN,m);},logExitFullScreen:function l(){var m=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];k._log(c('SphericalPhotoViewerLogEvents').EXIT_FULLSCREEN,m);},logSignificantMovement:function l(){var m=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];k._log(c('SphericalPhotoViewerLogEvents').SIGNIFICANT_MOVEMENT,m);},logIVSOpen:function l(){var m=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];k._log(c('SphericalPhotoViewerLogEvents').WWW_IVS_OPEN,m);},logIVSCancel:function l(){var m=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];k._log(c('SphericalPhotoViewerLogEvents').WWW_IVS_CANCEL,m);},logIVSEnableSphericalOnSave:function l(){var m=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];k._log(c('SphericalPhotoViewerLogEvents').WWW_IVS_ENABLE_ON_SAVE,m);},logIVSDisableSphericalOnSave:function l(){var m=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];k._log(c('SphericalPhotoViewerLogEvents').WWW_IVS_DISABLE_ON_SAVE,m);},logToggleOn:function l(){var m=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];k._log(c('SphericalPhotoViewerLogEvents').TOGGLE_ON,m);},logToggleOff:function l(){var m=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];k._log(c('SphericalPhotoViewerLogEvents').TOGGLE_OFF,m);},logIVSRequestStart:function l(){var m=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];k._log(c('SphericalPhotoViewerLogEvents').WWW_IVS_REQUEST_START,m);},logIVSRequestFailed:function l(){var m=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];k._log(c('SphericalPhotoViewerLogEvents').WWW_IVS_REQUEST_FAILED,m);},logIVSRequestDone:function l(){var m=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];k._log(c('SphericalPhotoViewerLogEvents').WWW_IVS_REQUEST_DONE,m);},logIVSUpdateStart:function l(){var m=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];k._log(c('SphericalPhotoViewerLogEvents').WWW_IVS_UPDATE_START,m);},logIVSUpdateFailed:function l(){var m=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];k._log(c('SphericalPhotoViewerLogEvents').WWW_IVS_UPDATE_FAILED,m);},logIVSUpdateDone:function l(){var m=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];k._log(c('SphericalPhotoViewerLogEvents').WWW_IVS_UPDATE_DONE,m);},logWebGlInitFailed:function l(){var m=arguments.length<=0||arguments[0]===undefined?{}:arguments[0],n=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];k._log(c('SphericalPhotoViewerLogEvents').WEBGL_INIT_FAILURE,m,n);},logWebGlRenderFailed:function l(){var m=arguments.length<=0||arguments[0]===undefined?{}:arguments[0],n=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];k._log(c('SphericalPhotoViewerLogEvents').WEBGL_RENDER_FAILURE,m,n);},logWebGlContextLost:function l(){var m=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];k._log(c('SphericalPhotoViewerLogEvents').WEBGL_CONTEXT_LOST,m);},logNumberOfSphericalPhoto:function l(){var m=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];k._log(c('SphericalPhotoViewerLogEvents').POST_EVENT,m);},logRendererSetup:function l(){var m=arguments.length<=0||arguments[0]===undefined?{}:arguments[0],n=arguments[1];m.renderMethod=n?'tiled':'cubestrip';k._log(c('SphericalPhotoViewerLogEvents').RENDERER_SETUP,m);},logRendererStats:function l(){var m=arguments.length<=0||arguments[0]===undefined?{}:arguments[0],n=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];k._log(c('SphericalPhotoViewerLogEvents').RENDERER_STATS,m,n);},_log:function l(m,n){var o=arguments.length<=2||arguments[2]===undefined?{}:arguments[2];n.surface=n.surface||j();new (c('SphericalPhotoViewerTypedLogger'))().setComposerSessionID(n.composerSessionID).setDt(n.dt).setErrorMessage(n.errorMessage).setName(m).setNumberOfSphericalPhoto(n.numberOfSphericalPhoto).setPhotoID(n.photoID).setPitch(n.pitch).setRenderMethod(n.renderMethod||'').setSphericalPhotoSessionID(n.sessionID).setSurface(n.surface).setVfov(n.vfov).setViewportHeight(n.viewportHeight).setViewportWidth(n.viewportWidth).setYaw(n.yaw).updateData(o).log();}};f.exports=k;}),null);
__d('PhotoWarningScreen',['csx','cx','CSS','DOM','EventListener','Parent','XAsyncRequest','PhotoWarningScreenConfig','ObjectionableContentFilterTypedLogger'],(function a(b,c,d,e,f,g,h,i){function j(k){'use strict';if(k.footer){if(k.storyRootClass){var l=c('Parent').byClass(k.rootElement,k.storyRootClass);if(l){c('DOM').appendContent(l,k.footer);}}var m=k.isMobile?c('DOM').scry(k.footer,'a','warn-undo-link').pop():c('DOM').scry(k.footer,"._1kmy").pop();if(m)c('EventListener').listen(m,'click',function(){c('CSS').hide(k.footer);c('CSS').show(k.warningOverlay);c('CSS').addClass(k.innerContent,"_1t6v");if(k.warningType===c('PhotoWarningScreenConfig').Types.OBJECTIONABLE)j.logFilterEvent(c('PhotoWarningScreenConfig').ObjectionableEvents.WARNING_SCREEN_REENABLED,k.responsibleContent,c('PhotoWarningScreenConfig').Types.OBJECTIONABLE);});}c('EventListener').listen(k.seePhotoButton,'click',function(){c('CSS').hide(k.warningOverlay);if(k.footer)c('CSS').show(k.footer);c('CSS').removeClass(k.innerContent,"_1t6v");j.logFilterEvent(c('PhotoWarningScreenConfig').ObjectionableEvents.WARNING_SCREEN_DISMISSED,k.responsibleContent,k.warningType);});c('EventListener').listen(k.warningOverlay,'click',function(event){if(!k.isMobile){var n=c('DOM').scry(event.target,"^._2w-t");if(n.length){var o=n[0].getAttribute('ajaxify');new (c('XAsyncRequest'))(o).send();}event.stopImmediatePropagation();event.preventDefault();}});}j.logFilterEvent=function(event,k,l){k.forEach(function(m){new (c('ObjectionableContentFilterTypedLogger'))().setEvent(event).setContentID(m).setFilterType(l).log();});};f.exports=j;}),null);
__d('ReactComponentRenderer',['React','ReactDOM','warning'],(function a(b,c,d,e,f,g){'use strict';function h(i,j){this.klass=i;this.container=j;this.props={};this.component=null;}h.prototype.replaceProps=function(i,j){this.props={};this.setProps(i,j);};h.prototype.setProps=function(i,j){if(this.klass==null)return;Object.assign(this.props,i);var k=c('React').createElement(this.klass,this.props),l=this;c('ReactDOM').render(k,this.container,function(){l.component=this;if(j)j.call(this);});};h.prototype.unmount=function(){c('ReactDOM').unmountComponentAtNode(this.container);this.klass=null;};f.exports=h;}),null);