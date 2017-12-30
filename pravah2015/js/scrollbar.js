function Scrollbar(){};

    Scrollbar.prototype.init = function(){
      var self = this;

      window.selfScroll = self;
      self.scrollMe = $('#scrollMe');
      self.bounds = $('#scrollPane');

      Draggable.create("#scrollMe", {
        bounds:self.bounds,
        type:"top",
        onDragStart: self.onScrollStart,
        onDrag: self.onScroll,
        onDragEnd: self.onScrollEnd,
        onDragStartParams: [self],
        onDragParams : [self],
        onDragEndParams: [self]
      });

      self.draggable = Draggable.get('#scrollMe');
      self.draggable.vars.cursor = 'pointer';
      self.draggable.update();
    }

    Scrollbar.prototype.set = function(div){
      var self = this;
      if(div!='' && typeof div !== 'undefined'){
        self.div= $(div);
        var $aboutHeight = self.div.innerHeight();
        var $aboutScrollHeight = self.div[0].scrollHeight;
        var scrollerScrollHeight = self.bounds.innerHeight();
        if($aboutScrollHeight > $aboutHeight)
        {
          /*var scrollBottom = $aboutScrollHeight - $aboutHeight;            
          var height = self.bounds.outerHeight() - scrollBottom/2;
          self.scrollMe.css("height", height+"px");
          self.bounds.css('display', 'block');  */

          self.scrollRatio = (scrollerScrollHeight/$aboutScrollHeight);
          self.height = self.scrollRatio * $aboutHeight;
          self.scrollMe.css("height", self.height+"px");
          self.bounds.css('display', 'block');

          self.onScrollChange(self.div);
          self.eventHandler();
        }else{
          self.div.parent().off();
          self.bounds.css('display', 'none');
        }
      }
    }

    Scrollbar.prototype.eventHandler = function(){
      var self = this;
       self.div.parent().on({
        'mouseenter': function(){
          self.bounds.show();
          TweenLite.to(self.bounds, 0.5, {opacity: 1});
        },
        'mouseleave' : function(){
          TweenLite.to(self.bounds, 0.5, {opacity: 0, onComplete:function(){self.bounds.hide();}});
        }
      });
      self.div.on('scroll', function(){self.onScrollChange(this);});
    }

    Scrollbar.prototype.onScrollChange = function(div){
      var self = this;
      if(self.div != '' && typeof self.div !== 'undefined'){
        TweenLite.set(self.scrollMe, {css: {
            top: $(div).scrollTop()*self.scrollRatio
        }});
        self.draggable = Draggable.get('#scrollMe');
        self.draggable.update();
      }
    }

    Scrollbar.prototype.onScroll = function(self){
      if(self.div != '' && typeof self.div !== 'undefined')
        self.div.scrollTop((this.endY/self.scrollRatio));
    }
    Scrollbar.prototype.onScrollStart = function(self){
      self.div.parent().off();
      self.div.off();
    }
    Scrollbar.prototype.onScrollEnd = function(self){
      if(self.div != '' && typeof self.div !== 'undefined'){
        self.eventHandler();
        self.div.on('scroll', function(){self.onScrollChange(this);});
        if(self.checkBounds(self.div.parent(), {x:this.pointerX, y:this.pointerY})){
          self.div.parent().trigger('mouseleave');
        }
      }
    }

    Scrollbar.prototype.checkBounds = function(div, position){
      var offset = div.offset();
      var flag = true;
      if(position.x > offset.left && position.y > offset.top && position.x < (div.outerWidth()+offset.left) && position.y < (div.outerHeight()+offset.top)) flag = false;

      return flag;
    }