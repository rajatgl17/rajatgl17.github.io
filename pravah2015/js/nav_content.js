function NavContent(){
}

NavContent.prototype.init = function(animator){
	var self = this;
	self.animator = animator;
	self.pTemp = Snap('#nav');
	Snap.load('svg/menu_content_opt.svg', function(data){self.onSVGLoad(data)});
	self.animateFlag2 = true;
}

NavContent.prototype.onSVGLoad = function(data){
	var self = this;
	self.pTemp.append(data);
	self.paper = self.pTemp.select('svg')
	self.container2 = $(self.pTemp.node);
	self.paper2 = $(self.paper.node).clone();
	self.nav_content_flag = true;

	self.paper.remove();
	self.container2.hide();

	self.createSVGElements();

}

NavContent.prototype.createSVGElements = function(){
	var self = this;
	self.paper2.appendTo('#nav');
	self.paper = self.pTemp.select('svg')
	self.paper2 = $(self.paper.node).clone();
	self.connectors = self.paper.selectAll('#connectors path');
	self.navContent = self.paper.select('#content');
	self.box = self.navContent.getBBox();
	self.prevMatrix = self.navContent.transform();
	var transformObject={'scale':{}};
	transformObject.scale.x = 1; transformObject.scale.y = 0.1; transformObject.scale.cx = self.box.cx; transformObject.scale.cy = window.innerHeight/2+16;
	var matrix = self.animator.relativeTransform(self.prevMatrix, transformObject);
	self.navContent.animate({transform:matrix}, 10);

	var gCircles = self.paper.select('#circlePaths');
	self.box1 = gCircles.selectAll('path')[0].getBBox();
	self.box2 = gCircles.selectAll('path')[1].getBBox();
	self.left1 = self.paper.select('#left_movable')
	self.right1 = self.paper.select('#right_movable')
	self.path1Clone = self.paper.path('M395 48 425 48').attr({visibility: 'hidden'});
	self.path2Clone = self.paper.path('M1276 315 1246 315').attr({visibility: 'hidden'});
	self.path1 =  self.paper.path().attr({visibility: 'visible', stroke:'#fff', 'stroke-width':8})
	self.path2 = self.paper.path().attr({visibility: 'visible', stroke:'#fff', 'stroke-width':8})
	self.path1Length = Snap.path.getTotalLength(self.path1Clone.attr("d"));
	self.path2Length = Snap.path.getTotalLength(self.path2Clone.attr("d"));
	self.leftMovables1 = self.left1.selectAll('path');
	self.left_rocket = self.paper.select('#left_rocket')
	self.right_rockets = self.paper.selectAll('#right_rockets path');
}

NavContent.prototype.animateOnClickLeftLogos = function(logo){
	var self = this;
	var page = logo.attr('data-content');
	if (page=='gallery'){ window.open('/gallery','_self');}
	else if (page=='register'){ window.open('/register','_self'); }
	else if (page=='aaveg'){ window.open('/aaveg','_self'); }
	else if(page=='competitions'){ if(!self.animator.eventIsOpen) self.animator.eventShow(page); }
}
NavContent.prototype.loadPage = function( page, self ) {
	$('.content_box').hide();
	var pageRight = page.split('_')[0];
	var container = $('.'+pageRight+'.content_box');
	container.show();
	if(typeof self !== 'undefined'){
		if(pageRight === 'home'){
			var delay=0;
			self.animateFlag2 = true;
			self.animator.menuNav.tweens[0].reverse();
			self.animator.menuNav.reset();
		}else{
			var divPage$ = $('#content2.content_box.'+pageRight);
			divPage$.load('pages/'+pageRight+'.html', function(){
				divPage$.find('a[href*=#]:not([href=#])').click(function() {
				    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				      var target = $(this.hash);
				      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				      if (target.length) {
				        TweenMax.to(divPage$, 1, {scrollTo:{y: target.offset().top-20}, ease:Power2.easeOut});
				        return false;
				      }
				    }
				  });
				 self.animator.scrollbar.set('#content2.content_box.'+pageRight);
			});
		}
	}
}

NavContent.prototype.animateOnClickRightLogos = function( logo ){
	var self = this;
	var page = logo.attr('data-content');
	//window.location.hash = page;
	//$('#main-page1').hide();
	self.container2.attr({'display':'block'});
	$('#content1').hide();
	if(self.animator.eventIsOpen && page != 'home'){
		if(!self.isNavOpen){
			self.animator.events.hideAnimate(true);
			window.setTimeout(function(){self.openNavPage();}, 1300);
		}else{
			self.animator.events.hideAnimate();
		}
		self.animator.events.pointers.hide();
		$('#go_back_icon').hide();
		self.animator.eventIsOpen = false;
	}
	if(self.animateFlag2 && !self.isNavOpen && page != 'home'){
		self.animateFlag2 = false;
		self.animator.menuNav.scaleMenu()
		window.setTimeout(function(){self.openNavPage();}, 1300);
		window.setTimeout(function(){self.loadPage(page, self);}, 1800);
		self.isNavOpen = true;
	}else{
		self.loadPage(page, self);
	}
}

