
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
