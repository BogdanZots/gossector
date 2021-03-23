let taxiSlider = function(){
    let settings = {
        length: $('.sectionTaxiPresentation__imagesSliderItems').length,
        current: 0,
        move: function(){
            let current = this.current;
            $('.JStaxiSliderLayer').each(function(){
                let widthStep = $(this).find('.JStaxiSliderItems').outerWidth();
                $(this).css({ 'transform': `translate(${-widthStep * current / fontHtml}rem,0)` })
                $('.JStaxiSliderCounter').text(current + 1)
            })
        }
    }
    $('.JStaxiSliderArrow').click(function () {
        switch ($(this).attr('data-dir')) {
            case 'left':
                if (settings.current == 0) {
                    return false;
                }
                settings.current--;
                break;
            case 'right':
                if(settings.current == settings.length - 1){
                    return false;
                }
                settings.current++;
                break;
        }
        settings.move();
    })
}