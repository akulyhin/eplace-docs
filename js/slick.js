$(document).ready(function(){
  $('.tech-slider-inner').slick({
centerMode: false,
  centerPadding: '60px',
  slidesToShow: 3,
  // slidesToScroll: 3,
  dots: false,
  cssEase: 'ease',
  infinite: true,
  autoplay: false,
  autoplaySpeed: 3000,
  prevArrow: "<div class='cases-prev cases-arrow'><div class='cases-prev-inner cases-arrow-inner'><i class='fas fa-chevron-left cases-icon'></i></div></div>",
  nextArrow: "<div class='cases-next cases-arrow'><div class='cases-next-inner cases-arrow-inner'><i class='fas fa-chevron-right cases-icon'></i></div></div>",
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        arrows: true,
        centerMode: false,
        autoplay: false,
        centerPadding: '60px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        autoplay: false,
        centerPadding: '40px',
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        autoplay: false,
        centerPadding: '40px',
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
  });

});



$(document).ready(function(){
  $('.slider-templates').slick({
  centerMode: true,
  slidesToShow: 3,
  dots: true,
  cssEase: 'ease',
  infinite: true,
  autoplay: false,
  autoplaySpeed: 5000,
  prevArrow: "<div class='cases-prev cases-arrow'><div class='cases-prev-inner cases-arrow-inner'><i class='fas fa-chevron-left cases-icon'></i></div></div>",
  nextArrow: "<div class='cases-next cases-arrow'><div class='cases-next-inner cases-arrow-inner'><i class='fas fa-chevron-right cases-icon'></i></div></div>",
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: true,
        centerMode: true,
        autoplay: false,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 1000,
      settings: {
        arrows: true,
        centerMode: true,
        autoplay: false,
        centerPadding: '60px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        autoplay: false,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        autoplay: false,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
  });

});



$(document).ready(function(){
  $('.slider-marketing').slick({
  centerMode: false,
  slidesToShow: 1,
  dots: true,
  cssEase: 'ease',
  infinite: true,
  autoplay: true,
  autoplaySpeed: 4500,
  prevArrow: "<div class='cases-prev cases-arrow'><div class='cases-prev-inner cases-arrow-inner'><i class='fas fa-chevron-left cases-icon'></i></div></div>",
  nextArrow: "<div class='cases-next cases-arrow'><div class='cases-next-inner cases-arrow-inner'><i class='fas fa-chevron-right cases-icon'></i></div></div>",
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 1000,
      settings: {
        arrows: true,
        centerPadding: '60px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
  });

});