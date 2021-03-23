let sendForm = function() {
    $('.formBox__wrapper').find('input').each(function() {
        $(this).prop('required', false);
    })

    $('.sectionCaseFooter__form').find('input').each(function() {
        $(this).prop('required', false);
    })

    $('input').on('input', function() {
        $(this).closest('.inputBox').removeClass('_error');
    })

    $('form').submit(function(e) {
        e.preventDefault();

        let form = $(this);
        let error = false;

        if (form.find('.js-labelFile') && $('.js-labelFile').hasClass('has-error')) error = true;
        form.find('.inputBox').removeClass('_error');

        let arrInputs = ['form_text_1', 'form_text_2', 'form_text_6', 'form_text_7', 'form_text_8'];

        arrInputs.forEach(input => {
            if (form.find(`input[name="${input}"]`).length > 0 && !form.find(`input[name="${input}"]`).val()) {
                error = true;
                form.find(`input[name="${input}"]`).closest('.inputBox').addClass('_error');
            }
        })

        if (form.find('input[name="form_text_6"]') && !form.find('input[name="form_text_6"]').val()) {
            form.find('input[name="form_text_6"]').focus();
        } else {
            if (form.find('input[name="form_text_7"]') && !form.find('input[name="form_text_7"]').val()) {
                form.find('input[name="form_text_7"]').focus();
            } else {
                if (form.find('input[name="form_text_8"]') && !form.find('input[name="form_text_8"]').val()) {
                    form.find('input[name="form_text_8"]').focus();
                }
            }
        }

        if (form.find('input[name="form_text_1"]') && !form.find('input[name="form_text_1"]').val()) {
            form.find('input[name="form_text_1"]').focus();
        } else {
            if (form.find('input[name="form_text_2"]') && !form.find('input[name="form_text_2"]').val()) {
                form.find('input[name="form_text_2"]').focus();
            }
        }

        let formData = new FormData(form.get(0));
        var files = $('input[type=file]').prop("files");
        $.each(files, function(i, file) {
            formData.append('photo' + i, file);
        });

        formData.delete('photo');
        formData.append('web_form_submit', 'Y');

        // console.log(error);
        if (!error) {
            $.ajax({
                url: form.attr('action'),
                data: formData,
                method: 'POST',
                contentType: false,
                processData: false,
            }).done(function(answer) {
                //console.log(answer);
                form.find("input").val("");
                $(".body__success").fadeIn(300).css({
                    display: "flex"
                });
                $(".JSpopup").removeClass("_active");
                windowFixRemove(scroll);
            });
        }
    })

    $(document).on('keyup', function(e) {
        e.keyCode == 27 ? $('.body__success').fadeOut(300) : true;
    });
    $(".body__success").click(function() {
        $(".body__success").fadeOut(300);
    });
};