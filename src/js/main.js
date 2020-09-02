
'use strict';

/*---  video-player ---*/
  $('#play-video').on('click', function(e) {
    e.preventDefault();
    $("#video")[0].src += "&autoplay=0";
    $(this).hide();   
  });

/*---  gallery-images --- */ 
  $('.gallery__span').click(function(){
    $('.arrow-img').toggleClass('up');
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

  $('.open-scr').click(function(){
    $(this).siblings().slideToggle(300); 
    $(this).remove();
    return false;
  });


/*---  open/close pop-up ---*/

$(".booking-button").on("click", function() {
  $(".popup__overlay, .popup__window").addClass("active");
});

$(".popup__close-button, .popup__overlay").on("click", function() {
  $(".popup__overlay, .popup__window").removeClass("active");
});

/*---  input-mask for pop-up ---*/

import Inputmask from "inputmask";

Inputmask({"mask": "+7 (999) 999-9999"}).mask('input[name=person-tel]');
Inputmask({"mask": "99 / 99"}).mask('input[name=exp-date]');
Inputmask({"mask": "9999-9999-9999-9999"}).mask('input[name=card-number]');

