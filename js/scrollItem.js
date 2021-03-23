$('.JSscrollItem').click(function() {
    let item = $(this).attr('data-scroll');
    let topVal;
    if (item == "index") {
        topVal = 0;
    } else {
        topVal = $(`.JSscrollBlock[data-scroll="${item}"]`).offset().top;
    }
    if (window_width < 500) {
        $('.JSmenuList').fadeOut(300);
        $('.JSmenuOpen').fadeIn(300);
        $('.JSmenuClose').fadeOut(300);
        windowFixRemove(scroll);
    }
    $('html,body').animate({ scrollTop: topVal }, 500)
})