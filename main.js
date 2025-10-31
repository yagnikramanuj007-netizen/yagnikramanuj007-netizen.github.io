/*------------------------------------------------------------------
* Project:        Photogen - Photography & Portfolio HTML Template
* Author:         Htmldesigntemplates
* URL:            https://themeforest.net/user/htmldesigntemplates/portfolio
* Created:        10/10/2025
-------------------------------------------------------------------*/

(function ($) {
  "use strict";

   // Popup search
  $('a[href="#search1"]').on('click', function (event) {
    event.preventDefault();
    $('#search1').addClass('open');

    const $input = $('#search1').find('input');
    if ($input.length) {
      $input.focus();
    }
  });

  $('#search1, #search1 button.close, #cart button.close').on('click keyup', function (event) {
    if (
      event.target === this ||
      $(event.target).hasClass('close') ||
      event.key === "Escape"
    ) {
      $('#search1').removeClass('open');
    }
  });
  

  /* SlickNav Responsive Menu */
  $('#responsive-menu').slicknav({
    duration: 500,
    easingOpen: 'easeInExpo',
    easingClose: 'easeOutExpo',
    closedSymbol: '<i class="arrow-indicator fa fa-angle-down"></i>',
    openedSymbol: '<i class="arrow-indicator fa fa-angle-up"></i>',
    prependTo: '#slicknav-mobile',
    allowParentLinks: true,
    label: ""
  });

  /* Dropdown Menu */
  var selected = $('#navbar li');
  selected.on("mouseenter", function () {
      $(this).find('ul').first().stop(true, true).delay(350).slideDown(500, 'easeInOutQuad');
  }).on("mouseleave", function () {
      $(this).find('ul').first().stop(true, true).delay(100).slideUp(150, 'easeInOutQuad');
  });

  /* Arrow Indicator for Submenus */
  if ($(window).width() > 992) {
      $(".navbar-arrow ul ul > li").has("ul").children("a").append("<i class='arrow-indicator fa fa-angle-right'></i>");
  }
  

  /* Sticky Header */
  let $headerMenu = $('.header-nav-menu');

  $(window).on('scroll', function () {
    let curScroll = $(window).scrollTop();

    if (curScroll > 80) {
        $headerMenu.addClass('navbar-sticky-in');
    } else {
        $headerMenu.removeClass('navbar-sticky-in');
    }
  });


  // Slick Slider //

  // Banner Slider
  $('.banner-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: false,
  });

  $('.gallery-slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: false,
    responsive: [
      { breakpoint: 1100, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ]
  });

  $('.review-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: false,
  });

  $('.portfolio-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: false,
    responsive: [
      { breakpoint: 1100, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ]
  });

  $('.review-slider1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: true,
  });

  $('.pricing-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: false,
    responsive: [
      { breakpoint: 900, settings: { slidesToShow: 1, slidesToScroll: 1 } }
    ]
  });

  Fancybox.bind("[data-fancybox='gallery']", {
    Thumbs: false,   
    infinite: true,        
    dragToClose: true,    
    Image: { 
      zoom: true     
    }
  });

  Fancybox.bind("[data-fancybox]", {
      Youtube: {
        autoplay: 1,
        controls: 1,
      },
    });

  Fancybox.bind("[data-fancybox='gallery1']", {
    Thumbs: {
      autoStart: true,
    },
    Toolbar: {
      display: [
        { id: "counter", position: "center" },
        "zoom",
        "slideshow",
        "fullscreen",
        "download",
        "thumbs",
        "close",
      ],
    },
  });
  


  /* Counter JS Start */
  document.addEventListener("DOMContentLoaded", () => {
    const valueDisplays = document.querySelectorAll(".num");
    const totalDuration = 2000; // total duration in ms
    const stepTime = 20;        // time per update in ms

    valueDisplays.forEach((valueDisplay) => {
      let startValue = 0;
      const endValue = parseInt(valueDisplay.getAttribute("data-val"), 10); // added radix = 10

      if (isNaN(endValue)) return; // safety check

      const steps = totalDuration / stepTime;
      const increment = endValue / steps;

      const counter = setInterval(() => {
        startValue += increment;
        if (startValue >= endValue) {
          valueDisplay.textContent = endValue;
          clearInterval(counter);
        } else {
          valueDisplay.textContent = Math.floor(startValue);
        }
      }, stepTime);
    });
  });
  /* Counter JS End */

  /* Countdown Timer */
    const targetTime = new Date(Date.now() + 100 * 24 * 60 * 60 * 1000); // 100 days from now
    function updateCountdown() {
      const now = Date.now();
      const diff = targetTime - now;
      if (diff <= 0) {
        clearInterval(interval);
        $('#days, #hours, #minutes, #seconds').text('00');
        return;
      }
      
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / (1000 * 60)) % 60);
      const s = Math.floor((diff / 1000) % 60);

      $('#days').text(d);
      $('#hours').text(h.toString().padStart(2, '0'));
      $('#minutes').text(m.toString().padStart(2, '0'));
      $('#seconds').text(s.toString().padStart(2, '0'));
    }
    
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
  /* Countdown Timer */ 

  $(document).ready(function(){
    // Main slider
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav'
    });

    // Thumbnail slider
    $('.slider-nav').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: false,
      centerMode: true,
      focusOnSelect: true
    });

    // Fancybox
    Fancybox.bind("[data-fancybox='gallery']", {});
  });


})(jQuery);
