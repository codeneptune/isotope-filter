/*
 Isotope Filter
 Author: CodeNeptune

*/
(function(a){a.fn.isotopeFilter=function(){return this.each(function(){var d=a(this),e=a(d.data("filter")),b;e.isotope({itemSelector:"[data-filter-by]"});d.on("click","[data-filter-to]",function(c){c.preventDefault();c=a(this);b=a(this).data("filter-to");b="*"===b?"*":'[data-filter-by~="'+b+'"]';e.isotope({filter:b});c.addClass("active").siblings("[data-filter-to]").removeClass("active")})})}})(jQuery);
