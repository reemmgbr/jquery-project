AOS.init();

// $(window).on("scroll", function () {
//   if ($(window).scrollTop() > 550) {
//     // اغير الرقم من هنا
//     $("#myNav").addClass("navbar-scrolled");
//   } else {
//     $("#myNav").removeClass("navbar-scrolled");
//   }
// });
// console.log($(window).scrollTop());
// console.log($("#Home ").outerWidth());
$(document).ready(function () {
  let isColorBoxOpen = false;
  const storedColor = localStorage.getItem("selectedColor");

  if (storedColor) {
    $(".color-settingicon").css("color", storedColor);
  }

  const outerWidthh = $(".color-box").outerWidth();
  console.log(outerWidthh);

  const colors = ["rgb(25, 25, 112)", "rgb(0, 0, 255)", "rgb(0, 238, 255) "];

  $(".color-box span").each(function (index) {
    $(this).css("backgroundColor", colors[index]);
  });
  $(".color-box span").click(function () {
    const colorspan = $(this).css("backgroundColor");
    $("body").css("backgroundColor", colorspan); // تغيير لون خلفية body
    localStorage.setItem("selectedColor", colorspan);
  });

  $(".setting-icon").click(function () {
    if (!isColorBoxOpen) {
      $(".color-box").animate({ left: 0 }, 1000);
    } else {
      $(".color-box").animate({ left: -outerWidthh }, 1000);
    }
    isColorBoxOpen = !isColorBoxOpen;
  });

  $(".color-box span").click(function () {
    const colorspan = $(this).css("backgroundColor");
    $(".color-settingicon").css("color", colorspan);
    localStorage.setItem("selectedColor", colorspan);
  });

  $(".color-box").css("left", -outerWidthh);
});
// random background
let landingpage = document.querySelector(".landing-page");
let imagArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg"];
setInterval(() => {
  let random = Math.floor(Math.random() * imagArray.length);
  landingpage.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)),url(images/${imagArray[random]})`;
}, 2000);
$(document).ready(function () {
  $(".owl-carousel").owlCarousel(); // owl cursol
});
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});
