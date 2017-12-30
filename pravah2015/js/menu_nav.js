function MenuNav(){
	var pTemp, pTemp2;
	this.div;
	this.timeline; this.tweens = [];
	this.animateFlag = false;
	var logoText = ['']
}

MenuNav.prototype.init = function(menu, contents, animator){
	var self = this;
	self.menu = menu;
	self.animator = animator;
	self.contents = contents;

	self.iconMeta = {'exhibitions':{'pos':8, 'subx':4, 'suby':0}, 'about_us':{'pos':6, 'subx':-2, 'suby':0}, 'accommodation':{'pos':2, 'subx':-8, 'suby':0}, 'contact_us':{'pos':11, 'subx':-12, 'suby':0}, 'workshops':{'pos':9, 'subx':-16, 'suby':0}, 'competitions':{'pos':10, 'subx':-42, 'suby':0},
						'register':{'pos':7, 'subx':-35, 'suby':0}, 'gallery':{'pos':3, 'subx':-29.5, 'suby':0}, 'aaveg':{'pos':5, 'subx':-24, 'suby':0}, 'home':{'pos':4, 'subx':-23, 'suby':-27}}

	self.icons = Snap.set(); self.iconPatternsWhite = Snap.set(); self.iconPatternsGold = [];
	
	pTemp = Snap("#menu-nav-svg-container");
	div = $("#menu-nav");
	div.css({'width':window.innerWidth});

	Snap.load('svg/menu_nav_opt.svg', function(data){self.onSVGload(data)});
	self.initPages();
	
}

MenuNav.prototype.onSVGload = function(data){
	var self = this;
	pTemp.append(data);
	this.paper = pTemp.select('svg');
	this.container = $(pTemp.node);
	this.animateFlag = true;
	//Snap.load('svg/navigateScreen_opt.svg', function(data){self.onNavigateLoad(data)});
	self.createDiv();
	window.selfmenuNav = self;
}

MenuNav.prototype.onNavigateLoad = function( data ){
	var self = this;
}

MenuNav.prototype.createDiv = function(){
	var self = this;
	self.ratio = (window.innerHeight/675.5)*678.21;
	self.navs = self.paper.selectAll('#eventLogos path');
	//5,6,7,8 and 18,19,20,21
	self.text = self.paper.select('#innerText text');
	self.iconSVG = self.paper.select('#iconsSVG');
	self.menuSet = Snap.set(self.paper.select('#insider'),self.paper.select('#skewedRects'),self.paper.select('#glow'),self.paper.select('#eventLogos'),self.paper.select('#middle'),self.paper.select('#extraCircles'),self.paper.select('#innerText'),self.paper.select('#outerBeziers'));

	self.allNavs = Snap.set(Snap.set(self.navs[4],self.navs[5],self.navs[6],self.navs[7],self.navs[8],self.navs[9],self.navs[17],self.navs[0]), Snap.set(self.navs[21], self.navs[20], self.navs[19], self.navs[18]));
	// self.allNavs.attr({'stroke-width':'3px', "fill-opacity":0.3, 'fill':'#ffffff'})
	// self.navs[0].attr({'stroke-width':'3px', "fill-opacity":0.3, 'fill':'#ffffff'})
	self.whiteImage = self.paper.image('images/icons.png').toDefs();
	self.goldImage = self.paper.image('images/iconsGold.png').toDefs();

	self.set();

	

	//self.paper2.selectAll('.removable').appendTo(self.pointers);
	self.eventHandler();
	self.initTweens();

}

MenuNav.prototype.createIcons = function(){
	var self = this;
	var startDeg=-30, degSpan=15;
	relative = self.paper.select('g#setCircle');
	relative.animate({opacity:0},0);
	box = relative.getBBox()
	self.iconSVG.animate({opacity:0}, 0);

	for (var i = 0; i < (self.allNavs[0].length+self.allNavs[1].length); i++) {
		self.iconPatternsWhite.push(self.whiteImage.use().toPattern());
		self.iconPatternsGold.push(self.goldImage.use().toPattern());

		self.iconPatternsWhite[i].attr({viewBox:'0 0 444 37', height:37, width:444});
		self.iconPatternsGold[i].attr({viewBox:'0 0 444 37', height:37, width:444})
	};	

	var j=0;

	for(var i=0; i<self.allNavs[0].length-1; i++){
		var menu = self.allNavs[0][i].attr('data-content');
		if(typeof self.iconMeta[menu] != 'undefined'){
			self.createIcons2(startDeg, degSpan, menu, 0, j, j);
			j++;
		}
	}
	startDeg=-147;degSpan=-15.5;
	for(var i=0; i<self.allNavs[1].length; i++){
		var menu = self.allNavs[1][i].attr('data-content');
		if(typeof self.iconMeta[menu] != 'undefined'){
			self.createIcons2(startDeg, degSpan, menu, 180, i, j);
			j++;
		}
	}
	self.createIcons2(-95, 0, 'home', 90, 0, j);
}

