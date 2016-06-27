// var panel = document.querySelector(".main-header__container");
// var toggle = document.querySelector(".main-header__toggle");
// var menu = document.querySelector(".main-nav__list");
// var body = document.querySelector("body");

// body.classList.add("js");

// toggle.addEventListener("click", function(event) {
//   event.preventDefault();
//   panel.classList.toggle("main-header__container--menu-visible");
//   menu.classList.toggle("main-nav__list--visible");
//   toggle.classList.toggle("main-header__toggle--menu-visible");
// });

var menu = document.querySelector(".main-nav");
var menuToggle = document.querySelector(".main-nav__toggle");
var headerToggle = document.querySelector(".main-header__toggle");
var body = document.querySelector("body");

body.classList.add("js");

headerToggle.addEventListener("click", function (event) {
  event.preventDefault();
  menu.classList.add("main-nav--visible");
  headerToggle.classList.add("main-header__toggle--hidden");
});

menuToggle.addEventListener("click", function (close) {
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
})




// function initMap() {
//   var myLatLng = {lat: 35.1607546, lng: -111.6383224};

//   var map = new google.maps.Map(document.getElementById('map'), {
//     center: myLatLng,
//     zoom: 7,
//     scrollwheel: false,
//     mapTypeControl: false,
//     streetViewControl: false,
//     // draggable: isDraggable,
//     zoomControl: false
//   });

//   var marker = new google.maps.Marker({
//     position: new google.maps.LatLng(34.94021, -111.6899626),
//     map: map,
//     title: 'Sedona',
//     icon: "img/icon-map-marker.svg"
//   });

//   var getCen = map.getCenter();

//     google.maps.event.addDomListener(window, "resize", function() {
//         map.setCenter(getCen);
//     });
// }





// ymaps.ready(function() {
//   var myMap = new ymaps.Map('map', {
//       center: [59.936111, 30.32196],
//       zoom: 17,
//       controls: []
//     }, {
//       searchControlProvider: 'yandex#search'
//     }),
//     myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
//       hintContent: 'Приезжай в гости!',
//       balloonContent: 'Где-то здесь творит великий Кекс'
//     }, {
//       // Опции.
//       // Необходимо указать данный тип макета.
//       iconLayout: 'default#image',
//       // Своё изображение иконки метки.
//       iconImageHref: 'img/icon-map-marker.svg',
//       // Размеры метки.
//       iconImageSize: [36, 36],
//       // Смещение левого верхнего угла иконки относительно
//       // её "ножки" (точки привязки).
//       iconImageOffset: [-15, -42]
//     });
//   myMap.geoObjects.add(myPlacemark);
// });
