let step = function() {
    let stepFlag = true;
    let fadeStep = function(t, s) {
        setTimeout(() => {
            t.removeClass('_active');
        }, s + 1000);
    }
    $(window).scroll(function() {
        if($('.sectionProcess').length > 0){
            if ($(window).scrollTop() > $('.sectionProcess').offset().top - ($(window).height() / 2)) {
                if (!stepFlag) {
                    return false;
                }
                stepFlag = false;
                let stepSpeed = 0,
                    arrStep = [],
                    count = 0;
                $('.JSstep').each(function() {
                    arrStep.push($(this));
                    stepSpeed += 100;
                    setTimeout(() => {
                        arrStep[count].addClass('_active');
                        fadeStep(arrStep[count], stepSpeed);
                        count++;
                    }, stepSpeed)
                })
            }
        }
    })
}