// const logo = document.querySelectorAll("#logo2 path");
//
// for (let i = 0; i < logo.length; i++) {
//   console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
// }
function submitForm() {
  document.getElementById("text").style.bottom = "2vw";
  document.getElementById("loader").style.display = "block";
  var name = $("#name").val();
  var email = $("#email").val();
  var timestamp = new Date().toLocaleString();
  if (email === null || name === null) {
    document.getElementById("loader").style.display = "none";
    document.getElementById("text").style.bottom = "-4vw";
    error_show("Please fill all the fields");
  } else {

    if (email.trim() === "" || name.trim() === "") {
      document.getElementById("loader").style.display = "none";
      document.getElementById("text").style.bottom = "-4vw";
      error_show("Please fill all the fields");
    } else {
      var jqxhr = $.ajax({
        url: 'https://script.google.com/macros/s/AKfycbxbtJ2g0bYY5iHs_IU1oP-wSGhTv3NanurgUNs_edYLZKgIwuc/exec',
        method: "GET",
        dataType: "json",
        data: {
          Name: name,
          Timestamp: timestamp,
          Email: email,
        }
      })
      .then(function(doRef) {
        document.getElementById("text").style.bottom = "-4vw";
        document.getElementById("loader").style.display = "none";
        error_show("Your response has been recorded!!");
        $("#name").val('');
        $("#email").val('');
      });
      //  var xmlhttp = new XMLHttpRequest();
      // xmlhttp.onreadystatechange = function() {
      //   if (this.readyState == 4 && this.status == 200) {
      //     var response = this.responseText;
      //     if (response == "done") {
      //       document.getElementById("loader").style.display = "none";
      //       error_show("Your response has been recorded!!");
      //       $("#name").val('');
      //       $("#email").val('');
      //       $('#institute').val('');
      //       $('#professional_status').val('');
      //
      //     } else {
      //       document.getElementById("loader").style.display = "none";
      //       //$(".alertSubscribeTop").html("Please try again");
      //       error_show("Please try again");
      //     }
      //   }
      // };
      // xmlhttp.open("GET", "sendMail.php?name=" + name + "&email=" + email + "&institute=" + institute + "&professional_status=" + professional_status, true);
      // xmlhttp.send();
    }
  }

  //console.log(fullname, gender, institute, courseofstudy, year, email_global, contact_number, twitter_id, facebook_id, instagram_id, sop, one, two, three, four, five, six);
}

function error_show(e) {
  var x = document.getElementById("snackbar");
  x.innerHTML = e;
  x.className = "show";
  setTimeout(function() {
    x.className = x.className.replace("show", "");
  }, 3000);
}



document.getElementById("logo1").style.display = "none";
document.getElementById("logo2").style.display = "none";
// document.querySelector("svg").onload = function() {
var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
if (width < 777) {
  document.getElementById("logo2").style.display = "block";
  document.getElementById("logo1").style.display = "none";
} else {
  document.getElementById("logo1").style.display = "block";
  document.getElementById("logo2").style.display = "none";
}

// }
//Navbar
var i = 0;
document.getElementById("img-btn").onclick = function() {
  i++;
  if (i % 2 != 0) {
    var nav = document.getElementById("hor-nav");
    nav.style.width = "100%";
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width < 900) {
      nav.style.height = "80%";
    }
  } else {
    var nav = document.getElementById("hor-nav");
    nav.style.width = "80px";
    nav.style.height = "60px";
  }
}

var myNav = document.getElementById('header');
window.onscroll = function() {
  "use strict";

  var $notif = $('.current-box');
  var isPositionFixed = ($notif.css('position') == 'fixed');

  var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  if (width < 777) {
    var nav = document.getElementById("hor-nav");
    if (document.body.scrollTop >= 450 || document.documentElement.scrollTop >= 450) {
      if (!isPositionFixed) {
        $notif.css({
          'position': 'fixed',
          'top': '0px'
        });
      }
    } else {
      if (isPositionFixed) {
        $notif.css({
          'position': 'static',
          'top': '0px'
        });
      }
    }
    if (nav.style.height < 70) {
      if (document.body.scrollTop >= 380 || document.documentElement.scrollTop >= 380) {
        $('.img-col input').attr('src', 'static/images/logo_white.svg');
        myNav.classList.add("scroll");
        myNav.classList.remove("no-scroll");
      } else {
        $('.img-col input').attr('src', 'static/images/logo.svg');
        myNav.classList.add("no-scroll");
        myNav.classList.remove("scroll");
      }
    } else {
      if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
        $('.img-col input').attr('src', 'static/images/logo_white.svg');
        myNav.classList.add("scroll");
        myNav.classList.remove("no-scroll");
      } else {
        $('.img-col input').attr('src', 'static/images/logo.svg');
        myNav.classList.add("no-scroll");
        myNav.classList.remove("scroll");
      }
    }
  } else {
    if (document.body.scrollTop >= 700 || document.documentElement.scrollTop >= 700) {
      if (!isPositionFixed) {
        $notif.css({
          'position': 'fixed',
          'top': '25px'
        });
      }
    } else {
      if (isPositionFixed) {
        $notif.css({
          'position': 'static',
          'top': '25px'
        });
      }
    }
    if (document.body.scrollTop >= 600 || document.documentElement.scrollTop >= 600) {
      $('.img-col input').attr('src', 'static/images/logo_white.svg');
      myNav.classList.add("scroll");
      myNav.classList.remove("no-scroll");
    } else {
      $('.img-col input').attr('src', 'static/images/logo.svg');
      myNav.classList.add("no-scroll");
      myNav.classList.remove("scroll");
    }
  }
};

(function() {
  var i, e, d = document,
    s = "script";
  i = d.createElement("script");
  i.async = 1;
  i.src = "https://cdn.curator.io/published/2b2e4a64-9ea5-4867-a7c2-277ab2bd8206.js";
  e = d.getElementsByTagName(s)[0];
  e.parentNode.insertBefore(i, e);
})();

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
