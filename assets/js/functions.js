
/* trigger when page is ready */
$(document).ready(function (){

	// SVG -> PNG Fallback through Modernizer
	if(!Modernizr.svg) {
	    $('img[src*="svg"]').attr('src', function() {
	        return $(this).attr('src').replace('.svg', '.png');
	    });
	}
	
	
    
});
	