MenuNav.prototype.createIcons2 = function(startDeg, degSpan, menu, angular, i, j){
	var self = this;
	var newDeg = startDeg+(i*degSpan);
	self.icons.push(self.iconSVG.rect(
		box.cx+(Math.cos(newDeg*(Math.PI/180))*box.width/2)+self.iconMeta[menu].subx,
		box.cy+(Math.sin(newDeg*(Math.PI/180))*box.width/2)+self.iconMeta[menu].suby, 37, 37
		).attr({fill: self.iconPatternsWhite[j]}))
	self.iconPatternsWhite[j].attr({x:box.cx+(Math.cos(newDeg*(Math.PI/180))*box.width/2)+self.iconMeta[menu].subx-(self.iconMeta[menu].pos*37), y:box.cy+(Math.sin(newDeg*(Math.PI/180))*box.width/2)+self.iconMeta[menu].suby})
	self.iconPatternsGold[j].attr({x:box.cx+(Math.cos(newDeg*(Math.PI/180))*box.width/2)+self.iconMeta[menu].subx-(self.iconMeta[menu].pos*37), y:box.cy+(Math.sin(newDeg*(Math.PI/180))*box.width/2)+self.iconMeta[menu].suby})
	var box2 = self.icons[j].getBBox();
	var matrix = new Snap.Matrix();
	matrix.add(Snap.matrix().rotate(angular+newDeg, box2.cx, box2.cy));
	matrix.add(Snap.matrix().scale(0.95,0.95, box2.cx, box2.cy));
	self.icons[j].transform(matrix);
}

