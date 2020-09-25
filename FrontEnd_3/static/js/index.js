// const logo = document.querySelectorAll("#logo path");
//
// for (let i = 0; i < logo.length; i++) {
//   console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
// }

var width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
if (width < 777) {
  document.getElementById("logo1").style.display = "none";
} else {
  document.getElementById("logo2").style.display = "none";
}

//Navbar
var i = 0;
document.getElementById("img-btn").onclick = function() {
    i++;
    if (i % 2 != 0) {
        var nav = document.getElementById("hor-nav");
        nav.style.width = "100%";
        var width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if (width < 900) {
          nav.style.height = "80%";
        }
    }
    else {
        var nav = document.getElementById("hor-nav");
        nav.style.width = "80px";
        nav.style.height = "60px";
    }
}

var myNav = document.getElementById('header');
window.onscroll = function () {
    "use strict";
    if (document.body.scrollTop >= 600 || document.documentElement.scrollTop >= 600) {
      $('.img-col input').attr('src','static/images/logo_white.svg');
        myNav.classList.add("scroll");
        myNav.classList.remove("no-scroll");
    }
    else {
      $('.img-col input').attr('src','static/images/logo.svg');
        myNav.classList.add("no-scroll");
        myNav.classList.remove("scroll");
    }
};

// $(window).scroll(function(){
//   var scroll = $(window).scrollTop();
//   if (scroll > 600) {
//     var nav = document.getElementById("header");
//     nav.classList.remove("no-scroll");
//     nav.classList.add("scroll");
//   }
//   else{
//     var nav = document.getElementById("header");
//     nav.classList.remove("scroll");
//     nav.classList.add("no-scroll");
//   }
// })
