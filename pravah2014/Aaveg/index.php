<!DOCTYPE html>
<html manifest="demo.appcache" lang="en">
	<head>
		<title>AAVEG 2014- SKIT</title>
		<meta charset="utf-8">
        <meta name="description" content="AAVEG is the national level sports event organized by SKIT, Jaipur">
        <meta name="keywords" content="aaveg, SKIT, techfest, sports, extragavanza, national, jaipur, college, fest ">
		<meta name="designer" content="Subrato Biswas, Rajat Goel, Rajat Gupta, Aman Sharma">
 		<link rel="shortcut icon" href="images/icon.png">
		
		<link rel="stylesheet" type="text/css" href="css/styles.css" />
		<script src="js/jquery.min.js"></script>

		
		<link rel="stylesheet" href="css/reset.css" type="text/css" media="all">
		<link rel="stylesheet" href="css/layout.css" type="text/css" media="all">
		<link rel="stylesheet" href="css/prettyPhoto.css" type="text/css" media="all">
		<link rel="stylesheet" href="css/styleaaveg.css" type="text/css" media="all">
		<script type="text/javascript" src="js/jquery-1.6.js" ></script>
		<script type="text/javascript" src="js/cufon-yui.js"></script>
		<script type="text/javascript" src="js/cufon-replace.js"></script>
  		<script type="text/javascript" src="js/Ubuntu_400.font.js"></script>
  		<script type="text/javascript" src="js/Ubuntu_700.font.js"></script>
		<script type="text/javascript" src="js/bgSlider.js" ></script>
		<script type="text/javascript" src="js/script.js" ></script>
		<script type="text/javascript" src="js/pages.js"></script>
		<script type="text/javascript" src="js/jquery.easing.1.33.js"></script>
		<script type="text/javascript" src="js/bg.js" ></script>
		<script type="text/javascript" src="js/tabs.js"></script>
		<script type="text/javascript" src="js/jquery.prettyPhoto.js"></script>
		<script type="text/javascript">
		
			function onStart()
			{

			}
		
		</script>
        
        <style type="text/css">
body{
		background-image:url(images/background.jpg);
		background-attachment:fixed;
		background-position:center;
		background-repeat:no-repeat;
		background-size:cover;	
}
</style>
	</head>
	<body id="page1" onLoad="onStart();">
		<div class="spinner"></div>
		<div id="bgSlider"></div>
		
		<div class="extra">
		
			<div class="main">
				
				<div class="box">
				
				
				<div id="counter">
					<script type="text/javascript" src="js/C3counter.js"></script>
					<script type="text/javascript">
						// Default options 
						C3Counter("counter", { startTime :<?php
															$date = strtotime("March 2, 2014 06:30 PM");
															$remaining = $date - time();
															echo "$remaining";
															?>
												});
					</script>
					</div>
<!-- header -->
					<header>
						
						<nav>
						
							<ul id="menu">
								<li><a href="#!/aavegt"><span></span><strong>AAVEG'14</strong></a></li>
								<li><a href="#!/eventst"><span></span><strong>EVENTS</strong></a></li>
								<li><a href="#!/galleryt"><span></span><strong>GALLERY</strong></a></li>
								<li><a href="#!/rulest"><span></span><strong>RULES</strong></a></li>
								<li><a href="#!/contactt"><span></span><strong>Contact</strong></a></li>
                                <li><a href="register/index.php" target="_blank"><span></span><strong>Registration</strong></a></li>
                                <li><a href="http://www.skitpravah.com" target="_blank"><span></span><strong>PRAVAH'14</strong></a></li>
							</ul>
						</nav>
					</header>
					
<!--content -->
					<article id="content">
					
						<div class="ic"></div>
						<ul>
							<li id="aavegt">
								<div class="box1">
									<div class="inner">
										<a href="#" class="close" data-type="close"><span></span></a>
										<div class="wrapper pad_bot1">
											  <table width="200" border="0">
											    <tr>
											      <td>&nbsp;</td>
                                                  <td ></td>
											      <td style="padding-left:12%;">&nbsp;&nbsp;<img src="images/sprts.png"></td>
										        </tr>
									      </table><br><br>
<p>To groom, inspire and showcase the champions, SKIT Jaipur   presents AAVEG-2014 All India sports event. Come test your sportsmanship from all over India. 
  Proudly marching into its second year, AAVEG has now become a synonym for competitiveness and sportsmanship. Sporting event are organised in Basketball, Volleyball, Table Tennis, Chess, carrom. There are informal events too.
  From 5th to 7th March, water your efforts with your sweat and discover how sweet the fruit of victory is.
