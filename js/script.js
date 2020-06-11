
$(document).ready(function(){


  // Calling counterup plugin

 
  
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





// Filter Faq

//   filterSelection("all")
// function filterSelection(c) {
//   var x, i;
//   x = document.getElementsByClassName("filterDiv");
//   if (c == "all") c = "";
//   for (i = 0; i < x.length; i++) {
//     w3RemoveClass(x[i], "show");
//     if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
//   }
// }

// function w3AddClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
//   }
// }

// function w3RemoveClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     while (arr1.indexOf(arr2[i]) > -1) {
//       arr1.splice(arr1.indexOf(arr2[i]), 1);     
//     }
//   }
//   element.className = arr1.join(" ");
// }

// // Add active class to the current button (highlight it)
// var btnContainer = document.getElementById("myBtnContainer");
// var btns = btnContainer.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function(){
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }

