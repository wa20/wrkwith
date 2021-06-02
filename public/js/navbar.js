$(window).scroll(function(){
    var x  = $(this).scrollTop();
    if(x > scrollVal){
        $("header").addClass("sticky");
    } else {
        $("header").removeClass("sticky");
    }
    scrollVal = x
});