NavContent.prototype.openNavPage = function(){
	var self = this;
	var transformObject={'scale':{}};
	self.container2.show();
	transformObject.scale.x = 1; transformObject.scale.y = 1; transformObject.scale.cx = self.box.cx; transformObject.scale.cy = window.innerHeight/2+16;
	var matrix = self.animator.relativeTransform(self.prevMatrix, transformObject);
	var temp1 = function(){
		$('#nav-screen-content').css('opacity', 0)
	}
	self.navContent.animate({transform:matrix}, 500, mina.backin, function(){
		TweenLite.to($('#nav-screen-content'), 0.8, {opacity: 1, onStart: temp1, onComplete: function(){self.startAnim();}});
	});
	
}
NavContent.prototype.closeNavPage = function(){
	var self = this;
	var transformObject={'scale':{}};
	transformObject.scale.x = 1; transformObject.scale.y = 0.1; transformObject.scale.cx = self.box.cx; transformObject.scale.cy = window.innerHeight/2+16;
	var matrix = self.animator.relativeTransform(self.prevMatrix, transformObject);
	var temp1 = function(){self.stopAnim();$('#nav-screen-content').css('opacity', 1)};
	var temp2 = function(){self.navContent.animate({transform:matrix}, 500, mina.backin);};
	TweenLite.to($('#nav-screen-content'), 0.6, {opacity: 0, 
		onStart: temp1, 
		onComplete: temp2
	});
	self.isNavOpen = false;
	window.setTimeout(function(){
		self.container2.hide();
		self.paper.remove();
		self.createSVGElements();
		if(self.animator.eventIsOpen){
			self.animator.events.pointers.css({'display':'none'});
		}
	},1220)
}

NavContent.prototype.animateLeft1 = function(){
	/*if(flag){
		window.setTimeout(function(){
			left1.animate({transform:Snap.matrix().rotate(-0.5*count, box1.cx, box1.cy)}, 400)
		}, 400);
		count++;
		flag = count>10?false:true;
		animateLeft1(count, flag);
	}*/
	var self = this;
	if(self.nav_content_flag){
		Snap.animate(0, -5, function(l){
			self.left1.attr({
				transform: Snap.matrix().rotate(l, self.box1.cx, self.box1.cy)
			})
		}, 500, function(){self.animateRight1()})
		window.setTimeout(function(){self.left_rocket.attr({'visibility':'hidden'})}, 350);
	}
}

NavContent.prototype.animateLeft2 = function(){
	var self = this;
	if(self.nav_content_flag){
		self.left1.attr({transform:Snap.matrix().rotate(-9, self.box1.cx, self.box1.cy)})
		self.left_rocket.attr({'visibility':'visible'});
		self.left_rocket.animate({transform: Snap.matrix().rotate(1.5, self.box1.cx, self.box1.cy)}, 0);
		window.setTimeout(function(){
			self.path1.animate({opacity: 1, transform:Snap.matrix().translate(0, 0)}, 0);
			Snap.animate(0, self.path1Length, function (l) {
				self.path1.attr({
					d: self.path1Clone.getSubpath(0, l)
				});
			}, 260, mina.linear, function(){
				window.setTimeout(function(){
					self.path1.animate({transform:Snap.matrix().translate(10, 150)}, 500, function(){
						self.leftMovables1[2].animate({opacity: 0}, 400)
						Snap.animate(self.path1Length, 8, function (l) {
							self.path1.attr({
								d: self.path1Clone.getSubpath(0, l)
							});
						}, 500);
						self.leftMovables1[0].animate({transform:Snap.matrix().rotate(2, self.box1.cx, self.box1.cy)}, 500);
						self.leftMovables1[1].animate({transform:Snap.matrix().rotate(-1.9, self.box1.cx, self.box1.cy)}, 500, function(){
							self.path1.animate({opacity: 0}, 500, mina.easeinout);
							self.left1.animate({opacity: 0}, 500,  mina.easeinout, function(){
								self.left1.remove();
								//path1.remove();
								self.left1 = self.left2;
								self.left1.animate({transform:Snap.matrix().rotate(-2, self.box1.cx, self.box1.cy)}, 0);
								self.animateLeft3()
							});
							self.left2 = self.left1.clone().attr({transform:Snap.matrix().rotate(-2, self.box1.cx, self.box1.cy), opacity:0});
							self.left2.animate({opacity: 1}, 500);
						});
					});
				}, 300);
			});
		}, 250)
	}
}

NavContent.prototype.animateLeft3 = function(){
	var self = this;
	if(self.nav_content_flag){
		self.leftMovables1 = self.left1.selectAll('path');
		self.leftMovables1[2].animate({opacity: 1}, 400)
		self.leftMovables1[0].animate({transform:Snap.matrix().rotate(0, self.box1.cx, self.box1.cy)}, 500);
		self.leftMovables1[1].animate({transform:Snap.matrix().rotate(0, self.box1.cx, self.box1.cy)}, 500, function(){
			window.setTimeout(function(){self.animateRight2()}, 500);
		});
	}
}

