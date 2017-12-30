$(function(){
	
	var shineUp$ = $('#shineUp');
	var shineDown$ = $('#shineDown');
	var height;
	
	$('.introduction').on('click', function(){
		
		$('#workshopCont').slideUp(500);
		$('#feeStructure').slideUp(500);
		$('#coordinators').slideUp(500);
		if($('#registration').css('display') == 'block'){
			$('#registration').css('display', 'none');
		}
		
		$('#introduction').delay(510).slideToggle(500);
	});
	
	$('.content').on('click', function(){
		
		$('#introduction').slideUp(500);
		$('#feeStructure').slideUp(500);
		$('#coordinators').slideUp(500);
		if($('#registration').css('display') == 'block'){
			$('#registration').css('display', 'none');
		}
		
		$('#workshopCont').delay(510).slideToggle(500);
	});
	
	$('.fee').on('click', function(){
		
		$('#introduction').slideUp(500);
		$('#workshopCont').slideUp(500);
		$('#coordinators').slideUp(500);
		if($('#registration').css('display') == 'block'){
			$('#registration').css('display', 'none');
		}
		
		$('#feeStructure').delay(510).slideToggle(500);
	});
	
	$('.coordinators').on('click', function(){
		
		$('#introduction').slideUp(500);
		$('#workshopCont').slideUp(500);
		$('#feeStructure').slideUp(500);
		if($('#registration').css('display') == 'block'){
			$('#registration').css('display', 'none');
		}
		
		$('#coordinators').delay(510).slideToggle(500);
	});
	
	$('.registration').on('click', function(){
		
		$('#introduction').slideUp(500);
		$('#workshopCont').slideUp(500);
		$('#feeStructure').slideUp(500);
		$('#coordinators').slideUp(500);
		
		$('#registration').delay(510).toggle();
	});
	
})