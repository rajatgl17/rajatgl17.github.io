function Animator(){};

Animator.prototype.init = function(events, menuNav, homepage, timer, menu, navTab, scrollbar, sponsors, notify){
	var self = this;
	self.events = events;
	self.menuNav = menuNav;
	self.homepage = homepage;
	self.timer = timer;
	self.menu = menu;
	self.navTab = navTab;
	self.scrollbar = scrollbar;
	self.sponsors = sponsors;
	self.notify = notify;
	self.eventIsOpen = false;
}

Animator.prototype.eventShow = function( hash ){
	var self = this;
	//window.location.hash = hash;
	$('#content1').show();
	if(self.navTab.animateFlag2){
		self.navTab.animateFlag2 = false;
		self.menuNav.scaleMenu();
	}else{
		self.navTab.closeNavPage();
		self.navTab.container2.attr({'display':'none'});
	}
	window.setTimeout(function(){self.events.show();}, 1300);
	self.eventIsOpen = true;
}
Animator.prototype.eventHide = function(){

}

Animator.prototype.animateStart= function(){
	var self = this;
	self.homepage.pravahDiv.show();
	self.homepage.shields.show();
	self.homepage.animateShields()
	self.homepage.animateHomepage();

	var divs = $("#main-page1 > div").not('#pravah,#shield');
	window.setTimeout(function(){
		new TweenLite(divs, 0.8, {opacity:1});
		self.timer.startTimer();
		self.sponsors.animate(0);
	}, 4000);
	window.setTimeout(function(){
		self.notify.animate(0, self.notify);
	}, 5000);
}

Animator.prototype.openMenus = function(flag){
	var self = this;
	
		self.menuNav.animateDiv();
		self.timer.stopTimer();
		window.setTimeout(function(){$("#main-page1").hide();}, 750);

	//if i hide this main page then this else part is not needed... so do remember to remove it after this change
}

Animator.prototype.openNavs = function(){

}

Animator.prototype.relativeTransform = function(prevMatrix, transformObject){
	var matrix = new Snap.Matrix();
	matrix.add(prevMatrix.localMatrix);
	for(key in transformObject){
		switch(key){
			case "scale": matrix.add(Snap.matrix().scale(transformObject.scale.x, transformObject.scale.y, transformObject.scale.cx, transformObject.scale.cy));
				break;
			case "translate": matrix.add(Snap.matrix().translate(transformObject.translate.x, transformObject.translate.y));
				break;
			case "rotate": matrix.add(Snap.matrix().rotate(transformObject.rotate.deg, transformObject.rotate.cx, transformObject.rotate.cy));
				break;
		}
	}

	return matrix;
}