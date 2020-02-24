$(document).ready(function(){
    //定义正在显示的元素的下标
    var index=0;
    $(".right").click(function(){
        index++;
        if(index>4){
            index=0;
        }
        animate(index);
    })
    $(".left").click(function(){
        index--;
        if(index<0){
            index=4;
        }
        animate(index)
    })
    $(".all-icons>span").click(function(){
        index=$(this).index()//下标重置
        $(this).addClass("active").siblings().removeClass("active")
        $(".content img").eq($(this).index()).show().siblings().hide()
    })
    function animate(index){
        $(".content img").eq(index).show().siblings().hide()
        $(".all-icons>span").eq(index).addClass("active").siblings().removeClass("active");
    }
})