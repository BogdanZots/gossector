let handleExpCase = function() {
    $('.JSexpCaseBlock._active').each(function() {
        $(this).find('.JSexpCaseContent').css({ display: 'block' })
    })
    $('.JSexpCaseBtn').click(function() {
        $(this).closest('.JSexpCaseBlock').find('.JSexpCaseContent').slideToggle(300);
        $(this).closest('.JSexpCaseBlock').toggleClass('_active');
    })
}