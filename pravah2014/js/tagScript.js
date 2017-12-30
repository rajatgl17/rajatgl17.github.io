var timer, y, x = 1;
var flag = 1;
var count = 0;

var top = {}, left = {}, opacity= {}, colorRed = {}, colorGreen = {}, colorBlue = {};
var totalHeight, totalWidth;

$(function(){
	
        $('#pravahLogo').mouseover(moveOut);
	$('#logo').mouseleave(moveIn);

        
	$('#main img').load();
	$(window).load(function(){
		$('#blockPageImage').hide();
		$('#leafPlace').show(0,function(){
			$('#cover2').addClass('northEast1Leaf');
			$('#cover3').addClass('northEast2Leaf');
			$('#cover4').addClass('northLeaf');
			$('#cover5').addClass('northWest1Leaf');
			$('#cover6').addClass('northWest2Leaf');
			$('#cover7').addClass('westLeaf').delay(1001).animate({
				'z-index': '1'
			},10, function(){
				$('#blockPage').addClass('blockPage');
				$('#leafPlace').addClass('leafPlaceScale');
				$('#blockPage').delay(1000).fadeOut(1000, function(){
					$('#main').show();
				});
			});
		});
	});

	 $("#frontyellow").mouseenter(function(){
		 $("#frontyellow").removeClass("frontyellow").addClass("yellow");
	}).mouseleave(function() {
		$("#frontyellow").removeClass("yellow").addClass("frontyellow");	});
	
	$("#frontgreen").mouseenter(function(){
		 $("#frontgreen").removeClass("frontgreen").addClass("green");
	}).mouseleave(function() {
		$("#frontgreen").removeClass("green").addClass("frontgreen");
	});
	
	$("#frontblue").mouseenter(function(){
		$("#frontblue").removeClass("frontblue").addClass("blue");
	}).mouseleave(function() {
		$("#frontblue").removeClass("blue").addClass("frontblue");
	});
	
	$("#frontred").mouseenter(function(){
		 $("#frontred").removeClass("frontred").addClass("red");
	}).mouseleave(function() {
		$("#frontred").removeClass("red").addClass("frontred");
	});
		
	$('#frontblue').click(function(){
		if($('#aboutUs').css('display') == 'block'){
			$('#aboutUs').css('display', 'none');
		}
		
		$('#EventsPage').fadeToggle(600, function(){$('.Events').toggleClass('Events1');});
		
	});
	$('#EventsPage').click(function(e){
		if(e.target != this){ return true; }
		$('#EventsPage').fadeOut(600, function(){$('.Events').toggleClass('Events1');})
	});
	
});

function moveOut(){
	
	$('#hoverMe').fadeOut(300);
	$('.special').hide();
        $('.special2').hide();
	
	$('.fronttags').css('display', 'block');
	
	$('#frontred').animate({
			  opacity: '1',
			left: '20px'
			}, 500);
	$('#frontblue').animate({
			opacity: '1',
			left: '240px'
			}, 500);
	$('#frontgreen').animate({
			opacity: '1',
			left: '660px'
			}, 500);
	$('#frontyellow').animate({
			opacity: '1',
			left: '880px'
			}, 500);
}


function moveIn(){
		$('.fronttags').animate({
			opacity: '0'
			, top: '0px'
			, left: '500px'
			}, 500, function(){ $('.fronttags').css('display', 'none');
		});
		setTimeout(function(){$('.special').show();	$('.special2').show();}, 300 );
}