
'use strict';



/*---  video-player ---*/
  $('#play-video').on('click', function() {
    $("#video")[0].src += "&autoplay=1";
    $(this).hide();   
  });

/*---  gallery-images --- */ 
  $('.gallery__span').click(function(){
    $(this).siblings('.arrow-img').toggleClass('up');
    $('.gallery__item').toggleClass('expand');
    if (!$(this).data('status')) {
      $(this).html('Скрыть фото');
      $(this).data('status', true);
    }
    else {
      $(this).html('Показать все фото');
      $(this).data('status', false);
    }
});


/*---  gallery-carousel --- */
import $ from 'jquery'
import 'slick-carousel'

$('.gallery__carousel').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

/*---  map-carousel --- */
$('.yandexmap-popup__carousel').slick({
    dots: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 576,
        settings: "unslick"
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    customPaging : function(slider, i) {
      return '<a href="#"><img src="assets/img/icons/dot.png" /><img src="assets/img/icons/active-dot.png" /></a>';
  },
    prevArrow:"<img class='a-left control-c prev slick-prev' src='assets/img/icons/arrow-left.png'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='assets/img/icons/arrow-right.png'>"
});
/*---  read-more --- */
  $('.autor-about__span').click(function(){
    $(this).siblings().slideToggle(300); 
    $(this).remove();
  });


/*---  open/close pop-up ---*/
$(".booking-button").on("click", function() {
  $(".popup__overlay, .popup__window").addClass("active");
});

$(".popup__close-button, .popup__overlay").on("click", function() {
  $(".popup__overlay, .popup__window").removeClass("active");
});

/*---  open all reviews ---*/

const reviewsListLength = $('.reviews__item').length;
$('.reviews__span').click(function(){
  $(this).siblings('.arrow-img').toggleClass('upp');
  if (!$(this).data('status')) {
    $(this).text('Скрыть');
    $(this).data('status', true);
    $('.reviews__item').show('slow'); 
  }
  else {
    $(this).text(`Показать все ( ${reviewsListLength} )`);
    $(this).data('status', false);
    $('.reviews__item:nth-child(n+4)').hide('slow');
  }
});

/*---  input-mask for pop-up ---*/
import Inputmask from "inputmask";

Inputmask({"mask": "+7 (999) 999-9999"}).mask('input[name=person-tel]');
Inputmask({"mask": "99 / 99"}).mask('input[name=exp-date]');
Inputmask({"mask": "9999-9999-9999-9999"}).mask('input[name=card-number]');
 
