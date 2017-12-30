function Homepage(){}



Homepage.prototype.afterAnimation = function (timer, menuNav){
	//logo.css({transform: 'rotateZ(10deg)'});
	//menuNav.animateDiv(menuNav);
}

Homepage.prototype.init = function(){
	this.logo = $('div#svg');
	this.labels= this.splitText("RAVAH", "div#pravah h1");
	this.meta = $("#pravah div#logo-meta-1");
	this.ruler = $("#pravah div>hr");
	this.paper = new Snap();
	
	this.timeline = this.createHomepage();
	this.shields = this.createShield();	
}



Homepage.prototype.splitText = function (phrase, appendTo) {
	var prevLetter, sentence,
		sentence = phrase.split("");
	var width=0;
	$.each(sentence, function(index, val) {
		if(val === " "){
			val = "&nbsp;";
		}
		var letter = $("<span/>", {
					id : "label" + index
		}).addClass('label').html(val).appendTo(appendTo);
		$(letter).css('display', 'none');
		width = Math.max($(letter).width(), width);
		
	});
	txt = $('.label');
	$(txt[0]).css({'display':'inline'});
	for(var i=1; i<txt.length; i++){
		$(txt[i]).css({
			"left": $(txt[i-1]).position().left + width + "px",
			'display':'inline'
		});
	}
	return  txt;
}

Homepage.prototype.createShield = function (){
	var self = this;
	var $shields = $("#shield");
	$shields.find('.shields').css({'width':innerWidth});
	self.tween = TweenLite.from($shields.children().toArray(), 5, {"width":'0px'}).pause();
	return $shields;
}


//returns a TimelineLite variable to get control of the whole animation
Homepage.prototype.createHomepage = function(){
	var self = this;
	var tl = new TimelineLite();
	var delay = 0;

	tl.staggerFrom(self.logo, 0.6, {rotationY:"-360deg", rotationZ: "10deg",transformOrigin:"50%", "left":"-=200px", ease:Power2.easeInOut});
	self.labels.toArray().forEach(function(el){
		tl.from(el, 0.5, {scale: 1.5, "opacity":0}, delay);
		delay+=0.25;
	});

	
	tl.from([self.ruler,self.meta], 0.7, {width:"0px", left:self.ruler.width()/2+'px', opacity:0}, delay).pause();
	self.pravahDiv = $('#pravah');
	self.pravahDiv.css({display:'none'});

	return tl;
}
Homepage.prototype.animateShields = function (){
	var self = this;
	self.tween.restart();
}
Homepage.prototype.deAnimateShields = function (){
	var self = this;
	self.tween.reverse();
}

Homepage.prototype.animateHomepage = function (){
	this.timeline.restart();
}

Homepage.prototype.deAnimateHomepage = function (){
	this.timeline.reverse();
}

Homepage.prototype.resize = function (){

}