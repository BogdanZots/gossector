"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var adaptive = function adaptive() {
  var div = document.createElement('div');
  div.style.overflowY = 'scroll';
  div.style.width = '50px';
  div.style.height = '50px';
  div.style.visibility = 'hidden';
  document.body.appendChild(div);
  var scrollWidth = div.offsetWidth - div.clientWidth;
  document.body.removeChild(div);
  window_width = document.documentElement.clientWidth + scrollWidth;

  var adaptive_window = function adaptive_window() {
    window_width = document.documentElement.clientWidth + scrollWidth;
    fontHtml = window_width / 165; // if (window_width > 1920) {
    //     fontHtml = 10.7;
    // }

    if (window_width < 501) {
      fontHtml = window_width / 52;
    }

    $('html').css({
      'font-size': fontHtml + 'px'
    });
  };

  adaptive_window();
  $(window).resize(function () {
    adaptive_window();
  });

  var trans = function trans() {
    $('.JSelemTrans').removeClass('JStrans');
    setTimeout(function () {
      $('.JSelemTrans').addClass('JStrans');
    }, 300);
  };

  trans();
  $(window).resize(function () {
    trans();
  });
};

$(window).scroll(function () {
  $('.JSblock').each(function () {
    if ($(window).scrollTop() > $(this).offset().top - $(window).height() / 2) {
      $(this).find('._JSanim').addClass('_active');
    }
  });
});

var bodyFix = function bodyFix() {
  scroll = 0;
  var fixFlag = false;
  $(window).scroll(function () {
    if (fixFlag) {
      return false;
    }

    scroll = $(window).scrollTop();
  });

  windowFix = function windowFix(scroll) {
    fixFlag = true;
    $('body').css({
      'position': 'fixed',
      'top': -scroll / fontHtml + 'rem'
    });
  };

  windowFixRemove = function windowFixRemove(scroll) {
    $('body').css({
      'position': 'static',
      'top': 'unset',
      'overflow-y': 'scroll'
    });
    $('html,body').animate({
      scrollTop: scroll
    }, 0);
    fixFlag = false;
  };
};

var brand = function brand() {
  if ($('.body__brand').length > 0) {
    var time = setTimeout(function () {
      $('.body__brand').addClass('_active');
    }, 2500);
    $(window).scroll(function () {
      $('.body__brand').addClass('_active');

      if (time) {
        clearTimeout(time);
      }
    });
  }
};

var customeEl = function customeEl(el) {
  var w = parseInt(el.outerWidth());
  var h = parseInt(el.outerHeight());

  if (!el.data('customeFlag')) {
    el.css({
      'width': w / fontHtml + 'rem',
      'height': h / fontHtml + 'rem'
    });
    el.attr('data-customeFlag', true);
  }
};

var doneItem = function doneItem() {
  $(window).scroll(function () {
    $('.JSdone').each(function () {
      var _this = this;

      if ($(window).scrollTop() > $(this).offset().top) {
        $(this).find('.JSdoneItemTop').addClass('_active');
        setTimeout(function () {
          $(_this).find('.JSdoneItemRight').addClass('_active');
        }, 600);
      }
    });
  });
};

$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 10) {
    $('.body__menu-fixed').addClass("scroll");
  } else {
    $('.body__menu-fixed').removeClass("scroll");
  }
});

var grGateAnimate = function grGateAnimate() {
  setTimeout(function () {
    $('.sectionQrGateHeader__item').each(function () {
      $(this).addClass('_active');
    });
  }, 500);
};

