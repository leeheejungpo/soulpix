var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".mySwiper2", {
  navigation: {
    nextEl: ".mySwiper2 .swiper-button-next",
    prevEl: ".mySwiper2 .swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper3", {
  navigation: {
    nextEl: ".mySwiper3 .swiper-button-next",
    prevEl: ".mySwiper3 .swiper-button-prev",
  },
});



$(function () {
  $('.heart').click(function () {
    $(this).toggleClass('on');
  });

});


$(function () {
  $('.bag').click(function () {
    $(this).toggleClass('on2');
  });

});




$(function () {
  $('.s_heart').click(function () {
    $(this).toggleClass('on3');
  });

});


$(function () {
  $('.s_bag').click(function () {
    $(this).toggleClass('on4');
  });

});





AOS.init({
  duration: 1200 //aos 나타나는 속도
});



$(function(){
  $('.nav').mouseenter(function(){
      $('.sub, .sub_bg').stop().slideDown();
  });

  $('.nav').mouseleave(function(){
      $('.sub, .sub_bg').stop().slideUp();
  });
});


var swiper = new Swiper(".mySwiper4 .mySwiper4_in", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".mySwiper4 .swiper-button-next",
    prevEl: ".mySwiper4 .swiper-button-prev",
  },
});


$(function () {
  $('.tabcontent > div').hide();
  $('.tabnav a').click(function () {
    $('.tabcontent > div').hide().filter(this.hash).fadeIn();
    $('.tabnav a').removeClass('active');
    $(this).addClass('active');
    return false;
  }).filter(':eq(0)').click();
});

$(function () {
  $(".q_a li").click(function () {
    $(this).children("div").slideToggle()
    $(this).siblings().children("div").slideUp();
    $(this).toggleClass("on").siblings().removeClass("on")
  });
});



$(function(){
  $('.box a').click(function(){
      $('.popup').show(500);
  });

  $('.popup a').click(function(){
      $('.popup').hide(500);
  });
});

$(function(){
  $('.lab_img li:nth-child(1)').hover(function(){
      $('.lab_in span').css('width', '33.33%');
  });

  $('.lab_img li:nth-child(2)').hover(function(){
    $('.lab_in span').css('width', '66.66%');
});

$('.lab_img li:nth-child(3)').hover(function(){
  $('.lab_in span').css('width', '100%');
});

});
