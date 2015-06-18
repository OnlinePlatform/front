var urlpdf=window.location.search.slice(1);
var fp = new FlexPaperViewer(  
'FlexPaperViewer',    /* 对应FlexPaperViewer.swf文件*/  
'viewerPlaceHolder', { config : {  
SwfFile : urlpdf,
Scale : 0.6,  
ZoomTransition : 'easeOut',  
ZoomTime : 0.5,  
ZoomInterval : 0.2,  
FitPageOnLoad : true,  
FitWidthOnLoad : true,  
FullScreenAsMaxWindow : false,  
ProgressiveLoading : false,  
MinZoomSize : 0.2,  
MaxZoomSize : 5,  
SearchMatchAll : false,  
InitViewMode : 'Portrait',  
ViewModeToolsVisible : true,  
ZoomToolsVisible : true,  
NavToolsVisible : true,  
CursorToolsVisible : true,  
SearchToolsVisible : true,  
localeChain: 'zh_CN'  
}});  