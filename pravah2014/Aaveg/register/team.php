<!doctype html>
<html manifest="demo.appcache" lang="en">
<head>
<meta charset="utf-8">
<title>Team Registration</title>
<link rel="stylesheet" type="text/css" href="main.css">
<link rel="shortcut icon" href="images/icon.png">
<meta name="description" content="AAVEG skit form for team events">
<meta name="keywords" content="aaveg, skit, pravah, register">
<meta name="designer" content="Subrato Biswas, Rajat Goel, Rajat Gupta, Aman Sharma">

</head>
<body
<div id="aaveg"><img src="images/aaveg.png" alt="AAVEG"></div>
<div id="content">
<form action="team.php" method="post">

<label>Select Game:</label>&nbsp;&nbsp;
<select name="game">
<option value="basketball">Basketball</option>
<option value="volleyball">Volleyball</option>
<option value="tabletennis2">Table Tennis (team)</option>
<option value="carrom2">Carrom (team)</option>
<option value="football">Football</option>
<option value="badminton2">Badminton (team)</option>
<option value="gullycricket">Gully Cricket</option>
<option value="gullycricket">Kabaddi</option>
</select>

<br>

<label>Captain:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<input type="text" required placeholder="Name" name="p1">&nbsp;&nbsp;
<input type="text" required placeholder="Contact Number (10 digits)" pattern="[0-9]{10}" name="num1">&nbsp;&nbsp;
<input type="email" placeholder="Email-ID" name="email" required>

<br>

<label>Vice Captain:</label>&nbsp;&nbsp;
<input type="text" required placeholder="Name" name="p2">&nbsp;&nbsp;
<input type="text" required placeholder="Contact Number (10 digits)" pattern="[0-9]{10}" name="num2">

<br>

<label>Coach:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<input type="text" name="coach" placeholder="Coach's name (if any)">

<br>
<label>
College:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<input type="text" required placeholder="College" name="college">&nbsp;&nbsp;

&nbsp;&nbsp;

<label>Number of team members:</label>&nbsp;&nbsp;
<input type="text" placeholder="Including captain and vice-captain" name="num" required>

<br>

<label>Team type:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<label>Boys</label><input type="radio" name="type" value="boys" checked>
<label>Girls<label><input type="radio" name="type" value="girls">

<br>

<input type="submit" name="submit" value="Register">

</form>

<?php
if(isset($_POST['submit']))
{
	$game=$captainname=$captainnumber=$captainemail=$vcaptainname=$vcaptainnumber=$coach=$college=$numberofteammembers=$gender="";
	
	$game=$_POST['game'];
	$captainname=$_POST['p1'];
	$captainnumber=$_POST['num1'];
	$captainemail=$_POST['email'];
	$vcaptainname=$_POST['p2'];
	$vcaptainnumber=$_POST['num2'];
	$coach=$_POST['coach'];
	$college=$_POST['college'];
	$numberofteammembers=$_POST['num'];
	$gender=$_POST['type'];
	
	$captainname=htmlspecialchars($captainname);
	$vcaptainname=htmlspecialchars($vcaptainname);
	$captainemail=htmlspecialchars($captainemail);
	$coach=htmlspecialchars($coach);
	$college=htmlspecialchars($college);
	
	$con=mysqli_connect("localhost","skitprav_aaveg","PRAVAHskit5959","skitprav_aaveg");
	if (mysqli_connect_errno())
		echo "Failed to connect to MySQL: " . mysqli_connect_error();

	$sql="INSERT INTO team
	VALUES
	('$game','$captainname','$captainnumber','$captainemail','$vcaptainname','$vcaptainnumber','$coach','$college','$numberofteammembers','$gender')";

	if (!mysqli_query($con,$sql))
		echo 'OOPS there has been some problem. Please retry';
	else{
		$from='contactus@skitpravah.com';
		$subject='Registration successful';
		$message=$captainname.' your registration form for '.$game.' has been successfuly submitted. Contact respective game co-ordinator for further information.';
		if(mail($captainemail,$subject,$message,"From: $from\n"))
			echo "Registration Successful.<br> Please check your email (inbox/spam folder) for confirmation mail.";
	}
		echo "Registration Successful";

	mysqli_close($con);
}
?>

</div>
</body>
</html>