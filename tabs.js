(function($) {
  $.fn.tabs = function() {
    this.each(function() {
      var $el = $(this),
        $tabs = $el.find('.tab'),
        $tabContents = $el.find('.tab-content');

      if(!$el.data('tabs')) {
        $el.data('tabs', true);

        $tabs.on('click', function(e) {
          e.preventDefault();
          var target = $(this).attr('href');

          $tabContents.removeClass('active').filter(target).addClass('active');
          $tabs.removeClass('active');
          $(this).addClass('active');
        });
      }
    });

    return this;
  };
})(jQuery);