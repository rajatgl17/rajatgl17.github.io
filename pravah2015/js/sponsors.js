function Sponsors(){};

Sponsors.prototype.init = function(animator){
	var self = this;
	self.animator = animator;

	self.flag1 = true;self.sponsorIndex = 0;
	self.imagesMeta = [
	{name: 'Shunyam Tech', dim:[250,250], link:"http://www.shunyamtech.com"},
	{name:'Union Bank',dim:[250, 250], link:"http://www.unionbankofindia.com"},
	{name:'Taxi For Sure', dim:[250, 250],link:"http://www.taxiforsure.com/jaipur-cabs/"},
	{name: 'Snow Planet', dim:[250,250], link:"http://www.snowplanet.in"}
	];
	self.animateAttrs = [{"stroke-width": 15,	"stroke-opacity": 0.9, "stroke-dashoffset": 0, "stroke":"#ffffff"},
					{"stroke-width": 10,	"stroke-opacity": 0.9, "stroke-dashoffset": 0, "stroke":"#ffffff"},
					{"stroke-width": 30,	"stroke-opacity": 0.2, "stroke-dashoffset": -30, "stroke":"#ffffff"},
					{"stroke-width": 5,	"stroke-opacity": 0.6, "stroke-dashoffset": -100, "stroke":"#ffffff"}];
	self.attrs = [{"stroke-dasharray": '2, 32.90 ', "fill":"none"}, {"stroke-dasharray": '2,2', "fill":"none"}, {"stroke-dasharray": '320,57', "fill":"none"}, {"stroke-dasharray": '150, 80, 75, 65, 45, 51.371', "fill":"none"}];

	self.loadSponsors();
}

Sponsors.prototype.loadSponsors = function(){
	var self = this;
	self.div = $('#sponsors');
	self.innerDiv = self.div.find('#inner-sponsors');
	self.paper = Snap('#svgSponsors');
	window.selfSponsors = this;

	self.paper.g().attr({"id":'g0'});
	self.paper.g().attr({'id':'g1'});
	self.group = self.paper.select('#g1');
	self.group0 = self.paper.select('#g0');

	self.textSize = 48;

	self.createSponsors(self.paper, "Ebay", self.textSize, 0, 0, self.div.innerWidth(), self.div.innerHeight());
	self.sponsors.open = [false];
	
	//self.innerDiv.hover(function(){self.openSponsors()}, function(){self.closeSponsors()});
	self.group.add(self.sponsors.canvas, self.sponsors.text)
	
}

Sponsors.prototype.createSponsors = function(paper, text, textSize, x, y, width, height){
	var self = this;
	var center = [width-(height/1.5), height/2];
	self.sponsors = {"canvas": new Snap.set(), "center": center, "rad":[100, 95, 60, 79]};
	for (var i = 3; i >= 0; i--) {
		self.sponsors.canvas.push(paper.circle(self.sponsors.center[0], self.sponsors.center[1], self.sponsors.rad[i]).attr(self.attrs[i]));
	}
	//165.457
	self.sponsors.canvas[3].attr(self.animateAttrs[0]);
	self.sponsors.canvas[2].attr(self.animateAttrs[1]);
	self.sponsors.canvas[1].attr(self.animateAttrs[2]);
	self.sponsors.canvas[0].attr(self.animateAttrs[3]);

	self.box = self.sponsors.canvas[1].getBBox();

	self.sponsorImage = new Snap.set();
	self.imagesMeta.forEach(function(val, i){
		var height = val.dim[1]/val.dim[0] * self.box.width;
		var name = val.name.toLowerCase().replace(/ /g, '');
		/*if(i == 2||i==0){
			self.sponsorImage.push(self.paper.image('../m/images/sponsors/'+name+'.png', self.box.x, (self.box.height/2) + (height), self.box.width, height).attr({'visibility':'hidden'}));
			}
		else{*/
			self.sponsorImage.push(self.paper.image('../m/images/sponsors/'+name+'.png', self.box.x, self.box.y, self.box.width, height).attr({'visibility':'hidden'}));
			
	})
	self.sponsorImage[2].attr({'visibility':'visible'});

	self.createText(paper, text, textSize);
}

Sponsors.prototype.changeSponsors = function(index){
	var self = this;
	self.sponsorImage[index].attr({'visibility':'visible'});
	self.createText(self.paper, self.imagesMeta[index].name, self.textSize);
}

