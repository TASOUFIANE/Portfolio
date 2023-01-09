
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