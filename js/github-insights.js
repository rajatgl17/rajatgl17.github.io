var url = "http://localhost:8080/github-insights/";
var programmingLanguages;
var repoCountChart;

$( document ).ready(function(){
	changeOnUpdateDate();
	getProgrammingLanguages();
	updateRepoCounts();

	repoCountChart = new Dygraph(
		document.getElementById("repoCount"),
		"date,count\n",
		{
			showRangeSelector: true,
			title: "Number of repositories created on a day"
		});

});

function changeOnUpdateDate(){
	$( "#lastUpdateOn" ).load( url+"LastUpdatedOn" );
}

function getProgrammingLanguages(){	
	$.ajax({
		url: url+"ProgrammingLanguagesList",
		success: function(data){
			
		},
		error: function(){
			displaySnack("There is some error in loading data. Please reload page.")
		}
	});

}

function updateRepoCounts(){
	$.ajax({
		url: url+"GetRepoCount",
		success: function(data){
			repoCountChart.updateOptions({'file':data});
		},
		error: function(){
			displaySnack("There is some error in loading data.")
		}
	});
}






function displaySnack(msg) {
	var x = document.getElementById("snackbar");
	x.innerHTML = msg;
	x.className = "show";
	setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
}