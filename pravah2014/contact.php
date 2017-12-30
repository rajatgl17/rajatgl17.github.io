<!DOCTYPE html>
<html manifest="demo.appcache" lang="en">
<head>
	<meta charset="utf-8" />
	<title>Contact Form</title>
	<script  src="js/jquery-1.10.2.min.js"></script>
    <link href="css/formStyle.css" rel="stylesheet" type="text/css" />
    <link rel="shortcut icon" href="images/logo.png" />
    <script  src="js/formScript.js"></script>

<style>


</style>
</head>
<body>
<center>
<div id="head">
<center>
	<div id="logo">
    	<div id="pravahLogo"></div>
         <div id="hoverMeTagOut"><div id="hoverMeTagIn"><span>Click Here to Contact Us</span></div></div>
    </div>
    <img src="images/font.png" width="372" height="100"  alt=""/>
</center>
</div>
</center>
<div class="formDownArrow" id="contactText">
			You may reach us at<br><br>
            College Address :<br>
			Swami Keshvanand Institute of Technology, Management and Gramothan<br>
			Ramnagaria, Jagatpura<br>
			Jaipur-302025<br>
			Rajasthan, India<br><br>
            E-mail: <a href="mailto:contactus@skitpravah.com">contactus@skitpravah.com</a><br><br>
			Tel. : +91-0141- 5160400, 2752165 & 2752167<br>
			Fax: +91-0141-2759555<br><br>
			Site: <a href="http://www.skit.ac.in" target="_blank">www.skit.ac.in</a>
</div>

<div id="blacky"></div>

<div id="wrap">
  <div id='form_wrap'>
    <form action="contact.php" method="post">
      <p>
      
      
      <?php
         
if (isset($_POST['email']) && isset($_POST['name']) && isset($_POST['message']))
{
	if (!empty($_POST['email']) && !empty($_POST['message']))
	{
		  $from = 'From: '. $_POST['email'];	
		  $subject = $_POST['name'];
  		  $body = $_POST['message'];
  		  $body = wordwrap($body, 70); 
		  $to = 'contactus@skitpravah.com';      


		  if (mail($to, $subject, $body, $from))
  	 			echo 'Thank you,Your message has been sent. ';
  		  else
			  	echo 'Error: Please try again';
	}
}
?>

      
      
      </p>
      <label for="name">Name: </label>
      <input type="text" name="name" value="" id="name" />
      <label for="email">Email: </label>
      <input type="text" name="email" value="" id="email" />
      
	  <label for="email">Your Message : </label>
      <textarea  name="message" value="Your Message" id="message" ></textarea>
	  <input type="submit" name ="submit" value="Send" />
    </form>
  </div>
</div>
</body>
</html>