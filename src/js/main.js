
'use strict';

/*---  video-player ---*/
  $('#play-video').on('click', function(e) {
    e.preventDefault();
    $("#video")[0].src += "&autoplay=0";
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
 
