/*
To add files in sequence use //= include path-to-dir/path-to-file.js
*/

//= include ../../bower_components/jquery/dist/jquery.js
//= include ../../node_modules/bootstrap/dist/js/bootstrap.bundle.js
//= include ../../bower_components/swiper/dist/js/swiper.min.js

$(document).ready(function () {
    $('.nav-toggle').on('click', function(e) {
          $('html').toggleClass("nav-open"); //you can list several class names
          e.preventDefault();
    });

var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
})