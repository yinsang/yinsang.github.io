 $(function(){
        // $('tr').addClass("clearfix")
        //给25个td赋予class和id

        //25个格子随机抽两个为初始位置
        var AllArr = new Array(25)
        var startPositionNum1 = Math.floor(Math.random()*AllArr.length)
        var startPositionNum2
        var secondF=function(){
            startPositionNum2 =  Math.floor(Math.random()*AllArr.length)
        }

        secondF();
        while(startPositionNum1==startPositionNum2){
            secondF()
        }
        $('.bigBox tr td').html("&nbsp;")
        $('.bigBox tr td').attr("class","usualTd")

        $('.bigBox tr td').eq(startPositionNum1).html(2)
        $('.bigBox tr td').eq(startPositionNum1).attr("class","activeTd")
        $('.bigBox tr td').eq(startPositionNum2).html(2)
        $('.bigBox tr td').eq(startPositionNum2).attr("class","activeTd")
        //test
        // $('.bigBox tr td').attr("class","usualTd")

        // $('.bigBox tr td').eq(5).html(2)
        // $('.bigBox tr td').eq(5).attr("class","activeTd")
        // // $('.bigBox tr td').eq(10).html(2)
        // // $('.bigBox tr td').eq(10).attr("class","activeTd")
        // $('.bigBox tr td').eq(15).html(2)
        // $('.bigBox tr td').eq(15).attr("class","activeTd")
        // $('.bigBox tr td').eq(20).html(8)
        // $('.bigBox tr td').eq(20).attr("class","activeTd")
        //样式设置
        var tdWidth = $(".letsGo td").css("width");
        $(".letsGo td").css("height",tdWidth)
        //按键上下左右，触发画面
        document.onkeydown=function(event){
            $(".
