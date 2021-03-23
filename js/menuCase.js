let menuCase = function() {
    $(window).scroll(function() {
        if ($('.JSmenuCaseFix').length > 0) {
            if ($(window).scrollTop() > $('.body__menu._case').outerHeight()) {
                $('.JSmenuCaseFix').addClass('_active');
            } else {
                $('.JSmenuCaseFix').removeClass('_active');
            }
        }
    })
}