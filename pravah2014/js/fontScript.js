$(function(){
	$('.Events > p').click(function(){
		$(this).parent().find('div').fadeTo(700, 1);
	});
	$('.Content1').click(function(){
		$(this).fadeTo(700, 0, function(){$(this).css('display', 'none')});
	});
	
})