var handleCasuarn = function handleCasuarn() {
  if ($('.JScasuarnItems').length > 0) {
    var moveItems = function moveItems(index) {
      var item = $('.JScasuarnItem').outerWidth();
      $('.JScasuarnItems').css({
        'transform': "translate(".concat(-(item * index) / fontHtml, "rem,0)")
      });
      $('.JScasuarnBtn').removeClass('_current');
      $(".JScasuarnBtn").eq(index).addClass('_current');
      $('.JScasuarnImage').removeClass('_current');
      $(".JScasuarnImage[data-id=\"".concat(index, "\"]")).addClass('_current');
    };

    $(document).on('click', '.JScasuarnBtn', function () {
      itemsSettings.index = $(this).index();
      moveItems(itemsSettings.index);
    });
    var items = document.querySelector('.JScasuarnItems'),
        itemsSettings = {
      startX: 0,
      moveX: 0,
      lastX: 0,
      flag: false,
      index: 0,
      start: function start(e) {
        this.startX = e.changedTouches ? e.changedTouches[0].pageX : e.pageX;
        this.flag = true;
      },
      move: function move(e) {
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
      end: function end() {
        this.flag = false;
      }
    };
    items.addEventListener('mousedown', function (e) {
      itemsSettings.start(e);
    });
    items.addEventListener('mousemove', function (e) {
      itemsSettings.move(e);
    });
    items.addEventListener('mouseup', function () {
      itemsSettings.end();
    });
    items.addEventListener('touchstart', function (e) {
      itemsSettings.start(e);
    });
    items.addEventListener('touchmove', function (e) {
      itemsSettings.move(e);
    });
    items.addEventListener('touchend', function () {
      itemsSettings.end();
    });
    var itemsServices = document.querySelector('.JScasuarnServicesItems'),
        itemsServicesSettings = {
      startX: 0,
      moveX: 0,
      lastX: 0,
      flag: false,
      index: 0,
      length: $('.JScasuarnServicesItem').length,
      item: $('.JScasuarnServicesItems').outerWidth() / $('.JScasuarnServicesItem').length,
      full: Math.round($('.JScasuarnServicesBox').outerWidth() / ($('.JScasuarnServicesItems').outerWidth() / $('.JScasuarnServicesItem').length)),
      start: function start(e) {
        this.startX = e.changedTouches ? e.changedTouches[0].pageX : e.pageX;
        this.flag = true;
      },
      move: function move(e) {
        if (this.flag) {
          this.moveX = this.startX - (e.changedTouches ? e.changedTouches[0].pageX : e.pageX);

          if (this.moveX > 30) {
            if (this.index == this.length - this.full) {
              return false;
            }

            $('.JScasuarnArrow').removeClass('_dis');

            if (this.index == this.length - this.full - 1) {
              $(".JScasuarnArrow[data-dir=\"next\"]").addClass('_dis');
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
              $(".JScasuarnArrow[data-dir=\"prev\"]").addClass('_dis');
            }

            this.index--;
            this.flag = false;
            moveServicesItems(this.index);
            return false;
          }
        }
      },
      end: function end() {
        this.flag = false;
      }
    };

    var moveServicesItems = function moveServicesItems(index) {
      $('.JScasuarnServicesItems').css({
        'transform': "translate(".concat(-(index * itemsServicesSettings.item) / fontHtml, "rem,0)")
      });
    };

    $(document).on('click', '.JScasuarnArrow', function () {
      var dir = $(this).attr('data-dir'),
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

      moveServicesItems(itemsServicesSettings.index);
    });
    itemsServices.addEventListener('mousedown', function (e) {
      itemsServicesSettings.start(e);
    });
    itemsServices.addEventListener('mousemove', function (e) {
      itemsServicesSettings.move(e);
    });
    itemsServices.addEventListener('mouseup', function () {
      itemsServicesSettings.end();
    });
    itemsServices.addEventListener('touchstart', function (e) {
      itemsServicesSettings.start(e);
    });
    itemsServices.addEventListener('touchmove', function (e) {
      itemsServicesSettings.move(e);
    });
    itemsServices.addEventListener('touchend', function () {
      itemsServicesSettings.end();
    });
  }
};

var handleExpCase = function handleExpCase() {
  $('.JSexpCaseBlock._active').each(function () {
    $(this).find('.JSexpCaseContent').css({
      display: 'block'
    });
  });
  $('.JSexpCaseBtn').click(function () {
    $(this).closest('.JSexpCaseBlock').find('.JSexpCaseContent').slideToggle(300);
    $(this).closest('.JSexpCaseBlock').toggleClass('_active');
  });
};

var handleRopaScreen = function handleRopaScreen() {
  $(window).scroll(function () {
    if ($('.JSslid').length > 0) {
      var slidHeight = $('.JSslid').outerHeight();
      var slidItemHeight = $('.JSslidItem').outerHeight();
      var k = slidItemHeight / ($(window).height() / 2);

      if ($(window).scrollTop() <= $('.JSslid').offset().top - $(window).height() / 2) {
        $('.JSslidItem').css({
          'transform': "translate3d(0,0,0)"
        });
      }

      if ($(window).scrollTop() > $('.JSslid').offset().top - $(window).height() / 2 && ($(window).scrollTop() - ($('.JSslid').offset().top - $(window).height() / 2)) * k <= slidItemHeight - slidHeight) {
        var slidMove = $(window).scrollTop() - ($('.JSslid').offset().top - $(window).height() / 2);
        $('.JSslidItem').css({
          'transform': "translate3d(0,-".concat(slidMove * k / fontHtml, "rem,0)")
        });
      }

      if (($(window).scrollTop() - ($('.JSslid').offset().top - $(window).height() / 2)) * k >= slidItemHeight - slidHeight) {
        $('.JSslidItem').css({
          'transform': "translate3d(0,-".concat((slidItemHeight - slidHeight) / fontHtml, "rem,0)")
        });
      }
    }
  });
};

var handleTeam = function handleTeam() {
  if ($('.JSteamInput').length > 0) {
    $('.JSteamPerson').each(function () {
      customeEl($(this));
    });
    var value = $('.JSteamInput:checked').val();
    $(".JSteamPerson[data-type=\"".concat(value, "\"]")).addClass('_current');
    var team = {
      padding: ($('.JSteamBlock').outerWidth() - $('.JSteamPerson').outerWidth() * (window_width < 500 ? 3 : 7)) / (window_width < 500 ? 2 : 6),
      width: +$('.JSteamPerson').outerWidth(),
      height: +$('.JSteamPerson').outerHeight(),
      types: [],
      stroke: window_width < 500 ? 3 : 7
    };
    $(window).resize(function () {
      team.padding = ($('.JSteamBlock').outerWidth() - $('.JSteamPerson').outerWidth() * (window_width < 500 ? 3 : 7)) / (window_width < 500 ? 2 : 6);
      team.width = +$('.JSteamPerson').outerWidth();
      team.height = +$('.JSteamPerson').outerHeight();
      team.stroke = window_width < 500 ? 3 : 7;
      $('.sectionTeamContent__persons').css({
        'height': "".concat((parseInt($('.JSteamPerson').length / team.stroke) + 1) * (team.height + team.padding) / fontHtml, "rem")
      });
      var value = $('.JSteamInput:checked').val();
      setPosition(value);
    });
    $('.sectionTeamContent__persons').css({
      'height': "".concat((parseInt($('.JSteamPerson').length / team.stroke) + 1) * (team.height + team.padding) / fontHtml, "rem")
    });
    $('.JSteamPerson').each(function () {
      var type = $(this).attr('data-type');

      if (team.types.indexOf(type) == -1) {
        team.types.push(type);
      }
    });

    var setPosition = function setPosition(current) {
      var key = 0;
      $(".JSteamPerson[data-type=\"".concat(current, "\"]")).each(function () {
        $(this).css({
          'transform': "translate(".concat(key % team.stroke * (team.width + team.padding) / fontHtml, "rem,").concat(parseInt(key / team.stroke) * (team.height + team.padding) / fontHtml, "rem)")
        });
        key++;
      });
      team.types.filter(function (type) {
        return type != current;
      }).forEach(function (type) {
        $(".JSteamPerson[data-type=\"".concat(type, "\"]")).each(function () {
          $(this).css({
            'transform': "translate(".concat(key % team.stroke * (team.width + team.padding) / fontHtml, "rem,").concat(parseInt(key / team.stroke) * (team.height + team.padding) / fontHtml, "rem)")
          });
          key++;
        });
      });
    };

    setPosition(value);
    $('.JSteamInput').change(function () {
      var value = $('.JSteamInput:checked').val();
      $('.JSteamDescription').removeClass('_current');
      $(".JSteamDescription[data-type=\"".concat(value, "\"]")).addClass('_current');
      $('.JSteamPerson').removeClass('_current');
      $(".JSteamPerson[data-type=\"".concat(value, "\"]")).addClass('_current');
      setPosition(value);
    });
  }
};

var handleVacancy = function handleVacancy() {
  var shortPhrase = function shortPhrase(str, stop) {
    var newStr = '';

    if (str.length > stop) {
      for (var i = 0; i < stop; i++) {
        newStr += str[i];
      }

      newStr += '...';
    } else {
      newStr = str;
    }

    return newStr;
  };

  $('.JSvacancyFileInput').change(function (e) {
    $('.JSvacancyFileView').text(shortPhrase(e.target.files[0].name, 20));
  });
};

var Slider = /*#__PURE__*/function () {
  function Slider(settings) {
    _classCallCheck(this, Slider);

    this.id = settings.id;
    this.slider = settings.slider;
    this.lay = settings.lay;
    this.itemsStart = Object.assign([], settings.items);
    this.items = Object.assign([], settings.items);
    this.buttons = settings.buttons;
    this.length = this.items.length;
    this.type = settings.type;
    this.current = settings.current;
    this.pagenation = settings.pagenation;
    this.infinity = settings.infinity;
    this.calcHeight = settings.calcHeight;
    this.loop = settings.loop;
    this.transition = window_width > 500 ? ".5s ease-in-out" : ".5s ease-out";
    this.time = {
      value: 0,
      intervalId: null
    };

    if (this.type == "mobile" && window_width < 500 || this.type == "desktop" && window_width > 500 || !this.type) {
      this.sliderInit();
    }

    this.moveAction = this.moveAction.bind(this);
    this.sliderInit = this.sliderInit.bind(this);
    this.addItems = this.addItems.bind(this);
    this.resetSlider = this.resetSlider.bind(this);
    this.touchStart = this.touchStart.bind(this);
    this.touchMove = this.touchMove.bind(this);
    this.touchEnd = this.touchEnd.bind(this);
    this.calcTimeStep = this.calcTimeStep.bind(this);
    this.setCurrentSlid = this.setCurrentSlid.bind(this);
    this.getHeightCurrentStep = this.getHeightCurrentStep.bind(this);
    this.setLoop = this.setLoop.bind(this);
    this.window_width = window_width;
    window.addEventListener('resize', this.resetSlider);
  }

  _createClass(Slider, [{
    key: "calcTimeStep",
    value: function calcTimeStep() {
      var _this2 = this;

      this.time.value = 0;
      this.time.intervalId = setInterval(function () {
        _this2.time.value += 10;
      }, 10);
    }
  }, {
    key: "touchStart",
    value: function touchStart(event) {
      if (this.slider != null) {
        this.flag = true;
        this.flagEnd = false;
        this.containFlag = false;
        this.lay.style.transition = "0s";
        this.startX = event.changedTouches[0].pageX;
        this.startY = event.changedTouches[0].pageY;
        this.flagX = false;
        this.flagY = false;
        this.calcTimeStep();

        if (this.loopId) {
          clearInterval(this.loopId);
        }
      }
    }
  }, {
    key: "touchMove",
    value: function touchMove(event) {
      if (this.slider != null) {
        if (this.flag && !this.containFlag) {
          this.moveStep = event.changedTouches[0].pageX - this.startX;
          this.moveX = event.changedTouches[0].pageX - this.startX + this.move;
          this.moveY = event.changedTouches[0].pageY - this.startY;

          if (event.changedTouches[0].pageX - this.startX < 0) {
            this.dir = "prev";
          } else {
            this.dir = "next";
          }

          if (Math.abs(this.moveY) > 25 && !this.flagX) {
            this.flagY = true;
            this.flagX = false;
          }

          if (Math.abs(event.changedTouches[0].pageX - this.startX) > 3 && !this.flagY) {
            this.flagX = true;
            this.flagY = false;
            event.preventDefault();
          }

          if (this.flagX) {
            var move = this.moveX + (this.dir === 'prev' ? 6 : -6);

            if (this.infinity === false && move > 0) {
              move /= 4;
            }

            if (this.infinity === false && move < -(this.widthItem * (this.length - this.includeWindow))) {
              move = -(this.widthItem * (this.length - this.includeWindow)) + (move + this.widthItem * (this.length - this.includeWindow)) / 4;
            }

            this.moveLay(move);
          }
        }
      }
    }
  }, {
    key: "touchEnd",
    value: function touchEnd() {
      var _this3 = this;

      if (this.slider != null && this.flag) {
        clearInterval(this.time.intervalId);

        if (this.flagX) {
          var delta = Math.abs(this.moveStep),
              _speed = this.time.value / delta; // console.log(speed);


          if (this.dir == "prev") {
            if (this.moveX + 35 < this.move && this.flag) {
              this.moveAction("next", _speed);
            } else {
              this.lay.style.transition = this.transition;
              this.moveLay(this.move);
              setTimeout(function () {
                _this3.lay.style.transition = "0s";
                _this3.flagEnd = true;
              }, 510);
            }
          } else {
            if (this.moveX - 35 > this.move && this.flag) {
              this.moveAction("prev", _speed);
            } else {
              this.lay.style.transition = this.transition;
              this.moveLay(this.move);
              setTimeout(function () {
                _this3.lay.style.transition = "0s";
                _this3.flagEnd = true;
              }, 510);
            }
          }
        } else {
          this.flagEnd = true;
        }

        this.flag = false;
        this.startX = 0;
        this.moveX = 0;
        this.setLoop();
      }
    }
  }, {
    key: "getHeightCurrentStep",
    value: function getHeightCurrentStep(current) {
      var heightStep;
      this.itemsStart.forEach(function (item, key) {
        if (current == key) {
          heightStep = item.clientHeight;
        }
      });
      return heightStep;
    }
  }, {
    key: "setLoop",
    value: function setLoop() {
      var _this4 = this;

      if (this.loop) {
        if (this.loopId) {
          clearInterval(this.loopId);
        }

        this.loopId = setInterval(function () {
          _this4.moveAction('next');
        }, this.loop);
      }
    }
  }, {
    key: "sliderInit",
    value: function sliderInit() {
      var _this5 = this;

      this.lay.style.position = 'relative';
      this.lay.style.userSelect = 'none';
      this.widthLay = this.lay.offsetWidth;
      this.widthItem = this.widthLay / this.length;
      this.includeWindow = Math.round(this.slider.offsetWidth / this.widthItem);
      this.move = 0;
      this.flag = false;
      this.flagEnd = true;
      this.containFlag = false;

      if (this.loop) {
        this.setLoop();
      }

      if (this.pagenation) {
        if (this.pagenation.current) {
          this.pagenation.current.innerHTML = this.current + 1;
        }

        if (this.pagenation.all) {
          this.pagenation.all.innerHTML = this.length;
        }

        if (this.pagenation.parent) {
          this.pagenation.parent.innerHTML = '';
        }
      }

      if (this.calcHeight === true) {
        this.slider.style.overflow = 'hidden';
        this.slider.style.height = "".concat(this.getHeightCurrentStep(this.current) / fontHtml, "rem");
      }

      var pag = {
        width: 0,
        height: 0
      };
      this.itemsStart.forEach(function (item, key) {
        item.setAttribute('data-id', key);
        item.removeAttribute('data-current');

        if (_this5.current == key) {
          item.setAttribute('data-current', true);
        }

        if (_this5.pagenation && _this5.pagenation.dot) {
          var dot = document.createElement('div');
          dot.classList.add(_this5.pagenation.dot);
          dot.setAttribute('data-id', key);

          if (_this5.current == key) {
            dot.classList.add('_current');
          }

          _this5.pagenation.parent.appendChild(dot);

          if (_this5.pagenation.circle === true) {
            dot.removeAttribute('style');
            pag.width = pag.width === 0 ? dot.clientWidth : pag.width, pag.height = pag.height === 0 ? dot.clientWidth : pag.height;
            dot.style.width = "".concat(pag.width / fontHtml, "rem");
            dot.style.height = "".concat(pag.height / fontHtml, "rem");
          }
        }
      });
      this.left = this.lay.getBoundingClientRect().x;
      this.right = window_width - (this.lay.getBoundingClientRect().x + this.lay.offsetWidth);

      if (this.right < 0) {
        this.right = 0;
      }

      if (this.left < 0) {
        this.left = 0;
      }

      if (this.infinity !== false) {
        this.addItems("next", Math.ceil(this.right / this.widthItem) + Math.ceil(window_width / this.widthItem));
        this.addItems("prev", Math.ceil(this.left / this.widthItem) + Math.ceil(window_width / this.widthItem));
      }

      this.startX = 0;
      this.moveX = 0;
      this.startY = 0;
      this.moveY = 0;

      if (this.buttons) {
        Object.entries(this.buttons).map(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              key = _ref2[0],
              button = _ref2[1];

          button.onclick = function () {
            if (_this5.flagEnd) {
              if (_this5.loop) {
                _this5.setLoop();
              }

              _this5.moveAction(key);
            }
          };
        });

        if (this.infinity === false && this.current === 0) {
          this.buttons.prev.setAttribute('data-disable', true);
        }
      }

      this.lay.addEventListener('touchstart', this.touchStart.bind(this));
      this.slider.addEventListener('touchmove', this.touchMove.bind(this), {
        passive: false
      });
      this.slider.addEventListener('touchend', this.touchEnd.bind(this));
    }
  }, {
    key: "addItems",
    value: function addItems(direction, count) {
      var iteration, newItem;

      switch (direction) {
        case "next":
          iteration = 0;

          for (var i = 0; i < count; i++) {
            if (iteration == this.length) {
              iteration = 0;
            }

            this.items.forEach(function (item) {
              if (+item.getAttribute('data-id') == iteration) {
                newItem = item.cloneNode(true);
              }
            });
            newItem.removeAttribute('data-current');
            iteration++;
            this.lay.append(newItem);
            this.items.push(newItem);
          }

          break;

        case "prev":
          var left = 0;
          iteration = this.length - 1;

          for (var _i2 = count; _i2 > 0; _i2--) {
            if (iteration == -1) {
              iteration = this.length - 1;
            }

            left -= this.widthItem;
            this.items.forEach(function (item) {
              if (+item.getAttribute('data-id') == iteration) {
                newItem = item.cloneNode(true);
              }
            });
            newItem.removeAttribute('data-current');
            iteration--;
            this.lay.prepend(newItem);
            this.items.unshift(newItem);
            this.lay.style.left = "".concat(left / fontHtml, "rem");
            this.left = left;
          }

          break;
      }
    }
  }, {
    key: "resetSlider",
    value: function resetSlider() {
      var _this6 = this;

      if (this.window_width !== window_width) {
        this.window_width = window_width;
        this.lay.innerHTML = "";
        this.slider.removeAttribute('style');
        this.lay.removeAttribute('style');
        this.itemsStart.forEach(function (item, key) {
          item.removeAttribute('data-id');
          item.removeAttribute('data-current');

          _this6.lay.append(item);
        });
        this.items = Object.assign([], this.itemsStart);

        if (this.type == "mobile" && window_width < 500 || this.type == "desktop" && window_width > 500 || !this.type) {
          this.sliderInit();
        }
      }
    }
  }, {
    key: "moveLay",
    value: function moveLay(value, current, direction) {
      this.lay.style.transform = "translate3d(".concat(value / fontHtml, "rem,0,0)");

      if (this.calcHeight === true) {
        this.slider.style.transition = ".5s ease-in-out";
        this.slider.style.height = "".concat(this.getHeightCurrentStep(direction === 'next' ? current + 1 : current - 1) / fontHtml, "rem");
      }
    }
  }, {
    key: "moveAction",
    value: function moveAction(direction, speed) {
      var _this7 = this;

      var cloneItem, idCloneItem, currentItem, clone, removeChild, cur;
      this.flagEnd = false;
      this.items.forEach(function (item) {
        if (item.getAttribute('data-current') == "true") {
          currentItem = item;
          cur = +item.getAttribute('data-id');
        }
      });

      if (this.infinity === false && (cur === 0 && direction === 'prev' || cur === this.length - 1 && direction === 'next')) {
        this.flagEnd = true;

        if (window_width < 500) {
          this.lay.style.transition = this.transition;
          this.moveLay(this.move, cur, direction);
        }

        return false;
      }

      var setPag = function setPag() {
        var current;

        _this7.items.forEach(function (item) {
          if (item.getAttribute('data-current') == "true") {
            current = +item.getAttribute('data-id') + 1;
          }

          if (_this7.pagenation && _this7.pagenation.dot) {
            _this7.slider.querySelector(".".concat(_this7.pagenation.dot, "[data-id=\"").concat(item.getAttribute('data-id'), "\"]")).classList.remove('_current');
          }
        });

        document.dispatchEvent(new CustomEvent("change-slider", {
          detail: {
            id: _this7.id,
            type: 'change',
            current: current
          }
        }));

        if (_this7.pagenation) {
          if (_this7.pagenation.current) {
            _this7.pagenation.current.innerHTML = current;
          }

          if (_this7.pagenation.dot && _this7.slider.querySelector(".".concat(_this7.pagenation.dot, "[data-id=\"").concat(current - 1, "\"]"))) {
            _this7.slider.querySelector(".".concat(_this7.pagenation.dot, "[data-id=\"").concat(current - 1, "\"]")).classList.add('_current');
          }
        }
      };

      var getEl = function getEl(el) {
        switch (direction) {
          case 'next':
            if (el.nextElementSibling && +el.nextElementSibling.getAttribute('data-id') + _this7.includeWindow > _this7.length) {
              return el;
            }

            return el.nextElementSibling;

          case 'prev':
            return el.previousElementSibling;
        }
      };

      var moveWithSpeed = function moveWithSpeed(k) {
        if (_this7.infinity === false) {
          if (speed && currentItem) {
            if (speed < .5) {
              _this7.move += k * 2 * _this7.widthItem;
            } else {
              if (speed < 1) {
                _this7.move += k * 1 * _this7.widthItem;
              } else {
                _this7.move += k * _this7.widthItem;
              }
            }
          } else {
            _this7.move += k * _this7.widthItem;
          }
        } else {
          _this7.move += k * _this7.widthItem;
        }
      };

      var setCurrent = function setCurrent() {
        if (_this7.infinity === false) {
          if (currentItem) {
            if (speed) {
              if (speed < .5) {
                if (getEl(currentItem) && getEl(getEl(currentItem))) {
                  getEl(getEl(currentItem)).setAttribute('data-current', true);
                } else {
                  if (getEl(currentItem)) {
                    getEl(currentItem).setAttribute('data-current', true);
                  }
                }
              } else {
                if (getEl(currentItem)) {
                  getEl(currentItem).setAttribute('data-current', true);
                }
              }
            } else {
              getEl(currentItem).setAttribute('data-current', true);
            }
          }
        } else {
          if (currentItem) {
            getEl(currentItem).setAttribute('data-current', true);
          }
        }
      }; // setCurrent();
      // return false;
      // this.flag = false;


      switch (direction) {
        case "next":
          this.items.forEach(function (item) {
            if (item == _this7.lay.lastElementChild) {
              cloneItem = item;
            }

            if (item == _this7.lay.firstElementChild) {
              removeChild = item;
            }
          });

          if (cloneItem) {
            idCloneItem = +cloneItem.getAttribute('data-id') + 1;

            if (idCloneItem == this.length) {
              idCloneItem = 0;
            }
          }

          if (currentItem) {
            currentItem.removeAttribute('data-current');
          }

          if (currentItem && !currentItem.nextElementSibling) {
            if (this.infinity === false) {
              currentItem.setAttribute('data-current', true);
              this.move += this.widthItem;
            }
          }

          moveWithSpeed(-1);

          if (currentItem && currentItem.nextElementSibling && +currentItem.nextElementSibling.getAttribute('data-id') + this.includeWindow >= this.length || currentItem && +currentItem.getAttribute('data-id') + this.includeWindow >= this.length) {
            if (this.infinity === false) {
              // console.log('fff')
              this.move = -this.widthItem * (this.length - this.includeWindow);
            }
          }

          setCurrent();
          setPag();

          if (this.infinity === false) {
            if (this.buttons) {
              this.buttons.prev.removeAttribute('data-disable');

              if (+currentItem.getAttribute('data-id') + this.includeWindow === this.length - 1) {
                this.buttons.next.setAttribute('data-disable', true);
              }
            }
          }

          setTimeout(function () {
            _this7.lay.style.transition = _this7.transition;

            _this7.moveLay(_this7.move, cur, direction);
          }, 10);

          if (this.infinity === false) {
            if (+currentItem.getAttribute('data-id') + this.includeWindow >= this.length) {
              return false;
            }
          }

          setTimeout(function () {
            _this7.items.forEach(function (item) {
              if (+item.getAttribute('data-id') == idCloneItem) {
                clone = item.cloneNode(true);
                clone.removeAttribute('data-current');
              }
            });

            if (_this7.infinity !== false) {
              _this7.lay.append(clone);

              _this7.items.push(clone);

              _this7.left += _this7.widthItem;
              _this7.lay.style.left = "".concat(_this7.left / fontHtml, "rem");
            }

            if (removeChild && _this7.infinity !== false) {
              removeChild.parentNode.removeChild(removeChild);
            }

            _this7.lay.style.transition = "0s";
            _this7.flagEnd = true;
            document.dispatchEvent(new CustomEvent("create-slider-item", {
              detail: {
                id: _this7.id,
                type: 'clone'
              }
            }));
          }, 510);
          break;

        case "prev":
          this.items.forEach(function (item) {
            if (item == _this7.lay.firstElementChild) {
              cloneItem = item;
            }

            if (item == _this7.lay.lastElementChild) {
              removeChild = item;
            }
          });

          if (cloneItem) {
            idCloneItem = +cloneItem.getAttribute('data-id') - 1;

            if (idCloneItem == -1) {
              idCloneItem = this.length - 1;
            }
          }

          if (currentItem) {
            currentItem.removeAttribute('data-current');
          }

          setCurrent();

          if (this.infinity === false) {
            if (this.buttons) {
              this.buttons.next.removeAttribute('data-disable');

              if (+currentItem.getAttribute('data-id') === 1) {
                this.buttons.prev.setAttribute('data-disable', true);
              }
            }
          }

          if (currentItem.previousElementSibling) {// currentItem.previousElementSibling.setAttribute('data-current', true)
          } else {
            if (this.infinity === false) {
              currentItem.setAttribute('data-current', true);
              this.move -= this.widthItem;
            }
          }

          setPag();
          moveWithSpeed(1);

          if (+currentItem.getAttribute('data-id') === 0 || currentItem.previousElementSibling && +currentItem.previousElementSibling.getAttribute('data-id') === 0) {
            if (this.infinity === false) {
              this.move = 0;
            }
          }

          setTimeout(function () {
            _this7.lay.style.transition = _this7.transition;

            _this7.moveLay(_this7.move, cur, direction);
          }, 10);

          if (this.infinity === false) {
            if (+currentItem.getAttribute('data-id') === 0) {
              return false;
            }
          }

          setTimeout(function () {
            _this7.items.forEach(function (item) {
              if (+item.getAttribute('data-id') == idCloneItem) {
                clone = item.cloneNode(true);
              }
            });

            if (_this7.infinity !== false) {
              _this7.lay.prepend(clone);

              _this7.items.unshift(clone);

              _this7.left -= _this7.widthItem;
              _this7.lay.style.left = "".concat(_this7.left / fontHtml, "rem");
            }

            _this7.lay.style.transition = "0s";

            if (removeChild && _this7.infinity !== false) {
              removeChild.parentNode.removeChild(removeChild);
            }

            _this7.flagEnd = true;
            document.dispatchEvent(new CustomEvent("create-slider-item", {
              detail: {
                id: _this7.id,
                type: 'clone'
              }
            }));
          }, 510);
          break;
      }
    }
  }, {
    key: "setCurrentSlid",
    value: function setCurrentSlid(id) {
      var _this8 = this;

      if (this.infinity === false) {
        this.move = -((+id - 1) * this.widthItem);
        this.items.forEach(function (item) {
          if (+item.getAttribute('data-id') === +id - 1) {
            item.setAttribute('data-current', true);
          } else {
            item.removeAttribute('data-current');
          }
        });
        document.dispatchEvent(new CustomEvent("change-slider", {
          detail: {
            id: this.id,
            type: 'change',
            current: +id
          }
        }));

        if (this.buttons) {
          this.buttons.prev.removeAttribute('data-disable');
          this.buttons.next.removeAttribute('data-disable');

          if (+id - 1 === 0) {
            this.buttons.prev.setAttribute('data-disable', true);
          }

          if (+id - 1 + this.includeWindow === this.length) {
            this.buttons.next.setAttribute('data-disable', true);
          }
        }

        setTimeout(function () {
          _this8.lay.style.transition = _this8.transition;

          _this8.moveLay(_this8.move);
        }, 10);
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      window.removeEventListener('resize', this.resetSlider);
      this.lay.removeEventListener('touchstart', this.touchStart.bind(this));
      this.slider.removeEventListener('touchmove', this.touchMove.bind(this), {
        passive: false
      });
      this.slider.removeEventListener('touchend', this.touchEnd.bind(this));
    }
  }]);

  return Slider;
}();

var default_placeholder;
var height_input;
var curry_selector;
var css_object;
$('.JSplaceholderAppdate').each(function () {
  default_placeholder = $(this).attr('placeholder');
  height_input = parseInt($(this).height()) + parseInt($(this).css('padding'));
  $(this).wrap("<div class='JSelemTrans inputBox'></div>");
  $(this).attr('placeholder', '');
  $(this).after("<label class='JSelemTrans inputBox__label'>" + default_placeholder + "</label>");
  css_object = $(this).css('margin-top');
  $(this).closest('.inputBox').css({
    'margin-top': css_object
  });
  css_object = $(this).css('margin-right');
  $(this).closest('.inputBox').css({
    'margin-right': css_object
  });
  css_object = $(this).css('margin-bottom');
  $(this).closest('.inputBox').css({
    'margin-bottom': css_object
  });
  css_object = $(this).css('margin-left');
  $(this).closest('.inputBox').css({
    'margin-left': css_object
  });
  $(this).css({
    'margin': '0'
  });
});
$(document).on('click', '.inputBox__label', function () {
  $(this).prev().focus(); // $(this).addClass('_active')

  $(this).closest('.inputBox').find('.inputBox__error').removeClass('_active');
});

var check_val = function check_val() {
  $('.JSplaceholderAppdate').each(function () {
    curry_selector = $(this).closest('.inputBox').find('.inputBox__label');

    if ($(this).val() != 0) {
      curry_selector.addClass('_active');

      if ($(this).is(':focus')) {
        $(this).closest('.inputBox').find('.inputBox__label').addClass('_active');
      }
    } else {
      if ($(this).is(':focus')) {
        curry_selector.addClass('_active');
        $(this).closest('.inputBox').find('.inputBox__error').removeClass('_active');
      } else {
        curry_selector.removeClass('_active');
      }
    }
  });
};

setInterval(check_val, 10);
$(function () {
  return false;
  var timeout = 1,
      counters = document.getElementById('counter'),
      counters_info = getComputedStyle(counters),
      svg2 = document.getElementById('svg2'),
      old_size = counters_info.fontSize,
      num = counters.innerHTML,
      num_2 = +counters.innerHTML,
      scroll_svg = svg2.offsetTop + svg2.offsetHeight,
      check = true,
      path = document.getElementById('progress'),
      path_style = getComputedStyle(path),
      tick = 0;
  counters.innerHTML = '0%';
  counters.setAttribute('data-num', num);

  if (num > 90) {
    num_2 = Math.floor(+num + (100 - num) / 2);
  }

  window.addEventListener('scroll', function () {
    if (window.pageYOffset + document.documentElement.clientHeight - svg2.offsetHeight >= scroll_svg && check) {
      check = false;
      stage_1();
    }
  });

  function stage_1() {
    counters.style.color = '#fff';
    var length = path.getTotalLength(),
        results = 100 - num,
        to = length / 100 * results;
    path.style.strokeDashoffset = Math.max(0, to);

    var i = 1,
        step = Math.round(2000 / num),
        start = Math.round(50),
        _int = setInterval(function () {
      if (i <= num) {
        var resulr_grad = i + "%";
        counters.innerHTML = i + '%';
      } else {
        setTimeout(stage_2, start);
        clearInterval(_int);
      }

      i++;
    }, step);
  }

  ;

  function stage_2() {
    path.style.stroke = '#fff';
    var now_size = parseInt(counters_info.fontSize) + parseInt(counters_info.fontSize) / 100 * 40;
    counters.style.fontSize = now_size + 'px';

    var i = num,
        step = 305,
        _int2 = setInterval(function () {
      setTimeout(stage_3, step);
      clearInterval(_int2);
    }, step);
  }

  ;

  function stage_3() {
    path.style.stroke = '#CC151D';
    counters.style.fontSize = old_size;
  }

  ;
});

var menu = function menu() {
  setTimeout(function () {
    $('.JSmenu').addClass('_active');
    $('.JSdots').removeClass('_hidden');
    $('.JSname').removeClass('_hidden');
    $('.JSchat').removeClass('_hidden');
  }, speed);
  $('.JSmenuOpen').click(function () {
    $('.JSmenuNew .JSmenuList').fadeIn(0).css({
      'display': 'flex'
    });
    $('.JSmenuOpen').fadeOut(0);
    $('.JSmenuClose').fadeIn(0);
    $('.JSmenuNew').addClass('_show');
    $('.menuNew__navLinkGoverment').addClass('navLinkWhite')
    windowFix(scroll);
  });
  $('.JSmenuClose').click(function () {
    $('.JSmenuNew .JSmenuList').fadeOut(0);
    $('.JSmenuOpen').fadeIn(0);
    $('.JSmenuClose').fadeOut(0);
    $('.JSmenuNew').removeClass('_show');
    $('.menuNew__navLinkGoverment').removeClass('navLinkWhite')
    windowFixRemove(scroll);
  });
  $(window).scroll(function () {
    if ($('.JSmenuNewFix').length > 0) {
      if ($(window).scrollTop() > $('.JSmenuNew').outerHeight()) {
        $('.JSmenuNewFix').addClass('_active');
      } else {
        $('.JSmenuNewFix').removeClass('_active');
      }
    }
  });
};

var menuCase = function menuCase() {
  $(window).scroll(function () {
    if ($('.JSmenuCaseFix').length > 0) {
      if ($(window).scrollTop() > $('.body__menu._case').outerHeight()) {
        $('.JSmenuCaseFix').addClass('_active');
      } else {
        $('.JSmenuCaseFix').removeClass('_active');
      }
    }
  });
};

$('.JSnavBtn').click(function () {
  $('.JSnavBox').toggleClass('_active');
  $(this).toggleClass('_active');
});
var fontHtml, scroll, windowFix, windowFixRemove, window_width, getDate;

window.onload = function () {
  $('.js-main-loader').remove();
  adaptive();
  bodyFix();
  word();
  step();
  portfolio();
  select();
  doneItem();
  slider();
  quiz();
  menu();
  sendForm();
  taxiSlider();
  share();
  menuCase();
  grGateAnimate();
  handleRopaScreen();
  handleCasuarn();
  brand();
  handleTeam();
  handleExpCase();
  handleVacancy();
  $(window).scroll(function (e) {
    if ($(document).scrollTop() < 50) {
      if (!window.canScroll) {
        e.preventDefault();
        return false;
      }
    }
  });
  $(window).trigger('scroll');
  var flagBanner = true;
  $(window).scroll(function () {
    if ($('.body__banner').length > 0 && flagBanner) {
      if ($(window).scrollTop() > $('html').outerHeight() / 2) {
        $('.body__banner').fadeIn(300).css({
          'display': 'flex'
        });
        flagBanner = false;
      }
    }
  });
  $('.body__bannerClose').click(function () {
    $('.body__banner').fadeOut(300);
  });
  setTimeout(function () {
    $('[data-src]').each(function () {
      $(this).attr('src', $(this).data('src'));
    });
  }, 10);
  $('.JSpriceBtn').click(function () {
    $(".body__price[data-price=\"".concat($(this).attr('data-price'), "\"]")).fadeIn(300);
    windowFix(scroll);
  });
  $('.priceBox__close').click(function () {
    $(this).closest('.body__price').fadeOut(300);
    windowFixRemove(scroll);
  });
  var flagAnimateTaxi = true;
  setTimeout(function () {
    $('.JScaseCollageItem').addClass('_active');
    flagAnimateTaxi = false;
  }, 2000);
  $(window).scroll(function () {
    if ($(window).scrollTop() > 20 && flagAnimateTaxi) {
      $('.JScaseCollageItem').addClass('_active');
    }
  });
  $('.JSpageUp').click(function () {
    $('html,body').animate({
      scrollTop: 0
    }, 1500);
  });
  $('.JStoggleShare').click(function () {
    var state = $('.JSshare').attr('data-state');
    state == 'close' ? $('.JSshare').fadeIn(300).css({
      'display': 'flex'
    }) : $('.JSshare').fadeOut(300);
    state == 'close' ? $('.JSshare').attr('data-state', 'open') : $('.JSshare').attr('data-state', 'close');
  });
  var infoClose = localStorage.getItem('infoClose') ? JSON.parse(localStorage.getItem('infoClose')) : false;

  if (infoClose === true) {
    $('.menuNew__info').remove();
  } else {
    if (window_width > 500) {
      $('.menuNew__info:not(._mob)').fadeIn(0);
    } else {
      $('.menuNew__info._mob').fadeIn(0);
    }
  }

  $(document).on('click', '.menuNew__infoClose', function (e) {
    e.stopPropagation();
    e.preventDefault();
    localStorage.setItem('infoClose', JSON.stringify(true));
    document.cookie = "infoClose=true";
    $('.menuNew__info').slideUp(300);
    setTimeout(function () {
      $('.menuNew__info').remove();
    }, 300);
    return false;
  });
  $('.input-file').each(function () {
    var $input = $(this),
        $label = $input.next('.js-labelFile'),
        labelVal = $label.html();
    $input.on('change', function (element) {
      if (element.target.files[0].size > 15000000) {
        $label.addClass("has-error");
        $('.error_size_file').css('display', 'block');
      } else {
        $label.removeClass("has-error");
        $('.error_size_file').css('display', 'none');
      }

      var fileName = '';
      if (element.target.value) fileName = element.target.value.split('\\').pop();
      fileName ? $label.addClass('has-file').find('.js-fileName').html(fileName) : $label.removeClass('has-file').html(labelVal);
    });
  });
  $('.body__form').css({
    'height': "".concat(document.documentElement.clientHeight, "px")
  });
  $(window).scroll(function () {
    if ($(window).scrollTop() > $('body').outerHeight() - $(window).height() - 200) {
      $('.body__brand').fadeOut(300);
    } else {
      $('.body__brand').fadeIn(300);
    }
  });
  $('[data-name="email"]').inputmask({
    mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
    greedy: false,
    onBeforePaste: function onBeforePaste(pastedValue, opts) {
      pastedValue = pastedValue.toLowerCase();
      return pastedValue.replace("mailto:", "");
    },
    definitions: {
      '*': {
        validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
        cardinality: 1,
        casing: "lower"
      }
    }
  });

  if ($('.whiteLabelFeedbacks').length > 0) {
    new Slider({
      id: 'whiteLabelFeedbacks',
      slider: document.querySelector('.whiteLabelFeedbacks__content'),
      lay: document.querySelector('.whiteLabelFeedbacks__items'),
      items: document.querySelectorAll('.whiteLabelFeedbacks__item'),
      infinity: false,
      // loop: 3000,
      buttons: {
        prev: document.querySelector('.whiteLabelFeedbacks__arrow._prev'),
        next: document.querySelector('.whiteLabelFeedbacks__arrow._next')
      },
      pagenation: null,
      current: 0
    });
  }
};

$(document).on('click', '.JSopenForm', function () {
  $('.JSpopup').addClass('_active');
  windowFix(scroll);
});
$('.JScloseForm').click(function () {
  $('.JSpopup').removeClass('_active');
  windowFixRemove(scroll);
});

var portfolio = function portfolio() {
  if ($('.sectionPortfolio').length > 0) {
    var caseTop, caseHeight, layWidth, _step;

    var setParams = function setParams() {
      caseTop = $('.sectionPortfolio').offset().top + $('.sectionPortfolio__title').outerHeight();
      caseHeight = $('.sectionPortfolio').outerHeight() - $('.sectionPortfolio__title').outerHeight();
      layWidth = $('.sectionPortfolio__caseLine').outerWidth();
      _step = (layWidth - $('.JScaseBg').outerWidth()) / (caseHeight - $(window).height());
    };

    setParams();
    $(window).resize(function () {
      setParams();
    });
    $(window).trigger('scroll');
    var Case = [];
    $('.JScaseBlock').each(function () {
      Case.push($(this).attr('data-caseColor'));
    });

    var setBg = function setBg(i) {
      $('.JScaseBg').css({
        'background': Case[i]
      });
    };

    setBg(0);
    $(window).scroll(function () {
      setParams();
      var value = $(window).scrollTop() - caseTop;

      if ($(window).scrollTop() > caseTop) {
        var breakPoint = $('.sectionPortfolio').offset().top + (caseHeight + $('.sectionPortfolio__title').outerHeight()) - $(window).height();

        if ($(window).scrollTop() > breakPoint) {
          $('.JScaseLay').css({
            'transform': 'translate(' + -(caseHeight - $(window).height()) * _step / fontHtml + 'rem,0)'
          });
          setBg(Case.length - 1);
        } else {
          $('.JScaseLay').css({
            'transform': 'translate(' + -value * _step / fontHtml + 'rem,0)'
          });
          setBg(Math.round(value * _step / ((caseHeight - $('.JSmenuNewFix').outerHeight()) / (Case.length - 1))));
        }
      } else {
        $('.JScaseLay').css({
          'transform': 'translate(0,0)'
        });
        setBg(0);
      }
    });
  }
};

var quiz = function quiz() {
  var quizLength = $('.JSquizItems').length - 2,
      quizCurry = 1,
      data = new FormData(),
      info = {};
  $('.JSquizAll').text(quizLength);

  var actionQuiz = function actionQuiz(counter) {
    $('.JSquizItems').removeClass('_curry');

    if ($(".JSquizItems[data-id=\"".concat(counter, "\"]")).attr('data-type')) {
      $(".JSquizItems[data-id=\"".concat(counter, "\"][data-type=\"").concat($('input[name="status"]:checked').attr('data-type'), "\"]")).addClass('_curry');
    } else {
      $(".JSquizItems[data-id=\"".concat(counter, "\"]")).addClass('_curry');
    }

    $('.JSquizCurry').text(counter);
    $('.body__quiz').animate({
      scrollTop: 0
    }, 0);

    switch (counter) {
      case quizLength:
        info = {};
        $('.JSquizNav').remove();
        $('.JSquizElWrap').find('.JSquizEl').each(function () {
          switch ($(this).attr('type')) {
            case "text":
              info[$(this).attr('name')] = {
                name: $(this).attr('name'),
                value: $(this).val()
              };
              break;

            case "radio":
              info[$(this).attr('name')] = {
                name: $(this).attr('name'),
                value: $(this).closest('.JSquizElWrap').find('.JSquizEl:checked').val()
              };
              break;

            case "checkbox":
              info[$(this).attr('name')] = {
                name: $(this).attr('name'),
                value: ""
              };
              $(this).closest('.JSquizElWrap').find('.JSquizEl:checked').each(function () {
                info[$(this).attr('name')].value += $(this).val() + ".";
              });
              break;
          }

          info[$(this).attr('name')].description = $(this).closest('.JSquizElWrap').attr('data-description');
        });

        var generate = function generate(len) {
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
        };

        info['atach'] = [];
        $('.JSfilesItems').each(function () {
          info['atach'].push($(this).attr('data-name'));
        });
        var ref = generate(10);
        info['referal'] = "rubedite.ru/referal/".concat(ref);
        data.append('info', JSON.stringify(info));
        $('.JSref').text("rubedite.ru/referal/".concat(ref));
        $('.JSref').attr('href', "rubedite.ru/referal/".concat(ref));
        console.log(info);
        $.ajax({
          method: "POST",
          url: "/modules/sendQuiz.php",
          data: data,
          processData: false,
          contentType: false,
          success: function success(r) {
            console.log(r);
          }
        });
        break;
    }
  };

  $('.JSquizBtn').click(function () {
    switch ($(this).attr('data-action')) {
      case "prev":
        quizCurry--;

        if (quizCurry == 1) {
          $('.JSquizBtn[data-action="prev"]').closest('.JSquizBtnWrap').addClass('_hide');
        }

        break;

      case "next":
        var quizFlag = true;
        $(".JSquizItems._curry").find('.JSquizElWrap').each(function () {
          switch ($(this).find('.JSquizEl').attr('type')) {
            case "text":
              quizFlag *= $(this).find('.JSquizEl').val() != "" || $(this).find('.JSquizEl').attr('data-require') == "false";
              $(this).find('.JSquizEl').val() == "" && $(this).find('.JSquizEl').attr('data-require') == "true" ? $(this).find('.JSquizError').text("Это поле обязательно для заполнения!") : $(this).find('.JSquizError').text("");
              break;

            case "radio":
              quizFlag *= $(this).find('.JSquizEl:checked').length > 0 || $(this).find('.JSquizEl').attr('data-require') == "false";
              $(this).find('.JSquizEl:checked').length == 0 && $(this).find('.JSquizEl').attr('data-require') == "true" ? $(this).find('.JSquizError').text("Это поле обязательно для заполнения!") : $(this).find('.JSquizError').text("");
              break;

            case "checkbox":
              quizFlag *= $(this).find('.JSquizEl:checked').length > 0 || $(this).find('.JSquizEl').attr('data-require') == "false";
              $(this).find('.JSquizEl:checked').length == 0 && $(this).find('.JSquizEl').attr('data-require') == "true" ? $(this).find('.JSquizError').text("Это поле обязательно для заполнения!") : $(this).find('.JSquizError').text("");
              break;

            case "file":
              quizFlag *= $(this).find('.JSfilesItems').length > 0 || $(this).find('.JSquizEl').attr('data-require') == "false";
              $(this).find('.JSfilesItems').length == 0 && $(this).find('.JSquizEl').attr('data-require') == "true" ? $(this).find('.JSquizError').text("Загрузите фото!") : $(this).find('.JSquizError').text("");
              break;
          }
        });

        if (!quizFlag) {
          return false;
        }

        quizCurry++;
        $('.JSquizBtn[data-action="prev"]').closest('.JSquizBtnWrap').removeClass('_hide');
        break;
    }

    actionQuiz(quizCurry);
  });
  var count = 0;
  $(document).on('change', '.JSquizFile', function () {
    var files = this.files;
    $.each(files, function (key, file) {
      console.log(key);
      data.append(count, file);
      count++;
      var f = files[key];
      var reader = new FileReader();

      reader.onload = function (e) {
        var allow = ['jpg', 'jpeg', 'png'];
        var info = file.name.split('.')[file.name.split('.').length - 1];

        if (allow.indexOf(info.toLowerCase()) != -1) {
          $('.JSquizFiles').append("<div class=\"JSfilesItems quizBox__fileUploadItems\" data-name=\"".concat(file.name, "\">\n                                                ").concat(file.name, " \u2014 ").concat((file.size / 1024).toFixed(1), "kb\n                                                <img src=\"/img/close.svg\" alt=\"\" class=\"quizBox__fileUploadDelete\">\n                                              </div>"));
        } else {
          $('.JSquizElWrap._file').find('.JSquizError').append("".concat(file.name, " \u2014 \u043D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442!<br>"));
        }
      };

      reader.readAsDataURL(f);
    });
  });
  $(document).on('click', '.quizBox__fileUploadDelete', function () {
    $(this).closest('.JSfilesItems').remove();
  });
  $(document).on('click focus input keyup', '.JSquizEl', function () {
    $(this).closest('.JSquizElWrap').find('.JSquizError').text("");
  });
  $('.JSbtnQuiz').click(function () {
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
  });
};

var keys = {
  37: 1,
  38: 1,
  39: 1,
  40: 1
};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault) e.preventDefault();
  e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

