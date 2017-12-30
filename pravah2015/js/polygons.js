function polygonMaker(){
			var polygons = [{
								points: [200,100, 184,100, 176,113.6564, 184,127.7128, 200, 127.7128, 208, 113.6564],
								pos: [1,3,4,5,9]
							},
							{
								points: [224,113.6564, 208,113.6564, 200,127.3128, 208,140.9692, 224,140.9692, 232, 127.3128],
								pos: [1,2,3,4,5,6,7,8]
							},
							{
								points: [248,155.2256, 232,155.2256, 224,169.0820, 232,182.7384, 248, 182.7384, 256, 169.0820],
								pos: [1,2,3,4,5,6,]
							},
							{
								points: [272, 141.3692, 256, 141.3692, 248, 155.0256, 256, 168.6820, 272, 168.6820, 280, 155.0256],
								pos: [1,2,3,4,5,6,7]
							},
							{
								points: [296, 182.9384, 280, 182.9384, 272, 196.7948, 280, 210.4512, 296, 210.4512, 304, 196.7948],
								pos: [1,2,3,4,5,6,7]
							}];
			function increasePolygon(dist, polygon){
				for(var i=0; i<polygon.length; i++){
					if(i%2){
						polygon[i] += dist;
					}
				}
			}
			function exists(value, array){
				for (var i = 0; i < array.length; i++) {
					if(array[i] == value) return true;
				}; 

				return false;
			}
			/*"M"+menu_points[i].start.p[0]+' '+menu_points[i].start.p[1]+'L'+menu_points[i].middle.p[0]+' '+menu_points[i].middle.p[1]+'L'+menu_points[i].end.p[0]+' '+menu_points[i].end.p[1]*/
			var polygon = [], g= paper.g();
			for (var i = 1, j=0; i < 10; i++) {
				if(exists(i,polygons[0].pos)){
					polygon.push(paper.polygon(polygons[0].points));
					polygon[j].attr({fill: '#ffffff', "fill-opacity": 0, stroke:'#ffffff'});
					
					j++;
				}
				if(exists(i,polygons[1].pos)){
					polygon.push(paper.polygon(polygons[1].points));
					polygon[j].attr({fill: '#ffffff', "fill-opacity": 0, stroke:'#ffffff'});
					
					j++;
				}
				if(exists(i,polygons[2].pos)){
					polygon.push(paper.polygon(polygons[2].points));
					polygon[j].attr({fill: '#ffffff', "fill-opacity": 0, stroke:'#ffffff'});
					
					j++;
				}
				if(exists(i,polygons[3].pos)){
					polygon.push(paper.polygon(polygons[3].points));
					polygon[j].attr({fill: '#ffffff', "fill-opacity": 0, stroke:'#ffffff'});
					
					j++;
				}
				if(exists(i,polygons[3].pos)){
					polygon.push(paper.polygon(polygons[4].points));
					polygon[j].attr({fill: '#ffffff', "fill-opacity": 0, stroke:'#ffffff'});
					
					j++;
				}
				g.add(polygon[j-5], polygon[j-4], polygon[j-3], polygon[j-2], polygon[j-1]);
				increasePolygon(27.7128, polygons[0].points);
				increasePolygon(27.7128, polygons[1].points);
				increasePolygon(27.7128, polygons[2].points);
				increasePolygon(27.7128, polygons[3].points);
				increasePolygon(27.7128, polygons[4].points);
			};
			/*g.attr({
				transform: 'translate(150, 100)'
			})*/

			g.attr({
				transform: 'translate(-30, 70)'
			})

			chooser(polygon);	
};

function chooser(polygon){
	var count = Math.floor(Math.random()*6);

	for (var i = 0; i < count; i++) {
		var index = Math.floor(Math.random()*polygon.length);
		polygon[index].animate({"fill-opacity": 0.95}, 1000, mina.easeout, function(){
			this.animate({"fill-opacity": 0}, 1000, mina.easein);
		});
	}

	/*polygon.animate({"fill-opacity": 0.95}, 3000, mina.easeout, function(){
			this.animate({"fill-opacity": 0}, 3000, mina.easein);
		});*/

	var handle = window.setTimeout(function(){chooser(polygon)}, 1500);
}