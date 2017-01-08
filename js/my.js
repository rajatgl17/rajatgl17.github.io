
var bootTime = 2000; //2000

$(window).bind('load',function(){
	$('#loading').fadeOut().promise().then(function(){
      		$('#boot_screen').fadeIn().delay(bootTime).promise().then(function(){
      			$('#boot_screen').fadeOut().promise().then(function(){
      				$('#main_screen').fadeIn()
      			});
      		});
      });
});