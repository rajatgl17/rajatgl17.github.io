var w = (window.GreenSockGlobals || window),
      gs = w.com.greensock,
      _class = gs._class;
EasePoint = function(time, value, next) {
        this.t = time;
        this.v = value;
        if (next) {
          this.next = next;
          next.prev = this;
          this.c = next.v - value;
          this.gap = next.t - time;
        }
      }
RoughEase = _class("easing.RoughEase", function(vars) {
      vars = vars || {};
      var taper = vars.taper || "none",
        a = [],
        cnt = 0,
        points = (vars.points || 20) | 0,
        i = points,
        randomize = (vars.randomize !== false),
        clamp = (vars.clamp === true),
        template = (vars.template instanceof Ease) ? vars.template : null,
        strength = (typeof(vars.strength) === "number") ? vars.strength * 0.4 : 0.4,
        x, y, bump, invX, obj, pnt;
      while (--i > -1) {
        x = randomize ? Math.random() : (1 / points) * i;
        y = template ? template.getRatio(x) : x;
        if (taper === "none") {
          bump = strength;
        } else if (taper === "out") {
          invX = 1 - x;
          bump = invX * invX * strength;
        } else if (taper === "in") {
          bump = x * x * strength;
        } else if (x < 0.5) {  //"both" (start)
          invX = x * 2;
          bump = invX * invX * 0.5 * strength;
        } else {        //"both" (end)
          invX = (1 - x) * 2;
          bump = invX * invX * 0.5 * strength;
        }
        if (randomize) {
          y += (Math.random() * bump) - (bump * 0.5);
        } else if (i % 2) {
          y += bump * 0.5;
        } else {
          y -= bump * 0.5;
        }
        if (clamp) {
          if (y > 1) {
            y = 1;
          } else if (y < 0) {
            y = 0;
          }
        }
        a[cnt++] = {x:x, y:y};
      }
      a.sort(function(a, b) {
        return a.x - b.x;
      });

      pnt = new EasePoint(1, 1, null);
      i = points;
      while (--i > -1) {
        obj = a[i];
        pnt = new EasePoint(obj.x, obj.y, pnt);
      }

      this._prev = new EasePoint(0, 0, (pnt.t !== 0) ? pnt : pnt.next);
    }, true);
    p = RoughEase.prototype = new Ease();
    p.constructor = RoughEase;
    p.getRatio = function(p) {
      var pnt = this._prev;
      if (p > pnt.t) {
        while (pnt.next && p >= pnt.t) {
          pnt = pnt.next;
        }
        pnt = pnt.prev;
      } else {
        while (pnt.prev && p <= pnt.t) {
          pnt = pnt.prev;
        }
      }
      this._prev = pnt;
      return (pnt.v + ((p - pnt.t) / pnt.gap) * pnt.c);
    };
    p.config = function(vars) {
      return new RoughEase(vars);
};
RoughEase.ease = new RoughEase();

function TimerTween(){};

TimerTween.prototype.init = function (){
  var self = this;
  self.xPos = [177, 157, 177, 177];
  self.mickeyPath=' ';
  self.mickeyPoints = [{x:200, y:200, rad:210, startDeg:180, endDeg: 0, shape:'0 1 1'},
                        {x:(200+200*1.2), y:(200+200*1.5), rad:305, startDeg:95.5, endDeg: 84.5, shape:'0 0 1'},
                        {x:(200+200*2.4), y:200, rad:210, startDeg:180, endDeg: 0, shape:'0 1 1'},
                        {x:(200+200*2.4), y:200, rad:210, startDeg:0, endDeg: 255, shape:'0 0 1'},
                        {x:(200+200*1.18), y:(200+200*1.46), rad:210, startDeg:155, endDeg: 25, shape:'0 1 0'},
                        {x:200, y:200, rad:210, startDeg:180, endDeg: 282, shape:'0 0 0'}]
  self.days={};self.hours={};self.mins={};self.secs={};
  self.all = [self.days, self.hours, self.mins];
  this.timeline;this.count=0;this.data;this.flag=false;
  this.paper = Snap('#timer');
  
  Snap.load('svg/timer.svg', function(data){self.loadTimer(data)}) ;
  window.selfTimer = this;
}