function disableScroll() {
  if (window.addEventListener) // older FF
    window.addEventListener('DOMMouseScroll', preventDefault, false);
  document.addEventListener('wheel', preventDefault, {
    passive: false
  }); // Disable scrolling in Chrome

  window.onwheel = preventDefault; // modern standard

  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE

  window.ontouchmove = preventDefault; // mobile

  document.onkeydown = preventDefaultForScrollKeys;
}

function enableScroll() {
  if (window.removeEventListener) window.removeEventListener('DOMMouseScroll', preventDefault, false);
  document.removeEventListener('wheel', preventDefault, {
    passive: false
  }); // Enable scrolling in Chrome

  window.onmousewheel = document.onmousewheel = null;
  window.onwheel = null;
  window.ontouchmove = null;
  document.onkeydown = null;
}

$('.JSscrollItem').click(function () {
  var item = $(this).attr('data-scroll');
  var topVal;

  if (item == "index") {
    topVal = 0;
  } else {
    topVal = $(".JSscrollBlock[data-scroll=\"".concat(item, "\"]")).offset().top;
  }

  if (window_width < 500) {
    $('.JSmenuList').fadeOut(300);
    $('.JSmenuOpen').fadeIn(300);
    $('.JSmenuClose').fadeOut(300);
    windowFixRemove(scroll);
  }

  $('html,body').animate({
    scrollTop: topVal
  }, 500);
});