Sponsors.prototype.createText = function(paper, text, textSize){
	var self = this;
	if(typeof self.sponsors.text != 'undefined'){
		self.sponsors.text.remove();
	}
	if(typeof self.underline != 'undefined'){
		self.underline.remove();
	}
	self.sponsors.text = new Snap.set();
	self.sponsors.text.push(paper.text(0, 0, text).attr({"fill":"#04adbd", "fill-opacity": 0.7, "font-family": "bitwise", 'letter-spacing': '5px',"font-size": textSize}));
	var textData = self.sponsors.text[0].getBBox();
	var box2 = self.sponsors.canvas[3].getBBox();
	self.sponsors.text[0].attr({x:box2.x-textData.width-30, y:box2.y+textData.height})
	var filter1 = paper.filter(Snap.filter.blur(2.5));
	self.sponsors.text.push(self.sponsors.text[0].clone().attr({"fill":"#74edfd", "fill-opacity": 1, filter: filter1}));
	self.sponsors.text.animate({opacity: 0}, 0);

	self.underline = new Snap.set();
	self.underline.push(self.paper.path('M'+self.sponsors.center[0]+' '+self.sponsors.center[1]+', '+(box2.x-30)+' '+(box2.y+textData.height+5)+', '+(box2.x-textData.width-30)+' '+(box2.y+textData.height+5)).attr({'visibility':'hidden'}));
	self.underline.push(self.paper.path().attr({'stroke-width':3, stroke:'#ffffff', 'stroke-opacity':0.7, 'fill':'none'}));
	self.underlineLength = Snap.path.getTotalLength(self.underline[0].attr('d'));

	self.group0.add(self.underline);
}

Sponsors.prototype.animate = function(index){
	var self = this;
	if(self.flag1){
		index = index>self.imagesMeta.length-1?0: index;
		self.sponsorIndex = index;
		self.innerDiv.off();
		self.innerDiv.on('click', function(){window.open(self.imagesMeta[index].link);});
		self.sponsorImage.attr({'visibility':'hidden'});
		self.changeSponsors(index);
		self.openSponsors();
		window.setTimeout(function(){
			self.closeSponsors();
		}, 2000);
		window.setTimeout(function(){
			self.animate(++index);
		}, 8000)
	}
}

Sponsors.prototype.stop = function(){
	this.flag1 = false;
}
Sponsors.prototype.start = function(){
	if(!this.flag1){
		this.flag1 = true;
		this.animate(this.sponsorIndex);
	}
}

Sponsors.prototype.openSponsors = function(){
	var self = this;
	if(!self.sponsors.open[0]){
		self.sponsors.canvas[3].animate({"transform": Snap.matrix().scale(1.3, 1.3, self.sponsors.center[0], self.sponsors.center[1])}, 500, mina.backout, function(){
			self.sponsors.canvas[2].animate({"transform": Snap.matrix().scale(1.15, 1.15, self.sponsors.center[0], self.sponsors.center[1])},500, mina.backout);
			self.sponsors.canvas[0].animate({r:'+=5'},500, mina.backin, function(){self.sponsors.open[0] = true});
			TweenLite.to(self.sponsors.canvas[1], 0.5, {raphael: {"stroke-dashoffset": 350},ease: Power0.easeOut});
			self.openTitle();
		});
	}else{
		self.closeSponsors();
	}
}

Sponsors.prototype.openTitle = function(){
	var self = this;
	Snap.animate(0, self.underlineLength, function(l){
		self.underline[1].attr({
			d: self.underline[0].getSubpath(0, l)
		})
	}, 500);
	window.setTimeout(function(){self.sponsors.text.animate({opacity: 1}, 500);}, 300);
}

Sponsors.prototype.closeTitle = function(){
	var self = this;
	self.sponsors.text.animate({opacity: 0}, 500);
	window.setTimeout(function(){
		Snap.animate(self.underlineLength, 0, function(l){
			self.underline[1].attr({
				d: self.underline[0].getSubpath(0, l)
			})
		}, 500);
	}, 300);
}

Sponsors.prototype.closeSponsors = function(){
	var self = this;
	for(var i=0; i<self.sponsors.canvas.length; i++){
		self.sponsors.canvas[i].stop();
	}
	self.closeTitle();
	self.sponsors.canvas[2].animate({"transform": Snap.matrix().scale(1, 1, self.sponsors.center[0], self.sponsors.center[1])},500, mina.backout);
	self.sponsors.canvas[0].animate({r:'79'},500, mina.backin, function(){self.sponsors.canvas[3].animate({"transform": Snap.matrix().scale(1, 1, self.sponsors.center[0], self.sponsors.center[1])},500, mina.backout, function(){
		self.sponsors.open[0] = false
	})});
	TweenLite.to(self.sponsors.canvas[1], 0.5, {raphael: {"stroke-dashoffset": -30},ease: Power0.easeOut});
}