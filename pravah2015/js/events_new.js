function Events(){
};


Events.prototype.init = function(contents,animator){
	var self = this;
	//variables;
		self.contents = contents;self.animator = animator;self.pointers = $('#pointers');
		self.listOpen = false;	self.pTemp = Snap('#event-page'); self.transformObject = {'scale':"x,y,cx,cy", 'translate':'x,y', "rotate":'deg, cx,cy'};
		self.listAttr = {'stroke':"#fff", "stroke-width":2, fill:'none'};
		self.listOpen = false;
	Snap.load('svg/events_opt.svg', function(data){self.onSVGload(data)});
}

Events.prototype.onSVGload = function( data ){
	var self = this;
	self.pTemp.append(data);
	self.paper = self.pTemp.select('svg');
	self.container = $(self.pTemp.node);
	//Snap.load('svg/navigateScreenOptions_opt.svg', function (data){self.pointers.append(data)});
	Snap.load('svg/eventLists_opt.svg', function (data){
		self.subListsSVG = new Snap('#event-subtitles').append(data);
		self.subListsSVG.select('svg').clone();
	});
	self.createElements();
}

Events.prototype.createElements = function(){
	var self = this;
	self.diag = self.paper.selectAll('#event-svg path')
	self.circle1 = self.paper.select('#circle1');
	self.circle2 = self.paper.select('#circle2');
	self.triangle = self.paper.select('#triangles');
	self.tempGroup = self.paper.select('#temp'); 
	self.box1 = self.diag[1].getBBox();
	self.container2 = $('#event-subtitles');
	self.titles = self.paper.selectAll('#event-svg-title text');

	self.eventHandler();

	//someStarters...
	self.paper.select('#event-svg').animate({transform: Snap.matrix().scale(0.4, 0.4, self.box1.cx, self.box1.cy)}, 0);
	self.titles.animate({opacity: 0}, 0);
}

Events.prototype.eventHandler = function(){
	var self = this;
	self.titles.forEach(function(ctx, index){
		//ctx.hover(function(){self.hover($('#'+ctx.node.textContent.trim()), true)}, function(){ self.hover($('#'+ctx.node.textContent.trim()))})
		ctx.click(function(){
			if(!self.listOpen){
				self.openLists(this)
				self.listOpen=true;
			}
			else{
				self.changeLists(this);
			}
		});
	});
}
Events.prototype.openNavTab = function(text, title){
	var self = this;
	console.log(text, title);
	//self.hideAnimate(true);
	var divs = $('#event-page, #event-subtitles').css('z-index', 0);
	TweenLite.to(divs, 1, {'opacity':0})
	window.setTimeout(function(){
		self.animator.navTab.openNavPage();
		self.pointers.css({display:'block'});
		$('#go_back_icon').show().on('click', function(){
			self.animator.navTab.closeNavPage();
			self.pointers.children().off();
			TweenLite.to(divs, 1, {'opacity':1, delay: 1.5});
			divs.css('z-index', 4);
			window.setTimeout(function(){$(this).hide();}, 1220);
		});
		$('.content_box').hide();
		var elemPos = self.contents.competitions.map(function(el){return el.name;}).indexOf(text);
		window.setTimeout(function(){self.showEventDetail(elemPos, title, text);}, 500);
	}, 1000);
	self.animator.navTab.isNavOpen = true;
}
Events.prototype.showEventDetail = function ( event_id, category, name ) {
	var self = this;
	var event = self.contents.competitions[event_id], default_page;
	var container = $('.competitions');
	var pageToShow, index=0;
	$('#eventTitle').text( event.name ).show();

	self.pointers.children().hide();
	for (var page in event.pages) {
		default_page = self.pointers.find('#'+page);
		if(event.pages[page]){
			container.show();
			default_page.css({'display':"block"});
			if(index==0){
				pageToShow = page;
			}
			default_page.on('click', (function() {
				var rightPage = page;
				var temp = function(){
					container.html('').load('pages/'+ (event.name +'_'+ rightPage).toLowerCase().replace(/ /g, '_') +'.html', function(){
						self.animator.scrollbar.set('.competitions');
					});
				}

				return temp;
			})());
			index++;
		}else{
			default_page.css({'display':"none"});
		}

		
	}

	$('div#pointers div#Register').click(function(){ window.open('http://skitpravah.com/register/#'+ (category +':'+ name).replace(/\ |\-/g, '_').toLowerCase() ); return false; });
	container.html('').load('pages/'+ (event.name +'_'+ pageToShow).toLowerCase().replace(/ /g, '_') +'.html', function(){
		TweenLite.to(container, 1, {opacity: 1, delay:0.5});
		self.animator.scrollbar.set('.competitions');
	});
}

