function timerAnimate(){
  var circ = [], circStyle = [], init = [];
      var handle = 0;
      var days = [302, 282, 302, 302];

      var time$, time_data$;

      var paper = Snap('#timer');

      Snap.load('svg/timer_new.svg', onSVGLoaded ) ;

	function onSVGLoaded( data ){ 
	    paper.append( data );
	    change();
	}

      function change(){
        for (var i = 1; i <= 8; i++) {
          circ.push(document.querySelectorAll('.c'+i));
          time$ = document.querySelector('#time');
          time_data$ = document.querySelector('#timeData');
          if(circ[i-1].length > 1){
            var temp = [], temp2 = [];
            for (var j = 0; j < circ[i-1].length; j++) {
            	temp.push(circ[i-1][j].style);
              temp2.push(window.parseInt(circ[i-1][j].style.strokeDashoffset));
            }
            circStyle.push(temp);
            init.push(temp2);
          }else{
            circStyle.push(Array(circ[i-1][0].style));
            init.push([window.parseInt(circ[i-1][0].style.strokeDashoffset)]);
          }
        };
        
        animate_continuos();
      }

      function animate_continuos(){
        var framecount = 0;
        handle = window.setTimeout(function(){animate(300, ++framecount)}, 1000/60);
        window.setTimeout(function(){animate_continuos()}, 5000);
      }

      var changeCount = 0;

      function animate(end, framecount){
        var ratio, cg, change=0, opc;
        
        if(framecount <= 30){
          ratio = framecount/30;
          cg = easing.easeInCubic(ratio, framecount, 0, end, 30);
          opc = 10-easing.easeInElastic(ratio, framecount, 0, 10, 30);
          opc = opc<0?0:opc>10?1:opc/30;
        }else{
          ratio = (framecount-30)/30;
          cg = 300-easing.easeOutCubic(ratio, framecount-30, 0, end, 30);
      opc = 1-easing.easeInOutQuad(ratio, framecount, 0, 1, 30);
        }
        if(framecount == 31){
          if(changeCount > 3){
            changeCount = 0;
          }
          var data = timeChange(changeCount);
          time$.innerHTML = data[0];
          time_data$.innerHTML = data[1];
          time_data$.attributes.x.value = data[2];
          changeCount++;
        }
        for (var i = 0; i < 8; i++) {
         /* if(framecount <= 30){
            change = i%2==0?cg:(-cg);
          }else{
            change = i%2==0?-cg:cg;
          }*/
          change = i%2==0?cg:(-cg);
          if(circ[i].length > 1){
            for (var j = 0; j < circ[i].length; j++) {
              circStyle[i][j].strokeDashoffset = (init[i][j]+change)+'px';
            }
          }else{
            circStyle[i][0].strokeDashoffset = (init[i][0]+change)+'px';
          }
        };
          time$.style.opacity = opc;
          time_data$.style.opacity = opc;
        handle = (framecount > 60)? 0 : window.setTimeout(function(){animate(300, ++framecount)}, 1000/60);
      }

    function timeChange(count){
      var data = [];

      switch(count){
        case 0:
          data.push(Math.ceil( leftTime/86400000 ));
          data.push('Days');
          data.push(days[0]);
          break;
        case 1:
          data.push(Math.floor( (leftTime/3600000)%24 ));
          data.push('Hours');
          data.push(days[1]);
          break;
        case 2:
          data.push(Math.ceil( (leftTime/60000)%60 ));
          data.push('Mins');
          data.push(days[2]);
          break;
        case 3:
          data.push("To");
          data.push("Go");
          data.push(334);
      }
      

      return data;
    }
}