var timer, y, x= 1;

$(function(){
	timer = setInterval(function(){HoverMe(x); x= x+y;}, 20);
	$('#hoverMeTagOut').click(function(){
		if(timer != null){
			clearInterval(timer);
			timer = null;
			//$('#hoverMeTagOut').css('display', 'none');
		}
		$('#blacky').fadeIn(500);
		$('#wrap').css('display', 'block').animate({
			top: '-600px'
		}, 1000);
	})
	
	$('#blacky').click(function(){
		$('#blacky').fadeOut(500);
		$('#wrap').animate({
			top: '0'
		}, 1000, function(){$(this).css('display', 'none')});	
	});
})

function HoverMe(x){
	
	$('#hoverMeTagOut').css({
		backgroundColor: 'rgba(255, 0, 0, '+ x +')'
	})
	if(x>=1){	y = -0.05; }
	else if(x<=0){
		y=0.05;
	}
	
	if(x<0.5){
		$('#hoverMeTagIn').css({
			boxShadow: '0 0 30px #333'
		})	
	}else if(x>0.5){
		$('#hoverMeTagIn').css({
			boxShadow: 'none'
		})
	}
}