TimerTween.prototype.loadTimer = function ( data ){ 
  var self = this;
  self.paper.append( data );
  self.Timer = self.paper.select('#timers')
  self.days.svg = self.paper.select('#days');self.hours.svg = self.days.svg.clone();self.mins.svg = self.days.svg.clone();
  self.mins.box = self.mins.svg.getBBox(); self.hours.box = self.hours.svg.getBBox();
  self.hours.svg.transform(Snap.matrix().translate(self.hours.box.cx * 1.2, self.hours.box.cy * 1.5));
  self.mins.svg.transform(Snap.matrix().translate(self.mins.box.cx * 2.48, 0))
  self.secs.svg = self.Timer.text(selfTimer.hours.box.x2+5, selfTimer.hours.box.y2-100, ":20s").attr({'stroke':'#fff', fill:'#ff9700', 'font-size':42, 'letter-spacing':'3px'});
  self.handle = 0;

  self.days.circles=new Snap.set; self.hours.circles=new Snap.set(); self.mins.circles=new Snap.set();
  for (var i = 1; i <= 4; i++) {
    self.days.circles.push(self.days.svg.selectAll('.c'+i));
    self.hours.circles.push(self.hours.svg.selectAll('.c'+i));
    self.mins.circles.push(self.mins.svg.selectAll('.c'+i));
  }
  for (var i = 0; i < self.mickeyPoints.length; i++) {
    var val=self.mickeyPoints[i];
    self.mickeyPath += self.pathMaker(val.x, val.y, val.rad, val.startDeg, val.endDeg, val.shape);
  };
  rg = new RoughEase({strength:1, points:50, clamp:true, template:Bounce.easeInOut});
  for(var i=0; i<self.all.length; i++){
    self.all[i].texts = self.all[i].svg.selectAll('text');
    self.all[i].index = i;
    self.createTimer(rg, self.all[i]);
  }
  //selfTimer.mins.texts.attr({'fill':'#ff2211'});selfTimer.hours.texts.attr({'fill':'#ffaa00'})
  self.mins.svg.attr({'stroke':'#aaffdd'});self.hours.svg.attr({'stroke':'#ddbbbb'})
  self.mickey = self.Timer.path(self.mickeyPath).attr({stroke: '#fff', 'stroke-width':3, 'fill': 'none', 'stroke-dasharray':'15 15'});
  self.mickey.animate({'stroke-dashoffset': 0}, 0);
  self.mickeyLength = Snap.path.getTotalLength(self.mickey.attr('d'));
  self.Timer.transform(Snap.matrix().translate(15, 10));
  
  //window.setTimeout(function(){self.startTimer()}, 1000);
}

TimerTween.prototype.createTimer = function (rough, obj){
  var self = this;
  var data = self.timeChange(obj.index);

  obj.texts[0].node.textContent = data[0];
  obj.texts[1].node.textContent = data[1];
  obj.texts[1].attr({'x':data[2]});

  var tl = new TimelineLite({onComplete:self.reverseTimer, onCompleteParams:[obj, self]});
  var tl2 = new TimelineLite, tl3 = new TimelineLite;

  obj.circles.forEach(function(l,index){
    l.items.forEach(function(el){
        if(index%2==0){
          if(el instanceof Array){
            el.forEach(function(eln){
              tl.to(eln, 1.5, {raphael:{'stroke-dashoffset':"-=600"}, ease:Power4.easeIn},0);
            })
          }else{
             tl.to(el, 1.5, {raphael:{'stroke-dashoffset':"-=500"}, ease:Power4.easeIn},0);
          }
        }else{
          if(el instanceof Array){
            el.forEach(function(eln){
              tl.to(eln, 1.5, {raphael:{'stroke-dashoffset':"+=200"}, ease:Power4.easeIn},0).pause();
            })
          }else{
             tl.to(el, 1.5, {raphael:{'stroke-dashoffset':"+=300"}, ease:Power4.easeIn},0).pause();
          }
        } 
      })
  })

  tl2.to(obj.texts[0], 1.5, {raphael:{'opacity':0}, ease:rough})
    .to(obj.texts[1], 1.5, {raphael:{'opacity':0}, ease:rough}, 0).pause();

  tl3.to(obj.texts[0], 1.5, {raphael:{'opacity':1}, ease:Power3.easeInOut})
    .to(obj.texts[1], 1.5, {raphael:{'opacity':1}, ease:Power3.easeInOut}, 0.5).pause()

  obj.timeline = [tl, tl2, tl3];
}

