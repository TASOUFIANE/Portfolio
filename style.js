

const navLinks = document.querySelector(".nav-links");
const uil=document.querySelector(".uil");

function MyFunction(){
      uil.classList.toggle('uil-multiply');
      uil.classList.toggle('uil-bars');
      navLinks.classList.toggle('mobile-menu');

}
const thumbnail = document.getElementsByClassName('thumbnail');
      new simpleParallax(thumbnail, {
            delay: .6,
            orientation: 'right'
      });
      const swiper = new Swiper('.swiper', {
            // Optional parameters
           
            loop: true,
            autoplay: {
                  delay: 5000,
                },
            
            grabCursor: true,
            // If we need pagination
            pagination: {
              el: '.swiper-pagination',
            },
            effect: 'cube',
            cubeEffect: {
              slideShadows: false,
            },
            // Navigation arrows
            // navigation: {
            //   nextEl: '.swiper-button-next',
            //   prevEl: '.swiper-button-prev',
            // },
            spaceBetween: 80,
            // And if we need scrollbar
            scrollbar: {
              el: '.swiper-scrollbar',
            },
          });
//  $(document).ready(function(){
//             $(".owl-carousel").owlCarousel({
//                 items: 1,
//                 // loop: true,
//             });
//  });
// //  
 
// const thumbnailSmall = document.getElementsByClassName('thumbnailSmall');

// if(thumbnailSmall){
//       new simpleParallax(thumbnailSmall, {
//             delay: .8,
//             transition: 'cubic-bezier(0,0,0,1)'
//       });
// }

// var image = document.getElementsByClassName('thumbnailSmall');
// new simpleParallax(image, {
// 	delay: .8,
// 	transition: 'cubic-bezier(0,0,0,1)'
// });
// // When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

// // Get the navbar
// var navbar = document.getElementById("navbar");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}