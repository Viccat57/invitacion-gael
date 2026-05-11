$(window).on('load', function () {
  $('.loading').fadeOut('fast');
  $('.container').fadeIn('fast');
});

$(document).ready(function () {
  function loopOne() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    $('#b1').animate({ left: randleft, bottom: randtop }, 10000, function () {
      loopOne();
    });
  }

  function loopTwo() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    $('#b2').animate({ left: randleft, bottom: randtop }, 10000, function () {
      loopTwo();
    });
  }

  function loopThree() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    $('#b3').animate({ left: randleft, bottom: randtop }, 10000, function () {
      loopThree();
    });
  }

  function loopFour() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    $('#b4').animate({ left: randleft, bottom: randtop }, 10000, function () {
      loopFour();
    });
  }

  function loopFive() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    $('#b5').animate({ left: randleft, bottom: randtop }, 10000, function () {
      loopFive();
    });
  }

  function loopSix() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    $('#b6').animate({ left: randleft, bottom: randtop }, 10000, function () {
      loopSix();
    });
  }

  function loopSeven() {
    var randleft = 1000 * Math.random();
    var randtop = 500 * Math.random();
    $('#b7').animate({ left: randleft, bottom: randtop }, 10000, function () {
      loopSeven();
    });
  }

  function startBalloonsFlying() {
    $('.balloon-border').animate({ top: -500 }, 8000);
    $('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
    $('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
    $('.balloons').css('opacity', '0.85');

    loopOne();
    loopTwo();
    loopThree();
    loopFour();
    loopFive();
    loopSix();
    loopSeven();
  }

  function startStory() {
    $('.balloons').stop(true, true).hide();
    $('.balloon-border').stop(true, true).hide();
    $('.cake').stop(true, true).hide();
    $('.bannar').stop(true, true).hide();
    $('.row').stop(true, true).hide();

    $('.message').stop(true, true).fadeIn(200);
    $('.mickey-speaks').stop(true, true).fadeIn(200);

    var $speechParagraphs = $('.message-text p');
    var $finalBox = $('.final-message-text');
    var $finalParagraphs = $('.final-message-text p');

    var current = 0;
    var delay = 2200;
    var finalPause = 2500;

    $speechParagraphs.stop(true, true).hide();
    $finalBox.stop(true, true).hide();
    $finalParagraphs.stop(true, true).hide();

    function showCurrent() {
      if (current < $speechParagraphs.length) {
        $speechParagraphs.eq(current).fadeIn(250, function () {
          current++;

          if (current < $speechParagraphs.length) {
            setTimeout(showCurrent, delay);
          } else {
            setTimeout(function () {
              $('.mickey-speaks').stop(true, true).fadeOut(500);

              $('.message-text').stop(true, true).fadeOut(500, function () {
                $speechParagraphs.hide();

                $('.cake').fadeIn('fast');
                $('.balloons').fadeIn('slow');
                $('.balloon-border').fadeIn('slow');
                $('.bannar').fadeIn('slow');
                $('.row').fadeIn('slow');

                $finalBox.fadeIn(400, function () {
                  $finalParagraphs.fadeIn(400);
                });
              });
            }, finalPause);
          }
        });
      }
    }

    showCurrent();
  }

  function startSequence() {
    setTimeout(function () {
      $('#bulb_yellow').addClass('bulb-glow-yellow');
      $('#bulb_red').addClass('bulb-glow-red');
      $('#bulb_blue').addClass('bulb-glow-blue');
      $('#bulb_green').addClass('bulb-glow-green');
      $('#bulb_pink').addClass('bulb-glow-pink');
      $('#bulb_orange').addClass('bulb-glow-orange');
    }, 1000);

    setTimeout(function () {
      $('#bulb_yellow').addClass('bulb-glow-yellow-after');
      $('#bulb_red').addClass('bulb-glow-red-after');
      $('#bulb_blue').addClass('bulb-glow-blue-after');
      $('#bulb_green').addClass('bulb-glow-green-after');
      $('#bulb_pink').addClass('bulb-glow-pink-after');
      $('#bulb_orange').addClass('bulb-glow-orange-after');
    }, 4000);

    setTimeout(function () {
      $('.bannar').addClass('bannar-come');
    }, 9000);

    setTimeout(function () {
      startBalloonsFlying();
    }, 12000);

    setTimeout(function () {
      $('.cake').fadeIn('slow');
    }, 17000);

    setTimeout(function () {
      $('.fuego').fadeIn('slow');
    }, 20000);

    setTimeout(function () {
      startStory();
    }, 24000);
  }

  $('#start-invitation').one('click', function () {
    $('body').css('background-color', '#fedd5a');

    var audio = $('.song')[0];
    if (audio) {
      audio.load();
      audio.currentTime = 0;
      audio.play().catch(function () {});
    }

    $(this).fadeOut(300);
    startSequence();
  });
});