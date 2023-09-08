$(document).ready(function(){
    $('.event_img-container').slick({
        dots: true,
        arrows:false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        fade: false,
        cssEase: 'linear',
        slidesToShow: 3,//スライドを画面に3枚見せる
		    slidesToScroll: 1,
        centerMode: true, // 両サイドに前後のスライド表示
        centerPadding: '0px'
    });
});
window.addEventListener("scroll", function () {
  const elm = document.querySelector("header");
  const scroll = window.pageYOffset;
  if (scroll > 1) {
    elm.style.opacity = "1";
    // console.log(scroll);
  } else {
    elm.style.opacity = "0";
    // console.log(scroll);
  }
});
document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function () {
        const elm = document.querySelector("#LINE");
        const scroll = window.scrollY;
        if (scroll > 700) {
            elm.style.opacity = "1";
        } else {
            elm.style.opacity = "0";
        }
    });
});