var select = function select() {
  $(document).on('click', '.selectBox__view', function () {
    $(this).closest('.selectBox').toggleClass('_active');
  });
  $(document).on('click', '.selectBox__dropItems', function () {
    $(this).closest('.selectBox').find('.selectBox__dropItems').removeClass('_curry');
    $(this).addClass('_curry');
    $(this).closest('.selectBox').removeClass('_active');
    var t = $(this).text().trim();
    var val = $(this).attr('value');
    $(this).closest('.selectBox').find('.selectBox__support').text(t);
    $(this).closest('.selectBox').attr('data-curryValue', val);
    $(this).closest('.selectBox').prev('select').find("option").removeAttr('selected');
    $(this).closest('.selectBox').prev('select').find("option[value=\"".concat(val, "\"]")).attr('selected', 'selected');
    console.log($(this).closest('.selectBox').prev('select').find("option:selected").val());
  });
  $(document).on('touchend mouseup', function (e) {
    var div = $(".selectBox");

    if (!div.is(e.target) && div.has(e.target).length === 0) {
      div.removeClass('_active');
    }
  });
  $('.JScustomeSelect').each(function () {
    $(this).fadeOut(0);
    var selectOptionLength = $(this).find('option').length;
    var selectPlaceholder = $(this).attr('data-selectPlaceholder');
    var selectFirstVal = $(this).find('option:selected').text();
    var selectView = "<div class=\"selectBox\">\n        <div class=\"selectBox__view\">\n            <span class=\"selectBox__support\">\n                ".concat(selectFirstVal, "\n            </span>\n        </div>\n        <div class=\"JSelemTrans selectBox__drop\">");
    $(this).find('option').each(function () {
      var arr;
      arr = $.map(this.attributes, function (attribute) {
        return attribute.name + ' = ' + '"' + attribute.value + '" ';
      }); // console.log(arr);

      var strAttr = '';
      var cl = "";
      if ($(this).val()) arr.forEach(function (key) {
        strAttr += key;

        if (selectFirstVal == key) {
          cl = " _curry";
        }
      }); // console.log(strAttr);

      selectView += "<div class=\"JSelemTrans selectBox__dropItems ".concat(cl, "\" ").concat(strAttr, ">\n            ").concat($(this).text(), "\n        </div>");
    });
    selectView += "</div>\n        </div>";
    $(this).after(selectView);
  });
};

