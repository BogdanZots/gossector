let handleCasuarn = function() {

    if ($('.JScasuarnItems').length > 0) {
        let moveItems = function(index) {
            let item = $('.JScasuarnItem').outerWidth();
            $('.JScasuarnItems').css({ 'transform': `translate(${-(item * index) / fontHtml}rem,0)` })
            $('.JScasuarnBtn').removeClass('_current');
            $(`.JScasuarnBtn`).eq(index).addClass('_current');
            $('.JScasuarnImage').removeClass('_current');
            $(`.JScasuarnImage[data-id="${index}"]`).addClass('_current');
        }

        $(document).on('click', '.JScasuarnBtn', function() {
            itemsSettings.index = $(this).index();
            moveItems(itemsSettings.index);
        })

        let items = document.querySelector('.JScasuarnItems'),
            itemsSettings = {
                startX: 0,
                moveX: 0,
                lastX: 0,
                flag: false,
                index: 0,
                start: function(e) {
                    this.startX = e.changedTouches ? e.changedTouches[0].pageX : e.pageX;
                    this.flag = true;
                },
                move: function(e) {
                    if (this.flag) {
                        this.moveX = this.startX - (e.changedTouches ? e.changedTouches[0].pageX : e.pageX);
                        if (this.moveX > 30) {
                            if (this.index == $('.JScasuarnItem').length - 1) {
                                return false;
                            }
                            this.index++;
                            this.flag = false;
                            moveItems(this.index);
                            return false;
                        }
                        if (this.moveX < -30) {
                            if (this.index == 0) {
                                return false;
                            }
                            this.index--;
                            this.flag = false;
                            moveItems(this.index);
                            return false;
                        }
                    }
                },
                end: function() {
                    this.flag = false;
                }
            };
        items.addEventListener('mousedown', function(e) {
            itemsSettings.start(e);
        })
        items.addEventListener('mousemove', function(e) {
            itemsSettings.move(e);
        })
        items.addEventListener('mouseup', function() {
            itemsSettings.end();
        })
        items.addEventListener('touchstart', function(e) {
            itemsSettings.start(e);
        })
        items.addEventListener('touchmove', function(e) {
            itemsSettings.move(e);
        })
        items.addEventListener('touchend', function() {
            itemsSettings.end();
        })

        let itemsServices = document.querySelector('.JScasuarnServicesItems'),
            itemsServicesSettings = {
                startX: 0,
                moveX: 0,
                lastX: 0,
                flag: false,
                index: 0,
                length: $('.JScasuarnServicesItem').length,
                item: $('.JScasuarnServicesItems').outerWidth() / $('.JScasuarnServicesItem').length,
                full: Math.round($('.JScasuarnServicesBox').outerWidth() / ($('.JScasuarnServicesItems').outerWidth() / $('.JScasuarnServicesItem').length)),
                start: function(e) {
                    this.startX = e.changedTouches ? e.changedTouches[0].pageX : e.pageX;
                    this.flag = true;
                },
                move: function(e) {
                    if (this.flag) {
                        this.moveX = this.startX - (e.changedTouches ? e.changedTouches[0].pageX : e.pageX);
                        if (this.moveX > 30) {
                            if (this.index == this.length - this.full) {
                                return false;
                            }
                            $('.JScasuarnArrow').removeClass('_dis');
                            if (this.index == this.length - this.full - 1) {
                                $(`.JScasuarnArrow[data-dir="next"]`).addClass('_dis');
                            }
                            this.index++;
                            this.flag = false;
                            moveServicesItems(this.index);
                            return false;
                        }
                        if (this.moveX < -30) {
                            if (this.index == 0) {
                                return false;
                            }
                            $('.JScasuarnArrow').removeClass('_dis');
                            if (this.index == 1) {
                                $(`.JScasuarnArrow[data-dir="prev"]`).addClass('_dis');
                            }
                            this.index--;
                            this.flag = false;
                            moveServicesItems(this.index);
                            return false;
                        }
                    }
                },
                end: function() {
                    this.flag = false;
                }
            };

        let moveServicesItems = function(index) {
            $('.JScasuarnServicesItems').css({ 'transform': `translate(${-(index*itemsServicesSettings.item) / fontHtml}rem,0)` })
        }

        $(document).on('click', '.JScasuarnArrow', function() {
            let dir = $(this).attr('data-dir'),
                full = Math.round($('.JScasuarnServicesBox').outerWidth() / itemsServicesSettings.item);
            $('.JScasuarnArrow').removeClass('_dis');
            switch (dir) {
                case "prev":
                    if (itemsServicesSettings.index == 0) {
                        return false;
                    }
                    if (itemsServicesSettings.index == 1) {
                        $(this).addClass('_dis');
                    }
                    itemsServicesSettings.index--;
                    break;
                case "next":

                    if (itemsServicesSettings.index == itemsServicesSettings.length - itemsServicesSettings.full) {
                        return false;
                    }
                    if (itemsServicesSettings.index == itemsServicesSettings.length - itemsServicesSettings.full - 1) {
                        $(this).addClass('_dis');
                    }
                    itemsServicesSettings.index++;
                    break;
            }
            moveServicesItems(itemsServicesSettings.index)

        })


        itemsServices.addEventListener('mousedown', function(e) {
            itemsServicesSettings.start(e);
        })
        itemsServices.addEventListener('mousemove', function(e) {
            itemsServicesSettings.move(e);
        })
        itemsServices.addEventListener('mouseup', function() {
            itemsServicesSettings.end();
        })
        itemsServices.addEventListener('touchstart', function(e) {
            itemsServicesSettings.start(e);
        })
        itemsServices.addEventListener('touchmove', function(e) {
            itemsServicesSettings.move(e);
        })
        itemsServices.addEventListener('touchend', function() {
            itemsServicesSettings.end();
        })
    }



}