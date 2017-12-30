$(document).ready(function () {
    $("body").queryLoader2({
        barColor: "#6e6d73",
       
        percentage: true,
        barHeight: 1,
        completeAnimation: "grow",
        minimumTime: 100
    });
});
var img = new Image();
var div = document.getElementById('foo');

img.onload = function() {
  div.appendChild(img);
};
img.src = 'images/background.jpg';
