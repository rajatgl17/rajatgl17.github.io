<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Home | Pravah 2015</title>
	<meta name="viewport" content="width=device-width, user-scalable=0">
	<meta name="keywords" content="pravah, techfest, skit, jaipur, sports, cultural, technical, non-technical">
	<meta name="description" content="PRAVAH essays the true spirit of SKIT and symbolizes the creative faculty of the young minds. This prolific extravaganza has been organized since the inception and is all set to complete 14 glorious years of celebrating creativity, vigour and aesthetics in the field of Sports, Technical, Non-Technical and Cultural events. Over one hundred events assorted under the above mentioned areas, PRAVAH hosts several intra and inter collegiate competitions.">
	<link rel="shortcut icon" href="images/favicon.png">

	<link rel="stylesheet" href="css/jqueryui.css" type="text/css" />
	<link rel="stylesheet" href="css/main.css" type="text/css" />
	
	<!-- Scripts -->
	<script>
		var currentTime = <?php date_default_timezone_set('GMT'); echo time(); ?>000;
	</script>
	<script src="js/jquery.js"></script>
	<script src="js/jqueryui.js"></script>
	<script src="js/main.js"></script>
<body>
	<div id="toolbar">
		<div id="drawer"></div>
		<div id="title">Pravah 2015</div>
	</div>

	<div id="panel">
		<div id="content2" class="content_box about"></div>

		<div id="content2" class="content_box hospitality"></div>

		<div id="content2" class="content_box contact">
			<div id=contacts></div>
		</div>

		<div id="content2" class="content_box initiatives"></div>
		<div id="content2" class="content_box exhibitions"><div id="exhibition_content" style="padding:20px;"></div></div>
		<div id="content2" class="content_box workshops"><div id="workshop_content" style="padding:20px;"></div></div>

		<div id="content2" class="content_box competitions" style="text-align: center;">
			<div class="event_body">
				<div class="event_description" id="xyz123">
					<div class="event_title"><div class="go_back_icon"></div><div class="text"></div></div>
					<div class="event_tabs"></div>
					<div class="event_detail"></div>
				</div>
			</div>
			<div id="competitions"></div>
			<div class="competitions_list"></div>
		</div>

		<div id="content2" class="content_box gallery" style="overflow:hidden">
			<iframe src="" seamless="seamless" style="border: none; height: 100%; width: 100%;"></iframe>
		</div>

		<div id="content2" class="content_box partners">
			<div id=sponsors></div>
		</div>
	</div>

	<div id="menubar">
		<nav class="dr-menu dr-menu-open">
			<ul id="sidebar"></ul>
		</nav>
	</div>

	<div id="pravah">
		<div id="svg">
			<img src="svg/logo.svg">
		</div>
		<div id="text">
			<h1>RAVAH</h1>
			<span>23 - 28 FEBRUARY, 2015</span>
		</div>
	</div>
	
	<div id="timer">
		<object data="svg/timer.php" type="image/svg+xml"></object>
	</div>

	<div id="main-page2"></div>
</body>
</html>