MenuNav.prototype.set = function(){
	var self = this;
	
	//self.menuSet.animate({transform:Snap.matrix().scale(0, 0, selfmenuNav.paper.getBBox().cx, selfmenuNav.paper.getBBox().cy), 'opacity':0}, 0)
	var index=0;
	self.container.show();
	self.menuSet.forEach(function(el, delay){
		if(delay!=2 && delay < 5){
			if(index%2==0){
				el.animate({transform:Snap.matrix().scale(0.8,0.8, self.paper.getBBox().cx, self.paper.getBBox().cy),opacity:0},0)
			}else{
				el.animate({transform:Snap.matrix().scale(1.2,1.2, self.paper.getBBox().cx, self.paper.getBBox().cy),opacity:0},0)
			}
			index++;
		}else{
			el.animate({opacity:0}, 0);
		}
	})

	self.container.css({
		'height':window.innerHeight,
		'width': self.ratio,
		'left': (window.innerWidth/2)>self.ratio/2?(window.innerWidth/2)-self.ratio/2:self.ratio/2-(window.innerWidth/2),
		'top': 0
	})
}
MenuNav.prototype.startAnim = function(){
	var self = this;
	var index=0;
	self.menuSet.forEach(function(el, delay){
		if(delay!=2 && delay < 5){
			window.setTimeout(function(){
				el.animate({opacity:1},0);
				el.animate({transform:Snap.matrix().scale(1,1, self.paper.getBBox().cx, self.paper.getBBox().cy)}, 600, mina.easein)
			}, 400*index);
			index++;
		}else{
			//el.animate({transform:Snap.matrix().scale(1,1, self.paper.getBBox().cx, self.paper.getBBox().cy)},0);
			window.setTimeout(function(){el.animate({opacity:1}, 600);},500*4);
		}
	})
	var matrix = new Snap.Matrix();
	matrix.add(Snap.matrix().rotate(10,self.menuSet[3].getBBox().cx, self.menuSet[3].getBBox().cy));
	window.setTimeout(function(){
		self.menuSet[3].animate({transform:matrix},500,mina.easein)
		window.setTimeout(function(){
			self.createIcons();
			self.allNavs.animate({'stroke-width':3}, 800);
			self.allNavs.animate({"fill-opacity":0.17, 'fill':'#ffffff'}, 500, mina.easein);
			window.setTimeout(function(){
				self.menuSet[3].animate({transform:Snap.matrix().rotate(0,self.menuSet[3].getBBox().cx, self.menuSet[3].getBBox().cy)},500,mina.easein,function(){
					self.iconSVG.animate({opacity:1},1000);
				});
				self.menuNavStart();
				//self.icons.attr({opacity:1});
			}, 210);
		}, 550);
	},2100);
}
MenuNav.prototype.menuNavContinuousAnimation1 = function(x,y, data){
	var self = this;
	if(self.menuNavContinuousAnimationflag){
		Snap.animate(0, data, function(l){
			if(self.menuNavContinuousAnimationflag){
				self.menuSet[1].attr({
					transform: Snap.matrix().rotate(l, x, y)
				})
			}else{
				return;
			}
		}, 10800, mina.linear, function(){
			self.menuNavContinuousAnimation1(x, y,360);
		});
	}
}
MenuNav.prototype.menuNavContinuousAnimation2 = function(data){
	var self = this;
	if(self.menuNavContinuousAnimationflag){
		window.setTimeout(function(){
			self.menuSet[2].animate({'opacity':data}, 1500)
			data=data==1?0.5:1;
			self.menuNavContinuousAnimation2(data);
		},1500)
	}
}
MenuNav.prototype.menuNavStop = function(){
	var self = this;
	selfmenuNav.menuNavContinuousAnimationflag = false
}
MenuNav.prototype.menuNavStart = function(){
	var self = this;
	self.menuNavContinuousAnimationflag = true;
	self.menuNavContinuousAnimation1(self.menuSet[1].getBBox().cx, self.menuSet[1].getBBox().cy,360);
	self.menuNavContinuousAnimation2(1);
}
MenuNav.prototype.initPages = function(){
	var self = this;
	$(window).on('hashchange', function () {
		if ( !window.location.hash ) window.location.hash = 'home'; 

		//self.loadPage( window.location.hash.slice(1) );
	});

	var lastCategory;
	

	var lastTeam;
	for(var index in self.contents.contacts) {
		if (lastTeam != self.contents.contacts[index].team) {
			lastTeam = self.contents.contacts[index].team;
			$('#contacts').append('<h2 id="contact_team">'+ self.contents.contacts[index].team +'</h2>');
		}

		$('#contacts').append($('<div contact_id='+ index +' class="contact_box" fb="'+ self.contents.contacts[index].fb +'"><div style="background: url(images/contact/'+ self.contents.contacts[index].name.replace(/ /g, '_').toLowerCase() +'.jpg);" class="contact_image"><div class="contact_phone"></div><div class="contact_email"></div></div><div class="contact_name">'+ self.contents.contacts[index].name +'</div><div class="contact_mobile">'+ (self.contents.contacts[index].email || (self.contents.contacts[index].mobile ? ('+91 ' + self.contents.contacts[index].mobile) : '') || '-') +'</div></div>').click(function() { window.open('http://facebook.com/'+$(this).attr('fb'), '_blank'); }));
	}

}

MenuNav.prototype.initTweens = function(){
	var self = this;
	self.tlmNav = new TimelineMax();
	self.tweens.push(new TweenLite.from(div, 1, {'width':'0px', "left":window.innerWidth/2, backgroundColor:'#ffffff', onComplete: self.animateMenuNav, onCompleteParams:[self], ease:Power2.easeIn}).pause());
	//self.tweens.push(new TweenLite.from(self.container, 2, {opacity: 0, onComplete:self.resumeMenuHover, onCompleteParams:[self],ease:Bounce.easeOut, delay:0.05}).pause());
	var scale = 1/(4-(window.innerWidth/683));
	var params = [parseInt(self.container.css('width')), parseInt(self.container.css('height'))];

	self.tlmNav.staggerTo(self.container, 0.5, {"scale":scale, ease:Power3.easeIn})
		.to(self.container, 0.5, {left:-(params[0]-params[0]*scale)/2, top: -(params[1]-params[1]*scale)/2, ease:Power3.easeIn}).pause();
	 
}