NavContent.prototype.animateRight1 = function(){
	var self = this;
	if(self.nav_content_flag){
		self.right_rockets[0].animate({transform: Snap.matrix().rotate(3, self.box2.cx, self.box2.cy)}, 500);
		window.setTimeout(function(){self.animateLeft2()}, 250);
	}
}

NavContent.prototype.animateRight2 = function(){
	var self = this;
	if(self.nav_content_flag){
		Snap.animate(0, 5, function(l){
			self.right1.attr({
				transform: Snap.matrix().rotate(l, self.box2.cx, self.box2.cy)
			})
		}, 500, function(){
			window.setTimeout(function(){self.animateRight3()}, 500);
		})

		window.setTimeout(function(){self.right_rockets[1].attr({'visibility':'hidden'})}, 150);
	}
}

NavContent.prototype.animateRight3 = function(){
	var self = this;
	if(self.nav_content_flag){
		self.right_rockets[1].attr({'visibility':'visible'});
		self.right_rockets[1].animate({transform: Snap.matrix().rotate(-2.2, self.box2.cx, self.box2.cy)}, 0);
		self.right_rockets[0].animate({transform: Snap.matrix().rotate(2.4, self.box2.cx, self.box2.cy)}, 0);
		self.right1.attr({transform: Snap.matrix().rotate(7.5, self.box2.cx, self.box2.cy)});
		window.setTimeout(function(){
			self.path2.animate({opacity: 1, transform:Snap.matrix().translate(0, 0)}, 0);
			Snap.animate(0, self.path2Length, function (l) {
				self.path2.attr({
					d: self.path2Clone.getSubpath(0, l)
				});
			}, 260, mina.linear, function(){
				window.setTimeout(function(){
					self.left1.animate({transform: Snap.matrix().rotate(0, self.box1.cx, self.box1.cy)}, 500)
					window.setTimeout(function(){
						var y = self.path2.getBBox().y;
						self.path2.animate({transform:Snap.matrix().translate(0, 150)}, 500, function(){self.animateRight4()})
					}, 250);
				}, 500);
			});
		}, 250);
	}
}

NavContent.prototype.animateRight4 = function(){
	var self = this;
	var rights = self.right1.selectAll('path');
	if(self.nav_content_flag){
		self.right2 = self.right1.clone().attr({opacity: 0, transform:Snap.matrix().rotate(0, self.box2.cx, self.box2.cy)});
		Snap.animate(self.path2Length, 8, function (l) {
			self.path2.attr({
				d: self.path2Clone.getSubpath(0, l)
			});
		}, 500);
		rights[0].animate({opacity: 0}, 400)
		rights[1].animate({transform: Snap.matrix().rotate(-1.9, self.box2.cx, self.box2.cy)}, 500);
		rights[2].animate({transform: Snap.matrix().rotate(1.9, self.box2.cx, self.box2.cy)}, 500, function(){
			window.setTimeout(function(){self.animateRight5()}, 500);
		});
		self.right_rockets[0].animate({transform:Snap.matrix().rotate(0, self.box2.cx, self.box2.cy)}, 500);
		self.left_rocket.animate({transform:Snap.matrix().rotate(0, self.box1.cx, self.box1.cy)}, 500);
	}

}

NavContent.prototype.animateRight5 = function(){
	var self = this;
	if(self.nav_content_flag){
		self.path2.animate({opacity: 0}, 500, mina.easeinout);
		self.right1.animate({opacity: 0}, 500,  mina.easeinout, function(){
			self.right1.remove();
			//path2.remove();
			self.right2.attr({visibility: 'visible'});
			self.right1 = self.right2;
			window.setTimeout(function(){
				self.right_rockets[1].animate({transform:Snap.matrix().rotate(0, self.box2.cx, self.box2.cy)}, 500, function(){
					window.setTimeout(function(){self.animateLeft1()}, 1000)
				});
			}, 250);
		})
		self.right2.animate({opacity: 1}, 500);
	}
}

NavContent.prototype.startAnim = function(){
	var self = this;
	self.nav_content_flag = true;
	self.animateLeft1();
}

NavContent.prototype.stopAnim = function(){
	var self = this;
	self.nav_content_flag = false;
}

NavContent.prototype.reset = function(){
	var self = this;
	var transformObject={'scale':{}};
	transformObject.scale.x = 1; transformObject.scale.y = 0.1; transformObject.scale.cx = self.box.cx; transformObject.scale.cy = window.innerHeight/2+16;
	var matrix = self.animator.relativeTransform(self.prevMatrix, transformObject);
	self.stopAnim();
	self.navContent.animate({transform:matrix}, 0);
	self.container2.hide();
	self.isNavOpen = false;
}