let select = function() {

    $(document).on('click', '.selectBox__view', function() {
        $(this).closest('.selectBox').toggleClass('_active')
    })

    $(document).on('click', '.selectBox__dropItems', function() {

        $(this).closest('.selectBox').find('.selectBox__dropItems').removeClass('_curry');
        $(this).addClass('_curry');
        $(this).closest('.selectBox').removeClass('_active')
        let t = ($(this).text()).trim();
        let val = $(this).attr('value');
        $(this).closest('.selectBox').find('.selectBox__support').text(t)
        $(this).closest('.selectBox').attr('data-curryValue', val)
        $(this).closest('.selectBox').prev('select').find(`option`).removeAttr('selected');
        $(this).closest('.selectBox').prev('select').find(`option[value="${val}"]`).attr('selected', 'selected')
        console.log($(this).closest('.selectBox').prev('select').find(`option:selected`).val());
    })

    $(document).on('touchend mouseup', function(e) {
        var div = $(".selectBox");
        if (!div.is(e.target) &&
            div.has(e.target).length === 0) {
            div.removeClass('_active')
        }
    })

    $('.JScustomeSelect').each(function() {
        $(this).fadeOut(0);
        let selectOptionLength = $(this).find('option').length;
        let selectPlaceholder = $(this).attr('data-selectPlaceholder');
        let selectFirstVal = $(this).find('option:selected').text();
        let selectView = `<div class="selectBox">
        <div class="selectBox__view">
            <span class="selectBox__support">
                ${selectFirstVal}
            </span>
        </div>
        <div class="JSelemTrans selectBox__drop">`;
        $(this).find('option').each(function() {
            var arr;
            arr = $.map(this.attributes, function(attribute) {
                return attribute.name + ' = ' + '"' + attribute.value + '" ';
            });
            // console.log(arr);
            let strAttr = '';
            let cl = "";
            if ($(this).val())
                arr.forEach((key) => {
                    strAttr += key;
                    if (selectFirstVal == key) {
                        cl = " _curry";
                    }
                })

            // console.log(strAttr);
            selectView += `<div class="JSelemTrans selectBox__dropItems ${cl}" ${strAttr}>
            ${$(this).text()}
        </div>`;
        })
        selectView += `</div>
        </div>`;
        $(this).after(selectView);
    })
}