// "use strict";

const  myNav = document.getElementById('mynav');
window.addEventListener('scroll', (event) =>  { 
    "use strict";
    if (window.scrollY > 10 ) {
        myNav.classList.add("nav-dark");
    } 
    else {   
        myNav.classList.remove("nav-dark");
    }

});

window.addEventListener('scroll', ()=> {
  console.log('scrolled')
})

