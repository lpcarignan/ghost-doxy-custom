if (typeof themeConfig == "undefined") {
  themeConfig = {};
}

var ghosthunter_key = themeConfig.ghostSearchKey;

(function ($) {
  "use strict";
  // ================================
  // Theme Options
  // ================================

  // Fixed Header
  $(window).scroll(function () {
    if ($(this).scrollTop() > 90) {
      $(".header-navigation").addClass("fixed-nav");
    } else {
      $(".header-navigation").removeClass("fixed-nav");
    }
  });
  // Preloader
  if ($('.loading-main').length > 0) {
    $(window).on('load', function () {
      $('.loading-main').fadeOut();
      $('.pre-loader').delay(350).fadeOut("slow", 0.0);
      $('body').css({
        'overflow-y': 'scroll'
      });
    });
  }
  // Responsive menu
  $('.slimmenu').slimmenu({
    resizeWidth: '992',
    collapserTitle: '',
    animSpeed: 'fast',
    easingEffect: null,
    indentChildren: true,
  });


  // =====================
  // Mailchimp
  // ===================== 
  if ($(".mailchimp_subscribe").length > 0) {
    $(".subscribe-form.mailchimp_subscribe").attr("action", mailchimp_url);
  }


  // =====================
  // Gallery
  // ===================== 
  var images = document.querySelectorAll('.kg-gallery-image img');
  images.forEach(function (image) {
    var container = image.closest('.kg-gallery-image');
    var width = image.attributes.width.value;
    var height = image.attributes.height.value;
    var ratio = width / height;
    container.style.flex = ratio + ' 1 0%';
  });




  // Wow Animation
  var wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animated', // default
    offset: 10, // default
    mobile: true, // default
    live: true // default
  })
  wow.init();
  // Video Modal
  if ($('.popup-youtube, .popup-vimeo, .popup-gmaps').length > 0) {
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
      disableOn: 0,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: true,
    });
  }

  // Slider Carousel
  if ($('.slider-carousel').length > 0) {
    $('.slider-carousel').owlCarousel({
      loop: true,
      nav: false,
      dots: false,
      autoplay: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 1,
        }
      }
    })
  }


  $('.print-link').on("click", function () {
    $('.entry-content').printThis({
      importCSS: true,
      importStyle: true,
      loadCSS: "/assets/css/print.css", // path to additional css file - use an array [] for multiple
      printContainer: true
    });
  });

  // ================================
  // Search
  // ================================

  var searchHint = '';
  if (typeof themeConfig.searchHint !== 'undefined' && themeConfig.searchHint != '') {
    $('#ghost-search-field').attr('placeholder', themeConfig.searchHint);
  }

  var includeBodyInSearch = false;
  if (typeof themeConfig.includeBodyInSearch !== 'undefined' && themeConfig.includeBodyInSearch != '' && typeof themeConfig.includeBodyInSearch === "boolean") {
    includeBodyInSearch = themeConfig.includeBodyInSearch;
  }

  var searchField = $('#ghost-search-field').ghostHunter({
    results: '#gh-search-results',
    onKeyUp: true,
    displaySearchInfo: false,
    zeroResultsInfo: true,
    includebodysearch: includeBodyInSearch,
    result_template: "<a id='gh-id-{{ref}}' class='gh-search-item' href='{{link}}'>  <h2 class='search-post-title'>{{title}}</h2> </a>",
    onComplete: function (results) {
      $('#gh-search-results').fadeIn();
    }
  });

})(jQuery);