Events.prototype.glitch1 = function(flag){
	var self = this;
	self.diag[4].attr({transform:Snap.matrix().rotate(-40, self.box1.cx, self.box1.cy)})
	self.diag[3].attr({transform:Snap.matrix().rotate(20, self.box1.cx, self.box1.cy)})
	if(flag){
		self.circle1.transform(Snap.matrix().translate(10, 0));
	}else{
		self.circle1.transform(Snap.matrix().translate(-5, -10));
	}
	window.setTimeout(function(){
		self.diag[4].attr({transform:Snap.matrix().rotate(0, self.box1.cx, self.box1.cy)})
		self.diag[3].attr({transform:Snap.matrix().rotate(0, self.box1.cx, self.box1.cy)})
		self.circle1.transform(Snap.matrix().translate(0, 0));
	}, 500);
}

Events.prototype.animateTri1 = function(data, flag){
	var self = this;
	Snap.animate(0, data, function(l){
		self.triangle.attr({
			transform: Snap.matrix().rotate(l, self.box1.cx, self.box1.cy)
		})
	}, 500, mina.easeinout, function(){self.animateTri2(data)})
	window.setTimeout(function(){
		self.glitch1(flag);
	},250)
}

Events.prototype.animateTri2 = function(data){
	var self = this;
	Snap.animate(data, 0, function(l){
		self.triangle.attr({
			transform: Snap.matrix().rotate(l, self.box1.cx, self.box1.cy)
		})
	}, 500, mina.easeinout)
}

Events.prototype.animateCircles = function(){
	var self = this;
	self.circle2.animate({'stroke-width':10, transform: Snap.matrix().scale(1.05, 1.05, events.box1.cx, events.box1.cy)}, 500);
	window.setTimeout(function(){
		events.diag[0].animate({'stroke-width':20}, 500)
	}, 250);
}

Events.prototype.titleMaker = function(box){
	var self = this;
	var path1 = self.tempGroup.path('M'+(box.x-10)+' '+(box.y-10)+' '+(box.x2-10)+' '+(box.y-10)+' '+(box.x2+10)+' '+(box.y+10)+' '+(box.x2+10)+' '+(box.y2+10)+' '+(box.x+10)+' '
		+(box.y2+10)+' '+(box.x-10)+' '+(box.y2-10)+' z').attr({visibility: 'hidden'});
	var path2 = self.tempGroup.path().attr({'stroke':'#fff','fill':'#fff', 'fill-opacity':0});
	//var path2 = path1.clone().attr({'transform':Snap.matrix().scale(0.90, 0.75, path1.getBBox().cx, path1.getBBox().cy)});
	Snap.animate(0, Snap.path.getTotalLength(path1.attr("d")), function(l){
		path2.attr({
			d: path1.getSubpath(0, l)
		})
	}, 500, function(){
		path2.animate({'fill-opacity': 0.25}, 1000, mina.bounce);
	});
	return Snap.set(path1, path2);
}

Events.prototype.createTitlesBack = function(titles){
	var self = this;
	self.titleBacks = [];
	titles.forEach(function(el){
		self.titleBacks.push(self.titleMaker(el.getBBox()));
	})
}

