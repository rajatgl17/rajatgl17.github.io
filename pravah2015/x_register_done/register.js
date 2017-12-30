var registration_charges = {
		CAD_O_MANIA: [1, 1, 1, 100, 0],
		ANTI_CHESS: [2, 2, 2, 100, 0],

		SHARP:  [1, 1, 1, 30, 0],
		C_CPLUSPLUS_CHALLENGER:  [1, 1, 1, 30, 0],
		ASSEMBLAZE: [1, 2, 1, 100, 100],
		
		DIGITRONICS:[1,1,1,40,0],
		STOCK_STRANGER:[1,1,1,30,1],
		BADMINTON: [1, 4, 1, 150, 150, 3, 500],
		BASKETBALL: [5, 10, 5, 0, 0, 5, 1000],
		CARROM: [1, 3, 1, 100, 0, 3, 150],
		CHESS: [1, 1, 1, 100, 0],
		FOOTBALL: [7, 10, 7, 0, 0, 7, 1000],
		GULLY_CRICKET: [6, 7, 6, 150, 0, 6, 150],
		KABADDI: [7, 10, 7, 0, 0, 7, 1000],
		TABLE_TENNIS: [1, 5, 1, 100, 0, 3, 500],
		VOLLEYBALL: [5, 10, 5, 0, 0, 5, 1000],
		NUKKAD_NATAK: [8, 15, 10, 300, 30],
		BRIDGE_O_MANIA: [4, 4, 4, 100, 0],
		CARD_CASTLE: [4, 4, 4, 100, 0],
		CLASH_OF_BAND: [1, 8, 8, 500, 0],
		WAR_OF_DJS: [1, 1, 1, 300, 0],
		COLLAGE_MAKING: [1, 2, 1, 50, 50],
		DANCING_FINGERS: [1, 1, 1, 100, 0],
		DOCUMANIA: [1, 1, 1, 0, 0],
		DUMB_CHARADES: [2, 3, 2, 100, 50],
		ETHICAL_HACKING: [1, 1, 1, 1099, 0],


		RANGOLI: [1, 1, 1, 50, 0],


		FIFA: [1, 1, 1, 50, 0],
		COUNTER_STRIKE: [1, 4, 1, 20, 10],
		NFS_MOST_WANTED: [1, 1, 1, 30, 0],

		TREASURE_HUNT: [2, 4, 4, 150, 0],
		BRAINY_GAMES: [1, 1, 1, 50, 0],
		BOLLYWOOD_TRIVIA: [1, 2, 1, 20, 10],
		MINI_SOCCER: [1, 1, 1, 50, 0],
		A_GAME_STALL: [1, 1, 1, 20, 0],

		GROUP: [8, 12, 8, 500, 50],
		IMAGE_PROCESSING: [1, 1, 1, 1099, 0],
		IRC: [1, 1, 1, 0, 0],
		JUNKYARD_WARS: [1, 1, 1, 50, 0],
		KAVYANJALI: [1, 1, 1, 100, 0],
		MECHATRON: [1, 4, 3, 225, 75],
		PAPPERAAZI: [4, 4, 4, 200, 0],
		PING_PONG: [1, 1, 1, 75, 0],
		PIRATES_WAR: [4, 6, 4, 300, 75],
		PRAVAH_SELFIE: [1, 1, 1, 0, 0],
		RANGMANCH: [7, 15, 10, 300, 30],
		RANGREZ: [1, 1, 1, 50, 0],
		ROBO_RACE: [4, 6, 4, 400, 100],
		ROBO_WARS: [4, 6, 4, 100, 100],
		SHADES: [1, 1, 1, 50, 0],
		SNAPSHOT: [1, 1, 1, 0, 0],
		SOLO: [1, 1, 1, 100, 0],
		STREETZ: [1, 1, 1, 100, 0],
		STRAW_SCRAPPER: [4, 4, 4, 200, 0],
		SUR: [1, 1, 1, 100, 0],
		TECH_EXPO: [1, 1, 1, 0, 0],
		TOUCH_SCREEN: [1, 1, 1, 1099, 0],
		LINE_FOLLOWER: [4, 6, 4,400, 100],
		X_COPTER:[4, 6, 4,400, 100],
		KWIZZ_NET:[1, 1, 1, 20, 0]
	},

	competitions = [
		{
			name: "Badminton",
			category: "Aaveg"
		},
		{
			name: "Basketball",
			category: "Aaveg"
		},
		{
			name: "Carrom",
			category: "Aaveg"
		},
		{
			name: "Chess",
			category: "Aaveg"
		},
		{
			name: "Football",
			category: "Aaveg"
		},
		{
			name: "Gully Cricket",
			category: "Aaveg"
		},
		{
			name: "Table Tennis",
			category: "Aaveg"
		},
		{
			name: "Volleyball",
			category: "Aaveg"
		},
		{
			name: "Ethical Hacking",
			category: "Workshops"
		},
		{
			'name': 'Kabaddi',
			'category': 'Aaveg'
		},
		{
			name: "Image Processing",
			category: "Workshops"
		},
		{
			name: "Touch Screen",
			category: "Workshops"
		},
		{
			name: "Assemblaze",
			category: "Mechanical",
			sub_category: "Techtrix"
		},
		{
			name: "Cad-o-Mania",
			category: "Mechanical",
			sub_category: "Techtrix"
		},
		{
			name: "Bridge-o-Mania",
			category: "Civil",
			sub_category: "Techtrix"
		},
		{
			name: "Card Castle",
			category: "Civil",
			sub_category: "Techtrix"
		},
		{
			name: "Papperaazi",
			category: "Civil",
			sub_category: "Techtrix"
		},
		{
			name: "Straw Scrapper",
			category: "Civil",
			sub_category: "Techtrix"
		},
		{
			name: "C CPLUSPLUS Challenger",
			category: "Computer Science",
			sub_category: "Techtrix"
		},
		{
			name: "Sharp",
			category: "Computer Science",
			sub_category: "Techtrix"
		},
		{
			name: "Dancing Fingers",
			category: "Music"
		},
		{
			name: "War of DJs",
			category: "Music"
		},
		{
			name: "Dumb Charades",
			category: "Dramatics"
		},
		{
			name: "Counter Strike",
			category: "Funtrix"
		},
		{
			name: "Stock Stranger",
			category: "Funtrix"
		},
		{
			name: "Fifa",
			category: "Funtrix"
		},
		{
			name: "NFS Most-Wanted",
			category: "Funtrix"
		},
		{
			'name'  : 'Treasure Hunt',
			'category'   : 'Funtrix'
		},
		{
			'name'  : 'Brainy Games',
			'category'   : 'Funtrix',
		},
		{
			'name'  : 'Bollywood Trivia',
			'category'   : 'Funtrix',
		},
		{
			'name'  : 'Mini Soccer',
			'category'   : 'Funtrix',
		},
		{
			'name'  : 'Anti Chess',
			'category'   : 'Funtrix',
		},
		{
			'name'  : 'A Game Stall',
			'category'   : 'Funtrix',
		},
		{
			name: "Junkyard Wars",
			category: "RoboKon"
		},
		{
			name: "Kavyanjali",
			category: "Literary"
		},
		{
			name: "Nukkad Natak",
			category: "Dramatics"
		},
		{
			name: "Robo Wars",
			category: "RoboKon"
		},
		{
			name: "Pirates War",
			category: "RoboKon"
		},
		{
			name: "X Copter",
			category: "RoboKon"
		},
		{
			name: "Rangmanch",
			category: "Dramatics"
		},
		{
			name: "Rangrez",
			category: "Fine Arts"
		},
		{
			name: "Shades",
			category: "Fine Arts"
		},
		{
			name: "Collage Making",
			category: "Fine Arts"
		},
		{
			name: "Rangoli",
			category: "Fine Arts"
		},
		{
			name: "Streetz",
			category: "Dance"
		},
		{
			name: "Sur",
			category: "Music"
		},
		{
			name: "Clash Of Band",
			category: "Music"
		},
		{
			name: "Solo",
			category: "Dance"
		},
		{
			name: "Group",
			category: "Dance"
		},
		{
			name: "Robo Race",
			category: "RoboKon"
		},
		{
			name: "Ping Pong",
			category: "RoboKon"
		},
		{
			name: "Mechatron",
			category: "RoboKon"
		},
		{
			name: "Line Follower",
			category: "RoboKon"
		},
		{
			name: "Documania",
			category: "Digital Arts"
		},
		{
			name: "Snapshot",
			category: "Digital Arts"
		},
		{
			name: "Pravah Selfie",
			category: "Digital Arts"
		},
		{
			name: "Digitronics",
			category: "Techtrix - Electonics"
		},
		{
			name: "Kwizz Net",
			category: "Quiz"
		}
	];


