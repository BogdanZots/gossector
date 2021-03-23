let menu = function() {
    setTimeout(() => {
        $('.JSmenu').addClass('_active');
        $('.JSdots').removeClass('_hidden');
        $('.JSname').removeClass('_hidden');
        $('.JSchat').removeClass('_hidden');
    }, speed)

    $('.JSmenuOpen').click(function() {
        $('.JSmenuNew .JSmenuList').fadeIn(0).css({ 'display': 'flex' })
        $('.JSmenuOpen').fadeOut(0);
        $('.JSmenuClose').fadeIn(0);
        $('.JSmenuNew').addClass('_show');
        windowFix(scroll);
    })

    $('.JSmenuClose').click(function() {
        $('.JSmenuNew .JSmenuList').fadeOut(0);
        $('.JSmenuOpen').fadeIn(0);
        $('.JSmenuClose').fadeOut(0);
        $('.JSmenuNew').removeClass('_show');
        windowFixRemove(scroll);
    })

    $(window).scroll(function() {
        if ($('.JSmenuNewFix').length > 0) {
            if ($(window).scrollTop() > $('.JSmenuNew').outerHeight()) {
                $('.JSmenuNewFix').addClass('_active');
            } else {
                $('.JSmenuNewFix').removeClass('_active');
            }
        }
    })
}