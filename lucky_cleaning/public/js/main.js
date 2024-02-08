(function($) {

	"use strict";


// 	$(window).stellar({
//     responsive: true,
//     parallaxBackgrounds: true,
//     parallaxElements: true,
//     horizontalScrolling: false,
//     hideDistantElements: false,
//     scrollProperty: 'scroll'
//   });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();



	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});


})(jQuery);

