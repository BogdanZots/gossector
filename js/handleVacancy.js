let handleVacancy = function() {
    let shortPhrase = function(str, stop) {
        let newStr = '';
        if (str.length > stop) {
            for (let i = 0; i < stop; i++) {
                newStr += str[i];
            }
            newStr += '...';
        } else {
            newStr = str;
        }
        return newStr;
    }
    $('.JSvacancyFileInput').change(function(e) {
        $('.JSvacancyFileView').text(shortPhrase(e.target.files[0].name, 20))
    })
}