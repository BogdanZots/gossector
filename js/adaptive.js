var adaptive = function adaptive() {
    var window_width,fontHtml;
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
  
/*     var trans = function trans() {
      $('.JSelemTrans').removeClass('JStrans');
      setTimeout(function () {
        $('.JSelemTrans').addClass('JStrans');
      }, 300);
    }; */
  
 /*    trans();
    $(window).resize(function () {
      trans();
    }); */
  };
  

  adaptive();