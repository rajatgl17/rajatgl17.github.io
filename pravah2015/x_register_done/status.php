<?php

session_start();
if(!$_SESSION['initiated'])
{
	session_regenerate_id();
	$_SESSION['initiated'] = true;
}

if($_SESSION['verified']!=true || time()-$_SESSION['activity']>700)
{
	if (@$_POST['password'] && $_POST['password']=='2015.technical..')
		$_SESSION['verified']=true;
	else
		exit('<form method=post><input type="password" name="password" placeholder="Password" /><input type="Submit" /></form>');
}

$_SESSION['activity'] = time();


$list = json_decode('[{"NAME":"BADMINTON","CATEGORY":"AAVEG"},{"NAME":"BASKETBALL","CATEGORY":"AAVEG"},{"NAME":"BRIDGE_O_MANIA","CATEGORY":"TECHTRIX"},{"NAME":"CARD_CASTLE","CATEGORY":"TECHTRIX"},{"NAME":"CARROM","CATEGORY":"AAVEG"},{"NAME":"CHESS","CATEGORY":"AAVEG"},{"NAME":"CLASH_OF_BAND","CATEGORY":"MUSIC"},{"NAME":"COLLAGE_MAKING","CATEGORY":"FINE_ARTS"},{"NAME":"DANCING_FINGERS","CATEGORY":"MUSIC"},{"NAME":"DOCUMANIA","CATEGORY":"DIGITAL_ARTS"},{"NAME":"DUMB_CHARADES","CATEGORY":"DRAMATICS"},{"NAME":"ETHICAL_HACKING","CATEGORY":"WORKSHOPS"},{"NAME":"FEAR_FACTOR","CATEGORY":"OTHER"},{"NAME":"FOOTBALL","CATEGORY":"AAVEG"},{"NAME":"GROUP","CATEGORY":"DANCE"},{"NAME":"GULLY_CRICKET","CATEGORY":"AAVEG"},{"NAME":"IMAGE_PROCESSING","CATEGORY":"WORKSHOPS"},{"NAME":"JUNKYARD_WARS","CATEGORY":"ROBOKON"},{"NAME":"KABADDI","CATEGORY":"AAVEG"},{"NAME":"KAVYANJALI","CATEGORY":"LITERARY"},{"NAME":"LINE_FOLLOWER","CATEGORY":"ROBOKON"},{"NAME":"MECHATRON","CATEGORY":"ROBOKON"},{"NAME":"NUKKAD_NATAK","CATEGORY":"DRAMATICS"},{"NAME":"PAPPERAAZI","CATEGORY":"TECHTRIX"},{"NAME":"PING_PONG","CATEGORY":"ROBOKON"},{"NAME":"PIRATES_WAR","CATEGORY":"ROBOKON"},{"NAME":"PRAVAH_SELFIE","CATEGORY":"DIGITAL_ARTS"},{"NAME":"RANGMANCH","CATEGORY":"DRAMATICS"},{"NAME":"RANGREZ","CATEGORY":"FINE_ARTS"},{"NAME":"ROBO_RACE","CATEGORY":"ROBOKON"},{"NAME":"ROBO_WARS","CATEGORY":"ROBOKON"},{"NAME":"SHADES","CATEGORY":"FINE_ARTS"},{"NAME":"SNAPSHOT","CATEGORY":"DIGITAL_ARTS"},{"NAME":"SOLO","CATEGORY":"DANCE"},{"NAME":"STRAW_SCRAPPER","CATEGORY":"TECHTRIX"},{"NAME":"STREETZ","CATEGORY":"DANCE"},{"NAME":"SUR","CATEGORY":"MUSIC"},{"NAME":"TABLE_TENNIS","CATEGORY":"AAVEG"},{"NAME":"TOUCH_SCREEN","CATEGORY":"WORKSHOPS"},{"NAME":"VOLLEYBALL","CATEGORY":"AAVEG"},{"NAME":"WAR_OF_DJS","CATEGORY":"MUSIC"},{"NAME":"X_COPTER","CATEGORY":"ROBOKON"},{"NAME":"ACCOMMODATION","CATEGORY":"ETC"},{"NAME":"AUTO_EXPO","CATEGORY":"EXHIBITIONS"},{"NAME":"ALL_INDIA_STUDENT_INNOVATION_CHALLENGE","CATEGORY":"EXHIBITIONS"},{"NAME":"ART_EXHIBITION","CATEGORY":"EXHIBITIONS"},{"NAME":"SCHOLASTIC_TECHNICAL_PROJECT_EXHIBITION","CATEGORY":"EXHIBITIONS"},{"NAME":"RANGOLI","CATEGORY":"FINE_ARTS"},{"NAME":"CAD_O_MANIA","CATEGORY":"FINE_ARTS"},{"NAME":"ASSEMBLAZE","CATEGORY":"FINE_ARTS"}]', true);


$events = array(); $categories = array();


foreach($list as $event)
{
	$categories[ $event['CATEGORY'] ][] = $event['NAME'];

	if (in_array($event['NAME'], $events)===false) $events[] = $event['NAME'];
}

$event = $_GET['event']=='none' ? '' : $_GET['event'];
$category = $_GET['category']=='none' ? '' : $_GET['category'];

if (($event && in_array($event, $events)!==false) || ($category && array_key_exists($category, $categories)===true))
{
	$find_event = $event ? array( $event ) : $categories[ $category ];
	$find_event = implode(count($find_event) == 1 ? '' : "','", $find_event);

	$mysqli = new mysqli('localhost', 'skitprav_reg2', 'W!iE2qc^FO^)', 'skitprav_register');

	$teams = $mysqli->query("SELECT DISTINCT `token` FROM `pravah_registration` WHERE `event` IN ('$find_event')");
	$totalTeams = $teams->num_rows;

	$participants = $mysqli->query("SELECT * FROM `pravah_registration` WHERE `event` IN ('$find_event')");
	$totalParticipants = $participants->num_rows;
}
?>
<!DOCTYPE HTML>
<html>
	<head>
		<title>Registrations | PRAVAH 2015</title>
		<script src="jquery.min.js"></script>
		<script src="status.js"></script>
		<link href="status.css" rel="stylesheet" type="text/css">
		<meta name="viewport" content="width=device-width, user-scalable=0" />
	</head>
	<body>
		<form method=get>
			<select id=category name=category><option value="none">Select a category</option></select>
			<select id=event name=event><option value="none">Select an individual event</option></select>
			<input type="submit" value="Fetch" />
		</form>
<?php

if (@$participants)
{
?>
		<table>
			<tr><td colspan=4 style="border: none; font-weight: bold;">TEAMS : <?php echo $totalTeams; ?></td><td colspan=3 style="border: none; font-weight: bold;">PARTICIPANTS : <?php echo $totalParticipants; ?></td></tr>
			<tr><th>EVENT</th><th>TOKEN</th><th>FEE RECIEPT</th><th>NAME</th><th>COLLEGE</th><th>BRANCH</th><th>MOBILE</th><th>EMAIL</th></tr>
<?php

while($participant = $participants->fetch_assoc())
{
echo '<tr><td>'. ucwords(strtolower($participant['event'])) .'</td><td>'. $participant['token'] .'</td><td>'. $participant['fee_reciept'] .'</td><td>'. ucwords(strtolower($participant['name'])) .'</td><td>'. ucwords(strtolower($participant['college'])) . '</td><td>'. ucwords(strtolower($participant['branch'])) . '</td><td>'. $participant['mobile'] .'</td><td>'. strtolower($participant['email']) .'</td></tr>';
}

?>
		</table>
<?php
}
?>
	</body>
</html>