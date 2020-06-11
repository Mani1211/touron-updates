
$(document).ready(function(){




 
  
 // This for Celebrity section
 
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
          dots: false

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false

      
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
          
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  



  //  This for Testimonials Section


  $('.testimonials').slick({
    dots:true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrows:true,
  
  });

  });



