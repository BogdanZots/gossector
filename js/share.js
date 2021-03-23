let share = function() {

    let linkAtrr = {
        title: $('body').attr('data-title'),
        description: $('body').attr('data-description'),
        image: $('body').attr('data-image')
    }

    let url;
    let Share = {
        getUrl: function($name, $href) {
            switch ($name) {
                case "vk":
                    url = 'http://vkontakte.ru/share.php?';
                    url += 'url=' + encodeURIComponent($href);
                    url += '&title=' + encodeURIComponent(`Rubedite | ${linkAtrr.title}`);
                    url += '&description=' + encodeURIComponent(linkAtrr.description);
                    url += '&noparse=true';
                    url += '&image=' + encodeURIComponent(linkAtrr.image);
                    return url;
                case "fb":
                    url = 'https://www.facebook.com/sharer/sharer.php?';
                    url += 'u=' + encodeURIComponent($href);
                    url += '&title=' + encodeURIComponent(`Rubedite | ${linkAtrr.title}`);
                    url += '&description=' + encodeURIComponent(linkAtrr.description);
                    url += '&noparse=true';
                    url += '&image=' + encodeURIComponent(linkAtrr.image);
                    return url;
                case "tw":
                    url = 'https://twitter.com/share?';
                    url += 'url=' + encodeURIComponent($href);
                    url += '&text=' + encodeURIComponent(`Rubedite | ${linkAtrr.title}`);
                    url += '&description=' + encodeURIComponent(linkAtrr.description);
                    url += '&image=' + encodeURIComponent(linkAtrr.image);
                    return url;
                case "wa":
                    url = 'https://api.whatsapp.com/send?';
                    url += 'text=' + encodeURIComponent(`Rubedite | ${linkAtrr.title}`);
                    url += '&title=' + encodeURIComponent(linkAtrr.description);
                    url += '&description=' + encodeURIComponent(linkAtrr.description);
                    url += '&image=' + encodeURIComponent(linkAtrr.image);
                    return url;
            }
        }
    }
    let setShare = function() {
        $('.JSshareIcon').each(function() {
            $(this).attr('href', Share.getUrl($(this).attr('data-share'), window.location.href));
        })
    }
    setShare();

}