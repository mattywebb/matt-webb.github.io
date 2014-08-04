	
	
	


	var newHash     = '',
	   $mainContent = $('#cs-content');
	
	$('nav').delegate('a', 'click', function() {
		window.location.hash = $(this).attr('href');
		return false;
	});

	$(window).bind('hashchange', function() {
		newHash = window.location.hash.substr(1);
		console.log(newHash);
		$mainContent.load(newHash + " #cs-content > *", function(){
				$('#cs-content .content img').load(function(){
				$(this).addClass("loaded");			
			})
		});
		


		//update the classname
		$('#cs-content').removeAttr('class');
	
	
		if (newHash.indexOf("desktop") >= 0){
			$('#cs-content').addClass("desktop");
		}else if (newHash.indexOf("tablet") >= 0){
			$('#cs-content').addClass("tablet");
		}else {
			$('#cs-content').addClass("mobile");
		}
	
	});



	$(document).ready(function(){
		$('#cs-content .content img').load(function(){
			$(this).addClass("loaded");
		});	
	});
