var competitions = [
/*
	{
		'name'  : 'Auto Expo'
	},
	{
		'name'  : 'Scholastic Technical Project Exhibition'
	},
*/
	{
		'name'  : 'All India Student Innovation Challenge'
	},

	{
		'name'  : 'Art Exhibition'
	}
];

function validateInputes(){var a,b={Email:[],Mobile:[]},f=$("input[name], select[name]");for(a=0;a<f.length;a++){var d=$(f[a]).prop("placeholder"),c=$(f[a]).val(),e=$(f[a]).parent().attr("member_no");member=1==e?"Leader":e+(2==e?"nd":3==e?"rd":"th")+" member";if(("Email"==d||"Mobile"==d)&&0<=b[d].indexOf(c))return alert('You have used '+ d + ' "'+ c +'" more than one time in this form.'),!1;if("Name"==d&!c)return alert(member+"'s name can't be empty."),!1;if("Branch"==d&!c)return alert(member+"'s branch can't be empty."),!1;if("College"==
d&!c)return alert(member+"'s college name can't be empty."),!1;if("Mobile"==d&(c.length!=10 || !c.match(/[7-9][\d]{9}/)))return alert(member+"'s mobile number seems invalid."),!1;if("Email"==d&!c.match(/(.+)\@(.+)\.(.+)/))return alert(member+"'s email address seems invalid."),!1;"Email"!=d&&"Mobile"!=d||b[d].push(c)}}


$(function(){
	for(var index in competitions)
	{
		$('[name="event"]').append('<option value="'+ competitions[index].name.replace(/\ |\-/gi, '_').toUpperCase() +'">'+ competitions[index].name +'</option>');
	}

	$('#add_member').click(function(){
		var member_no = $('.member_detail').length + 1;

		$(this).before(
			'<div class="member_detail" member_no="'+ member_no +'">'+
				'<div user_type="member">'+ (member_no + (member_no==2 ? 'nd' : (member_no==3 ? 'rd' : 'th'))) +' Member\'s Detail</div>'+
				'<input placeholder="Name" type="text" name="name[]" required title="Enter your full name as on your collage identity card." />'+
				'<input placeholder="Email" type="email" name="email[]" required title="Enter your valid email address for further communications." />'+
				'<input placeholder="Mobile" type="text" name="mobile[]" required title="Please enter 10 digit mobile number." />'+
				'<input placeholder="Branch" type="text" name="branch[]" required title="Please enter your branch." />'+
				'<input placeholder="College" type="text" name="college[]" required title="Enter your current collage name." />'+
			'</div>'
		);
	});
});