<!doctype html>
<html manifest="demo.appcache" lang="en">
<head>
<meta charset="utf-8">
<title>Individual Registration</title>
<link rel="stylesheet" type="text/css" href="main.css">
<link rel="shortcut icon" href="images/icon.png">
<meta name="description" content="AAVEG skit form for individual events">
<meta name="keywords" content="aaveg, skit, pravah, register">
<meta name="designer" content="Subrato Biswas, Rajat Goel, Rajat Gupta, Aman Sharma">

</head>
<body>
<div id="aaveg"><img src="images/aaveg.png" alt="AAVEG"></div>
<div id="content">
<form action="individual.php" method="post">

<label>Select Game:</label>&nbsp;&nbsp;
<select name="game">
<option value="chess">Chess</option>
<option value="tabletennis1">Table Tennis (individual)</option>
<option value="carrom1">Carrom (individual)</option>
<option value="badminton1">Badminton (individual)</option>
</select>

<br>

<label>Player:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<input type="text" required placeholder="Name" name="p1">&nbsp;&nbsp;
<input type="text" required placeholder="Contact Number (10 digits)" pattern="[0-9]{10}" name="num1">&nbsp;&nbsp;
<input type="email" placeholder="Email-ID" name="email" required>

<br>

<label>Coach:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<input type="text" name="coach" placeholder="Coach's name (if any)">

<br>

<label>College:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<input type="text" required placeholder="College" name="college">&nbsp;&nbsp;

<br>

<label>Gender:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<label>Boy</label><input type="radio" name="type" value="boys" checked>;&nbsp;&nbsp;
<label>Girl</label><input type="radio" name="type" value="girls">

<br>

<input type="submit" name="submit" value="Register">
</form>
<?php
if(isset($_POST['submit']))
{
	$game=$name=$number=$email=$coach=$college=$gender="";
	
	$game=$_POST['game'];
	$name=$_POST['p1'];
	$number=$_POST['num1'];
	$email=$_POST['email'];
	$coach=$_POST['coach'];
	$college=$_POST['college'];
	$gender=$_POST['type'];
	
	$name=htmlspecialchars($name);
	$email=htmlspecialchars($email);
	$coach=htmlspecialchars($coach);
	$college=htmlspecialchars($college);
	
	$con=mysqli_connect("localhost","skitprav_aaveg","PRAVAHskit5959","skitprav_aaveg");
	if (mysqli_connect_errno())
		echo "Failed to connect to MySQL: " . mysqli_connect_error();

	$sql="INSERT INTO individual
	VALUES
	('$game','$name','$number','$email','$coach','$college','$gender')";

	if (!mysqli_query($con,$sql))
		echo 'OOPS there has been some problem. Please retry';
	else{
		$from='contactus@skitpravah.com';
		$subject='Registration successful';
		$message=$name.' your registration form for '.$game.' has been successfuly submitted. Contact respective game co-ordinator for further information';
		if(mail($email,$subject,$message,"From: $from\n"))
			echo "Registration Successful. Please check your email for confirmation mail.";
	}
	mysqli_close($con);
}
?>
</div>
</body>
</html>