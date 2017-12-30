<!doctype html>
<html manifest="demo.appcache" lang="en">
<head>
<meta charset="utf-8">
<title>Aaveg Registration</title>
<link rel="stylesheet" type="text/css" href="main.css">
<link rel="shortcut icon" href="images/icon.png">
<meta name="description" content="AAVEG skit form">
<meta name="keywords" content="aaveg, skit, pravah, register">
<meta name="designer" content="Subrato Biswas, Rajat Goel, Rajat Gupta, Aman Sharma">
</head>

<body>
<div id="aaveg"><img src="images/aaveg.png" alt="AAVEG"></div>
<div id="content">

<form action="index.php" method="post">
<label>Select Game type:</label>&nbsp;&nbsp;
<select name="game">
<option value="team">Team Game Events</option>
<option value="ind">Individual Game Events</option>
</select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<input type="submit" name="submit" value="Go to Registration form">
</form>

<?php
if(isset($_POST['submit']))
{
	$c=$_POST['game'];
	switch ($c)
	{
		case "team":
				print "<script language='javascript'> document.location.href='team.php'; </script>";
				break;
		case "ind":
				print "<script language='javascript'> document.location.href='individual.php'; </script>";
				break;			
	}
}
?>
</div>
</body>
</html>