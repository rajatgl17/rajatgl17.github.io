<?php
error_reporting(false);

function register_team( $event, $names, $emails, $mobiles, $branches, $colleges )
{
	$mysqli = new mysqli('localhost', 'skitprav_reg2', 'W!iE2qc^FO^)', 'skitprav_register');

	$query  = $mysqli->query('SELECT MAX(`token`+1) AS `newToken` FROM `pravah_registration` LIMIT 1');

	if ($query === false) return 'Unable to register your team at this time, please try after some time.';

	$object = $query->fetch_array(1);

	$event = strtoupper($event);
	$token  = $object['newToken'];

	$query_string = '';
	foreach($names as $index=>$name)
	{
		$ename   = addslashes(trim($event));
		$email   = addslashes(trim($emails[$index]));
		$branch  = addslashes(trim($branches[$index]));
		$mobile  = addslashes(trim($mobiles[$index] ? $mobiles[$index] : 0));
		$college = addslashes(trim($colleges[$index] ? $colleges[$index] : ''));
		$query_string .= ($query_string ? ', ' : ' ') . "('$token', '$ename', '$name', '$email', '$mobile', '$branch', '$college')";
	}

	$query  = $mysqli->query('INSERT INTO `pravah_registration` (`token`, `event`, `name`, `email`, `mobile`, `branch`, `college`) VALUES ' . $query_string);

	if ($query) file_Put_contents("db/$token", json_encode(array($event, $names, $emails, $mobiles, $branches, $colleges)));


	$result = $query ?
		'Your team is successfully registered, check your email for your token and more.' :
		'Unable to register your team at this time, please try after some time.'
	;

	if ($query)	mail($emails[0], 'Registration Confirmation', "Thank you,

Your PRAVAH-ID is : PR_$token

You have successfully registered for \"$event\" in PRAVAH-2015.

You have to submit required fees (as shown when registering) at \"Registration Counter\" before event starts.

Event Schedule can be found at : http://skitpravah.com/schedule.jpg

Warm regards
Pravah 2015
", "FROM: Team Pravah<no_replay@skitpravah.com>", "no_replay@skitpravah.com");

	return $result;
}


if (@$_POST['event'] && @$_POST['name'] && @$_POST['email'] && @$_POST['mobile'] && @$_POST['college'])
{
	if ($_POST['event'] != 'NONE')
	{
		$error = register_team($_POST['event'], $_POST['name'], $_POST['email'], $_POST['mobile'], $_POST['branch'], $_POST['college']);
	}
	else
	{
		$error = 'Please select a event.';
	}
}

?>
<!DOCTYPE HTML>
<html>
	<head>
		<title>Registrations | PRAVAH 2015</title>
		<script src="jquery.min.js"></script>
		<script src="register.js"></script>
		<link href="register.css" rel="stylesheet" type="text/css">
		<meta name="viewport" content="width=device-width, user-scalable=0" />
	</head>
	<body>
		<form method="post" onsubmit="return validateInputes();">
			<div id="error"><?php echo $error; ?></div>
			<select id="categories">
					<option value="NONE">Select Category</option>
			</select>
			<select name="event" id="event">
					<option value="NONE">Select Event</option>
			</select>
			<div class="member_detail" member_no="1">
				<div user_type="leader">Leaders Detail</div>
				<input placeholder="Name" type="text" name="name[]" required title="Enter your full name as on your collage identity card." />
				<input placeholder="Email" type="email" name="email[]" required title="Enter your valid email address for further communications." />
				<input placeholder="Mobile" type="text" name="mobile[]" required title="Please enter 10 digit mobile number." />
				<input placeholder="Branch" type="text" name="branch[]" required title="Please enter your branch." />
				<input placeholder="College" type="text" name="college[]" required title="Enter your current collage name." />
			</div>
			<div id="add_member">Add Member</div>
			<input id="submit_form" type="submit" value="Register Team" />
			<div class="note"><b>Note:-</b>
				<ul id="notes"></ul>
			</div>
		</form>
	</body>
<html>