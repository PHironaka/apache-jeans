/*!
 * modernizr.min.js
 */
// =require vendor/modernizr.min.js

/*!
 * jquery-3.3.1.min.js
 */
// =require vendor/jquery-3.3.1.min.js

/*!
 * Swiper
 */
// =require vendor/swiper.min.js


// Attempts to preserve comments that likely contain licensing information,
// even if the comment does not have directives such as `@license` or `/*!`.
//
// Implemented via the [`uglify-save-license`](https://github.com/shinnn/uglify-save-license)
// module, this option preserves a comment if one of the following is true:
//
// 1. The comment is in the *first* line of a file
// 2. A regular expression matches the string of the comment.
//    For example: `MIT`, `@license`, or `Copyright`.
// 3. There is a comment at the *previous* line, and it matches 1, 2, or 3.




$(".site-nav--has-submenu").hover(function() {
 $(this).find(".site-nav__submenu").stop(!0, !0).delay(200).slideDown(400)
  }, function() {
    $(this).find(".site-nav__submenu").stop(!0, !0).delay(200).slideUp(400)
  });

 var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })

   $('.countryfilter-intl').on('click', function() {
     var $this = $(this);
     $('.international').removeClass('hide');
     // $('.countryfilter-intl').addClass('active');
     $(' .united-states, .online').addClass('hide');
   });

      $('.countryfilter-us').on('click', function() {
     var $this = $(this);
     // $this.toggleClass('active');
     $('.united-states').removeClass('hide');
     $(' .online, .international').addClass('hide');
   });


         $('.countryfilter-online').on('click', function() {
     var $this = $(this);
     $('.online').removeClass('hide');
     $(' .united-states, .international').addClass('hide');
   });