function showNotes(a) {
    var b = "";
    a = registration_charges[a];
    a[6] ? (1 == a[0] && (b += "<li>Participation fee for single member : <b>Rs " + a[3] + "/-</b></li>"), b += "<li>Minimum team members : <b>" + a[5] + "</b></li>", b += "<li>Maximum team members : <b>" + a[1] + "</b></li>", b += "<li>Participation fee for a team : <b>Rs " + a[6] + "/-</b></li>") : (a[0] != a[1] && (b += "<li>Maximum participants : <b>" + a[1] + "</b></li>"), b += "<li>Participation fee for " + (1 == a[2] ? "single" : a[2]) + " member" + (1 < a[2] ? "s" : "") + " is <b>Rs " + a[3] + "/-</b></li>",
        a[4] && (b += "<li>For each additional member <b>Rs " + a[4] + "</b> per head will be charged.</li>"));
    $("#notes").html(b ? b : "")
}

function validateInputes() {
    var a, b = {
            Email: [],
            Mobile: []
        },
        f = $("input[name], select[name]");
    for (a = 0; a < f.length; a++) {
        var d = $(f[a]).prop("placeholder"),
            c = $(f[a]).val(),
            e = $(f[a]).parent().attr("member_no");
        member = 1 == e ? "Leader" : e + (2 == e ? "nd" : 3 == e ? "rd" : "th") + " member";
        if (("Email" == d || "Mobile" == d) && 0 <= b[d].indexOf(c)) return alert('You have used ' + d + ' "' + c + '" more than one time in this form.'), !1;
        if ("Name" == d & !c) return alert(member + "'s name can't be empty."), !1;
        if ("Branch" == d & !c) return alert(member + "'s branch can't be empty."), !1;
        if ("College" ==
            d & !c) return alert(member + "'s college name can't be empty."), !1;
        if ("Mobile" == d & (c.length != 10 || !c.match(/[7-9][\d]{9}/))) return alert(member + "'s mobile number seems invalid."), !1;
        if ("Email" == d & !c.match(/(.+)\@(.+)\.(.+)/)) return alert(member + "'s email address seems invalid."), !1;
        "Email" != d && "Mobile" != d || b[d].push(c)
    }
}

