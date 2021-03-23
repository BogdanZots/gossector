let handleTeam = function() {
    if ($('.JSteamInput').length > 0) {


        $('.JSteamPerson').each(function() {
            customeEl($(this));
        })

        let value = $('.JSteamInput:checked').val();
        $(`.JSteamPerson[data-type="${value}"]`).addClass('_current');

        let team = {
            padding: ($('.JSteamBlock').outerWidth() - $('.JSteamPerson').outerWidth() * (window_width < 500 ? 3 : 7)) / (window_width < 500 ? 2 : 6),
            width: +$('.JSteamPerson').outerWidth(),
            height: +$('.JSteamPerson').outerHeight(),
            types: [],
            stroke: window_width < 500 ? 3 : 7
        }
        $(window).resize(function() {
            team.padding = ($('.JSteamBlock').outerWidth() - $('.JSteamPerson').outerWidth() * (window_width < 500 ? 3 : 7)) / (window_width < 500 ? 2 : 6);
            team.width = +$('.JSteamPerson').outerWidth();
            team.height = +$('.JSteamPerson').outerHeight();
            team.stroke = window_width < 500 ? 3 : 7;
            $('.sectionTeamContent__persons').css({ 'height': `${((parseInt($('.JSteamPerson').length / team.stroke) + 1) * (team.height + team.padding) / fontHtml)}rem` })

            let value = $('.JSteamInput:checked').val();

            setPosition(value);
        })

        $('.sectionTeamContent__persons').css({ 'height': `${((parseInt($('.JSteamPerson').length / team.stroke) + 1) * (team.height + team.padding) / fontHtml)}rem` })
        $('.JSteamPerson').each(function() {
            let type = $(this).attr('data-type');
            if (team.types.indexOf(type) == -1) {
                team.types.push(type);
            }
        })

        let setPosition = function(current) {
            let key = 0;
            $(`.JSteamPerson[data-type="${current}"]`).each(function() {
                $(this).css({ 'transform': `translate(${(key % team.stroke) * (team.width + team.padding) / fontHtml}rem,${parseInt(key / team.stroke) * (team.height + team.padding) / fontHtml}rem)` })
                key++;
            })
            team.types.filter(type => type != current).forEach(type => {
                $(`.JSteamPerson[data-type="${type}"]`).each(function() {
                    $(this).css({ 'transform': `translate(${(key % team.stroke) * (team.width + team.padding) / fontHtml}rem,${parseInt(key / team.stroke) * (team.height + team.padding) / fontHtml}rem)` })
                    key++;
                })
            })
        }
        setPosition(value);

        $('.JSteamInput').change(function() {
            let value = $('.JSteamInput:checked').val();
            $('.JSteamDescription').removeClass('_current');
            $(`.JSteamDescription[data-type="${value}"]`).addClass('_current');
            $('.JSteamPerson').removeClass('_current');
            $(`.JSteamPerson[data-type="${value}"]`).addClass('_current');
            setPosition(value);
        })

    }
}