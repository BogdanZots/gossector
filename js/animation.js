$(window).scroll(function() {

    $('.JSblock').each(function() {
        if ($(window).scrollTop() > $(this).offset().top - ($(window).height() / 2)) {
            $(this).find('._JSanim').addClass('_active');
        }
    })

})