ymaps.ready(init);
  function init() {
    var myMap = new ymaps.Map("map", {
        center: [55.76, 37.55],
        zoom: 12,
        controls: []
    });

    var myPlacemark = new ymaps.Placemark([55.74, 37.60], {
        balloonContentHeader: 'Встречаемся тут!'
    }, {
        preset: 'islands#redIcon',
    });

    var popup = document.querySelector('.yandexmap-popup');
        myPlacemark.events.add('click', function () {
        popup.classList.add('modal__show');
        });
    /*
    myMap.events.add('click', function (e) {  
        myMap.balloon.close();
        popup.classList.remove('modal__show');     
       });
    */
    document.addEventListener('keydown', function (evt) {
        if (evt.keyCode === 27) {
            popup.classList.remove('modal__show');
        }
      });

    myMap.geoObjects.add(myPlacemark);
  }