function updateAvailableButtons() {
    var a = $("#event").val();
    if (!a || "none" == a) return !1;
    $('div[user_type="leader"]').text(a=="CLASH_OF_BAND" ? 'Band\'s Details' : 'Leader\'s Detail');
    $("div.member_detail[member_no]").length >= registration_charges[a][1] ? ($("#add_member").hide(), $("#submit_form").css("width", "300px")) : ($("#add_member").show(), $("#submit_form").css("width", "148px"))
}
$(function() {
    $("#add_member, #submit_form, .member_detail, .note").css("display", "none");
    competitions.sort(function(a, b) {
        var c = a.category.toUpperCase(),
            e = b.category.toUpperCase();
        return 1 * (c < e ? -1 : c > e ? 1 : 0)
    });
    var a = "",
        b;
    for (b in competitions) a != competitions[b].category && (a = competitions[b].category, $('[id="categories"]').append('<option value="' + a.toUpperCase().replace(/\ |\-/gi, "_") + '">' + (competitions[b].sub_category ? (competitions[b].sub_category + ' - ') : '') + competitions[b].category + "</option>"));
    competitions.sort(function(a, b) {
        var c = a.name.toUpperCase(),
            e = b.name.toUpperCase();
        return 1 * (c < e ? -1 : c > e ? 1 : 0)
    });
    $("#categories").on("change", function() {
        $("div.member_detail[member_no]").each(function() {
            1 < $(this).attr("member_no") && $(this).remove()
        });
        $("#event").html('<option value="none">Select Event</option>');
        $("#add_member, #submit_form, .member_detail, .note").css("display", "none");
        updateAvailableButtons();
        for (var a in competitions) $(this).val() == competitions[a].category.toUpperCase().replace(/\ |\-/gi, "_") && $('[name="event"]').append('<option value="' + competitions[a].name.replace(/\ |\-/gi,
            "_").toUpperCase() + '">' + competitions[a].name + "</option>")
    });
    $("#event").on("change", function() {
        var a = $(this).val();
        window.location.hash = ($("#categories").val() + ":" + a).toLowerCase();
        $(".member_detail, .note").css("display", a && "none" != a ? "block" : "none");
        $("#add_member, #submit_form").css("display", a && "none" != a ? "inline-block" : "none");
        $("div.member_detail[member_no]").each(function() {
            $(this).attr("member_no") > registration_charges[a][0] && $(this).remove()
        });
        for (var b = registration_charges[a][0] - $("div.member_detail[member_no]").length,
                c = 1; c <= b; c++) $("#add_member").trigger("click");
        updateAvailableButtons();
        showNotes(a.toUpperCase())
    });
    $("#add_member").click(function() {
        var a = $("#event").val();
        if (!a || "none" == a) return !1;
        a = $(".member_detail").length + 1;
        $(this).before('<div class="member_detail" member_no="' + a + '"><div user_type="member">' + (a + (2 == a ? "nd" : 3 == a ? "rd" : "th")) + ' Member\'s Detail</div><input placeholder="Name" type="text" name="name[]" required title="Enter your full name as on your collage identity card." /><input placeholder="Email" type="email" name="email[]" required title="Enter your valid email address for further communications." /><input placeholder="Mobile" type="text" pattern="[0-9]{10}" name="mobile[]" required title="Please enter 10 digit mobile number." /><input placeholder="Branch" type="text" name="branch[]" required title="Please enter your branch." /><input placeholder="College" type="text" name="college[]" required title="Enter your current collage name." /></div>');
        updateAvailableButtons()
    });
    if (a = window.location.hash.match(/\#(.+)\:(.+)/)) $("#categories").val(a[1].toUpperCase()).change(), $("#event").val(a[2].toUpperCase()).change()
});