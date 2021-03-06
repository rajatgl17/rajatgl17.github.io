
var bootTime = 2000; //2000
var text, delay, charPosition, $typeAt;
var flag=0;

var url1 = "https://rajatgl17.github.io/github-insights/";
var url2 = "http://skitclasstests.skit.ac.in";
var url3 = "https://github.com/rajatgl17/ApnaTiffin";
var url4 = "https://rajatgl17.github.io/pravah2015/";
var url5 = "https://rajatgl17.github.io/pravah2014/";
var url6 = "https://play.google.com/store/apps/details?id=in.ac.skit.skitech&hl=en";

var about="Hey! My name is Rajat Goel."+
"`Currently, I'm working as Software Engineer at Azuga Telematics, Bengaluru.";

var contact = 'E-mail : rajatgl17[at]gmail[dot]com';

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
"^1. Github Insights"+
"^2. SKITClassTests - Online Assessment Portal"+
"^3. ApnaTiffin - E-commerce website"+
"^4. Pravah 2015"+
"^5. Pravah 2014"+
"~"+
"------- Mobile applications -------"+
"^6. Skitech - Android Application"+
"`";

var help="~Commands :"+
"^PORTFOLIO       -- list of all projects"+
"^HELP            -- help"+
"^DESC <number>   -- for description eg. 'DESC 1'"+
"^LAUNCH <number> -- open project link"+
"^CLEAR"+
"^EXIT"+
"`";


var desc1="~"+
"Github Insights"+
"~Description:  Analytical dashborad for programming languages comparison based on statistics"+
" acquired using Github's public search APIs."+
"`Skills : Java, Servlets, JDBC, MySQL, REST-API, Dygraph.js"+
"~Link : "+url1+
"`";

var desc2="~"+
"SKITClassTests"+
"~Description: An online assessment portal developed for conducting class tests in my college (SKIT, Jaipur). "+
"This assessment portal has two parts. One for students, to login and give test and "+ 
"other for teachers to create new tests, edit tests, and obtain students mark list in excel format."+
"`Skills : PHP, MariaDB, CodeIgniter framework"+
"~Link: "+url2+
"`";
var desc3="~"+
"ApnaTiffin"+
"~Description: An e-commerce website built for a Jaipur based tiffin service provider."+
"The website is divided into two sub-websites. The frontend part is for users to sign up and book"+
" their orders, while backend part is for management to view user details, check orders and manage "+
"frontend website (change banners, edit food menu etc.)"+
"`Skills : PHP, MySQL, PayU money API, CodeIgniter framework"+
"~Link : "+url3+
"`";
var desc4="~"+
"Pravah 2015 - Website"+
"~Description: Website for my college’s annual techfest – Pravah for the year 2015."+
"`Skills : HTML5, CSS3, JavScript (GreenSock library), SVG, PHP, MySQL"+
"~Link : "+url4+
"`";
var desc5="~"+
"Pravah 2014 - Website"+
"~Description: Website for my college’s annual techfest – Pravah for the year 2014."+
"`Skills : HTML5, CSS3, JavScript, PHP, MySQL"+
"~Link : "+url5+
"`";
var desc6="~"+
"Skitech - Android Application"+
"~Description: This android application facilitates the students of SKIT by sending them the college notices "+
"right in the notification menu of their android mobiles. The backend part for posting notices is "+
"developed using core PHP. The android application uses GCM service for push notifications."+
"`Skills : Java, Android SDK, jsoup, SQLite, PHP, MySQL"+
"~Link : "+url6+
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

	$('#contact_btn').click(function(){
		text = contact;
		call_type();
	});

	$('#portfolio_btn').click(function(){
		$('#home').hide();
		$('#cmd').show();
		$('#cmd_input').empty();
		$('#cmd_output').empty();
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
				e.preventDefault();
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
	if(flag==2)
		flag=1;
	var addDelay = 0;
	$('#cmd').scrollTop($('#cmd_output').outerHeight());

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
		if(flag==1)
			flag=2;
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
	if(flag==2){
		if(e.which == 13) {                                           //enter
			var command = $('#cmd_input').text();
			$('#cmd_input').empty();
			execute_command(command);
		} else if(e.which == 8){                                      //backspace
			e.preventDefault();
			var temp = $('#cmd_input').text();
			$('#cmd_input').text(temp.substring(0,temp.length-1));
		} else {
			$('#cmd_input').append(String.fromCharCode(e.which));
		}
	}
}

function execute_command(command){
	$('#cmd_output').append('> '+command);
	$typeAt = $('#cmd_output');
	charPosition=0;
	delay = 1;
	switch(command.toLowerCase()){
		case 'portfolio': text = portfolio; break;
		case 'help': text = help; break;
		case 'desc 1': text = desc1; break;
		case 'desc 2': text = desc2; break;
		case 'desc 3': text = desc3; break;
		case 'desc 4': text = desc4; break;
		case 'desc 5': text = desc5; break;
		case 'desc 6': text = desc6; break;
		case 'launch 1': window.open(url1, '_blank'); text='~'; break;
		case 'launch 2': window.open(url2, '_blank'); text='~'; break;
		case 'launch 3': window.open(url3, '_blank'); text='~'; break;
		case 'launch 4': window.open(url4, '_blank'); text='~'; break;
		case 'launch 5': window.open(url5, '_blank'); text='~'; break;
		case 'launch 6': window.open(url6, '_blank'); text='~'; break;
		case 'clear': $('#cmd_output').empty(); text='~'; break;
		case 'exit': $('#home').show();	$('#cmd').hide(); flag=0; break;
		default: text = '~ \''+command+'\' is not recogized as a internal or external command.`'; break;
	}
	type();
}