</p>	

										</div>
									</div>
								</div>
							</li>
							<li id="eventst" name="eventst">
								<div class="box1">
									<div class="inner">
										<a href="#" class="close" data-type="close"><span></span></a>
										<div class="wrapper">
									      <table width="104%" border="0" cellpadding="10">
										     <tr>
										       <td width="47%"><h2>BASKETBALL</h2>
									               <h5>REGISTRATION FEE: Rs. 1000 PER TEAM</h5><br>
                                                <a href="#!/bb" class="button1"><span></span><strong>More Details</strong></a><br><br>
                                               </td>
										       <td width="53%"><h2>&nbsp;&nbsp; VOLLEYBALL</h2>
                                                    <h5>REGISTRATION FEE: Rs. 1000 PER TEAM</h5><br>
                                                <a href="#!/vb" class="button1"><span></span><strong>More Details</strong></a>    
                                               </td>
									        </tr>
                                            
										     <tr>
                                                <br><td width="47%"><h2>TABLE TENNIS</h2>
									               <h5>REGISTRATION FEE: Rs. 500 PER TEAM<br> OR
                                                   Rs. 100 PER PLAYER</h5><br>
                                                <a href="#!/tt" class="button1"><span></span><strong>More Details</strong></a>
                                               </td>
										       <td width="53%"><h2>&nbsp;&nbsp;Carrom</h2>
                                                    <h5>REGISTRATION FEE: Rs. 150 PER TEAM OR<br>
                                                     Rs. 100 PER PLAYER</h5><br>
                                                <a href="#!/car" class="button1"><span></span><strong>More Details</strong></a><br> <br>   
                                               </td> 
									        </tr>
										     <tr>
										       <td width="47%"><h2>CHESS</h2>
									               <h5>REGISTRATION FEE: Rs. 100 PER PLAYER</h5><br>
                                                <a href="#!/chess" class="button1"><span></span><strong>More Details</strong></a><br><br>
                                               </td>
										       <td width="53%"><h2>&nbsp;&nbsp;GULLY CRICKET</h2>
                                                    <h5>REGISTRATION FEE:                Rs.150 PER 
