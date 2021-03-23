var sliderStart;
let slider = function() {
    let sliderData = {};
    let indexS = 0;
    $('.JSslider').each(function() {
        let indexSlid = 1;
        $(this).find('.JSsliderSlid').each(function() {
            $(this).attr('data-sliderIndex', indexSlid)
            indexSlid++;
        })
        let sliderObj = {};
        $(this).attr('data-index', indexS);
        indexS++;
        sliderObj.name = $(this).attr('data-sliderName');
        sliderObj.access = $(this).attr('data-sliderAccess');
        sliderObj.$this = $(this);
        sliderObj.index = parseInt($(this).attr('data-index'));
        sliderObj.currySlid = $(this).find('.JSsliderSlid._curry');
        sliderObj.timerId = null;
        sliderObj.timerMoveId = null;
        sliderObj.curryIndex = $(this).find('.JSsliderSlid._curry').index();
        sliderObj.length = $(this).find('.JSsliderSlid').length;
        sliderObj.align = $(this).attr('data-align');
        sliderObj.speed = parseFloat($(this).attr('data-speed'));
        for (let i = 0; i < sliderObj.length; i++) {
            $(this).find('.JSdotBox').append('<div class="JSelemTrans JSdot sliderBox__dot">•</div>');
        }
        $(this).find('.JSdot').eq(sliderObj.curryIndex).addClass('_curry')
        sliderObj.indexDot = $(this).find('.JSdot._curry').index();
        sliderObj.flag = true;
        sliderObj.deskType = 'rem';
        sliderObj.tableType = 'vw';
        sliderObj.mobType = 'vw';
        sliderObj.widthDesktopStep = parseFloat($(this).attr('data-desktopStep'));
        sliderObj.widthTableStep = parseFloat($(this).attr('data-tableStep'));
        sliderObj.widthMobileStep = parseFloat($(this).attr('data-mobileStep'));
        if (window_width > 500) {
            sliderObj.widthStep = sliderObj.widthDesktopStep;
            sliderObj.type = sliderObj.deskType;
        }
        // if (window_width > 500 && window_width < 1025) {
        //     sliderObj.widthStep = sliderObj.widthTableStep;
        //     sliderObj.type = sliderObj.tableType;
        //     sliderObj.val = 0;
        // }
        if (window_width > 0 && window_width < 500) {
            sliderObj.widthStep = sliderObj.widthMobileStep;
            sliderObj.type = sliderObj.mobType;
        }
        sliderObj.val = 0;
        sliderData[$(this).attr('data-index')] = Object.assign({}, sliderObj);
    })


    let sliderMove = {
        lastWidth: window_width,
        dot: function() {
            switch (sliderData[index].indexDot) {
                case sliderData[index].length:
                    sliderData[index].indexDot = 0;
                    break;
                case -1:
                    sliderData[index].indexDot = sliderData[index].length - 1;
                    break;
            }
        },
        return: function() {
            // sliderData[index].$this.find('*').removeAttr('style')
        },
        resize: function() {
            if (this.lastWidth > 500) {
                if (window_width < 500) {
                    this.return()
                }
            } else {
                if (window_width > 500) {
                    this.return()
                }
            }
        },
        move: function($sign) {
            this.dot();
            clearTimeout(sliderData[index].timerMoveId);
            sliderData[index].timerMoveId = setTimeout(() => {
                sliderData[index].$this.find('.JSsliderLay').addClass('JStrans')
                sliderData[index].$this.find('.JSsliderLay').css({ 'transform': 'translate(' + -sliderData[index].val + sliderData[index].type + ',0)' })
                sliderData[index].$this.find('.JSsliderSlid').removeClass('_curry')
                sliderData[index].$this.find('.JSsliderSlid').eq(sliderData[index].curryIndex + $sign).addClass('_curry')
                sliderData[index].$this.find('.JSdot').removeClass('_curry')
                sliderData[index].$this.find('.JSdot').eq(sliderData[index].indexDot).addClass('_curry')
                let cur = sliderData[index].$this.find('.JSsliderSlid._curry').attr('data-sliderIndex');
                sliderData[index].$this.find('.JSsliderCounter').text(cur);
                switch (sliderData[index].name) {
                    case "why":
                        console.log(cur)
                        $(`.JSwhyImage`).removeClass('_active');
                        $(`.JSwhyImage[data-index="${parseInt(cur) - 1}"]`).addClass('_active');
                        break;
                }
            }, 20)

        },
        clonePos: function() {
            sliderData[index].$this.find('.JSsliderLay').removeClass('JStrans')
            sliderData[index].$this.find('.JSsliderLay').css({ 'transform': 'translate(' + -sliderData[index].val + sliderData[index].type + ',0)' })
        },
        clone: function($dir) {
            sliderData[index].flag = false;
            clearTimeout(sliderData[index].timerId);
            sliderData[index].timerId = setTimeout(() => {
                sliderData[index].flag = true;
            }, sliderData[index].speed + 20)
            switch ($dir) {
                case "left":
                    sliderData[index].$this.find('.JSsliderSlid').eq(sliderData[index].length - 1).clone(true).removeClass('_curry').prependTo(sliderData[index].$this.find('.JSsliderLay'));
                    if (sliderData[index].align == "center") {
                        sliderData[index].val += sliderData[index].widthStep / 2;
                        setTimeout(() => {
                            sliderData[index].$this.find('.JSsliderSlid').eq(sliderData[index].length).remove();
                            sliderData[index].val += sliderData[index].widthStep / 2;
                            this.clonePos();
                        }, sliderData[index].speed + 20)
                    }
                    if (sliderData[index].align == "left") {
                        sliderData[index].val += sliderData[index].widthStep;
                        setTimeout(() => {
                            sliderData[index].$this.find('.JSsliderSlid').eq(sliderData[index].length).remove();
                        }, sliderData[index].speed + 20)
                    }
                    this.clonePos();
                    break;
                case "right":
                    sliderData[index].$this.find('.JSsliderSlid').eq(0).clone(true).removeClass('_curry').appendTo(sliderData[index].$this.find('.JSsliderLay'));

                    if (sliderData[index].align == "center") {
                        sliderData[index].val -= sliderData[index].widthStep / 2;
                        this.clonePos();
                        setTimeout(() => {
                            sliderData[index].$this.find('.JSsliderSlid').eq(0).remove();
                            sliderData[index].val -= sliderData[index].widthStep / 2;
                            this.clonePos()
                        }, sliderData[index].speed + 20)
                    }
                    if (sliderData[index].align == "left") {
                        setTimeout(() => {
                            sliderData[index].$this.find('.JSsliderSlid').eq(0).remove();
                            sliderData[index].val -= sliderData[index].widthStep;
                            this.clonePos()
                        }, sliderData[index].speed + 20)
                    }
                    break;
            }
        }
    }
    let index;
    sliderStart = function($index, $dir) {
        if (sliderData[$index].access == "mob") {
            if (window_width > 500) {
                return false;
            }
        }
        index = $index;
        if (!sliderData[index].flag) {
            return false;
        }
        let dir = $dir;
        sliderMove.clone(dir)
        let sign;
        switch (dir) {
            case "left":
                sliderData[index].val -= sliderData[index].widthStep;
                sliderData[index].indexDot--;
                sign = 0;
                break;
            case "right":
                sliderData[index].val += sliderData[index].widthStep;
                sliderData[index].indexDot++;
                sign = 1;
                break;
        }
        sliderMove.move(sign);
    }
    $('.JSsliderBtn').click(function() {
        sliderStart(parseInt($(this).closest('.JSslider').attr('data-index')), $(this).attr('data-dir'))
    })
    let startX = 0,
        startY = 0,
        curryX = 0,
        curryY = 0,
        flag = true,
        flagScrY = false,
        flagScrX = false,
        flagMove = true;
    let $slider = document.getElementsByClassName('JSslider');

    let $start = function(e) {
        for (let i = 0; i < $slider.length; i++) {
            for (let k = 0; k < $slider[i].getElementsByTagName('img').length; k++) {
                $slider[i].getElementsByTagName('img')[k].ondragstart = function() {
                    return false;
                };
            }
        }
        flagMove = false;
        if (e.changedTouches) {
            startX = e.changedTouches[0].pageX;
            startY = e.changedTouches[0].pageY;
        } else {
            startX = e.pageX;
            startY = e.pageY;
        }

    }
    let $move = function(e, t) {
        if (!flag || flagMove) {
            return false;
        }
        if (e.changedTouches) {
            curryX = startX - e.changedTouches[0].pageX;
            curryY = startY - e.changedTouches[0].pageY;
        } else {
            curryX = startX - e.pageX;
            curryY = startY - e.pageY;
        }

        let sign;
        if (flagScrX) {
            e.preventDefault();
        }
        if ((Math.abs(curryY) > Math.abs(curryX) || flagScrY) && !flagScrX) {
            flagScrY = true;
            return false;
        } else {
            flagScrX = true;
            e.preventDefault();
        }
        if (curryX > 30) {
            sign = "right";
            sliderStart(parseInt(t.attr('data-index')), sign);
            curryX = 0;
            flag = false;
        }
        if (curryX < -30) {
            sign = "left";
            sliderStart(parseInt(t.attr('data-index')), sign);
            curryX = 0;
            flag = false;
        }
    }
    let $end = function() {
        flagScrY = false;
        flagScrX = false;
        flagMove = true;
        flag = true;
    }
    for (let i = 0; i < $slider.length; i++) {
        $slider[i].addEventListener('touchstart', function(e) {
            $start(e);
        }, { passive: false })

        $slider[i].addEventListener('touchmove', function(e) {
            $move(e, $(this));
        }, { passive: false })

        $slider[i].addEventListener('touchend', function(e) {
            $end();
        }, { passive: false })

        $slider[i].addEventListener('mousedown', function(e) {
            $start(e);
        }, { passive: false })

        $slider[i].addEventListener('mousemove', function(e) {
            $move(e, $(this));
        }, { passive: false })

        $slider[i].addEventListener('mouseup', function(e) {
            $end();
        }, { passive: false })

        $slider[i].ongragstart = () => {
            return false;
        }

        // for (let j = 0; j < $slider[i].querySelector('img').length; j++) {
        //     $slider[i].querySelector('img')[j].ongragstart = () => {
        //         return false;
        //     }
        // }
    }

    $(window).resize(() => {
        sliderMove.resize();
    })


}