Events.prototype.removeTitlesBack = function(len){
	var self = this;
	if(self.titleBacks){
		for(var index=0; index<len; index++){
			self.titleBacks[index].remove();
		}
	}
}

Events.prototype.show = function(){
	var self = this;
	
	self.container.css('z-index', 2);
	self.container2.css('z-index', 2);
	
	self.paper.select('#event-svg').animate({transform: Snap.matrix().scale(0.4, 0.4, self.box1.cx, self.box1.cy)}, 0);
	self.titles.animate({opacity: 0}, 0);
	self.tempGroup.animate({opacity: 1}, 0);
	if(self.titles.length > 0){
		self.removeTitlesBack(self.titles.length);
	}
	this.container.show();
	self.paper.select('#event-svg').animate({transform: Snap.matrix().scale(1, 1, self.box1.cx, self.box1.cy)}, 500, mina.easein, function(){
		self.createTitlesBack(self.titles);
		self.titles.animate({opacity: 1}, 1000);
	});
}
Events.prototype.hideAnimate = function(flag){
	var self = this;
	if(self.listOpen){
		self.closeLists();
	}
	if(flag){
		self.tempGroup.animate({opacity: 0}, 500, function(){
			self.removeTitlesBack(self.titles.length);
			self.paper.select('#event-svg').animate({transform: Snap.matrix().scale(0.4, 0.4, self.box1.cx, self.box1.cy)}, 500, function(){
				self.container.hide();
			});
		})
		self.titles.animate({opacity: 0}, 400);
	}else{
		self.container.hide();
		self.paper.select('#event-svg').animate({transform: Snap.matrix().scale(0.4, 0.4, self.box1.cx, self.box1.cy)}, 0);
		self.titles.animate({opacity: 0}, 0);
		self.removeTitlesBack(self.titles.length);
	}
	this.container.css('opacity', 1);
}

Events.prototype.openLists = function( title ){
	var self = this;
	var data, titleIndex;
	if(typeof title != 'string'){
		titleIndex = title.node.textContent.trim();
		data = self.createLists(self.contents.categories[titleIndex], '#event-subtitles', titleIndex);
	}
	else{
		titleIndex = title.trim();
		data = self.createLists(self.contents.temp[titleIndex], '#event-subtitles', titleIndex);
	}
	//var categoryLen = self.contents.categories[titleIndex].length;
	
	
	var tlm = new TimelineLite();
		

	tlm.from($('#event-subtitles'), 0.5, {scaleY: 0, ease: Power4.easeIn, onStart:function(){$('#event-subtitles').css({'opacity':1,'width':data.initWidth, 'left':data.initCenter});$('.subs').css('opacity', 0);}})
		.to($('#event-subtitles'), 0.5, {width: data.finalWidth, left:data.finalLeft, ease: Power4.easeIn})
		.to($('.subs'), 0.5, {opacity: 1})
		.to($('.subs'), 0.5, {'background-color':'rgba(255,255,255, 0.7)', 'color':'rgb(0,0,0)'});

	self.animateTri1(-155, true);
}

Events.prototype.hoverIn = function(titleNode){
	TweenLite.to(titleNode, 0.35, {'background-color':'rgba(128,128,128,0.7)', 'color':'rgb(255,151,0)'})
}
Events.prototype.hoverOut = function(titleNode){
	TweenLite.to(titleNode, 0.35, {'background-color':'rgba(255,255,255, 0.7)', 'color':'rgb(0,0,0)'})
}