<br/>TEAM</h5><br>
                                                <a href="#!/gali" class="button1"><span></span><strong>More Details</strong></a><br><br>    
                                               </td>
									        </tr>
										     <tr>
										       <td width="50%"><h2>FOOTBALL</h2>
                                                <h5>REGISTRATION FEE: Rs. 1000 PER TEAM</h5><br>
                                                <a href="#!/pl" class="button1"><span></span><strong>More Details</strong></a>
												<h2>KABADDI</h2>
                                                <h5>REGISTRATION FEE: Rs. 1000 PER TEAM</h5><br>
                                                <a href="#!/gc" class="button1"><span></span><strong>More Details</strong></a>
                                                    
                                               </td>
                                               
                                               
                                                <td width="53%"><h2>&nbsp;&nbsp;BADMINTON</h2>
                                                    <h5>REGISTRAION FEE: Rs. 150 PER PERSON 
                                                    OR                Rs.500 PER TEAM</h5><br>
                                                <a href="#!/bnt" class="button1"><span></span><strong>More Details</strong></a><br><br>   
                                               </td>
									        </tr>
									        </tr>
									      </table>
                                      </div>
   									</div>
								</div>
							</li>
							<li id="galleryt">
								<div class="box1">
									<div class="inner">
										<a href="#" class="close" data-type="close"><span></span></a>
										<div class="wrapper tabs">
											<div class="col1">
												<h2>Sort By</h2>
												<ul class="nav">
													<li class="selected"><a href="#bbp"><span></span><strong>BASKETBALL</strong></a></li>
													<li><a href="#vbp"><span></span><strong>VOLLEYBALL</strong></a></li>
													<li><a href="#ttp"><span></span><strong>TABLETENNIS</strong></a></li>
													<li><a href="#chessp"><span></span><strong>CHESS</strong></a></li>
													<li><a href="#carp"><span></span><strong>carrom</strong></a></li>
												</ul>
											</div>
											<div class="col2 pad_left1">
												<div class="tab-content" id="bbp">
													<h2>BASKETBALL</h2>
													<div class="wrapper">
														<figure class="left marg_right1"><a href="images/big_img1.jpg" class="lightbox-image" data-type="prettyPhoto[group2]"><span></span><img src="images/page3_img1.jpg" alt=""></a></figure>
														<figure class="left"><a href="images/big_img2.jpg" class="lightbox-image" data-type="prettyPhoto[group2]"><span></span><img src="images/page3_img2.jpg" alt=""></a></figure>
													</div>
													<div class="wrapper">
														<figure class="left marg_right1"><a href="images/big_img3.JPG" class="lightbox-image" data-type="prettyPhoto[group2]"><span></span><img src="images/page3_img3.JPG" alt=""></a></figure>
														<figure class="left"><a href="images/big_img4.jpg" class="lightbox-image" data-type="prettyPhoto[group2]"><span></span><img src="images/page3_img4.jpg" alt=""></a></figure>
													</div>
													<div class="wrapper">
														<figure class="left marg_right1"><a href="images/big_img5.JPG" class="lightbox-image" data-type="prettyPhoto[group2]"><span></span><img src="images/page3_img5.JPG" alt=""></a></figure>
														<figure class="left"><a href="images/big_img6.JPG" class="lightbox-image" data-type="prettyPhoto[group2]"><span></span><img src="images/page3_img6.JPG" alt=""></a></figure>
													</div>
													<div class="wrapper">
														<figure class="left marg_right1"><a href="images/big_img7.jpg" class="lightbox-image" data-type="prettyPhoto[group2]"><span></span><img src="images/page3_img7.jpg" alt=""></a></figure>
														<figure class="left"><a href="images/big_img8.jpg" class="lightbox-image" data-type="prettyPhoto[group2]"><span></span><img src="images/page3_img8.jpg" alt=""></a></figure>
													</div>
													<div class="wrapper">
														<figure class="left marg_right1"><a href="images/big_img9.jpg" class="lightbox-image" data-type="prettyPhoto[group2]"><span></span><img src="images/page3_img9.jpg" alt=""></a></figure>
														<figure class="left"><a href="images/big_img10.jpg" class="lightbox-image" data-type="prettyPhoto[group2]"><span></span><img src="images/page3_img10.jpg" alt=""></a></figure>
													</div>
												</div>
												<div class="tab-content" id="vbp">
													<h2>VOLLEYBALL</h2>
													<div class="wrapper">
														<figure class="left marg_right1"><a href="images/big_img3.JPG" class="lightbox-image" data-type="prettyPhoto[group1]"><span></span><img src="images/page3_img3.JPG" alt=""></a></figure>
														<figure class="left"><a href="images/big_img4.jpg" class="lightbox-image" data-type="prettyPhoto[group1]"><span></span><img src="images/page3_img4.jpg" alt=""></a></figure>
													</div>
													<div class="wrapper">
														<figure class="left marg_right1"><a href="images/big_img5.JPG" class="lightbox-image" data-type="prettyPhoto[group1]"><span></span><img src="images/page3_img5.JPG" alt=""></a></figure>
														<figure class="left"><a href="images/big_img6.JPG" class="lightbox-image" data-type="prettyPhoto[group1]"><span></span><img src="images/page3_img6.JPG" alt=""></a></figure>
													</div>
													<div class="wrapper">
														<figure class="left marg_right1"><a href="images/big_img7.jpg" class="lightbox-image" data-type="prettyPhoto[group1]"><span></span><img src="images/page3_img7.jpg" alt=""></a></figure>
														<figure class="left"><a href="images/big_img8.jpg" class="lightbox-image" data-type="prettyPhoto[group1]"><span></span><img src="images/page3_img8.jpg" alt=""></a></figure>
													</div>
													<div class="wrapper">
														<figure class="left marg_right1"><a href="images/big_img9.jpg" class="lightbox-image" data-type="prettyPhoto[group1]"><span></span><img src="images/page3_img9.jpg" alt=""></a></figure>
														<figure class="left"><a href="images/big_img10.jpg" class="lightbox-image" data-type="prettyPhoto[group1]"><span></span><img src="images/page3_img10.jpg" alt=""></a></figure>
													</div>
													<div class="wrapper">
														<figure class="left marg_right1"><a href="images/big_img1.jpg" class="lightbox-image" data-type="prettyPhoto[group1]"><span></span><img src="images/page3_img1.jpg" alt=""></a></figure>
														<figure class="left"><a href="images/big_img2.jpg" class="lightbox-image" data-type="prettyPhoto[group1]"><span></span><img src="images/page3_img2.jpg" alt=""></a></figure>
													</div>
												</div>
												<div class="tab-content" id="ttp">
													<h2>TABLE TENNIS</h2>
													<div class="wrapper">
														<figure class="left marg_right1"><a href="images/big_img5.JPG" class="lightbox-image" data-type="prettyPhoto[group3]"><span></span><img src="images/page3_img5.JPG" alt=""></a></figure>
														<figure class="left"><a href="images/big_img6.JPG" class="lightbox-image" data-type="prettyPhoto[group3]"><span></span><img src="images/page3_img6.JPG" alt=""></a></figure>
													</div>
													<div class="wrapper">
														<figure class="left marg_right1"><a href="images/big_img7.jpg" class="lightbox-image" data-type="prettyPhoto[group3]"><span></span><img src="images/page3_img7.jpg" alt=""></a></figure>
														<figure class="left"><a href="images/big_img8.jpg" class="lightbox-image" data-type="prettyPhoto[group3]"><span></span><img src="images/page3_img8.jpg" alt=""></a></figure>
													</div>
													<div class="wrapper">
														<figure class="left marg_right1"><a href="images/big_img9.jpg" class="lightbox-image" data-type="prettyPhoto[group3]"><span></span><img src="images/page3_img9.jpg" alt=""></a></figure>
														<figure class="left"><a href="images/big_img10.jpg" class="lightbox-image" data-type="prettyPhoto[group3]"><span></span><img src="images/page3_img10.jpg" alt=""></a></figure>
													</div>
													<div class="wrapper">
														<figure class="left marg_right1"><a href="images/big_img1.jpg" class="lightbox-image" data-type="prettyPhoto[group3]"><span></span><img src="images/page3_img1.jpg" alt=""></a></figure>
														<figure class="left"><a href="images/big_img2.jpg" class="lightbox-image" data-type="prettyPhoto[group3]"><span></span><img src="images/page3_img2.jpg" alt=""></a></figure>
													</div>
													<div class="wrapper">
														<figure class="left marg_right1"><a href="images/big_img3.JPG" class="lightbox-image" data-type="prettyPhoto[group3]"><span></span><img src="images/page3_img3.JPG" alt=""></a></figure>
														<figure class="left"><a href="images/big_img4.jpg" class="lightbox-image" data-type="prettyPhoto[group3]"><span></span><img src="images/page3_img4.jpg" alt=""></a></figure>
													</div>
												</div>
												<div class="tab-content" id="chessp">
													<h2>CHESS</h2>
													<div class="wrapper">
														<figure class="left marg_right1"><a href="images/big_img7.jpg" class="lightbox-image" data-type="prettyPhoto[group4]"><span></span><img src="images/page3_img7.jpg" alt=""></a></figure>
														<figure class="left"><a href="images/big_img8.jpg" class="lightbox-image" data-type="prettyPhoto[group4]"><span></span><img src="images/page3_img8.jpg" alt=""></a></figure>
													</div>
													<div class="wrapper">
														<figure class="left marg_right1"><a href="images/big_img9.jpg" class="lightbox-image" data-type="prettyPhoto[group4]"><span></span><img src="images/page3_img9.jpg" alt=""></a></figure>
														<figure class="left"><a href="images/big_img10.jpg" class="lightbox-image" data-type="prettyPhoto[group4]"><span></span><img src="images/page3_img10.jpg" alt=""></a></figure>
													</div>
													<div class="wrapper">
														<figure class="left marg_right1"><a href="images/big_img1.jpg" class="lightbox-image" data-type="prettyPhoto[group4]"><span></span><img src="images/page3_img1.jpg" alt=""></a></figure>
														<figure class="left"><a href="images/big_img2.jpg" class="lightbox-image" data-type="prettyPhoto[group4]"><span></span><img src="images/page3_img2.jpg" alt=""></a></figure>
													</div>
													<div class="wrapper">
														<figure class="left marg_right1"><a href="images/big_img3.JPG" class="lightbox-image" data-type="prettyPhoto[group4]"><span></span><img src="images/page3_img3.JPG" alt=""></a></figure>
														<figure class="left"><a href="images/big_img4.jpg" class="lightbox-image" data-type="prettyPhoto[group4]"><span></span><img src="images/page3_img4.jpg" alt=""></a></figure>
													</div>
													<div class="wrapper">
														<figure class="left marg_right1"><a href="images/big_img5.JPG" class="lightbox-image" data-type="prettyPhoto[group4]"><span></span><img src="images/page3_img5.JPG" alt=""></a></figure>
														<figure class="left"><a href="images/big_img6.JPG" class="lightbox-image" data-type="prettyPhoto[group4]"><span></span><img src="images/page3_img6.JPG" alt=""></a></figure>
													</div>
												</div>
												<div class="tab-content" id="carp">
													<h2>carrom</h2>
													<div class="wrapper">
														<figure class="left marg_right1"><a href="images/big_img9.jpg" class="lightbox-image" data-type="prettyPhoto[group5]"><span></span><img src="images/page3_img9.jpg" alt=""></a></figure>
														<figure class="left"><a href="images/big_img10.jpg" class="lightbox-image" data-type="prettyPhoto[group5]"><span></span><img src="images/page3_img10.jpg" alt=""></a></figure>
													</div>
													<div class="wrapper">
														<figure class="left marg_right1"><a href="images/big_img1.jpg" class="lightbox-image" data-type="prettyPhoto[group5]"><span></span><img src="images/page3_img1.jpg" alt=""></a></figure>
														<figure class="left"><a href="images/big_img2.jpg" class="lightbox-image" data-type="prettyPhoto[group5]"><span></span><img src="images/page3_img2.jpg" alt=""></a></figure>
													</div>
													<div class="wrapper">
														<figure class="left marg_right1"><a href="images/big_img3.JPG" class="lightbox-image" data-type="prettyPhoto[group5]"><span></span><img src="images/page3_img3.JPG" alt=""></a></figure>
														<figure class="left"><a href="images/big_img4.jpg" class="lightbox-image" data-type="prettyPhoto[group5]"><span></span><img src="images/page3_img4.jpg" alt=""></a></figure>
													</div>
													<div class="wrapper">
														<figure class="left marg_right1"><a href="images/big_img5.JPG" class="lightbox-image" data-type="prettyPhoto[group5]"><span></span><img src="images/page3_img5.JPG" alt=""></a></figure>
														<figure class="left"><a href="images/big_img6.JPG" class="lightbox-image" data-type="prettyPhoto[group5]"><span></span><img src="images/page3_img6.JPG" alt=""></a></figure>
													</div>
													<div class="wrapper">
														<figure class="left marg_right1"><a href="images/big_img7.jpg" class="lightbox-image" data-type="prettyPhoto[group5]"><span></span><img src="images/page3_img7.jpg" alt=""></a></figure>
														<figure class="left"><a href="images/big_img8.jpg" class="lightbox-image" data-type="prettyPhoto[group5]"><span></span><img src="images/page3_img8.jpg" alt=""></a></figure>
													</div>
												</div>
												<div class="tab-content" id="Portrait">
													<h2>AAVEG</h2>
													<div class="wrapper">
														<figure class="left marg_right1"><a href="images/big_img1.jpg" class="lightbox-image" data-type="prettyPhoto[group6]"><span></span><img src="images/page3_img1.jpg" alt=""></a></figure>
														<figure class="left"><a href="images/big_img2.jpg" class="lightbox-image" data-type="prettyPhoto[group6]"><span></span><img src="images/page3_img2.jpg" alt=""></a></figure>
													</div>
													<div class="wrapper">
														<figure class="left marg_right1"><a href="images/big_img3.JPG" class="lightbox-image" data-type="prettyPhoto[group6]"><span></span><img src="images/page3_img3.JPG" alt=""></a></figure>
														<figure class="left"><a href="images/big_img4.jpg" class="lightbox-image" data-type="prettyPhoto[group6]"><span></span><img src="images/page3_img4.jpg" alt=""></a></figure>
													</div>
													<div class="wrapper">
														<figure class="left marg_right1"><a href="images/big_img5.JPG" class="lightbox-image" data-type="prettyPhoto[group6]"><span></span><img src="images/page3_img5.JPG" alt=""></a></figure>
														<figure class="left"><a href="images/big_img6.JPG" class="lightbox-image" data-type="prettyPhoto[group6]"><span></span><img src="images/page3_img6.JPG" alt=""></a></figure>
													</div>
													<div class="wrapper">
														<figure class="left marg_right1"><a href="images/big_img7.jpg" class="lightbox-image" data-type="prettyPhoto[group6]"><span></span><img src="images/page3_img7.jpg" alt=""></a></figure>
														<figure class="left"><a href="images/big_img8.jpg" class="lightbox-image" data-type="prettyPhoto[group6]"><span></span><img src="images/page3_img8.jpg" alt=""></a></figure>
													</div>
													<div class="wrapper">
														<figure class="left marg_right1"><a href="images/big_img9.jpg" class="lightbox-image" data-type="prettyPhoto[group6]"><span></span><img src="images/page3_img9.jpg" alt=""></a></figure>
														<figure class="left"><a href="images/big_img10.jpg" class="lightbox-image" data-type="prettyPhoto[group6]"><span></span><img src="images/page3_img10.jpg" alt=""></a></figure>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li id="rulest">
								<div class="box1">
									<div class="inner">
										<div class="wrapper pad_bot3">
											<h2><center>RULES & REGULATION</center></h2>
                                              <ol>
							                   
                                               <li>Each participant should always have his/her identification card and must produce the same whenever & wherever asked for.</li>
                                               <li>Every team should bring a permission letter duly signed by Director/Principal at the time of registration.</li>
                                               <li>Carrying or consuming tobacco or alcohol is strictly prohibited inside the campus premises.</li>
                                               <li>In case the registration ID is lost, he/she should report to the registration desk immediately.</li>
                                               <li>Timings have to be strictly adhered to.</li>
                                               <li>It would be sole responsibility of participants to inform their entry/exit from campus at the registration desk. </li>
                                               <li>It would be sole responsibility of participants to inform their entry/exit from campus at the registration desk. </li>
                                               <li>Any damage to the institute property may lead to confiscation of the security amount.</li>
                                               <li>Any kind of indiscipline by the participant may lead to disqualification of the candidate or confiscation of security amount or both.</li>
                                               <li>The organizing committee will govern all the decisions. In case of any dispute, the decision of the committee is final and binding.</li>
                                               <li>The contingent leader will be responsible for the behaviour of his contingent members.</li>
                                                 <h2><center>ACCOMODATION RULES<br></center></h2>
                                                <li>For accommodation facility Rs. 400 per person will be charged for 3 days.</li>
                                                <li>The lodging and mess charges are included in the accommodation registration fee.</li>
                                                <li>A refundable security deposit of Rs. 100 per person will be charged.</li>
                                                <li>We do not bear any responsibility of any loss or theft of belongings. Participants are requested to take care of their belongings on their own.</li>
                                                <li>Breakfast, Lunch, Refreshment and Dinner will be provided.</li>
                                                <li>Last entry at the accommodation centre will be not late than 9 P.M.</li>
                                               
                                                <li>Boy participants are strictly prohibited around girl’s hostel.</li>
										     </ol>
										</div>
									</div>
								</div>
							</li>
							<li id="contactt">
								<div class="box1">
									<div class="inner">
										<a href="#" class="close" data-type="close"><span></span></a>
										<div class="wrapper">
											<div class="col1">
												<h2>Contact Info</h2>
												<h3><a>FACULTY COORDINATOR</a></h3>
												<h5 class="cols">Mr. Hiralal Choudhary<br></h5>
												<p>+91 98871-22022<br><br>
												<h5 class="cols">Mr. Harpreet Singh Gill<br></h5>
												<p>+91 94626-94625</p><br>
											</div>
											<div class="col1 pad_left1">
												<h3><a><br><br><br>EVENT COORDINATOR</a></h3>
												<h5 class="cols">Gourav Middha  <br></h5>
												<p>+91 94606-25679<br><a>gouravmiddhagm@gmail.com</a></p>
                                                
                                            
											</div>
                                          <div class="col1 pad_left1">
												<h3><a><br>HOSPITALITY COORDINATOR</a></h3>
												<h5 class="cols">Naveen Rangwani<br></h5>
												<p>+91 98293-61563</p><br>
                                                <h5 class="cols">Ravinder Godara<br></h5>
                                                <p>+91 77422-68088</p>
												
											</div>
                                              
										</div>										
									</div>
								</div>
							</li>
							<li id="bb">
								<div class="box1">
									<div class="inner">
										<a href="#" class="close" data-type="close"><span></span></a>
										<h2><center><a>BASKETBALL</a></center></h2>
                                        <h3><strong>RULES & REGULATIONS</strong></h3>
                                        <ol><br>
                                          <li>All the BFI rules will be complied with.</li>
                                          <li>Maximum of 10 players are allowed per team.</li>
                                          <li>Number of quaters-4.</li>
                                          <li>Match will be played on knock-out basis.</li>
                                          <li>The decision of the referee will be final.</li>
                                        </ol><br><br>
                                        <h3>For Details contact:</h3>
                                        <h3><a>Ankit Jha : +91 77908-85469</a></h3>
									</div>
								</div>
							</li> <li id="gali">
								<div class="box1">
									<div class="inner">
										<a href="#" class="close" data-type="close"><span></span></a>

										<h2><center><a>GULLY CRICKET</a></center></h2>
                                        <h3><strong>RULES & REGULATIONS</strong></h3>
										 <ol><br>
                                         <li>Shot beyond boundry will be considered as out.</li>
                                          <li>Maximum of 7 players and minimum of 6players are allowed per team.</li>
                                          <li>Over limit - 5 overs.</li>
                                          <li>One player will deliver only 1 over.</li>
                                          <li>Last player (single batsman) is allowed.</li>
                                          <li>LBW not out.</li>
                                          <li>Wide ball and no ball will have 2 runs.</li>
                                          <li>The decision of the umpire will be final.</li>
                                          <li>Cash prize of Rs. 1100 for winner team.</li>
										  <li>Gully Cricket matches are only for boys team.</li>
                                        </ol><br><br>
                                        <h3>For Details contact:</h3>
                                        <h3><a>Ravinder Godara : +91 77422-68088</a></h3>
									</div>
								</div>
							</li>
                            <li id="vb">
								<div class="box1">
									<div class="inner">
										<a href="#" class="close" data-type="close"><span></span></a>

										<h2><center><a>VOLLEYBALL</a></center></h2>
                                        <h3><strong>RULES & REGULATIONS</strong></h3>
										 <ol><br>
                                          <li>All the FIVB rules will be complied with.</li>
                                          <li>Maximum of 10 players are allowed per team.</li>
                                          <li>Match will be played on knock-out basis.</li>
                                          <li>All the preliminary rounds matches will be best of 3 sets.</li>
                                          <li>Semi-finals & Finals will be best 5 sets.</li>
                                          <li>The decision of the referee will be final.</li>
                                        </ol><br><br>
                                        <h3>For Details contact:</h3>
                                        <h3><a>Ankit Kumar Jat : +91 95875-00160</a></h3>
									</div>
								</div>
							</li>
                            <li id="tt">
								<div class="box1">
									<div class="inner">
										<a href="#" class="close" data-type="close"><span></span></a>
                                          <h2><center><a>TABLE TENNIS</a></center></h2>
										<h3><strong>RULES & REGULATIONS</strong></h3>
                                        <h4><center><strong>TEAM EVENT</strong></center></h4>
                                        <ol><br>
                                          <li>Maximum of 5 players and minimum 3 players are allowed per team.</li>
                                          <li>Matches will be played on knock-out basis.</li>
                                          <li>The decision of the referee will be final.</li>
                                        </ol><br><br>
                                        <h4><center><strong>INDIVIDUAL EVENT</strong></center></h4>
                                        <ol><br>
                                          <li>Any no. of participants from a particular college.</li>
                                          <li>Matches will be played on knock-out basis.</li>
                                          <li>The decision of the referee will be final.</li>
                                        </ol><br><br>
                                        <h3>For Details contact:</h3>
                                        <h3><a>Gaurav Sharma : +91 97828-87868</a></h3>
									</div>
								</div>
							</li>
                            <li id="car">
								<div class="box1">
									<div class="inner">
										<a href="#" class="close" data-type="close"><span></span></a>
                                          <h2><center>
                                          <a>Carrom</a>
                                          </center></h2>
										<h3><strong>RULES & REGULATIONS</strong></h3>
                                        <h4><center><strong>TEAM EVENT</strong></center></h4>
                                        <ol><br>
                                          <li>Rules of Black and White carrom will be complied with.</li>
                                          <li>First round will be single player match.</li>
                                          <li>Second round will be a double player match.</li>
                                          <li>All matches will be played on knock-out basis.</li>
                                          <li>No. of players in a team will be 3.</li>
                                        </ol><br><br>
                                        <h4><center><strong>INDIVIDUAL EVENT</strong></center></h4>
                                        <ol><br>
                                          <li>Playing rules are same as Team event.</li>
                                          <li>Any no. of players is allowed from a particular college.</li>
                                          <li>Games will be played on knock-out basis.</li>
                                          <li>The decision of the referee will be final.</li>
                                        </ol><br><br>
                                        <h3>For Details contact:</h3>
                                        <h3><a>Pankaj Chayal: +91 99834-93949</a></h3>
                                        <h3><a>Sagar Arora : +91 99833-94127</a></h3>
									</div>
								</div>
							</li>
                            <li id="chess">
								<div class="box1">
									<div class="inner">
										<a href="#" class="close" data-type="close"><span></span></a>

										 <h2><center><a>CHESS</a></center></h2>
										<h3><strong>RULES & REGULATIONS</strong></h3>
										 <ol><br>
                                          <li>Rapid Fire chess rules will be complied with.</li>
                                          <li>Matches will be played on knock-out basis.</li>
                                          <li>The decision of the referee will be final.</li>
                                        </ol><br><br>
                                        <h3>For Details contact:</h3>
                                        <h3><a>Rahul Maheshwari : +91 88903-11218</a></h3>
                                        <h3><a>Sagar Arora : +91 99833-94187</a></h3>
									</div>
								</div>
							</li>
                            <li id="gc">
								<div class="box1">
									<div class="inner">
										<a href="#" class="close" data-type="close"><span></span></a>
                                         <h2><center><a>KABADDI</a></center></h2>
										<h3><strong>RULES & REGULATIONS</strong></h3>
										 <ol><br>
                                          <li>All national kabaddi rules will be complied with.</li>
                                          <li>The decision of refree will be final.</li>
                                          <li>Maximum of 10 players and minimum of 7 players are allowed per team </li>
                                          <li>There will be 2 halves of 15 minutes each</li>
										  <li>Kabaddi  matches are only for boys team.</li>
                                        </ol><br><br>
                                        <h3>For Details contact:</h3>
                                        <h3><a>Praveen Bishnoi :+91 84324-64629</a></h3>
									</div>
								</div>
							</li>
                            <li id="pl">
								<div class="box1">
									<div class="inner">
										<a href="#" class="close" data-type="close"><span></span></a>
                                          <h2><center><a>FOOTBALL</a></center></h2>
										<h3><strong>RULES & REGULATIONS</strong></h3>
                                        <ol><br>
                                          <li>All FIFA rules will be complied with.</li>
                                          <li>Maximum of 10 players are allowed per team (7 aside and 3 substitute) .</li>
										  <li>Football matches are only for boys team.</li>
                                        
                                       
                                        
                                        </ol><br><br>
                                        <h3>For Details contact:</h3>
                                        <h3><a>Sameep : +91 85608-70004</a></h3>
									</div>
								</div>
							</li>
                            <li id="bnt">
								<div class="box1">
									<div class="inner">
										<a href="#" class="close" data-type="close"><span></span></a>
										<h2><center><a>BADMINTON</a></center></h2>
                                        <h3><strong>RULES & REGULATIONS</strong></h3>
                                        <h3><centre><strong>TEAM EVENT</strong></centre></h3>
                                        <ol><br>
                                          <li>Maximum of 4 players and minimum of 3 players are allowed per team.</li>
                                          <li>The winner of a fixture will be decided on the basis of 3 matches which will take placein order: 1. Singles 2. Doubles</li>
                                          <li>Reverse singles (only if there is a tie after first two matches).</li>
                                          <li>Every match will be a best of 3 games of 21 points.</li>
                                          <li>All other standard BWF rules apply for all matches.</li>
                                          <li>Draws will be made and announced after the final list of participating teams is received.</li>
                                        </ol><br><br>
                                        <h3><centre><strong>INDIVIDUAL EVENT</strong></centre></h3>
                                        <ol><br>
                                          <li>Knockout matches will be held accordingly.</li>
                                          <li>Every match will be a best of 3 games of 21 points.</li>
                                          <li>All BWF rules apply for all matches.</li>
                                          <li>Draws will be made and announced after the final list of participating member is received.</li>
                                        
                                        </ol><br><br>
                                        <h3>For Details contact:</h3>
                                        <h3><a>Mayank Soni : +91 96607-77157</a></h3>
									</div>
								</div>
							</li>
						</ul>
					</article>
<!-- / content -->
				</div>
			</div>
			<div class="block"></div>
		</div>
		
		<script type="text/javascript"> Cufon.now(); </script>
		<script>
		$(window).load(function() {
			$('.spinner').fadeOut();
			$('body').css({overflow:'inherit'})
		})
		</script>
	</body>
</html>