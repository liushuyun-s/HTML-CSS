$(function(){
    const pages=["home.html","aboutus.html","productshow.html","joinus.html","contactus.html"];
    $("#mx_content").load(pages[0]);
	$("#mx_navigation li").click(function(){
		$(this).addClass("select").siblings().removeClass("select");
		$("#mx_content").load(pages[$(this).index()]);
	});
	$("#changepage div").click(function(){
		$("#mx_navigation li").eq($(this).index()+1).addClass("select").siblings().removeClass("select");
		$("#mx_content").load(pages[$(this).index()+1]);
	});
})