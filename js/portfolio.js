let portfolio = function() {
    if ($('.sectionPortfolio').length > 0) {
        let caseTop,
            caseHeight,
            layWidth,
            step
        let setParams = () => {
            caseTop = $('.sectionPortfolio').offset().top + $('.sectionPortfolio__title').outerHeight();
            caseHeight = $('.sectionPortfolio').outerHeight() - $('.sectionPortfolio__title').outerHeight();
            layWidth = $('.sectionPortfolio__caseLine').outerWidth();
            step = (layWidth - $('.JScaseBg').outerWidth()) / (caseHeight - $(window).height());
        }
        setParams();
        $(window).resize(function() {
            setParams();
        })
        $(window).trigger('scroll');
        let Case = [];
        $('.JScaseBlock').each(function() {
            Case.push($(this).attr('data-caseColor'))
        })
        let setBg = (i) => {
            $('.JScaseBg').css({ 'background': Case[i] })
        }
        setBg(0);
        $(window).scroll(function() {
            setParams();
            let value = $(window).scrollTop() - caseTop
            if ($(window).scrollTop() > caseTop) {
                let breakPoint = $('.sectionPortfolio').offset().top + (caseHeight + $('.sectionPortfolio__title').outerHeight()) - $(window).height();
                if ($(window).scrollTop() > breakPoint) {
                    $('.JScaseLay').css({ 'transform': 'translate(' + ((-(caseHeight - ($(window).height())) * step) / fontHtml) + 'rem,0)' })
                    setBg(Case.length - 1);
                } else {
                    $('.JScaseLay').css({ 'transform': 'translate(' + ((-value * step) / fontHtml) + 'rem,0)' })
                    setBg(Math.round((value * step) / ((caseHeight - $('.JSmenuNewFix').outerHeight()) / (Case.length - 1))));
                }
            } else {
                $('.JScaseLay').css({ 'transform': 'translate(0,0)' })
                setBg(0);
            }
        })
    }

}