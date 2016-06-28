var menu = document.querySelector(".main-nav");
var menuToggle = document.querySelector(".main-nav__toggle");
var headerToggle = document.querySelector(".main-header__toggle");
var body = document.querySelector("body");

body.classList.add("js");

headerToggle.addEventListener("click", function(event) {
  event.preventDefault();
  menu.classList.add("main-nav--visible");
  headerToggle.classList.add("main-header__toggle--hidden");
});

menuToggle.addEventListener("click", function(close) {
  close.preventDefault();
  menu.classList.remove("main-nav--visible");
  headerToggle.classList.remove("main-header__toggle--hidden");
});

ymaps.ready(function() {
  var myMap = new ymaps.Map('map', {
      center: [35.1607546, -111.6383224],
      zoom: 7,
      controls: []
    }, {
      searchControlProvider: 'yandex#search'
    }),
    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Приезжай в гости!',
      balloonContent: 'Где-то здесь творит великий Кекс'
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: 'img/icon-map-marker.svg',
      // Размеры метки.
      iconImageSize: [27, 27],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-15, 42]
    });
  myMap.geoObjects.add(myPlacemark);
});
