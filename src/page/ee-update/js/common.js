let doc = document.body;//减少dom操作
function resize (){
    //获取dom文档宽
    let clientWidth = doc.clientWidth;
    let htmlFontSize= doc.style.fontSize;
    //动态改变html的font-size,以320为例
    if(clientWidth < 320){//设置边界值以防万一
        htmlFontSize = '100px';
    }else{
        htmlFontSize = clientWidth/375*100+'px';
    }

}
//检测屏幕尺寸变化同步font-size，如横竖屏切换时触发
window.onresize=function(){
    resize()
}
//页面初始化时触发
resize()