TimerTween.prototype.startTimer = function (){
  var self = this;
   if(self.flag){
      self.secs.svg.node.textContent = ':'+self.changeSecs()+'s';
      self.count = self.count<self.mickeyLength?self.count+10:0
      self.mickey.animate({'stroke-dashoffset': self.count}, 900);
    }else{
      self.flag=true;
      self.handle = window.setInterval(function(){self.startTimer()}, 1000);
      for (var i = 0; i < self.all.length; i++) {
        self.refresh(self.all[i]);
      };
    }
}

TimerTween.prototype.startClock = function(obj){
  obj.timeline[0].restart();
  obj.timeline[1].restart();
}

TimerTween.prototype.reverseTimer = function (obj, self){
  self.refresh(obj);

  obj.timeline[0].reverse();
  obj.timeline[2].restart();
}

TimerTween.prototype.refresh = function(obj){
  var self = this;
  self.data = self.timeChange(obj.index);
  obj.texts[0].node.textContent = self.data[0];
  obj.texts[1].node.textContent = self.data[1];
  obj.texts[1].attr({'x':self.data[2]});
  obj.texts.attr({"opacity":1});
  obj.time = self.data[0];
}

TimerTween.prototype.changeSecs = function(){
  var self = this;
  var targetTime = new Date('Feb 26, 2015'), currentTime = new Date(), leftTime = targetTime-currentTime;
  if(targetTime < currentTime){
  	leftTime = 0;
  	self.mins = 0
  	self.hours = 0;
  	self.days = 0;
  }
  var val = Math.floor( (leftTime/1000)%60 );
  	
  if(val == 59){
    self.startClock(self.mins);
  }if(self.mins.time == 59 && !self.hours.once){
    self.startClock(self.hours);
    self.hours.once = true;
  }if(self.hours.time == 23 && !self.days.once){
    self.startClock(self.days);
    self.days.once = true;
  }
  return (val<10?'0':'')+val;
}

TimerTween.prototype.timeChange = function (index){
    var data = [];
    var self = this;
    var targetTime = new Date('Feb 26, 2015'), currentTime = new Date(), leftTime = targetTime-currentTime;
    var val, str;
    switch(index){
      case 0:
        val = Math.floor( leftTime/86400000 );
        data.push(val);
        data.push('Days');
        data.push(self.xPos[0]);
        break;
      case 1:
      val = Math.floor( (leftTime/3600000)%24 );
        data.push(val);
        data.push('Hours');
        data.push(self.xPos[1]);
        break;
      case 2:
      val = Math.floor( (leftTime/60000)%60 );
        data.push(val);
        data.push('Mins');
        data.push(self.xPos[2]);
        break;
    }

    if(val<10){
      str = '0'+val;
      data[0] = str;
    }
    

    return data;
  }

TimerTween.prototype.stopTimer = function (){
  var self = this;
  self.flag = false;
  window.clearInterval(self.handle);  
}

TimerTween.prototype.resumeTimer = function (){
  this.startTimer();
}

TimerTween.prototype.points = function(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = angleInDegrees * Math.PI / 180.0;
  var x = centerX + radius * Math.cos(angleInRadians);
  var y = centerY - radius * Math.sin(angleInRadians);
  return [x,y];
}

TimerTween.prototype.pathMaker = function(x, y, rad, startDeg, endDeg, shapeSelect){
  return ' M'+this.points(x, y, rad, startDeg)[0]+' '+this.points(x, y, rad, startDeg)[1]+' A'+rad+' '+rad+' '+shapeSelect+' '+this.points(x, y, rad, endDeg)[0]+' '+this.points(x, y, rad, endDeg)[1];
}