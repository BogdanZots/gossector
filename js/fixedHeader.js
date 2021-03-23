$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 10) {
        $('.body__menu-fixed').addClass("scroll");
    } else {
        $('.body__menu-fixed').removeClass("scroll");
    }
});
