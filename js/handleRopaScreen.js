let handleRopaScreen = function() {
    $(window).scroll(function() {
        if ($('.JSslid').length > 0) {
            let slidHeight = $('.JSslid').outerHeight();
            let slidItemHeight = $('.JSslidItem').outerHeight();
            let k = slidItemHeight / (($(window).height()) / 2);
            if ($(window).scrollTop() <= $('.JSslid').offset().top - $(window).height() / 2) {
                $('.JSslidItem').css({ 'transform': `translate3d(0,0,0)` });
            }
            if ($(window).scrollTop() > $('.JSslid').offset().top - $(window).height() / 2 && ($(window).scrollTop() - ($('.JSslid').offset().top - $(window).height() / 2)) * k <= slidItemHeight - slidHeight) {
                let slidMove = $(window).scrollTop() - ($('.JSslid').offset().top - $(window).height() / 2);
                $('.JSslidItem').css({ 'transform': `translate3d(0,-${slidMove * k / fontHtml}rem,0)` });
            }
            if (($(window).scrollTop() - ($('.JSslid').offset().top - $(window).height() / 2)) * k >= slidItemHeight - slidHeight) {
                $('.JSslidItem').css({ 'transform': `translate3d(0,-${(slidItemHeight - slidHeight) / fontHtml}rem,0)` });
            }
        }
    })
}