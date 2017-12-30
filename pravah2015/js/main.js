function runSVG(){
	setTimeout(cont,5000);
	for(var i=1;i<7;i++){
		var path=document.getElementById('svg'+i);
		var length = path.getTotalLength();
		path.style.transition = path.style.WebkitTransition ='none';
		path.style.strokeDasharray = length + ' ' + length;
		path.style.strokeDashoffset = length;
		path.getBoundingClientRect();
		path.style.transition = path.style.WebkitTransition ='stroke-dashoffset 5s ease-in-out';
		path.style.strokeDashoffset = '0';
	}
}

function cont(){
	document.querySelector('#svg > svg > g').style.fill='rgba(255,255,255,.25)';
}

$(function() {
	$('nav.dr-menu').on('click', function(){
		$(this).toggleClass('dr-menu-open')
		       .css('background', ($(this).is('dr-menu-open') ? 'rgba(0,0,0,.35)' : 'rgba(0,0,0,0)'));
	});

	$('ul#sidebar > li').on('click', function(){
		alert('New Box of ' + $(this).children('a').html());
		return false;
	});
	
	runSVG();
});

