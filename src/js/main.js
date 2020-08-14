
'use strict';

  $('#play-video').on('click', function(e) {
    e.preventDefault();
    $("#video")[0].src += "&autoplay=0";
    $(this).hide();
    
  });

/*$('.offer-video__content').on('click', function(e) {
	e.preventDefault();
	
	var self = $(this);
	var videoSrc = self.attr('href');
	var videoId = videoSrc.substr(videoSrc.length - 11) + '?rel=0&autoplay=1';
	
  self.find('img').css('z-index', '0');
	self.find('iframe').attr('src', 'https://www.youtube.com/embed/' + videoId);

});*/


/*$('.video__a').on('click', function(e) {
	e.preventDefault();
	
	var self = $(this);
	var videoSrc = self.attr('href');
	var videoId = videoSrc.substr(videoSrc.length - 11) + '?rel=0&autoplay=1';
	
	self.find('img').css('z-index', '0');
	self.find('iframe').attr('src', 'https://www.youtube.com/embed/' + videoId);

});*/

/*var galleryItem = docyment.querySelector(".gallery-group__item");
var openGallery = document.querySelector('.gallery-show__content');
var galleryGroup = document.querySelector('.gallery-group');

function ri() {
  if (window.matchMedia("(max-width: 900px)").matches) {
    
    galleryGroup.classList.add("items4")
  } else if (window.matchMedia("(max-width: 650px)").matches) {
    
    galleryGroup.classList.add("items3")
  }
}

openGallery.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (window.matchMedia("(max-width: 900px)").matches) {
    
    galleryGroup.classList.remove("items4")
  } else if (window.matchMedia("(max-width: 650px)").matches) {
    
    galleryGroup.classList.remove("items3")
  }
   else {}
});*/

/*$(function() {
  $('.open-scr').click(function() {
      $('.scr-box-hide').toggleClass('expand');
      $(".open-scr").remove();
  });
});*/

