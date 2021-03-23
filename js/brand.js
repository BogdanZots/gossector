let brand = function() {
    if ($('.body__brand').length > 0) {
        let time = setTimeout(() => {
            $('.body__brand').addClass('_active');
        }, 2500);
        $(window).scroll(function() {
            $('.body__brand').addClass('_active');
            if (time) {
                clearTimeout(time);
            }
        })
    }
}