var sendForm = function sendForm() {
  $('.formBox__wrapper').find('input').each(function () {
    $(this).prop('required', false);
  });
  $('.sectionCaseFooter__form').find('input').each(function () {
    $(this).prop('required', false);
  });
  $('input').on('input', function () {
    $(this).closest('.inputBox').removeClass('_error');
  });
  $('form').submit(function (e) {
    e.preventDefault();
    var form = $(this);
    var error = false;
    if (form.find('.js-labelFile') && $('.js-labelFile').hasClass('has-error')) error = true;
    form.find('.inputBox').removeClass('_error');
    var arrInputs = ['form_text_1', 'form_text_2', 'form_text_6', 'form_text_7', 'form_text_8'];
    arrInputs.forEach(function (input) {
      if (form.find("input[name=\"".concat(input, "\"]")).length > 0 && !form.find("input[name=\"".concat(input, "\"]")).val()) {
        error = true;
        form.find("input[name=\"".concat(input, "\"]")).closest('.inputBox').addClass('_error');
      }
    });

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

    var formData = new FormData(form.get(0));
    var files = $('input[type=file]').prop("files");
    $.each(files, function (i, file) {
      formData.append('photo' + i, file);
    });
    formData["delete"]('photo');
    formData.append('web_form_submit', 'Y'); // console.log(error);

    if (!error) {
      $.ajax({
        url: form.attr('action'),
        data: formData,
        method: 'POST',
        contentType: false,
        processData: false
      }).done(function (answer) {
        //console.log(answer);
        form.find("input").val("");
        $(".body__success").fadeIn(300).css({
          display: "flex"
        });
        $(".JSpopup").removeClass("_active");
        windowFixRemove(scroll);
      });
    }
  });
  $(document).on('keyup', function (e) {
    e.keyCode == 27 ? $('.body__success').fadeOut(300) : true;
  });
  $(".body__success").click(function () {
    $(".body__success").fadeOut(300);
  });
};

