var totalHeight, totalWidth;

$(function(){
	var scrollImageTop = new Image();
	var scrollImageBottm = new Image();
	var scrollImageCentr = new Image();

	
	$('#frontred').on('click', function(){
		
		if($('#commitee').css('display') == 'block'){
			$('#aboutUs').slideToggle(600, function(){
						$('.commitee').slideToggle(100, function(){$('#commitee').hide();});
						$('#page').css('display', 'block');
						$('#page').animate({
							top: '280px'
						},700, function(){
							$('#container').css('display', 'block');
							$('#rightContainer').animate({
								left: '85%'
							}, 1000, function(){
								$('#leftContainer').animate({
									left: '6%'
								}, 500);
							});
						});
					});
					
			flag = 1;
		}else if($('#Sponsers').css('display') == 'block'){
			$('#sponsors').fadeOut(500, function(){
				$('#page, #PravahText').show();
			});
		}
	});
	
	$('#frontgreen').on('click', function(){
	
		if(flag == 1){
			
			if($('#Sponsers').css('display') == 'block'){
				$('#sponsors').fadeOut(500, function(){
					$('#page, #PravahText').show();
				});
			}
			
			$('#leftContainer').animate({
				left: '-10%'
			}, 500, function(){
				$('#rightContainer').animate({
					left: '110%'
				}, 1000, function(){
					$('#container').css('display', 'none');
					$('#page').animate({
						top: '95%'
					},300,function(){
						$(this).hide();
						$('#commitee').show();
						$('#aboutUs').slideToggle(2000);
					});
				});
			});
			
			flag = 0;
		}else if(flag == 0){
			
			$('#aboutUs').slideToggle(600, function(){
						$('#commitee').slideToggle(100, function(){$('#commitee').hide();});
						$('#page').css('display', 'block');
						$('#page').animate({
							top: '280px'
						},700, function(){
							$('#container').css('display', 'block');
							$('#rightContainer').animate({
								left: '85%'
							}, 1000, function(){
								$('#leftContainer').animate({
									left: '6%'
								}, 500);
							});
						});
					});
					
			flag = 1;
		}
	});
});