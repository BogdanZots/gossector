$(function () {
  return false;
  let timeout       = 1,
    counters      = document.getElementById('counter'),
    counters_info = getComputedStyle(counters),
  svg2          = document.getElementById('svg2'),
    old_size      = counters_info.fontSize,
    num           = counters.innerHTML,
    num_2         = +counters.innerHTML,
    scroll_svg 	  = svg2.offsetTop + svg2.offsetHeight,
    check      	  = true,
    path 	   	  = document.getElementById('progress'),
    path_style    = getComputedStyle(path),
    tick 	   	  = 0;

  counters.innerHTML = '0%';
  counters.setAttribute('data-num',num);

  if (num > 90) {
    num_2 = Math.floor( +num + (100 - num) / 2);
  }

  window.addEventListener('scroll', function() {
    if (window.pageYOffset + document.documentElement.clientHeight - svg2.offsetHeight >= scroll_svg && check) {
      check = false;
      stage_1();
    }
  });

  function stage_1(){
    counters.style.color = '#fff';
    let length 	= path.getTotalLength(),
      results = 100 - num,
      to 		= (length / 100) * results;
    path.style.strokeDashoffset = Math.max(0, to);
    let i 	  = 1,
      step  = Math.round(2000 / num),
      start = Math.round(50),
      int   = setInterval(function(){
        if (i <= num) {
          var resulr_grad    = i + "%";
          counters.innerHTML = i + '%';
        }else {
          setTimeout(stage_2, start);
          clearInterval(int);
        }
        i++;
      },step);
  };


  function stage_2(){

    path.style.stroke = '#fff';
    let now_size = parseInt(counters_info.fontSize) + parseInt(counters_info.fontSize) / 100 * 40;
    counters.style.fontSize = now_size + 'px';
    let i    = num,
      step = 305,
      int  = setInterval(function(){
        setTimeout(stage_3, step);
        clearInterval(int);
      },step);
  };

  function stage_3(){
    path.style.stroke       = '#CC151D';
    counters.style.fontSize = old_size;
  };
})
