
var bootTime = 000; //2000
var text, delay=50, charPosition;

var about="Hey there!~My name is Rajat Goel.~I'm an engineering graduate (batch 2016). ";
about+="Currently, I'm working as Program Analyst Trainee  at Cognizant Technology Solutions.";
about+="`I'm looking for a job opportunity (preferably as a Java developer).";

var about_site = "";


$(window).bind('load',function(){
	$('#loading').fadeOut().promise().then(function(){
		$('#boot_screen').fadeIn().delay(bootTime).promise().then(function(){
			$('#boot_screen').fadeOut().promise().then(function(){
				$('#main_screen').fadeIn();

			});
		});
	});

	$('#about_btn').click(function(){
		text = about;
		call_type();
	});
});

function call_type(){
	$('#home').hide();
	$('#notepad').show();
	$("notepad_p").empty();
	charPosition=0;
	type();
}
function type()
{
	var addDelay = 0
	if(text.charAt(charPosition) == '~'){
		$('#notepad_p').append('<br>');
		addDelay = 300;
	} else if(text.charAt(charPosition) == '`'){
		$('#notepad_p').append('<br><br>');
		addDelay = 300;
	} else
	$('#notepad_p').append(text.charAt(charPosition));
	charPosition++;
	if (charPosition<=text.length)
	{
		setTimeout("type()", delay+addDelay);
	}
}
