
/* trigger when page is ready */
$(document).ready(function(){

	// SVG -> PNG Fallback through Modernizer

	if (!Modernizr.svg) {
        $('img[src$=svg]').each(function(index, item) {
            imagePath = $(item).attr('src');
            $(item).attr('src',imagePath.slice(0,-3)+'png');
        });
    }		
		
	
	// Smooth Scroll
	$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});
	
	// Header Slide
	if (document.body.clientWidth > 768) {
	
		$(function() {
			$('a[rel*=leanModal]').leanModal({closeButton: ".modal_close" });		
		});
	        
		$(window).scroll(function() {
		
			var UserScroll;
		    	UserScroll = $(this).scrollTop();
		
			if ( $(document).scrollTop() <= 1680 ) {
				$('#header-cover').css({
		    		'transform' : 'translate(0px,' + -(UserScroll/2)+"px)",
		    		'opacity' :  '1'
		    	});
		    	
				$('.intro').css({
					'opacity' :  1-(UserScroll/600),
		    	});
		    	
				$('#down').css({
					'opacity' :  1-(UserScroll/600),
					'transform' : 'translate(0px,' + (UserScroll/3)+"px)"
		    	});	    	
		    }
			else  {
			    $('#header-cover').css({
		    		'opacity' :  '0',
		    		'transform' : 'translate(0px, 0px)'
		    	});
		    	
				$('.intro').css({
		    		'transform' : 'translate(0px, 0px)'
		    	});
		    }
			
		});
	
	}
	
	//INSTAFEED
	var feed = new Instafeed({
        get: 'user',
        userId: 19458322,
        accessToken: '19458322.467ede5.d05cb68773f44bf3962ef2d94674f4d2',
        limit: 4,
        resolution: 'standard_resolution',
        template: '<li><img src="{{image}}" /></li>'
    });
    feed.run();
    
    
    // JRIBBBLE
    // API Ref: http://api.dribbble/players/:id/shots
	$.jribbble.getShotsByPlayerId('mattywebb', function (playerShots) {
	var html = [];
	$.each(playerShots.shots, function (i, shot) {
	html.push('<li><a href="' + shot.url + '" target="_blank">');
	html.push('<img src="' + shot.image_url + '" ');
	html.push('alt="' + shot.title + '"></a></li>');
	});
	
	$('#shotsByPlayerId').html(html.join(''));
	}, {page: 1, per_page: 4});
	
});
