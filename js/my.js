
var bootTime = 000; //2000

$(document).ready(function() {
	  //$('body').css('cursor','url(images/cursor-wait.png), pointer');
      $('#loading').fadeOut().promise().then(function(){
      		$('#boot_screen').fadeIn().delay(bootTime).promise().then(function(){
      			$('#boot_screen').fadeOut().promise().then(function(){
      				$('#main_screen').fadeIn()
      			});
      		});
      });
});

function mainInterface(){

}