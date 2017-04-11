var originTitle = document.title;
var titleTime;
document.addEventListener("visibilitychange", function() {
    if (document.hidden) {
        document.title = "(つェ⊂) 隐匿ing~ " + originTitle;
        clearTimeout(titleTime);
    }
    else {
        document.title = "(*´∇｀*) 被你发现啦~ " + originTitle;
        titleTime = setTimeout(function() {
            document.title = originTitle;
        }, 2000);
    }
})
