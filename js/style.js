

const navLinks = document.querySelector(".nav-links");
const uil=document.querySelector(".u");
const hero=document.querySelector(".main");

uil.addEventListener('click',e=>{
  uil.classList.toggle('uil-bars');
  uil.classList.toggle('uil-multiply');
  navLinks.classList.toggle('nav-links-m');
  navLinks.classList.toggle('mobile-menu');
  hero.classList.toggle('hero');
})
 document.querySelector('.nav-links').addEventListener('click', e => {

      if(hero.classList.contains('hero') && navLinks.classList.contains('mobile-menu')){
          hero.classList.remove('hero');
          navLinks.classList.remove('mobile-menu');
          uil.classList.toggle('uil-bars');
          uil.classList.toggle('uil-multiply');
      }
  // 2. determine which element originated the event
  const el = e.target.getAttribute('href');
  // 3. Matching strategy && Scroll into href of that element
  e.target.classList.contains('nav-link') &&
    document.querySelector(el).scrollIntoView({ behavior: 'smooth' });
});

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
          
            spaceBetween: 80,
        
            scrollbar: {
              el: '.swiper-scrollbar',
            },
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
window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      var parameters = {
          "from_name": document.getElementById('name').value,
          "email": document.getElementById('email').value,
          "message": document.getElementById('message').value,
      }

      emailJs.send('service_md33vj4', 'template_ccnnzes', parameters).then(function(res) {
          alert("success", res.status);
      })
  });
}