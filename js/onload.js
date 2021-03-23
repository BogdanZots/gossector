var fontHtml, scroll, windowFix, windowFixRemove, window_width, getDate;

window.onload = () => {
    $('.js-main-loader').remove();
    adaptive();
    bodyFix();
    word();
    step();
    portfolio();
    select();
    doneItem();
    slider();
    quiz();
    menu();
    sendForm();
    taxiSlider();
    share();
    menuCase();
    grGateAnimate();
    handleRopaScreen();
    handleCasuarn();
    brand();
    handleTeam();
    handleExpCase();
    handleVacancy();

    $(window).scroll(function(e) {
        if ($(document).scrollTop() < 50) {
            if (!window.canScroll) {
                e.preventDefault();
                return false;
            }
        }
    })
    $(window).trigger('scroll');
    let flagBanner = true;
    $(window).scroll(function() {
        if ($('.body__banner').length > 0 && flagBanner) {
            if ($(window).scrollTop() > $('html').outerHeight() / 2) {
                $('.body__banner').fadeIn(300).css({ 'display': 'flex' });
                flagBanner = false;
            }
        }
    })

    $('.body__bannerClose').click(function() {
        $('.body__banner').fadeOut(300);
    })

    setTimeout(() => {
        $('[data-src]').each(function() {
            $(this).attr('src', $(this).data('src'));
        });
    }, 10);

    $('.JSpriceBtn').click(function() {
        $(`.body__price[data-price="${$(this).attr('data-price')}"]`).fadeIn(300);
        windowFix(scroll);
    })

    $('.priceBox__close').click(function() {
        $(this).closest('.body__price').fadeOut(300);
        windowFixRemove(scroll);
    })

    let flagAnimateTaxi = true;

    setTimeout(() => {
        $('.JScaseCollageItem').addClass('_active');
        flagAnimateTaxi = false;
    }, 2000);

    $(window).scroll(function() {
        if ($(window).scrollTop() > 20 && flagAnimateTaxi) {
            $('.JScaseCollageItem').addClass('_active');
        }
    })

    $('.JSpageUp').click(function() {
        $('html,body').animate({ scrollTop: 0 }, 1500);
    })

    $('.JStoggleShare').click(function() {
        let state = $('.JSshare').attr('data-state');
        state == 'close' ? $('.JSshare').fadeIn(300).css({ 'display': 'flex' }) : $('.JSshare').fadeOut(300);
        state == 'close' ? $('.JSshare').attr('data-state', 'open') : $('.JSshare').attr('data-state', 'close');
    })

    let infoClose = localStorage.getItem('infoClose') ? JSON.parse(localStorage.getItem('infoClose')) : false;

    if (infoClose === true) {
        $('.menuNew__info').remove();
    } else {

        if (window_width > 500) {
            $('.menuNew__info:not(._mob)').fadeIn(0);
        } else {
            $('.menuNew__info._mob').fadeIn(0);
        }
    }

    $(document).on('click', '.menuNew__infoClose', function(e) {
        e.stopPropagation();
        e.preventDefault();
        localStorage.setItem('infoClose', JSON.stringify(true));
        document.cookie = "infoClose=true";
        $('.menuNew__info').slideUp(300);
        setTimeout(() => {
            $('.menuNew__info').remove();
        }, 300);
        return false;
    })

    $('.input-file').each(function() {
        var $input = $(this),
            $label = $input.next('.js-labelFile'),
            labelVal = $label.html();

        $input.on('change', function(element) {
            if (element.target.files[0].size > 15000000) {
                $label.addClass("has-error");
                $('.error_size_file').css('display', 'block');
            } else {
                $label.removeClass("has-error");
                $('.error_size_file').css('display', 'none');
            }
            var fileName = '';
            if (element.target.value) fileName = element.target.value.split('\\').pop();
            fileName ? $label.addClass('has-file').find('.js-fileName').html(fileName) : $label.removeClass('has-file').html(labelVal);
        });
    });
    $('.body__form').css({ 'height': `${document.documentElement.clientHeight}px` })

    $(window).scroll(function() {
        if ($(window).scrollTop() > $('body').outerHeight() - $(window).height() - 200) {
            $('.body__brand').fadeOut(300);
        } else {
            $('.body__brand').fadeIn(300);
        }
    })

    $('[data-name="email"]').inputmask({
        mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
        greedy: false,
        onBeforePaste: function(pastedValue, opts) {
            pastedValue = pastedValue.toLowerCase();
            return pastedValue.replace("mailto:", "");
        },
        definitions: {
            '*': {
                validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
                cardinality: 1,
                casing: "lower"
            }
        }
    });

    if ($('.whiteLabelFeedbacks').length > 0) {
        new Slider({
            id: 'whiteLabelFeedbacks',
            slider: document.querySelector('.whiteLabelFeedbacks__content'),
            lay: document.querySelector('.whiteLabelFeedbacks__items'),
            items: document.querySelectorAll('.whiteLabelFeedbacks__item'),
            infinity: false,
            // loop: 3000,
            buttons: {
                prev: document.querySelector('.whiteLabelFeedbacks__arrow._prev'),
                next: document.querySelector('.whiteLabelFeedbacks__arrow._next')
            },
            pagenation: null,
            current: 0,
        })
    }
}