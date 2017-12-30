function ContentObjects(){};

ContentObjects.prototype.init = function(){
	this.categories = {
		'Dance' : ["Solo","Streetz","Group"],
		'Dramatics' : ["Dumb Charades","Nukkad Natak","Rangmanch"],
		'Fine Arts' : ["Rangrez","Shades","Collage Making","Rangoli"],
		
		'Digital Arts' : ["Pravah Selfie","Snapshot","Documania"],
		'Quiz' : ["Kwizz Net"],

		'Literary' : ["Kavyanjali"],
		'Music' : ["Dancing Fingers","Sur","Clash Of Band","War of DJs"],
		'Techtrix' :["Computer Science", "Mechanical", "Civil","Electronics"],
		'RoboKon' : ["Junkyard Wars","Pirates War","Ping Pong", "Line Follower", "Mechatron", "Robo Race","Robo Wars","X-Copter"],
		'Funtrix' : ["Anti Chess", "Fifa", "NFS", "Counter Strike", "Treasure Hunt", "Brainy Games", "Mini Soccer", "A Game Stall","Bollywood Trivia","Stock Stranger"]
	};
	//["Bridge-o-Mania","Card Castle","Papperaazi","Straw Scrapper"]
	this.temp = {'Computer Science':["C/C++ Challenger","SHARP"],
		     'Mechanical':["Assemblaze", "Cad o Mania"],
		     'Civil':["Bridge-o-Mania","Card Castle","Papperaazi","Straw Scrapper", "Cad o Mania"],
		     'Electronics':["Digitronics"]
		     };
	this.notify = [{'img':'kumar_vishvas.jpg', 'content':['Kumar Vishwas in Performance Poetry', '26th Feb, 2015']},
			{'img':'gajendra.jpg', 'content':['Gajendra Verma in Concert', '27th Feb, 2015']}
			];
	this.workshops = [
		{
			'name'  : 'Digital Image Processing',
			'category'   : 'Workshops',
			'pages' :{
				'Detail' : true
			}
		},

		{
			'name'  : 'Robotics',
			'category'   : 'Workshops',
			'pages' :{
				'Detail' : true
			}
		}

	];
	this.competitions = [
		{
			'name'  : 'Cad o Mania',
			'category'   : 'Techtrix',
			'pages' :{
				'Detail': true,
				'Rules' : true,
				'Contact'   : true,
				'Register' : true
			},
			'members' : 5
		},
		{
			'name'  : 'Digitronics',
			'category'   : 'Techtrix',
			'pages' :{
				'Detail': true,
				'Rules' : true,
				'Contact'   : true,
				'Register' : true
			},
			'members' : 1
		},

		{
			'name'  : 'Anti Chess',
			'category'   : 'Funtrix',
			'pages' :{
				'Detail': true,
				'Rules' : true,
				'Contact'   : true,
				'Register' : true
			},
			'members' : 5
		},

		{
			'name'  : 'Assemblaze',
			'category'   : 'Techtrix',
			'pages' :{
				'Detail': true,
				'Rules' : true,
				'Contact'   : true,
				'Register' : true
			},
			'members' : 5
		},

		{
			'name'  : 'Bridge-o-Mania',
			'category'   : 'Techtrix',
			'pages' :{
				'Detail': true,
				'Rules' : true,
				'Contact'   : true,
				'Register' : true
			},
			'members' : 5
		},

		{
			'name'  : 'Card Castle',
			'category'   : 'Techtrix',
			'pages' :{
				'Detail': true,
				'Rules' : true,
				'Contact'   : true,
				'Register' : true
			}
		},

		{
			'name'  : 'Dancing Fingers',
			'category'   : 'Music',
			'pages' :{
				'Detail' : true,
				'Rules' : true,
				'Contact'   : true,
				'Register' : true
			}
		},

		{
			'name'  : 'Rangoli',
			'category'   : 'Fine Arts',
			'pages' :{
				'Detail' : true,
				'Rules' : true,
				'Contact'   : true,
				'Register' : true
			}
		},

		{
			'name'  : 'Dumb Charades',
			'category'   : 'Dramatics',
			'pages' :{
				'Detail' : true,
				'Rules' : true,
				'Contact'   : true,
				'Register' : true
			}
		},

		{
			'name'  : 'Fifa',
			'category'   : 'Funtrix',
			'pages' : {
				'Detail' : true,
				'Rules': true,
				'Contact'   : true,
				'Register' : true
			}
		},

		{
			'name'  : 'NFS',
			'category'   : 'Funtrix',
			'pages' : {
				'Detail' : true,
				'Rules': true,
				'Contact'   : true,
				'Register' : true
			}
		},

		{
			'name'  : 'Treasure Hunt',
			'category'   : 'Funtrix',
			'pages' : {
				'Detail' : true,
				'Rules': true,
				'Contact'   : true,
				'Register' : true
			}
		},

		{
			'name'  : 'Brainy Games',
			'category'   : 'Funtrix',
			'pages' : {
				'Detail' : true,
				'Rules': true,
				'Contact'   : true,
				'Register' : true
			}
		},

		{
			'name'  : 'Stock Stranger',
			'category'   : 'Funtrix',
			'pages' : {
				'Detail' : true,
				'Rules': true,
				'Contact'   : true,
				'Register' : true
			}
		},

		{
			'name'  : 'Bollywood Trivia',
			'category'   : 'Funtrix',
			'pages' : {
				'Detail' : true,
				'Rules': true,
				'Contact'   : true,
				'Register' : true
			}
		},

		{
			'name'  : 'Mini Soccer',
			'category'   : 'Funtrix',
			'pages' : {
				'Detail' : true,
				'Rules': true,
				'Contact'   : true,
				'Register' : true
			}
		},

		{
			'name'  : 'A Game Stall',
			'category'   : 'Funtrix',
			'pages' : {
				'Detail' : true,
				'Rules': true,
				'Contact'   : true,
				'Register' : true
			}
		},

		{
			'name'  : 'Junkyard Wars',
			'category'   : 'Robotics',
			'pages' : {
				'Detail': true,
				'Rules': false,
				'Contact'   : true,
				'Register' : true
			}
		},

		{
			'name'  : 'Kavyanjali',
			'category'   : 'Literary',
			'pages' : {
				'Detail' : true,
				'Rules' : true,
				'Contact'   : true,
				'Register' : true
			}
		},

		{
			'name'  : 'Nukkad Natak',
			'category'   : 'Dramatics',
			'pages' :{
				'Detail' : true,
				'Rules' : true,
				'Contact'   : true,
				'Register' : true
			}
		},

		{
			'name'  : 'Papperaazi',
			'category'   : 'Techtrix',
			'pages' :{
				'Detail': true,
				'Rules' : true,
				'Contact'   : true,
				'Register' : true
			}
		},

		{
			'name'  : 'Robo Wars',
			'category'   : 'Robotics',
			'pages' : {
				'Detail': true,
				'Rules': true,
				'Contact'   : true,
				'Register' : true
			}
		},

		{
			'name'  : 'Pirates War',
			'category'   : 'Robotics',
			'pages' : {
				'Detail': true,
				'Rules': false,
				'Contact'   : true,
				'Register' : true
			}
		},

		{
			'name'  : 'X-Copter',
			'category'   : 'Robotics',
			'pages' : {
				'Detail': true,
				'Rules': false,
				'Contact'   : true,
				'Register' : true
			}
		},

		{
			'name'  : 'Rangmanch',
			'category'   : 'Dramatics',
			'pages' :{
				'Detail' : true,
				'Rules' : true,
				'Contact'   : true,
				'Register' : true
			}
		},

		{
			'name'  : 'Rangrez',
			'category'   : 'Fine Arts',
			'pages' :{
				'Detail' : true,
				'Rules' : true,
				'Contact'   : true,
				'Register' : true
			}
		},

		{
			'name'  : 'Shades',
			'category'   : 'Fine Arts',
			'pages' :{
				'Detail' : true,
				'Rules' : true,
				'Contact'   : true,
				'Register' : true
			}
		},

		{
			'name'  : 'Streetz',
			'category'   : 'Dance',
			'pages' :{
				'Detail' : true,
				'Rules'  : true,
				'Contact'   : true,
				'Register' : true
			}
		},

		{
			'name'  : 'Straw Scrapper',
			'category'   : 'Techtrix',
			'pages' :{
				'Detail': true,
				'Rules' : true,
				'Contact'   : true,
				'Register' : true
			}
		},

		{
			'name'  : 'Sur',
			'category'   : 'Music',
			'pages' :{
				'Detail' : true,
				'Rules' : true,
				'Contact'   : true,
				'Register' : true
			}
		},

		{
			'name'  : 'Clash Of Band',
			'category'   : 'Music',
			'pages' : {
				'Detail' : true,
				'Rules' : true,
				'Contact'   : true,
				'Register' : true
			}
		},


		{
			'name'  : 'War of DJs',
			'category'   : 'Music',
			'pages' : {
				'Detail' : true,
				'Rules' : false,
				'Contact'   : true,
				'Register' : true
			}
		},

		{
			'name'  : 'Solo',
			'category'   : 'Dance',
			'pages' :{
				'Detail' : true,
				'Rules' : true,
				'Contact'   : true,
				'Register' : true
			}
		},

		{
			'name'  : 'Group',
			'category'   : 'Dance',
			'pages' :{
				'Detail' : true,
				'Rules' : true,
				'Contact'   : true,
				'Register' : true
			}
		},

		{
			'name'  : 'Collage Making',
			'category'   : 'Fine Arts',
			'pages' :{
				'Detail' : true,
				'Rules' : true,
				'Contact'   : true,
				'Register' : true
			}
		},

		{
			'name'  : 'Robo Race',
			'category'   : 'Robotics',
			'pages' :{
				'Detail' : true,
				'Rules' : true,
				'Contact'   : true,
				'Register' : true
			}
		},

		{
			'name'  : 'Ping Pong',
			'category'   : 'Robotics',
			'pages' :{
				'Detail' : true,
				'Rules' : true,
				'Contact'   : true,
				'Register' : true
			}
		},

		{
			'name'  : 'Mechatron',
			'category'   : 'Robotics',
			'pages' :{
				'Detail' : true,
				'Rules' : true,
				'Contact'   : true,
				'Register' : true
			}
		},

		{
			'name'  : 'Line Follower',
			'category'   : 'Robotics',
			'pages' :{
				'Detail' : true,
				'Rules' : false,
				'Contact'   : true,
				'Register' : true
			}
		},

		{
			'name'  : 'Documania',
			'category'   : 'Digital Arts',
			'pages' :{
				'Detail' : true,
				'Rules' : true,
				'Contact'   : true,
				'Register' : true
			}
		},

		{
			'name'  : 'Snapshot',
			'category'   : 'Digital Arts',
			'pages' :{
				'Detail' : true,
				'Rules' : true,
				'Contact'   : true,
				'Register' : true
			}
		},

		{
			'name'  : 'Pravah Selfie',
			'category'   : 'Digital Arts',
			'pages' :{
				'Detail' : true,
				'Rules' : true,
				'Contact'   : true,
				'Register' : true
			}
		},

		{
			'name'  : 'C/C++ Challenger',
			'category'   : 'Techtrix',
			'pages' :{
				'Detail' : true,
				'Rules' : true,
				'Contact'   : true,
				'Register' : true
			}
		},

		{
			'name'  : 'SHARP',
			'category'   : 'Techtrix',
			'pages' :{
				'Detail' : true,
				'Rules' : true,
				'Contact'   : true,
				'Register' : true
			}
		},
		{
			'name'  : 'Counter Strike',
			'category'   : 'Funtrix',
			'pages' :{
				'Detail': true,
				'Rules' : true,
				'Contact'   : true,
				'Register' : true
			}
		},
		{
			'name'  : 'Kwizz Net',
			'category'   : 'Quiz',
			'pages' :{
				'Detail': true,
				'Rules' : true,
				'Contact'   : true,
				'Register' : true
			}
		}
	];

	this.contacts = [
		{
			'team'   : 'Managers',
			'name'   : 'Gyanesh Kumar',
			'mobile' : '8824 871 012',
			'fb'     : 'Gyaneshkumar93',
			'email'  : 'gyaneshkumar93@gmail.com'
		},

	 	{
			'team'   : 'Managers',
			'name'   : 'Gaurav Kanthaliya',
			'mobile' : '9461 140 098',
			'fb'	 : 'gaurav.kanthaliya',
			'email'  : 'gaurav.kanthaliya@gmail.com'
		},

	 	{
			'team'   : 'Event Manager',
			'name'   : 'Gaurav Mehra',
			'fb'     : '',
			'email'  : 'urmylifeecb@gmail.com',
			'mobile' : '8947 991 627'
		},

	 	{
			'team'   : 'Sponsorship Coordinators',
			'name'   : 'Devesh Jain',
			'fb'     : 'Jaindevesh.dj007',
			'email'  : 'jaindevesh.dj@gmail.com',
			'mobile' : '9610 379 998'
		},

	 	{
			'team'   : 'Sponsorship Coordinators',
			'name'   : 'Praveen Bishnoi',
			'fb'     : 'prvin29',
			'email'  : '',
			'mobile' : '8385 888 425'
		},

	 	{
			'team'   : 'Sponsorship Coordinators',
			'name'   : 'Vishwas Jain',
			'fb'     : 'vishwas.jain.180',
			'email'  : 'vishu.donny@gmail.com',
			'mobile' : '8385 888 425'
		},

	 	{
			'team'   : 'Sponsorship Coordinators',
			'name'   : 'Sarvesh Sharma',
			'fb'     : '',
			'email'  : '',
			'mobile' : ''
		},


	 	{
			'team'   : 'Publicity & Public Relations',
			'name'   : 'Hardik Mathur',
			'fb'     : 'HardikMathurExclusive',
			'email'  : 'talkin_sense@live.com',
			'mobile' : '9530 000 051'
		},


	 	{
			'team'   : 'Publicity & Public Relations',
			'name'   : 'Himanshu Singh',
			'fb'     : '',
			'email'  : 'himanshusinghawgp@gmail.com',
			'mobile' : '8852 006 696'
		},

	 	{
			'team'   : 'Creativity & Web Coordinators',
			'name'   : 'Rajat Goel',
			'email'  : 'rajatgl17@gmail.com',
			'mobile' : '8384 999 7569',
			'fb'	 :	'rajatgl17'
		},

	 	{
			'team'   : 'Creativity & Web Coordinators',
			'name'   : 'Subroto Biswas',
			'fb'	 : 'subroto.biswas3',
			'mobile' : '8107 073 754',
			'email'  : 'sub14biswas@gmail.com'
		},

		{
			'team'   : 'Creativity & Web Coordinators',
			'name'   : 'Hari Singh',
			'mobile' : '7737 551 411',
			'email'  : 'hari.singh@acan.in',
			'fb'     : 'hsbijarniya'
		},

		{
			'team'   : 'Creativity & Web Coordinators',
			'name'   : 'Milind Sharma',
			'mobile' : '7597 557 308',
			'email'  : 'milind4computing@gmail.com',
			'fb'     : 'milind4computing'
		},

		{
			'team'   : 'Venue Coordinators',
			'name'   : 'Kartik Gautam',
			'fb'	 : 'kartik.j.gautam',
			'mobile' : '9694 516 190',
			'email'  : 'kartikgautam1994@gmail.com'
		},

		{
			'team'   : 'Venue Coordinators',
			'name'   : 'Ayush Khandelwal',
			'fb'	 : 'ayush.khandelwal.503',
			'mobile' : '9460 418 505',
			'email'  : 'khandelwalayush1610@gmail.com'
		},

		

		{
			'team'   : 'Social Media Coordinator',
			'name'   : 'Jai Agrawal',
			'fb'     : 'jai.agrawal.90',
			'email'  : '',
			'mobile' : '8560 860 861'
		},
/*		{
			'team'   : 'Annual Day Coordinator',
			'name'   : 'Chintan Goyal',
			'mobile' : '9462 010 301',
			'fb'     : 'chintan.goyal',
			'email'  : 'chintan308@gmail.com'
		},
		{
			'team'   : 'Annual Day Coordinator',
			'name'   : 'Akansh Rastogi',
			'mobile' : '8058 563 831',
			'fb'     : 'akansh.rastogi.1',
			'email'  : 'rastogi.akansh@gmail.com'
		},
		{
			'team'   : 'Annual Day Coordinator',
			'name'   : 'Pratyusha Mishra',
			'mobile' : '7742 435 048',
			'fb'     : 'pratyusha.mishra.3',
			'email'  : 'mishra.pm1995@gmail.com '
		},
	*/	{
			'team'   : 'Social Causes Coordinator',
			'name'   : 'Anshuman Goswami',
			'mobile' : '9460 000 142',
			'fb'     : 'ANSHUMAN.GOSWAMI2594',
			'email'  : 'icecool22594@gmail.com'
		}
	];

	this.sponsors = [
		{
			'img'  : 'myfm',
			'type' : 'Radio Partner',
			'category' : 'Associate Sponsors'
		}
	];

	this.navs = {
		'About Us':{},
		'Hospitality':{},
		'Contact Us':{},
		'Competitions':{}
	}
}