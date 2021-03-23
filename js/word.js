var speed = 0;
let intervalWord;
let speedWord = 0;
let menuShowAfter = 2500;


let word = function () {
    if ($('.JSwords').length > 0) {
        setTimeout(() => {
            $('body').removeClass('_hidden');
        }, menuShowAfter)
        let words = {},
            numWords = 0;
        let lengthWord = $('.JSwords').length / 2;
        $('.JSwords').each(function () {
            let str = $(this).attr('data-word');
            $(this).attr('data-num', numWords);
            words[numWords] = {
                str: $(this).attr('data-word'),
                len: $(this).attr('data-word').length,
                class: $(this).attr('data-class'),
                num: 0
            };
            numWords++;
        })
        for (let i = 0; i < lengthWord; i++) {
            $('.header__dot').append(`<li class="JSelemTrans JSdot header__dotItems"></li>`)
        }
        $('.JSdot:nth-child(1)').addClass('_curry');
        if (words[0].len > words[2].len) {
            speed = speedWord * words[0].len + menuShowAfter;
        } else {
            speed = speedWord * words[2].len + menuShowAfter;
        }
        menu();

        function rand(min, max) {
            let rand = min - 0.5 + Math.random() * (max - min + 1);
            return Math.round(Math.abs(rand));
        }

        let show = function (num, s, l) {
            let min = 0;
            let max = l;
            let count = 0;
            let flag = 0;
            let r = rand(min, max);
            let arr = [];
            arr.push(r);
            while (count != max) {
                r = rand(0, l);
                arr.forEach((key) => {
                    if (key == r) {
                        flag = 1;
                    }
                })
                if (flag == 0) {
                    arr.push(r);
                    count++;
                }
                flag = 0;
            }
            if (speedWord) {
                let intervalId = setInterval(() => {
                    let c = arr[words[num].num];
                    $(`.JSwords[data-num="${num}"] .JSwordsItem:nth-child(${c})`).removeClass('_hidden')
                    words[num].num++;
                    if (words[num].num === words[num].len + 1) {
                        clearInterval(intervalId)
                        words[num].num = 0;
                    }
                }, speedWord)
            } else {
                $(`.JSwords[data-num="${num}"] .JSwordsItem`).removeClass('_hidden');
            }
        }

        let showWord = function (num, interval) {
            let s = words[num].str;
            let l = words[num].len;
            let c = words[num].class;
            let htmlStr = "";
            for (let i = 0; i < l; i++) {
                htmlStr += `<span class="JSwordsItem ${c}__item JSelemTrans JStrans _hidden">${s[i]}</span>`
            }
            $(`.JSwords[data-num="${num}"]`).html(htmlStr);
            if (interval) {
                setTimeout(() => {
                    speedWord = 30;
                    show(num, s, l);
                    $('header').removeClass('fixed-wide');
                }, interval)
            } else {
                show(num, s, l);
            }
        }

        let numShow = 0;

        let startShow = function (i, dir, interval) {
            if (i != null) {
                numShow = i;
            }
            if (dir == null) {

                numShow++;
                if (numShow === lengthWord + 1) {
                    numShow = 1;
                }
            } else {
                switch (dir) {
                    case "left":
                        numShow--;
                        if (numShow === 0) {
                            numShow = lengthWord;
                        }
                        break;
                    case "right":
                        numShow++;
                        if (numShow === lengthWord + 1) {
                            numShow = 1;
                        }
                        break;
                }
            }
            $(`.JSwords1 .JSwords`).removeClass('_curry')
            $(`.JSwords1 .JSwords:nth-child(${numShow})`).addClass('_curry')
            $(`.JSwords2 .JSwords`).removeClass('_curry')
            $(`.JSwords2 .JSwords:nth-child(${numShow})`).addClass('_curry')
            let num1 = $(`.JSwords1 .JSwords:nth-child(${numShow})`).attr('data-num');
            showWord(num1);

            let num2 = $(`.JSwords2 .JSwords:nth-child(${numShow})`).attr('data-num');
            showWord(num2, interval);
            $(`.JSdot`).removeClass('_curry');
            $(`.JSdot:nth-child(${numShow})`).addClass('_curry');
            numShow++;

            if (numShow === lengthWord + 1) {
                numShow = 1;
            }
        }
        startShow(numShow, null, 1000);

        let intervalWord = setInterval(() => {
            startShow(numShow, 0);
        }, 10000);

        $('.JSdot').click(function () {
            let i = $(this).index();
            startShow(i);
            clearInterval(intervalWord);
            intervalWord = setInterval(() => {
                startShow(numShow, 0);
            }, 10000);
        })

        let swipe = function (d) {
            let swipeI = numShow;

            startShow(swipeI, false, d);
            clearInterval(intervalWord);
            intervalWord = setInterval(() => {
                startShow(1);
            }, 10000)
        }

        let startX, moveX, startY, moveY, curryX = 0,
            flagWord = true,
            dirWord,
            el = document.getElementsByClassName("JSwordSwipe"),
            intervalSwipe;
        for (let i = 0; i < el.length; i++) {
            el[i].addEventListener('touchstart', function (e) {
                startX = e.changedTouches[0].pageX;
            })

            el[i].addEventListener('touchmove', function (e) {
                if (flagWord) {
                    moveX = startX - e.changedTouches[0].pageX;
                    moveY = Math.abs(startY - e.changedTouches[0].pageY);
                    if (moveX > 20) {
                        dirWord = 'left';
                        flagWord = false;
                        swipe(dirWord);
                    }
                    if (moveX < -20) {
                        dirWord = 'right';
                        flagWord = false;
                        swipe(dirWord);
                    }

                    if ((moveX > 20 || moveX < -20) && moveY < 20) {
                        e.preventDefault();
                    }
                }
            }, {passive: false})

            el[i].addEventListener('touchend', function (e) {
                moveX = 0;
                clearTimeout(intervalSwipe);
                intervalSwipe = setTimeout(() => {
                    flagWord = true;
                }, 500)
            })
        }
    }


}
