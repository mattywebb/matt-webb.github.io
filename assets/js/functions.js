

$(window).load(function() {
    

    var greetings = [ "hello", "ciao", "welcome", "howdy", "greetings", "salut", "hallo", "hola", "Gday", "Hey"];
	var greeting_id = Math.floor(Math.random() * greetings.length);
	document.getElementById('title').innerHTML = greetings[greeting_id];

	
	var images = ["matt-red.jpg", "matt-green.jpg", "matt-yellow.jpg", "matt-blue.jpg", "matt-orange.jpg"];
	var dir = 'assets/img/';
	var images_id = Math.floor(Math.random() * images.length);
	document.getElementById('header-cover').style.backgroundImage = "url(" + dir + images[images_id] + ")";
    
});
	
