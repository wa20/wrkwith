// "use strict";

// const htmlTag = document.querySelector('html');
// const bodyTag = document.querySelector('body');
// const myNav  = document.getElementById('navbarScroll')
// const bodyTag = document.querySelector('nav li a');

// let scrolled = () => {
//     let dec = scrollY / (bodyTag.scrollHeight - innerHeight);
//     return Math.floor(dec * 10);
// }

// addEventListener('scroll', () =>{
//     myNav.style.setProperty('backgroud', scrolled() > 50 ? "var(--color2)" : "var(--color1)")
// })


// const header = document.getElementById('navbar-colour');
// const sectionOne= document.getElementById('page-intro');

// const sectionOneOptions = {
//     rootMargin: "-200px 0px 0px 0px"
// }
// navbarcolour
// const sectionOneOption2 = {
//     rootMargin: "-0px 0px 0px 0px"
// }

// const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver){
//     enteries.forEach(entry => {
//         if(!entry.isIntersecting){
//             header.classList.add("nav-scrolled")
//         }else {
//             header.classList.remove("nav-scrolled")
//         }
//     })
// })

// sectionOneObserver.observe(sectionOne)


window.onscroll = () => {
    const nav = document.getElementById('navbar');
    if(this.scrollY <= 50) nav.className = ''; else nav.className = 'scroll';
  };

// $(function() {
//     var header = $("nav");
  
//     $(window).scroll(function() {    
//         var scroll = $(window).scrollTop();
//         if (scroll <= -50) {
//             header.addClass("scrolled");
//         } else {
//             header.removeClass("scrolled");
//         }
//     });
  
// });

