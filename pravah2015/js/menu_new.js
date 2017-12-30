function Menu(){

}
Menu.prototype.loadMenu = function( data ){ 
	var self = this;
	self.paper.append( data );
	self.outCover = self.paper.selectAll('path.outer-menu');self.icon = self.paper.selectAll('path.menu-icon');self.menuText = self.paper.selectAll('text');

	self.setHover = false;

	self.hoverin=function(){self.animateMenu()}; self.hoverout=function(){self.closeMenu()};
	self.group = self.paper.select('g');
	self.group.hover(self.hoverin, self.hoverout);
		
	self.group.click(function(){self.onClick(self)})
}

Menu.prototype.onClick = function(self){
	self.animators.openMenus(self.setHover);
	if(!self.setHover){
		self.setHover = true;
	}else{
		self.setHover = false;
	}
}

Menu.prototype.init = function(animators){
	var self = this;
	this.paper = Snap('#menu');
	this.group;
	self.animators=animators;
	Snap.load('svg/menu_plain.svg', function(data){self.loadMenu(data)} ) ;
	
}

Menu.prototype.animateMenu = function(){
	var self = this;
	//self.outCover.attr({'stroke-dasharray':"4,4"});
	self.outCover[0].animate({"fill-opacity":0.25, 'stroke-width':2},500, mina.backout, function(){});
	self.outCover[1].animate({"fill-opacity":1},500, mina.backout, function(){});
	self.outCover[2].animate({"fill-opacity":1},500, mina.backout, function(){});


	self.icon.attr({'stroke-dasharray':"1,8"});
	self.menuText.attr({'fill':'#ff9700', stroke:'#ffffff'})
	//outCover.animate({"transform": createScaleMatrix(1.7, [outCover.getBBox().x/2, outCover.getBBox().y/2], 0), "opacity":0},3000, mina.backout, function(){});
}

Menu.prototype.closeMenu = function(){
	var self = this;
	var animators = new Snap.set(self.icon, self.outCover);
	animators.forEach(function(el){
		el.forEach(function(elx, ind){	
			if(!elx.inAnim().length){
				elx.stop();
			}
		})
	})
	self.reverseMenuAnimate(self.outCover, self.icon)
}

Menu.prototype.reverseMenuAnimate = function(outCover, icon){
	var self = this;
	outCover[0].animate({"fill-opacity":0, 'stroke-width':4},500, mina.backout, function(){outCover.attr({'stroke-dasharray':"0"});});
	self.outCover[1].animate({"fill-opacity":0.47368421},500, mina.backout, function(){});
	self.outCover[2].animate({"fill-opacity":0.35087717},500, mina.backout, function(){});

	self.icon.attr({'stroke-dasharray':"0"});
	self.menuText.attr({'fill':'#ffffff', stroke:'#ff9700'})
	/*self.icon[1].animate({transform:Snap.matrix().rotate(0,icon1.x+icon1.width/2, icon1.y)}, 250);
	self.icon[3].animate({transform:Snap.matrix().rotate(0,icon2.x+icon2.width/2, icon2.y)}, 250);
	Snap.set(icon[0],icon[2]).animate({'opacity':1}, 400);*/
}