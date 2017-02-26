var proxy = 'https://cors-anywhere.herokuapp.com/';
var url = proxy+"http://35.160.105.253:8080/github-insights/";
//var url = "http://localhost:8080/github-insights/";
var programmingLanguages;
var repoCountChart;

$( document ).ready(function(){

	changeOnUpdateDate();
	getProgrammingLanguages();

	repoCountChart = new Dygraph(
		document.getElementById("repoCount"),
		"date,count,count\n",
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
			programmingLanguages = JSON.parse(data);
			for(var key in 	programmingLanguages){
				var temp = '<option value="'+programmingLanguages[key]+'">'+key+'</option>';
				$('#lang1').append(temp);
				$('#lang2').append(temp);
			}
			$('#lang1').append('<option value="-1">None</option>');
			$('#lang2').append('<option value="-1">None</option>');
			$('#lang1 option:eq(0)').prop('selected', true)
			$('#lang2 option:eq(1)').prop('selected', true)
			updateRepoCounts();
		},
		error: function(){
			displaySnack("There is some error in loading list of programming languages.")
		}
	});

}

function updateRepoCounts(){
	var lang1 = $('#lang1').val();
	var lang2 = $('#lang2').val();
	var way = $('#way').val();
	$.ajax({
		url: url+"GetRepoCount?lang1="+lang1+"&lang2="+lang2+"&way="+way,
		success: function(data){
			var data = "Date,"
			+$("#lang1 option:selected").text()
			+","
			+$("#lang2 option:selected").text()
			+"\n"+data;
			repoCountChart.updateOptions({'file':data});
		},
		error: function(){
			displaySnack("There is some error in loading repositories count data.")
		}
	});
}

function displaySnack(msg) {
	var x = document.getElementById("snackbar");
	x.innerHTML = msg;
	x.className = "show";
	setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
}