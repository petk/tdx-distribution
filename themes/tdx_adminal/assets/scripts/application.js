(function($) {

  'use strict';

  // Description toggle
  Drupal.behaviors.descriptionToggle = {
    attach: function (context) {
      var $wrapper = $('.field-group-html-element.description', context);
      var $body = $('.field--name-field-landing-page-description');
      $($wrapper).find('h3').on('click', function(event) {
        $(this).parent().toggleClass('open');
      });
    }
  };

  // Dove moderation field to the right
  Drupal.behaviors.publishedElement = {
    attach: function (context) {
      var $publishedElement = $('.layout-node-form #edit-moderation-state-0', context);
      if ( $($publishedElement).length ) {
        $($publishedElement).insertBefore('.layout-node-form .entity-meta__last-saved ', context);
      }
    }
  };
})(jQuery);

//# sourceMappingURL=../scripts/application.js.map
