
var bootTime = 000; //2000
var text, delay, charPosition;

$(window).bind('load',function(){
	$('#loading').fadeOut().promise().then(function(){
		$('#boot_screen').fadeIn().delay(bootTime).promise().then(function(){
			$('#boot_screen').fadeOut().promise().then(function(){
				$('#main_screen').fadeIn();

			});
		});
	});

	$('#about_btn').click(function(){
		$('#home').hide();
		$('#notepad').show();
		$("notepad_p").empty();
		text="Hey there!~My name is Rajat Goel.~I'm a engineering graduate (batch 2016), ";
		text+="working as Program Analyst Trainee at Cognizant Technology Solutions.";
		delay=50;
		charPosition=0;
		type();
	});
});

function type()
{
	var addDelay = 0
	if(text.charAt(charPosition) == '~'){
		$('#notepad_p').append('<br>');
		addDelay = 300;
	} else
		$('#notepad_p').append(text.charAt(charPosition));
	charPosition++;
	if (charPosition<=text.length)
	{
		setTimeout("type()", delay+addDelay);
	}
}
