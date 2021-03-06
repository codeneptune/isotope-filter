/*!
 *
 * Isotope Filter (https://github.com/codeneptune/isotope-filter)
 * Author: CodeNeptune
 *
 */

(function ($) {
    'use strict';
    
    $.fn.isotopeFilter = function () {
        return this.each(function () {
            var $el = $(this),
                $target = $( $el.data('filter') ),
                $sel;
            
            $target.isotope({
                itemSelector: '[data-filter-by]'
            });
            
            $el.on('click', '[data-filter-to]', function (e) {
                e.preventDefault();
                
                var $filter_to = $(this);
                
                $sel = $(this).data('filter-to');
                $sel = $sel === '*' ? '*' : '[data-filter-by~="' + $sel +'"]';
                
                $target.isotope({
                    filter: $sel
                });
                
                $filter_to.addClass('active').siblings('[data-filter-to]').removeClass('active');
            });
        });
    };
}(jQuery));
