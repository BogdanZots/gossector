let doneItem = function() {
    $(window).scroll(function() {
        $('.JSdone').each(function() {
            if ($(window).scrollTop() > ($(this).offset().top)) {
                $(this).find('.JSdoneItemTop').addClass('_active');
                setTimeout(() => {
                    $(this).find('.JSdoneItemRight').addClass('_active');
                }, 600)
            }
        })
    })
}