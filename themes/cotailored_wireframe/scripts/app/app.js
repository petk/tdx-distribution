(function($) {

  'use strict';

  // Mobile menu
  Drupal.behaviors.opemMobileMenu = {
    attach: function (context) {
      var $burger = $('.burger', context);
      var $body = $('body', context);

      $($burger).on('click', function(event) {
        $($body).toggleClass('mobile-menu-open');
        $(this).toggleClass('open');
      });
    }
  };

  Drupal.behaviors.StickyHeader = {
    attach: function (context, settings) {
      var $header = $('header');
      var $body = $('body');
      var $toolbar = $('#toolbar-bar');

      $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 60) {
          $($header).addClass('sticky');
        } else {
          $($header).removeClass('sticky');
        }
      });
    }
  };

  // Vieport
  Drupal.behaviors.viewPort = {
    attach: function (context) {
      var $box = $('.boxed');

      // Helper function to check if element is in viewport
      function isInViewport(element) {
        $(element).each(function () {
          var $this = $(this),
            wHeight = $(window).height(),
            box = $this[0].getBoundingClientRect();
            if (box.top >= 0 && box.bottom <= wHeight) {
              $(this).addClass('animated fadeIn');
            }
        });
      }

      $(document).ready(function() {
        $(document).on('scroll', function() {
          isInViewport($box);
        }).trigger('scroll');
      });
    }
  };

})(jQuery);



