
/* trigger when page is ready */
$(document).ready(function(){

	// SVG -> PNG Fallback through Modernizer
	if(!Modernizr.svg) {
	    $('img[src*="svg"]').attr('src', function() {
	        return $(this).attr('src').replace('.svg', '.png');
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
	
	var feed = new Instafeed({
        get: 'user',
        userId: 19458322,
        accessToken: '19458322.467ede5.d05cb68773f44bf3962ef2d94674f4d2',
        limit: 4,
        resolution: 'standard_resolution',
        template: '<li><img src="{{image}}" /></li>'
    });
    feed.run();
	    



    var greetings = [ "hello", "ciao", "welcome", "howdy", "greetings", "salut", "hallo", "hola", "Gday", "Hey"];
	var greeting_id = Math.floor(Math.random() * greetings.length);
	document.getElementById('title').innerHTML = greetings[greeting_id];

	
	var images = ["matt-red.jpg", "matt-green.jpg", "matt-yellow.jpg", "matt-blue.jpg", "matt-orange.jpg"];
	var dir = 'assets/img/';
	var images_id = Math.floor(Math.random() * images.length);
	var imgURL = "url(" + dir + images[images_id] + ")";
// 	document.getElementById('header-cover').style.backgroundImage = imgURL; 
	$('#header-cover').css("background-image",imgURL);


});

