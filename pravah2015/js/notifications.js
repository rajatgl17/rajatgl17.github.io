function Notify(){}

Notify.prototype.init = function(contents){
	var self = this;
	self.contents = contents;
	self.updates = $('#updates');
	self.animateDiv = self.updates.find('#update-animate');
	self.image = self.updates.find('#update-image');
	self.content = self.updates.find('#update-content');
	window.selfUpdates = self;
	self.index = 0;
	self.tween1 = new TimelineLite;
	self.tween1.to(self.animateDiv, 1.5, {width:'200%', 'border-radius': 0, opacity:0})
			.to(self.updates.find('.update-seen'), 2, {opacity:1}, 1.2).pause();
}

Notify.prototype.update = function(index){
	var self = this;
	self.content.empty();
	self.image.attr({'src': '/images/updates/'+self.contents.notify[index].img});
	for(var i=0; i<self.contents.notify[index].content.length; i++){
		$('<p>'+self.contents.notify[index].content[i]+'</p>').appendTo(self.content);	
	}
}

Notify.prototype.animate = function(i, self){
	self.index = i<self.contents.notify.length?i:0;
	TweenLite.set(self.updates,{css: {opacity:1}});
	self.update(self.index);
	self.tween1.restart();
	window.setTimeout(function(){self.animate(++self.index, self)}, 8000);
}