function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
		  var angleInRadians = angleInDegrees * Math.PI / 180.0;
		  var x = centerX + radius * Math.cos(angleInRadians);
		  var y = centerY + radius * Math.sin(angleInRadians);
		  return [x,y];
		}
	var Circle_coords = {start: 0, end: 0};
	Circle_coords.start = polarToCartesian(793, 290, 160, 190);
	Circle_coords.end = polarToCartesian(793, 290, 160, -230);
	var paper = Snap("#menu-svg svg");
	var circle = [], circ_clone = [];
	circ_clone.push(paper.path("M"+Circle_coords.start[0]+" "+Circle_coords.start[1]+" A 160 160 0 1 1 "+Circle_coords.end[0]+" "+Circle_coords.end[1]).attr({display: 'none'}));
	circle.push(paper.path().attr({fill: 'none', stroke: '#64ffff', "stroke-width":'6','stroke-opacity':'0.64550261', 'stroke-dasharray':'48, 12, 6, 12', 'stroke-dashoffset':'0'}));

	var filter1 = paper.filter(Snap.filter.shadow(0, 0, 2, '#64ffff', 2));
	Circle_coords.start = polarToCartesian(793, 290, 110, 195);
	Circle_coords.end = polarToCartesian(793, 290, 110, -315);
	circ_clone.push(paper.path("M"+Circle_coords.start[0]+" "+Circle_coords.start[1]+" A 110 110 0 1 1 "+Circle_coords.end[0]+" "+Circle_coords.end[1]).attr({display: 'none'}));
	circle.push(paper.path().attr({fill: 'none', stroke: '#64ffff', "stroke-width":'16','stroke-opacity':'0.64550261', 'stroke-dasharray':'8, 12', 'stroke-dashoffset':'0', filter: filter1}));

	var line = [], menu_line = [], m_text = ['Culture', 'Competition', 'Innovation', 'Creativity', 'Team Work', 'Ideas'], menu_text=[];

	var menu_points = [{}, {}, {}, {}, {}, {}];
	for (var i = 0, angle=100; i < menu_points.length; i++, angle -= 42) {
		menu_points[i].start = {};
		menu_points[i].start.p = polarToCartesian(793, 290, 110, angle);

		menu_points[i].middle = {};
		menu_points[i].middle.p = polarToCartesian(793, 290, 250, angle)

		menu_points[i].end = {};
		menu_points[i].end.p = polarToCartesian(793, 290, 250, angle);
		if(menu_points[i].start.p[0] > menu_points[i].middle.p[0]){
			menu_points[i].end.p[0] -= 120;
			menu_text.push(paper.text(menu_points[i].end.p[0]+10, menu_points[i].end.p[1]-5, m_text[i]).attr({
				fill: '#ffffff',
				'fill-opacity': 0,
				'font-size': '20'
			}));
		}
		else{
			menu_points[i].end.p[0] += 120;
			menu_text.push(paper.text(menu_points[i].middle.p[0]+10, menu_points[i].middle.p[1]-5, m_text[i]).attr({
				fill: '#ffffff',
				'fill-opacity': 0,
				'font-size': '20'
			}));
		}
		menu_text
		angle -= i==2?32:0;
	};
	
	var len = [Snap.path.getTotalLength(circ_clone[0].attr("d")), Snap.path.getTotalLength(circ_clone[1].attr("d"))];
	for(var i=0; i<menu_points.length; i++){
		var menuPath = "M"+menu_points[i].start.p[0]+' '+menu_points[i].start.p[1]+'L'+menu_points[i].end.p[0]+' '+menu_points[i].end.p[1];
		line.push(paper.path(menuPath));
		menu_line.push(paper.path().attr({
			stroke: "#ffffff",
			'stroke-width': 1.5,
			'stroke-opacity': 0.65,
			fill: "none"
		}));

		len.push(Snap.path.getTotalLength(line[i].attr("d")));
	}
	var i=0;

	Snap.animate(0, len[0], function (l) {
		circle[0].attr({
			d: circ_clone[0].getSubpath(0, l)
		});
	}, 1700, mina.easein);

	Snap.animate(0, len[1], function (l) {
		circle[1].attr({
			d: circ_clone[1].getSubpath(0, l)
		});
	}, 1700, mina.easein, function(){
		menu_line.forEach(function(menu_line){
			var menuPath = "M"+menu_points[i].start.p[0]+' '+menu_points[i].start.p[1]+'L'+menu_points[i].middle.p[0]+' '+menu_points[i].middle.p[1]+'L'+menu_points[i].end.p[0]+' '+menu_points[i].end.p[1];
			var line_one = line[i];
			Snap.animate(0, len[i+2], function (l) {
				menu_line.attr({
					d: line_one.getSubpath(0, l)
				});
			}, 800, mina.easeout, function() { 
				menu_line.animate({'path': menuPath}, 1000, mina.elastic) 
			});
			menu_text.forEach(function(menu_text_x){menu_text_x.animate({'fill-opacity': 1}, 2000);})
			i++;
		});
		repeat();
		i=0;
		Snap.animate(len[i+2], 0, function (l){}, 5000/*, function() { 
			menu_line.forEach(function(menu_line){
				var line_one = line[i];
				Snap.animate(len[i+2], 0, function (l) {
					menu_line.attr({
						d: line_one.getSubpath(0, l)
					});
				}, 1500, mina.easeout, function(){
					menu_text.forEach(function(menu_text_x){menu_text_x.animate({'fill-opacity': 0}, 1500);})
				});
				i++;
			});
		}*/);
	});
function repeat(){
	circle[1].attr({
		'stroke-dashoffset': 0
	});
	circle[1].animate({'stroke-dashoffset': len[1]
		 }, 12000, mina.easein, function(){
		repeat()
	});

	/*circle[0].attr({
		'stroke-dashoffset': 0
	});
	circle[0].animate({'stroke-dashoffset': -len[0]
		 }, 12000, mina.easein, function(){
		repeat()
	});*/
};