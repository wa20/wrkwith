// $(window).scroll(function(){
//     var x  = $(this).scrollTop();
//     if(x > scrollVal){
//         $("header").addClass("sticky");
//     } else {
//         $("header").removeClass("sticky");
//     }
//     scrollVal = x
// });

// const { strictLeft } = require("sequelize/types/lib/operators")


// $(window).scroll(function(){
//    $('nav').toggleClass('scrolled', $(this).scrollTop() > 900)
// });

"use strict";

const htmlTag = document.querySelector('html');
const bodyTag = document.querySelector('body');
const myNav  = document.getElementById('navbarScroll')
const bodyTag = document.querySelector('nav li a');

let scrolled = () => {
    let dec = scrollY / (bodyTag.scrollHeight - innerHeight);
    return Math.floor(dec * 10);
}

addEventListener('scroll', () =>{
    myNav.style.setProperty('backgroud', scrolled() > 50 ? "var(--color2)" : "var(--color1)")
})
