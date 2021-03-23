$(document).on('click', '.JSopenForm', function() {
    $('.JSpopup').addClass('_active')
    windowFix(scroll);
})

$('.JScloseForm').click(function() {
    $('.JSpopup').removeClass('_active')
    windowFixRemove(scroll);
})