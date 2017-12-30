var competitions = [{"name":"badminton","category":"aaveg"},{"name":"basketball","category":"aaveg"},{"name":"bridge o mania","category":"techtrix"},{"name":"card castle","category":"techtrix"},{"name":"carrom","category":"aaveg"},{"name":"chess","category":"aaveg"},{"name":"clash of band","category":"music"},{"name":"collage making","category":"fine arts"},{"name":"dancing fingers","category":"music"},{"name":"documania","category":"digital arts"},{"name":"dumb charades","category":"dramatics"},{"name":"ethical hacking","category":"workshops"},{"name":"fear factor","category":"other"},{"name":"football","category":"aaveg"},{"name":"group","category":"dance"},{"name":"gully cricket","category":"aaveg"},{"name":"image processing","category":"workshops"},{"name":"junkyard wars","category":"robokon"},{"name":"kabaddi","category":"aaveg"},{"name":"kavyanjali","category":"literary"},{"name":"line follower","category":"robokon"},{"name":"mechatron","category":"robokon"},{"name":"nukkad natak","category":"dramatics"},{"name":"papperaazi","category":"techtrix"},{"name":"ping pong","category":"robokon"},{"name":"pirates war","category":"robokon"},{"name":"pravah selfie","category":"digital arts"},{"name":"rangmanch","category":"dramatics"},{"name":"rangrez","category":"fine arts"},{"name":"robo race","category":"robokon"},{"name":"robo wars","category":"robokon"},{"name":"shades","category":"fine arts"},{"name":"snapshot","category":"digital arts"},{"name":"solo","category":"dance"},{"name":"straw scrapper","category":"techtrix"},{"name":"streetz","category":"dance"},{"name":"sur","category":"music"},{"name":"table tennis","category":"aaveg"},{"name":"touch screen","category":"workshops"},{"name":"volleyball","category":"aaveg"},{"name":"war of djs","category":"music"},{"name":"x copter","category":"robokon"},{"name":"accommodation","category":"etc"},{"name":"auto expo","category":"exhibitions"},{"name":"all india student innovation challenge","category":"exhibitions"},{"name":"art exhibition","category":"exhibitions"},{"name":"scholastic technical project exhibition","category":"exhibitions"},{"name":"rangoli","category":"fine arts"},{"name":"cad-o-mania","category":"fine arts"}];


$(function(){
	competitions.sort(function (a, b){
		var A = a['category'].toUpperCase();
		var B = b['category'].toUpperCase();
		return (A < B ? -1 : (A > B ? +1 : 0)) * 1;
	});

	var lastCategory;
	for (var index in competitions)
	{
		if (lastCategory != competitions[index].category)
		{
			lastCategory = competitions[index].category;
			$('select#category').append('<option value="'+ competitions[index].category.toUpperCase().replace(/\ |\-/g, '_') +'">'+ competitions[index].category +'</option>');
		}
	}



	competitions.sort(function (a, b){
		var A = a['name'].toUpperCase();
		var B = b['name'].toUpperCase();
		return (A < B ? -1 : (A > B ? +1 : 0)) * 1;
	});
	for (var index in competitions)
	{
		$('select#event').append('<option value="'+ competitions[index].name.toUpperCase().replace(/\ |\-/g, '_') +'">'+ competitions[index].name +'</option>');
	}

});