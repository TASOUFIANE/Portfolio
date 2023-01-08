
const navLinks = document.querySelector(".nav-links");
const uil=document.querySelector(".uil");

function MyFunction(){
      uil.classList.toggle('uil-multiply');
      uil.classList.toggle('uil-bars');
      navLinks.classList.toggle('mobile-menu');

}

var image = document.getElementsByClassName('thumbnail');
new simpleParallax(image, {
      delay: .68,
	orientation: 'right'
});
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