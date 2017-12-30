var circ = [], circStyle = [], init = [];
      var handle = 0;
      var days = [107, "Days", 302], hours = [13, "Hours", 282], mins = [43, "Mins", 302], secs = [15, "Secs", 302];

      var time$, time_data$;

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
        handle = window.setTimeout(function(){animate(300, ++framecount)}, 1000/30);
        window.setTimeout(function(){animate_continuos()}, 5000);
      }

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
          var targetTime = new Date('Febuary 24, 2015'), currentTime = new Date(), leftTime = targetTime-currentTime;
          time$.innerHTML = Math.ceil( (leftTime <= 24*60*60*1000) ? (leftTime/3600000) : (leftTime/86400000) );
          time_data$.innerHTML = leftTime <= 24*60*60*1000 ? 'Hours' : 'Days';
          time_data$.attributes.x.value = days[2];
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
        handle = (framecount > 60)? 0 : window.setTimeout(function(){animate(300, ++framecount)}, 1000/30);
      }

      change();