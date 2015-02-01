if( !device.tablet() && !device.mobile() ) {
	"use strict";
	(function($) {
			// initialize BigVideo
		    var BV = new $.BigVideo();
			BV.init();
			BV.show('vids/video.mp4',{ambient:true});
		})(jQuery);
				
} else {
	
	$('body').addClass('poster-image');
	
}




