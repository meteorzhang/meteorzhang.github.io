//图片放大功能
$(document).ready(function(){
    var x = 10;
    var y = 10;
    $('img.demoimg').mouseover(function(e){
        var tooltip = "<div id='tooltip'><img src = ' "+this.alt+" '>" + "</div>"; //创建div元素
        $('body').append(tooltip);     //追加到文档中
        $('#tooltip').css({
            "position":"absolute",
            "top":(e.pageY + y) + "px",     //pageX和pageY是鼠标指针的坐标值
            "left":(e.pageX + x) + "px"
        }).show("fast");     //设置x和y坐标，快速显示
    }).mouseout(function(){         //移除
        $('#tooltip').remove();
    }).mousemove(function(e){
        $('#tooltip').css({
            "position":"absolute",
            "top":(e.pageY + y) + "px",
            "left":(e.pageX + x) + "px"
        });
    });
})