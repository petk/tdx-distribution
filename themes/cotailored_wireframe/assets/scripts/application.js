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

})(jQuery);




//# sourceMappingURL=../scripts/application.js.map
