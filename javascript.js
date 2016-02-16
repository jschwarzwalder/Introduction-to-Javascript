carousel = (function(){

	var box = document.querySelector('.carouselbox');
	var next = box.querySelector('.next');
	var previous = box.querySelector('.prev');
	var items = box.querySelectorAll('.content li');

	next.addEventListener('click', function(){
		alert('Next button clicked')
	});


})();