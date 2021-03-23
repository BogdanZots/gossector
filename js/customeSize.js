let customeEl = function(el) {
    const w = parseInt(el.outerWidth());
    const h = parseInt(el.outerHeight());
    if (!el.data('customeFlag')) {
        el.css({ 'width': w / fontHtml + 'rem', 'height': h / fontHtml + 'rem' })
        el.attr('data-customeFlag', true);
    }
}