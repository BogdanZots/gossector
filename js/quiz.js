let quiz = function() {
    let quizLength = $('.JSquizItems').length - 2,
        quizCurry = 1,
        data = new FormData(),
        info = {};
    $('.JSquizAll').text(quizLength);
    let actionQuiz = function(counter) {
        $('.JSquizItems').removeClass('_curry');
        if ($(`.JSquizItems[data-id="${counter}"]`).attr('data-type')) {
            $(`.JSquizItems[data-id="${counter}"][data-type="${$('input[name="status"]:checked').attr('data-type')}"]`).addClass('_curry');
        } else {
            $(`.JSquizItems[data-id="${counter}"]`).addClass('_curry');
        }
        $('.JSquizCurry').text(counter);
        $('.body__quiz').animate({ scrollTop: 0 }, 0);
        switch (counter) {
            case quizLength:
                info = {};
                $('.JSquizNav').remove();
                $('.JSquizElWrap').find('.JSquizEl').each(function() {
                    switch ($(this).attr('type')) {
                        case "text":
                            info[$(this).attr('name')] = {
                                name: $(this).attr('name'),
                                value: $(this).val(),
                            };
                            break;
                        case "radio":
                            info[$(this).attr('name')] = {
                                name: $(this).attr('name'),
                                value: $(this).closest('.JSquizElWrap').find('.JSquizEl:checked').val(),
                            };
                            break;
                        case "checkbox":
                            info[$(this).attr('name')] = {
                                name: $(this).attr('name'),
                                value: "",
                            };
                            $(this).closest('.JSquizElWrap').find('.JSquizEl:checked').each(function() {
                                info[$(this).attr('name')].value += $(this).val() + ".";
                            })
                            break;
                    }
                    info[$(this).attr('name')].description = $(this).closest('.JSquizElWrap').attr('data-description')

                })

                function generate(len) {
                    var ints = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
                    var chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
                    var out = '';
                    for (var i = 0; i < len; i++) {
                        var ch = Math.random(1, 2);
                        if (ch < 0.5) {
                            var ch2 = Math.ceil(Math.random(1, ints.length) * 10);
                            out += ints[ch2];
                        } else {
                            var ch2 = Math.ceil(Math.random(1, chars.length) * 10);
                            out += chars[ch2];
                        }
                    }
                    return out;
                }
                info['atach'] = [];
                $('.JSfilesItems').each(function() {
                    info['atach'].push($(this).attr('data-name'));
                })
                let ref = generate(10);
                info['referal'] = `rubedite.ru/referal/${ref}`
                data.append('info', JSON.stringify(info));
                $('.JSref').text(`rubedite.ru/referal/${ref}`);
                $('.JSref').attr('href', `rubedite.ru/referal/${ref}`);
                console.log(info);
                $.ajax({
                    method: "POST",
                    url: "/modules/sendQuiz.php",
                    data: data,
                    processData: false,
                    contentType: false,
                    success: function(r) {
                        console.log(r);
                    }
                })
                break;
        }
    }
    $('.JSquizBtn').click(function() {
        switch ($(this).attr('data-action')) {
            case "prev":
                quizCurry--;
                if (quizCurry == 1) {
                    $('.JSquizBtn[data-action="prev"]').closest('.JSquizBtnWrap').addClass('_hide');
                }
                break;
            case "next":
                let quizFlag = true;
                $(`.JSquizItems._curry`).find('.JSquizElWrap').each(function() {
                    switch ($(this).find('.JSquizEl').attr('type')) {
                        case "text":
                            quizFlag *= ($(this).find('.JSquizEl').val() != "" || $(this).find('.JSquizEl').attr('data-require') == "false");
                            $(this).find('.JSquizEl').val() == "" && $(this).find('.JSquizEl').attr('data-require') == "true" ? $(this).find('.JSquizError').text("Это поле обязательно для заполнения!") : $(this).find('.JSquizError').text("");
                            break;
                        case "radio":
                            quizFlag *= ($(this).find('.JSquizEl:checked').length > 0 || $(this).find('.JSquizEl').attr('data-require') == "false");
                            $(this).find('.JSquizEl:checked').length == 0 && $(this).find('.JSquizEl').attr('data-require') == "true" ? $(this).find('.JSquizError').text("Это поле обязательно для заполнения!") : $(this).find('.JSquizError').text("");
                            break;
                        case "checkbox":
                            quizFlag *= ($(this).find('.JSquizEl:checked').length > 0 || $(this).find('.JSquizEl').attr('data-require') == "false");
                            $(this).find('.JSquizEl:checked').length == 0 && $(this).find('.JSquizEl').attr('data-require') == "true" ? $(this).find('.JSquizError').text("Это поле обязательно для заполнения!") : $(this).find('.JSquizError').text("");
                            break;
                        case "file":
                            quizFlag *= ($(this).find('.JSfilesItems').length > 0 || $(this).find('.JSquizEl').attr('data-require') == "false");
                            $(this).find('.JSfilesItems').length == 0 && $(this).find('.JSquizEl').attr('data-require') == "true" ? $(this).find('.JSquizError').text("Загрузите фото!") : $(this).find('.JSquizError').text("");
                            break;
                    }
                })
                if (!quizFlag) {
                    return false;
                }
                quizCurry++;
                $('.JSquizBtn[data-action="prev"]').closest('.JSquizBtnWrap').removeClass('_hide');
                break;
        }
        actionQuiz(quizCurry);
    })
    let count = 0;
    $(document).on('change', '.JSquizFile', function() {
        let files = this.files;
        $.each(files, function(key, file) {
            console.log(key);
            data.append(count, file);
            count++;
            let f = files[key];
            let reader = new FileReader();
            reader.onload = function(e) {
                let allow = ['jpg', 'jpeg', 'png'];
                let info = file.name.split('.')[file.name.split('.').length - 1];
                if (allow.indexOf(info.toLowerCase()) != -1) {
                    $('.JSquizFiles').append(`<div class="JSfilesItems quizBox__fileUploadItems" data-name="${file.name}">
                                                ${file.name} — ${(file.size / 1024).toFixed(1)}kb
                                                <img src="/img/close.svg" alt="" class="quizBox__fileUploadDelete">
                                              </div>`);
                } else {
                    $('.JSquizElWrap._file').find('.JSquizError').append(`${file.name} — неверный формат!<br>`);
                }

            }
            reader.readAsDataURL(f);
        })
    })
    $(document).on('click', '.quizBox__fileUploadDelete', function() {
        $(this).closest('.JSfilesItems').remove();
    })
    $(document).on('click focus input keyup', '.JSquizEl', function() {
        $(this).closest('.JSquizElWrap').find('.JSquizError').text("");
    })

    $('.JSbtnQuiz').click(function() {
        switch ($(this).attr('data-action')) {
            case "open":
                $('.body__quiz').fadeIn(300);
                windowFix(scroll);
                break;
            case "close":
                $('.body__quiz').fadeOut(300);
                windowFixRemove(scroll);
                break;
        }

    })
}