var share = function share() {
  var linkAtrr = {
    title: $('body').attr('data-title'),
    description: $('body').attr('data-description'),
    image: $('body').attr('data-image')
  };
  var url;
  var Share = {
    getUrl: function getUrl($name, $href) {
      switch ($name) {
        case "vk":
          url = 'http://vkontakte.ru/share.php?';
          url += 'url=' + encodeURIComponent($href);
          url += '&title=' + encodeURIComponent("Rubedite | ".concat(linkAtrr.title));
          url += '&description=' + encodeURIComponent(linkAtrr.description);
          url += '&noparse=true';
          url += '&image=' + encodeURIComponent(linkAtrr.image);
          return url;

        case "fb":
          url = 'https://www.facebook.com/sharer/sharer.php?';
          url += 'u=' + encodeURIComponent($href);
          url += '&title=' + encodeURIComponent("Rubedite | ".concat(linkAtrr.title));
          url += '&description=' + encodeURIComponent(linkAtrr.description);
          url += '&noparse=true';
          url += '&image=' + encodeURIComponent(linkAtrr.image);
          return url;

        case "tw":
          url = 'https://twitter.com/share?';
          url += 'url=' + encodeURIComponent($href);
          url += '&text=' + encodeURIComponent("Rubedite | ".concat(linkAtrr.title));
          url += '&description=' + encodeURIComponent(linkAtrr.description);
          url += '&image=' + encodeURIComponent(linkAtrr.image);
          return url;

        case "wa":
          url = 'https://api.whatsapp.com/send?';
          url += 'text=' + encodeURIComponent("Rubedite | ".concat(linkAtrr.title));
          url += '&title=' + encodeURIComponent(linkAtrr.description);
          url += '&description=' + encodeURIComponent(linkAtrr.description);
          url += '&image=' + encodeURIComponent(linkAtrr.image);
          return url;
      }
    }
  };

  var setShare = function setShare() {
    $('.JSshareIcon').each(function () {
      $(this).attr('href', Share.getUrl($(this).attr('data-share'), window.location.href));
    });
  };

  setShare();
};

