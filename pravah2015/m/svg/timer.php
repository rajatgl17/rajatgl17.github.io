<?php 

date_default_timezone_set('GMT');
header('CONTENT-TYPE: image/svg+xml');

echo 
'<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:xlink="http://www.w3.org/1999/xlink"
   version="1.1"
   width="650"
   height="650"
   viewbox="0 0 650 650"
   preserveAspectRatio="xMidYMid meet"
   id="svg2">

   <defs>
      <filter id="f2" x="-20%" y="-20%" width="200%" height="200%">
        <feOffset result="offOut" in="SourceGraphic" dx="0" dy="0" />
        <feGaussianBlur result="blurOut" in="offOut" stdDeviation="8" />
        <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
      </filter>
      <filter id="f1" x="-5%" y="-5%" width="120%" height="120%">
        <feOffset result="offOut" in="SourceGraphic" dx="0" dy="0" />
        <feGaussianBlur result="blurOut" in="offOut" stdDeviation="5" />
        <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
      </filter>
    </defs>

   <circle cx="325" cy="325" r="294" class="c1" 
   		 style="fill:#000000;fill-opacity:0;stroke:#ffffff;stroke-width:12;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-opacity:0.73;stroke-dasharray:750.814125, 372.814125, 361.814125, 361.814125;stroke-dashoffset:350" />
  <circle cx="325" cy="325" r="294" class="c1"
       style="fill:#000000;fill-opacity:0;stroke:#ffffff;stroke-width:12;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-opacity:0.53;stroke-dasharray:123.62825, 1723.62825;stroke-dashoffset:-523.62825" />
   <circle cx="325" cy="325" r="280" class="c2"
          style="fill:#000000;fill-opacity:0;stroke:#ffffff;stroke-width:8;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-opacity:0.46084655;stroke-dasharray:739.822975, 289.822975, 439.822975, 289.822975;stroke-dashoffset:1023.64595" />
   
   <circle cx="325" cy="325" r="260" class="c3"
          style="fill:#000000;fill-opacity:0;stroke:#ffffff;stroke-width:12;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-opacity:0.73;stroke-dasharray:508.40705, 408.40705, 308.40705, 408.40705;stroke-dashoffset: 0" />
   <circle cx="325" cy="325" r="246" class="c4"
          style="fill:#000000;fill-opacity:0;stroke:#ffffff;stroke-width:8;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-opacity:0.46084655;stroke-dasharray:772.8318, 772.8318;stroke-dashoffset:600.50435" />

   <circle cx="325" cy="325" r="187" class="c5"
          style="fill:#000000;fill-opacity:0;stroke:#ffffff;stroke-width:30;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-opacity:0.56084655;stroke-dasharray:187.47785, 987.47785;stroke-dashoffset:200.50435" />
   <circle cx="325" cy="325" r="162" class="c6"
          style="fill:#000000;fill-opacity:0;stroke:#ffffff;stroke-width:12;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-opacity:0.73;stroke-dasharray:708.938, 308.938;stroke-dashoffset:-250" />
   <circle cx="325" cy="325" r="148" class="c7"
          style="fill:#000000;fill-opacity:0;stroke:#ffffff;stroke-width:8;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-opacity:0.46084655;stroke-dasharray:564.9557, 364.9557;stroke-dashoffset:-400" />

   <circle cx="325" cy="325" r="104" class="c8" filter="url(#f2)"
          style="fill:#000000;fill-opacity:0;stroke:#ffffff;stroke-width:40;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-opacity:0.96084655;stroke-dasharray:163.362825, 490.088475;stroke-dashoffset:326.72565" />
   <circle cx="325" cy="325" r="91" class="c8" filter="url(#f2)"
          style="fill:#000000;fill-opacity:0;stroke:#ffffff;stroke-width:26;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-opacity:0.96084655;stroke-dasharray:105.88495, 465.88495;stroke-dashoffset:-85" />

    <text id="time" x="275" y="325" font-family="digital, arial" font-size="80px" fill="#ccc" filter="url(#f1)" style=""></text>
    <text id="timeData" x="305" y="365" font-family="digital, arial" font-size="40px" fill="#ccc" filter="url(#f1)" style=""></text>

  <style>
@font-face {
	font-family: "digital";
	src: url("../fonts/digital.ttf") format("truetype");
}
</style>
  <script xlink:href="interpolators.js"></script>
  <script> var currentTime = '. time() .'000; </script>
  <script xlink:href="timer_svg.js" type="text/javascript">
	
   </script>     

</svg>';

?>