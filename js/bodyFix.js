let bodyFix = function() {
    scroll = 0;
    let fixFlag = false;

    $(window).scroll(() => {
        if (fixFlag) {
            return false;
        }
        scroll = $(window).scrollTop();
    })

    windowFix = (scroll) => {
        fixFlag = true;
        $('body').css({ 'position': 'fixed', 'top': (-scroll / fontHtml) + 'rem' })
    }

    windowFixRemove = (scroll) => {
        $('body').css({ 'position': 'static', 'top': 'unset', 'overflow-y': 'scroll' })
        $('html,body').animate({ scrollTop: scroll }, 0)
        fixFlag = false;
    }
}