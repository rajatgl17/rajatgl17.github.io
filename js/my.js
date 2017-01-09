
var bootTime = 1000; //2000
var text, delay=50, charPosition;

var about="Hey there!~My name is Rajat Goel.~I'm an engineering graduate (batch 2016). ";
about+="Currently, I'm working as Program Analyst Trainee  at Cognizant Technology Solutions.";
about+="`I'm looking for a job opportunity (preferably as a Java developer).";

var about_site = "At present this site is not fully completed. I'm trying to make this website"+
" as similar as possible in look and feel to Microsoft Windows 1.0 (first GUI OS by Microsoft "+
"released in 1985).`"+
"For reference I'm using online windows 1.0 emulator "+
"- http://www.pcjs.org/devices/pcx86/machine/5160/cga/256kb/win101/"+
"`The source code of this site is available at my github account - "+
"https://github.com/rajatgl17/rajatgl17.github.io"+
"`If you like it, you may contribute for improving it or develop your own portfolio using this.";

var blog = "Coming soon!!!";

var portfolio="------- Web applications -------"+
"~1. SKITClassTests - Online Assessment Portal"+
"~2. ApnaTiffin - E-commerce website"+
"~3. Pravah 2015"+
"~4. Pravah 2014"+
"`"+
"------- Mobile applications -------"+
"~5. Skitech - Android Application"
"`Enter project number (between 1 to 5)to know more about it :";

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
	$('#about_site_btn').click(function(){
		text = about_site;
		call_type();
	});
	$('#blog_btn').click(function(){
		text = blog;
		call_type();
	});
	$('#portfolio_btn').click(function(){
		text = portfolio;
		call_type();
	});

	$('#back_btn').click(function(){
		$('#home').show();
		$('#notepad').hide();
	});
});

function call_type(){
	$('#home').hide();
	$('#notepad').show();
	$("#notepad_p").empty();
	$('#back_btn').hide();
	$('#main_cursor').show();
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
	} else{
		$('#back_btn').show();
	}

}
