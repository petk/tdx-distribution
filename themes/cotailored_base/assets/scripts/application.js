(function($) {

  'use strict';

  // Dismis message.
  Drupal.behaviors.messagesDismiss = {
    attach: function (context, settings)  {
      var $button = $('#dismiss_message');

      $($button).on('click', function(event) {
        $(this).closest('.messages').addClass('hide');
      });
    }
  };

})(jQuery);
//# sourceMappingURL=../scripts/application.js.map
