<?php
error_reporting(false);

function register_team( $event, $names, $emails, $mobiles, $branches, $colleges )
{
	$mysqli = new mysqli('localhost', 'skitprav_reg2', 'W!iE2qc^FO^)', 'skitprav_register');

	$query  = $mysqli->query('SELECT MAX(`token`+1) AS `newToken` FROM `pravah_registration` LIMIT 1');

	if ($query === false) return 'Unable to register your at this time, please try after some time.';

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
if ($query) file_Put_contents("../db/$token", json_encode(array($event, $names, $emails, $mobiles, $branches, $colleges)));
	$result = $query ?
		'Your are successfully registered for Accommodation, check your email for your token and more.' :
		'Unable to register your at this time, please try after some time.'
	;

	if ($query)	mail($emails[0], 'Registration Confirmation', "Thank you,

You have successfully registered for \"$event\" in PRAVAH-2015.

Your PRAVAH-ID is : PR_$token

Warm regards
Pravah 2015
", "FROM: Team Pravah<no_replay@skitpravah.com>", "no_replay@skitpravah.com");

	return $result;
}


if (@$_POST['event'] && @$_POST['name'] && @$_POST['email'] && @$_POST['mobile'] && @$_POST['college'])
{
	if ($_POST['event'] != 'none')
	{
		$error = register_team($_POST['event'], $_POST['name'], $_POST['email'], $_POST['mobile'], $_POST['branch'], $_POST['college']);
	}
	else
	{
		$error = 'Please select an accommodation.';
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
			<input name="event" type="text" value="ACCOMMODATION" hidden style="display:none;" />
			<div class="member_detail" member_no="1">
				<div user_type="leader">Enter your detail</div>
				<input placeholder="Name" type="text" name="name[]" required title="Enter your full name as on your collage identity card." />
				<input placeholder="Email" type="email" name="email[]" required title="Enter your valid email address for further communications." />
				<input placeholder="Mobile" type="text" name="mobile[]" required title="Please enter 10 digit mobile number." />
				<input placeholder="Branch" type="text" name="branch[]" required title="Please enter your branch." />
				<input placeholder="College" type="text" name="college[]" required title="Enter your current collage name." />
			</div>
			<input type="submit" value="Register Now" />
			<div class="note"><b>Contact Us:-</b>
				<ol style="line-height: 18px">
					<li>Rajendra Singh Chundawat<br>rajendra188@gmail.com<br>+91 - 7568 - 929929</li>
					<li></li>
					<li>Sudhanshu Chhajed<br>sudhanshuchajjed@gmail.com<br>+91 - 8094 - 235883</li>
				</ol>
			</div>
			<div class="note"><b>Note:-</b>
				<ol style="line-height: 18px">
					<li>Fill the details by <b>15 Feb. 2015</b></li>
					<li>Accommodation fee : <b>150/-</b> per day per person</li>
					<li>Security deposit : <b>100/-</b> per person</li>
					<li>Check Out time <b>08:00 am</b>, for extending your stay accommodation will be provided subject to availability. You may need to change your place of accommodation if it is already booked for future use</li>
					<li>We do not bear any responsibility of any loss or theft of belongings. Participants are requested to take care of their belongings on their own.</li>
					<li>Last entry at the accommodation center will be not late than <b>9 P.M.</b></li>
					<li>Boy participants are strictly prohibited around girl's hostel.</li>
				</ol>
			</div>
			<div class="note"><b>FAQs:-</b>
				<ol style="line-height: 18px">
					<li><b>Q. What should I do after coming to the campus ?</b><br>A. Outstation participants who have registered for accommodation are requested to report to the Central Hospitality Desk where the required formalities involving checking of documents, allotment of rooms will be finished.</li>
<br>
					<li><b>Q. Shall I carry my id card with me?</b><br>A. It is mandatory for all participants to carry college IDs. This is for your own convenience. Moreover you will be asked to produce your college id cards at the time of registration.</li>
<br>
					<li><b>Q. What kind of accommodation is provided?</b><br>A. Accommodation is provided on a sharing basis. We have common lounges and halls in each hostel. Mattresses and other essential commodities will be provided.</li>
<br>
					<li><b>Q. What is the weather going to be like ?</b><br>A. With the winter folding itself there will be mild chill in the weather so participants are requested to carry winter wear for precautionary measures..</li>
				</ol>
			</div>
		</form>
	</body>
<html>