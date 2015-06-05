$(function(){
    $("#s-nav li:first-child").children().addClass("s-chosen");
    $("#s-nav a").click(function (e) {
        e.preventDefault(); //阻止a链接的跳转行为
        $(this).addClass("s-chosen").
                parent().siblings().children().removeClass("s-chosen");
        var id = $(this).attr("href");
        $(id).removeClass("hidden").siblings().addClass("hidden"); //显示当前选中的链接及关联的content
    });
});