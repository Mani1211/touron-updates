
$(document).ready(function(){
  

  $('.responsive').slick({
    infinite: true,
    speed: 300,
    dots:true,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows:true,
    prevArrow: '<div class="left"><span class="fas fa-arrow-circle-left"></span><span class="sr-only">Prev</span></div>',
    nextArrow: '<div class="right"><span class="fas fa-arrow-circle-right"></span><span class="sr-only">Next</span></div>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

      
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          
          
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
      
  });