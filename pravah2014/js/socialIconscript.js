$(function(){
	var totalWidth = $(document).width();
	var pageHeight = $('#page').height();
	var hackTrackImg = new Image();
	var flagNew = 1;
	
	$('#Sponsers, #Facebook').mouseenter(function(){
		$(this).animate({
			left: '-=20'
		}, 300, function(){
			$(this).toggleClass('animate animate1');
		});
		
	}).mouseleave(function(){
		$(this).animate({
			left: '0'
		},300, function(){
			$(this).toggleClass('animate animate1');
		});
	});
	
	$('#Gallery, #Aaveg').mouseenter(function(){
		$(this).animate({
			left: '+=20'
		}, 300, function(){
			$(this).toggleClass('animate animate1');
		});
	}).mouseleave(function(){
		$(this).animate({
			left: '0'
		}, 300, function(){
			$(this).toggleClass('animate animate1');
		});
	});

        $('#Sponsers').on('click', function(){
		$('#page, #PravahText, .special, .special2').hide();
		$('#sponsors').fadeIn(500);
		moveOut();
	});
	
	$('#robowar').mouseenter(function(){
		$(this).animate({
			'left': '55%'
		}, 500, function(){
				$(this).addClass('robowar');
		});
	}).mouseleave(function(){
		$(this).removeClass('robowar');
		$(this).animate({
			'left': '115%'
		}, 500);
	});
	
	$(hackTrackImg).load(function(){
		var content$ = $(this);
		content$.insertAfter('#sponsors');
		$('#Hackomania').on('click', function(){
				if(flagNew == 1){
					showImage(content$);
					flagNew = 0;
				} else if(flagNew == 0){
					hideImage(content$);
					flagNew = 1;
				}
			});
	}).attr({
		id: 'hacktrack',
		src: 'images/hacktrack.jpg',
	}).css({
		'display': 'none',
		position: 'relative',
		'z-index': '20000',
		left: '0px',
		top: '420px',
		bottom: '20px',
		height: '0',
		width: '400px',
		'background-image': 'url(../images/hacktrack.jpg)',
		'background-position': 'center',
	});
})

function showImage(content$){
	$('#head, #rightContainer, #viewport-shadow, #Gallery, #Aaveg, .special, .special2, .slider-controls').hide();
			content$.show().animate({
				left: '18%',
				height: '30px',
				width: '717px',
			},400, function(){
				content$.animate({
					top: '5px',
					height: '960px',
				}, 1000);
			});
}

function hideImage(content$){
	content$.animate({
					top: '420px',
					height: '31px',
				}, 1000, function(){
					content$.animate({
						left: '0px',
						height: '0px',
						width: '400px'
					}, 400, function(){
						content$.hide();
						$('#head, #rightContainer, #viewport-shadow, #Gallery, #Aaveg, .special, .special2, .slider-controls').show();
					});
				});
}