var sliderStart;

var slider = function slider() {
  var sliderData = {};
  var indexS = 0;
  $('.JSslider').each(function () {
    var indexSlid = 1;
    $(this).find('.JSsliderSlid').each(function () {
      $(this).attr('data-sliderIndex', indexSlid);
      indexSlid++;
    });
    var sliderObj = {};
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

    for (var i = 0; i < sliderObj.length; i++) {
      $(this).find('.JSdotBox').append('<div class="JSelemTrans JSdot sliderBox__dot">•</div>');
    }

    $(this).find('.JSdot').eq(sliderObj.curryIndex).addClass('_curry');
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
    } // if (window_width > 500 && window_width < 1025) {
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
  });
  var sliderMove = {
    lastWidth: window_width,
    dot: function dot() {
      switch (sliderData[index].indexDot) {
        case sliderData[index].length:
          sliderData[index].indexDot = 0;
          break;

        case -1:
          sliderData[index].indexDot = sliderData[index].length - 1;
          break;
      }
    },
    "return": function _return() {// sliderData[index].$this.find('*').removeAttr('style')
    },
    resize: function resize() {
      if (this.lastWidth > 500) {
        if (window_width < 500) {
          this["return"]();
        }
      } else {
        if (window_width > 500) {
          this["return"]();
        }
      }
    },
    move: function move($sign) {
      this.dot();
      clearTimeout(sliderData[index].timerMoveId);
      sliderData[index].timerMoveId = setTimeout(function () {
        sliderData[index].$this.find('.JSsliderLay').addClass('JStrans');
        sliderData[index].$this.find('.JSsliderLay').css({
          'transform': 'translate(' + -sliderData[index].val + sliderData[index].type + ',0)'
        });
        sliderData[index].$this.find('.JSsliderSlid').removeClass('_curry');
        sliderData[index].$this.find('.JSsliderSlid').eq(sliderData[index].curryIndex + $sign).addClass('_curry');
        sliderData[index].$this.find('.JSdot').removeClass('_curry');
        sliderData[index].$this.find('.JSdot').eq(sliderData[index].indexDot).addClass('_curry');
        var cur = sliderData[index].$this.find('.JSsliderSlid._curry').attr('data-sliderIndex');
        sliderData[index].$this.find('.JSsliderCounter').text(cur);

        switch (sliderData[index].name) {
          case "why":
            console.log(cur);
            $(".JSwhyImage").removeClass('_active');
            $(".JSwhyImage[data-index=\"".concat(parseInt(cur) - 1, "\"]")).addClass('_active');
            break;
        }
      }, 20);
    },
    clonePos: function clonePos() {
      sliderData[index].$this.find('.JSsliderLay').removeClass('JStrans');
      sliderData[index].$this.find('.JSsliderLay').css({
        'transform': 'translate(' + -sliderData[index].val + sliderData[index].type + ',0)'
      });
    },
    clone: function clone($dir) {
      var _this9 = this;

      sliderData[index].flag = false;
      clearTimeout(sliderData[index].timerId);
      sliderData[index].timerId = setTimeout(function () {
        sliderData[index].flag = true;
      }, sliderData[index].speed + 20);

      switch ($dir) {
        case "left":
          sliderData[index].$this.find('.JSsliderSlid').eq(sliderData[index].length - 1).clone(true).removeClass('_curry').prependTo(sliderData[index].$this.find('.JSsliderLay'));

          if (sliderData[index].align == "center") {
            sliderData[index].val += sliderData[index].widthStep / 2;
            setTimeout(function () {
              sliderData[index].$this.find('.JSsliderSlid').eq(sliderData[index].length).remove();
              sliderData[index].val += sliderData[index].widthStep / 2;

              _this9.clonePos();
            }, sliderData[index].speed + 20);
          }

          if (sliderData[index].align == "left") {
            sliderData[index].val += sliderData[index].widthStep;
            setTimeout(function () {
              sliderData[index].$this.find('.JSsliderSlid').eq(sliderData[index].length).remove();
            }, sliderData[index].speed + 20);
          }

          this.clonePos();
          break;

        case "right":
          sliderData[index].$this.find('.JSsliderSlid').eq(0).clone(true).removeClass('_curry').appendTo(sliderData[index].$this.find('.JSsliderLay'));

          if (sliderData[index].align == "center") {
            sliderData[index].val -= sliderData[index].widthStep / 2;
            this.clonePos();
            setTimeout(function () {
              sliderData[index].$this.find('.JSsliderSlid').eq(0).remove();
              sliderData[index].val -= sliderData[index].widthStep / 2;

              _this9.clonePos();
            }, sliderData[index].speed + 20);
          }

          if (sliderData[index].align == "left") {
            setTimeout(function () {
              sliderData[index].$this.find('.JSsliderSlid').eq(0).remove();
              sliderData[index].val -= sliderData[index].widthStep;

              _this9.clonePos();
            }, sliderData[index].speed + 20);
          }

          break;
      }
    }
  };
  var index;

  sliderStart = function sliderStart($index, $dir) {
    if (sliderData[$index].access == "mob") {
      if (window_width > 500) {
        return false;
      }
    }

    index = $index;

    if (!sliderData[index].flag) {
      return false;
    }

    var dir = $dir;
    sliderMove.clone(dir);
    var sign;

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
  };

  $('.JSsliderBtn').click(function () {
    sliderStart(parseInt($(this).closest('.JSslider').attr('data-index')), $(this).attr('data-dir'));
  });
  var startX = 0,
      startY = 0,
      curryX = 0,
      curryY = 0,
      flag = true,
      flagScrY = false,
      flagScrX = false,
      flagMove = true;
  var $slider = document.getElementsByClassName('JSslider');

  var $start = function $start(e) {
    for (var i = 0; i < $slider.length; i++) {
      for (var k = 0; k < $slider[i].getElementsByTagName('img').length; k++) {
        $slider[i].getElementsByTagName('img')[k].ondragstart = function () {
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
  };

  var $move = function $move(e, t) {
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

    var sign;

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
  };

  var $end = function $end() {
    flagScrY = false;
    flagScrX = false;
    flagMove = true;
    flag = true;
  };

  for (var i = 0; i < $slider.length; i++) {
    $slider[i].addEventListener('touchstart', function (e) {
      $start(e);
    }, {
      passive: false
    });
    $slider[i].addEventListener('touchmove', function (e) {
      $move(e, $(this));
    }, {
      passive: false
    });
    $slider[i].addEventListener('touchend', function (e) {
      $end();
    }, {
      passive: false
    });
    $slider[i].addEventListener('mousedown', function (e) {
      $start(e);
    }, {
      passive: false
    });
    $slider[i].addEventListener('mousemove', function (e) {
      $move(e, $(this));
    }, {
      passive: false
    });
    $slider[i].addEventListener('mouseup', function (e) {
      $end();
    }, {
      passive: false
    });

    $slider[i].ongragstart = function () {
      return false;
    }; // for (let j = 0; j < $slider[i].querySelector('img').length; j++) {
    //     $slider[i].querySelector('img')[j].ongragstart = () => {
    //         return false;
    //     }
    // }

  }

  $(window).resize(function () {
    sliderMove.resize();
  });
};

var step = function step() {
  var stepFlag = true;

  var fadeStep = function fadeStep(t, s) {
    setTimeout(function () {
      t.removeClass('_active');
    }, s + 1000);
  };

  $(window).scroll(function () {
    if ($('.sectionProcess').length > 0) {
      if ($(window).scrollTop() > $('.sectionProcess').offset().top - $(window).height() / 2) {
        if (!stepFlag) {
          return false;
        }

        stepFlag = false;
        var stepSpeed = 0,
            arrStep = [],
            count = 0;
        $('.JSstep').each(function () {
          arrStep.push($(this));
          stepSpeed += 100;
          setTimeout(function () {
            arrStep[count].addClass('_active');
            fadeStep(arrStep[count], stepSpeed);
            count++;
          }, stepSpeed);
        });
      }
    }
  });
};

var taxiSlider = function taxiSlider() {
  var settings = {
    length: $('.sectionTaxiPresentation__imagesSliderItems').length,
    current: 0,
    move: function move() {
      var current = this.current;
      $('.JStaxiSliderLayer').each(function () {
        var widthStep = $(this).find('.JStaxiSliderItems').outerWidth();
        $(this).css({
          'transform': "translate(".concat(-widthStep * current / fontHtml, "rem,0)")
        });
        $('.JStaxiSliderCounter').text(current + 1);
      });
    }
  };
  $('.JStaxiSliderArrow').click(function () {
    switch ($(this).attr('data-dir')) {
      case 'left':
        if (settings.current == 0) {
          return false;
        }

        settings.current--;
        break;

      case 'right':
        if (settings.current == settings.length - 1) {
          return false;
        }

        settings.current++;
        break;
    }

    settings.move();
  });
};

$('.JSteamBlock').click(function () {
  $('.JSteamBlock').removeClass('_active');
  $(this).addClass('_active');
});
var speed = 0;
var intervalWord;
var speedWord = 0;
var menuShowAfter = 2500;

var word = function word() {
  if ($('.JSwords').length > 0) {
    (function () {
      var rand = function rand(min, max) {
        var rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(Math.abs(rand));
      };

      setTimeout(function () {
        $('body').removeClass('_hidden');
      }, menuShowAfter);
      var words = {},
          numWords = 0;
      var lengthWord = $('.JSwords').length / 2;
      $('.JSwords').each(function () {
        var str = $(this).attr('data-word');
        $(this).attr('data-num', numWords);
        words[numWords] = {
          str: $(this).attr('data-word'),
          len: $(this).attr('data-word').length,
          "class": $(this).attr('data-class'),
          num: 0
        };
        numWords++;
      });

      for (var i = 0; i < lengthWord; i++) {
        $('.header__dot').append("<li class=\"JSelemTrans JSdot header__dotItems\"></li>");
      }

      $('.JSdot:nth-child(1)').addClass('_curry');

      if (words[0].len > words[2].len) {
        speed = speedWord * words[0].len + menuShowAfter;
      } else {
        speed = speedWord * words[2].len + menuShowAfter;
      }

      menu();

      var show = function show(num, s, l) {
        var min = 0;
        var max = l;
        var count = 0;
        var flag = 0;
        var r = rand(min, max);
        var arr = [];
        arr.push(r);

        while (count != max) {
          r = rand(0, l);
          arr.forEach(function (key) {
            if (key == r) {
              flag = 1;
            }
          });

          if (flag == 0) {
            arr.push(r);
            count++;
          }

          flag = 0;
        }

        if (speedWord) {
          var intervalId = setInterval(function () {
            var c = arr[words[num].num];
            $(".JSwords[data-num=\"".concat(num, "\"] .JSwordsItem:nth-child(").concat(c, ")")).removeClass('_hidden');
            words[num].num++;

            if (words[num].num === words[num].len + 1) {
              clearInterval(intervalId);
              words[num].num = 0;
            }
          }, speedWord);
        } else {
          $(".JSwords[data-num=\"".concat(num, "\"] .JSwordsItem")).removeClass('_hidden');
        }
      };

      var showWord = function showWord(num, interval) {
        var s = words[num].str;
        var l = words[num].len;
        var c = words[num]["class"];
        var htmlStr = "";

        for (var _i3 = 0; _i3 < l; _i3++) {
          htmlStr += "<span class=\"JSwordsItem ".concat(c, "__item JSelemTrans JStrans _hidden\">").concat(s[_i3], "</span>");
        }

        $(".JSwords[data-num=\"".concat(num, "\"]")).html(htmlStr);

        if (interval) {
          setTimeout(function () {
            speedWord = 30;
            show(num, s, l);
            $('header').removeClass('fixed-wide');
          }, interval);
        } else {
          show(num, s, l);
        }
      };

      var numShow = 0;

      var startShow = function startShow(i, dir, interval) {
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

        $(".JSwords1 .JSwords").removeClass('_curry');
        $(".JSwords1 .JSwords:nth-child(".concat(numShow, ")")).addClass('_curry');
        $(".JSwords2 .JSwords").removeClass('_curry');
        $(".JSwords2 .JSwords:nth-child(".concat(numShow, ")")).addClass('_curry');
        var num1 = $(".JSwords1 .JSwords:nth-child(".concat(numShow, ")")).attr('data-num');
        showWord(num1);
        var num2 = $(".JSwords2 .JSwords:nth-child(".concat(numShow, ")")).attr('data-num');
        showWord(num2, interval);
        $(".JSdot").removeClass('_curry');
        $(".JSdot:nth-child(".concat(numShow, ")")).addClass('_curry');
        numShow++;

        if (numShow === lengthWord + 1) {
          numShow = 1;
        }
      };

      startShow(numShow, null, 1000);
      var intervalWord = setInterval(function () {
        startShow(numShow, 0);
      }, 10000);
      $('.JSdot').click(function () {
        var i = $(this).index();
        startShow(i);
        clearInterval(intervalWord);
        intervalWord = setInterval(function () {
          startShow(numShow, 0);
        }, 10000);
      });

      var swipe = function swipe(d) {
        var swipeI = numShow;
        startShow(swipeI, false, d);
        clearInterval(intervalWord);
        intervalWord = setInterval(function () {
          startShow(1);
        }, 10000);
      };

      var startX,
          moveX,
          startY,
          moveY,
          curryX = 0,
          flagWord = true,
          dirWord,
          el = document.getElementsByClassName("JSwordSwipe"),
          intervalSwipe;

      for (var _i4 = 0; _i4 < el.length; _i4++) {
        el[_i4].addEventListener('touchstart', function (e) {
          startX = e.changedTouches[0].pageX;
        });

        el[_i4].addEventListener('touchmove', function (e) {
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
        }, {
          passive: false
        });

        el[_i4].addEventListener('touchend', function (e) {
          moveX = 0;
          clearTimeout(intervalSwipe);
          intervalSwipe = setTimeout(function () {
            flagWord = true;
          }, 500);
        });
      }
    })();
  }
};