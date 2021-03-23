let grGateAnimate = function() {
    setTimeout(() => {
        $('.sectionQrGateHeader__item').each(function() {
            $(this).addClass('_active');
        })
    }, 500);
}