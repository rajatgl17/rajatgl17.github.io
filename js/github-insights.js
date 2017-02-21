var url = "http://localhost:8080/github-insights/";
var programmingLanguages;

$( document ).ready(function(){
	changeOnUpdateDate();
	getProgrammingLanguages();

});

function changeOnUpdateDate(){
	$( "#lastUpdateOn" ).load( url+"LastUpdatedOn" );
}

function getProgrammingLanguages(){
	$.getJSON(url+"ProgrammingLanguagesList",function(data){
		programmingLanguages = data;
	});

}