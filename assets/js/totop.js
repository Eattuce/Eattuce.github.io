window.onload = function () {
    // 1.找到页面中的按钮
    var totop = document.getElementById("totop");
    totop.style.display ="none";
    var timer = null;

    // 2. 给按钮绑定点击事件
    totop.onclick =function () {
        // 周期性定时
        timer = setInterval(function () {
            // 3.获取滚动条距离浏览器顶端的距离
            var backTop = document.documentElement.scrollTop || 
            document.body.scrollTop;

            // 越滚越慢
            speedTop =backTop/5;
            document.documentElement.scrollTop=backTop-speedTop;
            if(backTop==0){
                clearInterval(timer);
            }
        },30)
    }
    // 设置临界值
    var pageHeight = 400;
    window.onscroll =function () {
        var backTop = document.documentElement.scrollTop || 
        document.body.scrollTop;
        if(backTop>pageHeight){
            totop.style.display="block";
        }else{
            totop.style.display="none";
        }

    }
}
