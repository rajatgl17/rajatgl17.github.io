
var bootTime = 000; //2000
var text, delay, charPosition, $typeAt;
var flag=0;

var about="Hey! My name is Rajat Goel.";
about+="~Currently, I'm working as Program Analyst Trainee (Mainframe)  at Cognizant Technology Solutions.";
about+="`I'm looking for a job opportunity (preferably as a Java developer).";

var about_site = "I started developing this portfolio website under Freecodecamp's - "+
"'Build a Personal Portfolio Webpage' challenege."+
"`At present this site is not fully completed. I'm trying to make this website's"+
" UI similar to Microsoft Windows 1.0 (first GUI OS by Microsoft "+
"released in 1985).`"+
"For reference I'm using online windows 1.0 emulator "+
"- http://www.pcjs.org/devices/pcx86/machine/5160/cga/256kb/win101/"+
"`The source code of this site is available at my github account - "+
"https://github.com/rajatgl17/rajatgl17.github.io";

var blog = "Coming soon!!!";

var portfolio="~------- Web applications -------"+
"^1. SKITClassTests - Online Assessment Portal"+
"^2. ApnaTiffin - E-commerce website"+
"^3. Pravah 2015"+
"^4. Pravah 2014"+
"~"+
"------- Mobile applications -------"+
"^5. Skitech - Android Application"+
"`";

var help="~Commands :"+
"^PORTFOLIO       -- list"+
"^HELP            -- help information"+
"^DESC <number>   -- eg. DESC 3 for description of pravah 2014"+
"^LAUNCH <number>"+
"^EXIT"+
"`";

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
		$('#home').hide();
		$('#cmd').show();
		flag=1;
		setTimeout("portfolio_cmd_start()",500);
	});

	$('#back_btn').click(function(){
		$('#home').show();
		$('#notepad').hide();
	});

	$(document).keypress(function(e) {
		if(flag==0){
			if(e.which == 8 || e.which == 13) {
				$('#home').show();
				$('#notepad').hide();
			}
		} else{
			cmd_input(e);
		}	
	});


	$('.m1').click(function(){
		$('.k1').toggle();
		$('.k2').hide();
		$('.k3').hide();
		$('#catch_click').show();
	});
	$('.m2').click(function(){
		$('.k2').toggle();
		$('.k1').hide();
		$('.k3').hide();
		$('#catch_click').show();
		$('#catch_click').show();
	});
	$('.m3').click(function(){
		$('.k3').toggle();
		$('.k2').hide();
		$('.k1').hide();
		$('#catch_click').show();
	});

	$('#catch_click').click(function(){
		$('.k2').hide();
		$('.k1').hide();
		$('.k3').hide();
		$('#catch_click').hide();
	});


});

function call_type(){
	$('#home').hide();
	$('#notepad').show();
	$("#notepad_p").empty();
	$('#back_btn').hide();
	charPosition=0;
	delay = 25;
	$typeAt = $('#notepad_p');
	type();
}
function type()
{
	var addDelay = 0;
	if(text.charAt(charPosition) == '~'){
		$typeAt.append('<br>');
		addDelay = 300;
	} else if(text.charAt(charPosition) == '`'){
		$typeAt.append('<br><br>');
		addDelay = 300;
	} else if(text.charAt(charPosition) == '^'){
		$typeAt.append('<br>&nbsp;&nbsp;&nbsp;');
		addDelay = 300;
	} else
	$typeAt.append(text.charAt(charPosition));
	charPosition++;
	if (charPosition<=text.length)
	{
		setTimeout("type()", delay+addDelay);
	} else{
		$('#back_btn').show();
	}

}

function portfolio_cmd_start(){
	$typeAt = $('#cmd_input');
	charPosition=0;
	text = 'portfolio';
	type();
	setTimeout("cmd_activate('portfolio')", 500);
	setTimeout("cmd_activate('help')", 5000);
}

function cmd_activate(command){
	$('#cmd_output').show();
	$('#cmd_input').empty();
	execute_command(command);
}

function cmd_input(e){
	if(e.which == 8 || e.which == 13) {
		var command = $('#cmd_input').text();
		$('#cmd_input').empty();
		execute_command(command);
	} else {
		$('#cmd_input').append(String.fromCharCode(e.which));
	}
}

function execute_command(command){
	$('#cmd_output').append('> '+command);
	$typeAt = $('#cmd_output');
	charPosition=0;
	delay = 1;
	switch(command){
		case 'portfolio': text = portfolio; break;
		case 'help': text = help; break;
		case 'default': text = '~Invalid command~'; break;
	}
	type();
}