Events.prototype.createLists = function (title, appendTo, titleHead) {
	var self = this;
	var prevList=0, prevLeft=0, prevRight=0,margin=25;

	var tempWidth = $($(appendTo).find('svg')[0]).width();
	var totalWidth=0, prevTotalWidth=0;
	self.contFlag = false;self.countRecurse=1;
	var appendTo2 = $("<div/>",{id: 'subDivs0'}).addClass('subDivs').appendTo(appendTo);
	self.initH = $(appendTo).height();
	console.log('title='+title+', titleHead='+titleHead);
	$.each(title, function(index, val) {
		list = $("<span/>",{id: title[index]}).addClass('subs').css({ left: 0, 'opacity': 0 }).html(title[ index ].replace(/( )|(-)/g ,'&nbsp')).appendTo(appendTo2);
		if(titleHead.toLowerCase() != 'techtrix'){
			$(list).on({'mouseenter': function(){self.hoverIn($(this))},
						'mouseleave': function(){ self.hoverOut($(this))},
						'click': function(){ self.openNavTab(title[index]);}
					});
		}else{
			$(list).on({'mouseenter': function(){self.hoverIn($(this))},
						'mouseleave': function(){ self.hoverOut($(this))},
						'click': function(){ self.changeLists(title[index]);}
					});
		}
		prevList = list;
		totalWidth = margin;
	});
	
	var totalWidth=self.repair(0, title.length, 0, 0, appendTo, false, margin, tempWidth);
	
	totalWidth += tempWidth;
	if(self.contFlag){
		$(appendTo).css({
			'left': 0,
			'opacity': 0
		}).width(window.innerWidth);
		$(appendTo).height(self.initH*(self.countRecurse/1.2));

		var width = $(appendTo).height()*(self.subListsSVG.select('svg').getBBox().width/self.subListsSVG.select('svg').getBBox().height);
		//self.subListsSVG.append(temp);
		data = {'initWidth': 2*width, "initCenter":(window.innerWidth/2)-(1.5*width), 'finalWidth':window.innerWidth, 'finalLeft':0};
	}else{
		$(appendTo).css({
			'left': (window.innerWidth/2)-(totalWidth/2),
			'opacity': 0
		}).width(totalWidth);

		var width = $(appendTo).height()*(self.subListsSVG.select('svg').getBBox().width/self.subListsSVG.select('svg').getBBox().height);
		//self.subListsSVG.append(temp);
		data = {'initWidth': 2*width, "initCenter":(window.innerWidth/2)-(1.5*width), 'finalWidth':totalWidth, 'finalLeft':(window.innerWidth/2)-(totalWidth/2)};
	}
	
	return  data;
}
Events.prototype.repair = function(ind, max, offset, prevInd, appendTo, contFlag, totalWidth, tempWidth){
	var self = this;
	var startWidth = totalWidth;
	$.each($('#subDivs'+(ind+offset)+' .subs'), function(index, val) {
		if(!contFlag){
			totalWidth += $(val).outerWidth(true);
			if(totalWidth > window.innerWidth-tempWidth){
				ind = index;
				contFlag = true;
				self.contFlag = true;
				self.countRecurse = self.countRecurse+1;
				return;
			}
		}
	});
	if((prevInd-offset) != ind){
		var appendTo2 = $("<div/>",{id: 'subDivs'+(ind+offset)}).addClass('subDivs').appendTo(appendTo);
		var els = $('#subDivs'+prevInd+' .subs');
		for(var i=ind; i<(max-offset); i++){
			$(els[i]).appendTo(appendTo2);
		}
		self.repair(0, max, ind+offset, ind+offset, appendTo, false, startWidth, tempWidth);
	}
	return totalWidth;
}
Events.prototype.changeLists = function(title){
	var self = this;
	self.closeLists();
	self.openLists(title);
}
Events.prototype.closeLists = function(){
	var self = this;
	$('#event-subtitles').css({
		'opacity': 0,
		'height':self.initH
	});
	$('#event-subtitles .subDivs').remove();
	$('#event-subtitles div.subDivs span').remove();
}

Events.prototype.reset = function(){
	var self = this;
	if(self.listOpen){
		self.closeLists();
	}
	self.hideAnimate();
	self.pointers.hide();
	$('#go_back_icon').hide();
	self.animator.eventIsOpen = false;
}