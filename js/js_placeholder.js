var default_placeholder;
var height_input;
var curry_selector;
var css_object;

$('.JSplaceholderAppdate').each(function() {
    default_placeholder = $(this).attr('placeholder');
    height_input = parseInt($(this).height()) + parseInt($(this).css('padding'));
    $(this).wrap("<div class='JSelemTrans inputBox'></div>")
    $(this).attr('placeholder', '');
    $(this).after("<label class='JSelemTrans inputBox__label'>" + default_placeholder + "</label>");
    css_object = $(this).css('margin-top')
    $(this).closest('.inputBox').css({ 'margin-top': css_object })
    css_object = $(this).css('margin-right')
    $(this).closest('.inputBox').css({ 'margin-right': css_object })
    css_object = $(this).css('margin-bottom')
    $(this).closest('.inputBox').css({ 'margin-bottom': css_object })
    css_object = $(this).css('margin-left')
    $(this).closest('.inputBox').css({ 'margin-left': css_object })
    $(this).css({ 'margin': '0' })
})

$(document).on('click', '.inputBox__label', function() {
    $(this).prev().focus();
    // $(this).addClass('_active')
    $(this).closest('.inputBox').find('.inputBox__error').removeClass('_active')
})

var check_val = function() {
    $('.JSplaceholderAppdate').each(function() {
        curry_selector = $(this).closest('.inputBox').find('.inputBox__label');
        if ($(this).val() != 0) {
            curry_selector.addClass('_active')
            if ($(this).is(':focus')) {
                $(this).closest('.inputBox').find('.inputBox__label').addClass('_active')
            }
        } else {
            if ($(this).is(':focus')) {
                curry_selector.addClass('_active')
                $(this).closest('.inputBox').find('.inputBox__error').removeClass('_active')
            } else {
                curry_selector.removeClass('_active')
            }
        }
    })
}
setInterval(check_val, 10)