MenuNav.prototype.eventHandler = function(){
	var self = this;
	self.allNavs[0].forEach(function(ctx){
		ctx.hover(function(){self.animateLogo(ctx)}, function(){self.deAnimateLogo(ctx)})
		ctx.click(function(){self.animator.navTab.animateOnClickRightLogos(ctx)});
	});
	self.allNavs[1].forEach(function(ctx){
		ctx.hover(function(){self.animateLogo(ctx)}, function(){self.deAnimateLogo(ctx)})
		ctx.click(function(){self.animator.navTab.animateOnClickLeftLogos(ctx)});
	});
}

//all Animations start from here:

MenuNav.prototype.animateDiv = function(){
	var self = this;
	while(!self.animateFlag){};
	div.css({'display':"block"});
	self.tweens[0].restart();
}

MenuNav.prototype.animateMenuNav = function(obj){
	var self = obj;
	self.set();
	//self.tweens[1].restart();
	window.setTimeout(function(){self.startAnim();},200);
}

/*MenuNav.prototype.resumeMenuHover = function(self){
	self.menu.group.hover(self.menu.hoverin, self.menu.hoverout);
	self.menu.group.click(function(){self.menu.onClick(self.menu)});
}*/

MenuNav.prototype.deAnimate = function(){
	var self = this;
	self.tweens[1].reverse();
	window.setTimeout(function(){self.tweens[0].reverse()}, 2000)
}

MenuNav.prototype.animateLogo = function(logo){
	var self = this;
	var page = logo.attr('data-content');
	self.changeText(page);
	logo.attr({'stroke':'#d59131','stroke-width':3, 'fill':'#d59131', 'fill-opacity':0.17, 'cursor':'pointer'});
}
MenuNav.prototype.changeText = function(data){
	var self = this;
	if(data!=='home' && data!='accommodation'){
		self.text.attr({'opacity':0, 'font-size':52, 'y':393})
		var data2 = data.replace(/_/g, ' ');
		self.text.node.textContent = data2.charAt(0).toUpperCase() + data2.slice(1);
		var width = self.text.getBBox().width;
		self.text.attr({'x': 1.52*self.paper.select('#eventLogos').getBBox().cx - (width/2)});
		self.text.animate({'opacity':1}, 300);
	}else if(data === 'accommodation'){
		self.text.attr({'opacity':0, 'font-size':52, 'y':393})
		self.text.node.textContent = "Hospitality";
		var width = self.text.getBBox().width;
		self.text.attr({'x': 1.52*self.paper.select('#eventLogos').getBBox().cx - (width/2)});
		self.text.animate({'opacity':1}, 300);
	}else{
		self.text.attr({'opacity':0, 'font-size':94, 'x':390.03543, "y":401.52652})
		self.text.node.textContent = data.toUpperCase();
		self.text.animate({'opacity':1}, 300);
	}
}
MenuNav.prototype.deAnimateLogo = function(logo){
	logo.attr({'stroke':'#ffffff','stroke-width':3, 'fill':'#ffffff', 'fill-opacity':0.17})
}


MenuNav.prototype.scaleMenu = function(){
	this.tlmNav.restart();
}
MenuNav.prototype.unScaleMenu = function(){
	this.tlmNav.reverse();
}


/*MenuNav.prototype.openNavPage = function(){
	this.tm1.restart();
}
MenuNav.prototype.closeNavPage = function(){
	this.tm1.reverse();
}*/

MenuNav.prototype.reset = function(){
	var self = this;
	if(self.animator.eventIsOpen){
		self.animator.events.pointers.attr({'display':'none'});
		self.animator.events.reset();
		self.animator.eventIsOpen = false;
	}
	self.icons.remove();
	self.iconPatternsWhite.remove();
	self.animator.navTab.reset();
	self.menuNavStop();
	self.allNavs.animate({'stroke-width': 1, "fill-opacity":0, "stroke-opacity":1}, 0);
	self.container.css({
		'height':window.innerHeight,
		'width': self.ratio,
		'left': (window.innerWidth/2)>self.ratio/2?(window.innerWidth/2)-self.ratio/2:self.ratio/2-(window.innerWidth/2),
		'top': 0,
		transform: '',
		display: 'none'
	})
	$('#main-page1').show();self.animator.timer.resumeTimer();
}