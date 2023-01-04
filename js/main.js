/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */


$(document).ready(function () {

  AOS.init();

  $(".product-slider-js").slick({
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    dots: true,
    variableWidth: false,
    arrows: true,
    prevArrow:
      "<img class='a-left control-c prev slick-prev' src='img/arrow-left-black.svg'>",
    nextArrow:
      "<img class='a-right control-c next slick-next' src='img/arrow-right-black.svg'>",

    // the magic
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  });

  $('.slick-dots li:nth-child(1)').html('<button style="background: url(img/home.png);"> Home </button>');
  $('.slick-dots li:nth-child(2)').html('<button style="background: url(img/market.png);"></button>');
  $('.slick-dots li:nth-child(3)').html('<button style="background: url(img/portfolio.png);"></button>');
  

});

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Popover(tooltipTriggerEl)
})



