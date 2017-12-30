$(function(){
	$('#social').mouseenter(moveBlueRight).mouseleave(moveBlueLeft);
	$('#sponsers').mouseenter(moveYellowLeft).mouseleave(moveYellowRight);
});

function moveBlueRight(){
	//$('#social').children().addClass("social");
	$(this).children().animate({
		left: '240px'
	}, 1000);
	$('#social1, #social2, #social').css({
		webkitTransition: 'opacity 1s ease-in 0s',
		mozTransition: 'opacity 1s ease-in 0s',
		msTransition: 'opacity 1s ease-in 0s',
		oTransition: 'opacity 1s ease-in 0s',
		transition: 'opacity 1s ease-in 0s',
		opacity: '1'
	});
}

function moveBlueLeft(){
	$(this).children().animate({
		left: '0px'
	}, 1000);
}

function moveYellowLeft(){
	$(this).children().animate({
		left: '-240px'
	}, 1000);
}

function moveYellowRight(){
	$(this).children().animate({
		left: '0px'
	}, 1000);
}