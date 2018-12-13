$(document).ready(function(){
   //Dette er en toggle, dette gør at når man klikker på burger-menu icon oppe i højre hjørne vil den "show" eller "hide" efter om den er "show" eller "hide".
   $('.menu-toggle').click(function() {

    $('.site-nav').toggleClass('site-nav--open');
    $(this).toggleClass('open');

  });



});

;( function( $ ) {
	"use strict";

	var $bars = $( ".bar" ),
		methods = {
			init: function() {

				// Bind events
				methods.bindEvents();

			},
			bindEvents: function() {

				// Loop through each of the bars...
				$bars.each( function() {

					var $bar = $( this ),
						$pct = $bar.find( ".pct" ),
						data = $bar.data( "bar" );

					setTimeout( function() {

						$bar
							.css( "background-color", data.color )
							.animate({
								"width": $pct.html()
							}, data.speed || 3000, function() {

								$pct.css({
									"color": data.color,
									"opacity": 1
								});

							});

					}, data.delay || 0 );

				});

			}
		};

	// Initialize on page load
	methods.init();

})( jQuery );
