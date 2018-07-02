// $(".accordion_head").click(function() {
//     $(this).next().slideToggle();
//});


$(".ac_h").click(function() {
    if($(this).hasClass("active")){
        $(this).removeClass("active");
        $(this).next().slideUp();
    } else {
        $(".ac_h").removeClass("active");
        $(".ac_b").slideUp();
        $(this).addClass('active');
        $(this).next().slideDown();
    }
})

