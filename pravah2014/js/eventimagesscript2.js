var colorSets = ['#FDEA60', '#CC38EB', '#B5EF2C', '#CA0065', '#79F49E', "#F21313"], i=-1, wp = 10;

$(function(){
	
	var folderMax = {};
	
	$('.view-back').each(function(){
		$(this).parent().parent().find('.nextArrow').each(function(){
			this.folder1 = 1;
			this.folder2 = 2;
			this.maxm = parseInt($(this).attr('class').split(' ')[2]);
			this.folderName = $(this).attr('class').split(' ')[1];
			this.$mine = $(this).parent().parent().find('.'+this.folderName).eq(1);			
			this.$Back = this.$mine.children().eq(0);
			folderMax[this.folderName] = this.maxm;
		})
	});
	
		$('.nextArrow').click(function(){
			var custom = this;
			i++;
			custom.folder1++;
			custom.folder2++;
			if(custom.folder1 > custom.maxm){
				custom.folder1 = 1;
				wp = -wp;
			}
			if(custom.folder2 > custom.maxm){
				custom.folder2 = 1;
			}
			if(i >= colorSets.length){
				i = 0;
			}
				
            	this.$s1.toggleClass('s1 myS1 mynewS1');
				this.$s2.toggleClass('s2 myS2 newSlice');
				this.$s3.toggleClass('s3 myS3 newSlice');
				this.$s4.toggleClass('s4 myS4 newSlice');
				this.$s5.toggleClass('s5 myS5 newSlice');
				$("canvas.snow").let_it_snow({
				  windPower: wp,
				  speed: 0,
				  color: colorSets[i],
				  size:100,
				  opacity: 0.00000001,
				  count: 25,
				  interaction: false
				});
				this.$mine.find('.myS1').animate({
					opacity: 0.5
				}, 2000, function(){
					custom.$Back.css('background-image', 'url('+custom.folderName+'/' + custom.folder2 + 'min.JPG)');
					$(this).replaceWith('<img src="'+custom.folderName+'/' + custom.folder1 + 'min.JPG" />');
					$(custom.$mine).hoverfold2();
				});
        })
	
	$('body').on('click', 'div.openMe', function(){
		var img = new Image();
		var $openMe = $(this);
		var folderArray = $openMe.children().css('backgroundImage').slice(4).split('/');
		var imageNo = parseInt(folderArray.pop().split('.')[0]);
		var imageFolder = folderArray.pop();
		
		$openMe.parent().parent().parent().find('#myWrapper2').css({
      		display: 'block'
		}).animate({
			opacity: '1'
		}, 500, function(){
			$(img).load(function () {
			  $('#showImage')
				.removeClass('loader')
				.append(this);
			  $(this).addClass('showImage1');
			}).error(function () {
			}).attr({
				src: imageFolder +'/'+imageNo+'.JPG',
				height: '600px',
				id: 'showImage1',
			});
		});
		
		
		//$('#showImage1').attr('src', imageFolder +'/'+imageNo[0]+'.JPG');
	})
	
	$('#closeBlacky').click(function(){
		$('#myWrapper2').animate({
			opacity: '0'
		}, 500, function(){
			$(this).css('display', 'none')
			$('#showImage')				
				.addClass('loader')
				.find('img')
				.remove()
		});
	});
	
	$('#nxtImage').click(function(){
		var folderContents = $(this).parent().find('#showImage1').attr('src').split('/');
		var nxtPicNum = parseInt(folderContents[1]);
		var img = new Image();
		$('#showImage')				
				.addClass('loader')
				.find('img')
				.remove();
		nxtPicNum++;
		if(nxtPicNum > parseInt(folderMax[folderContents[0]])){
			nxtPicNum = 1;
		}
		$(img).load(function () {
			  $('#showImage')
				.removeClass('loader')
				.append(this);
			  $(this).addClass('showImage1');
			}).error(function () {
			}).attr({
				src: folderContents[0]+'/'+nxtPicNum+'.JPG',
				height: '600px',
				id: 'showImage1',
			});
	})
	
	$('#prevImage').click(function(){
		var folderContents = $(this).parent().find('#showImage1').attr('src').split('/');
		var prevPicNum = parseInt(folderContents[1]);
		var img = new Image();
		$('#showImage')				
				.addClass('loader')
				.find('img')
				.remove();
		prevPicNum--;
		if(prevPicNum == 0 ){
			prevPicNum = parseInt(folderMax[folderContents[0]]);
		}
		$(img).load(function () {
			  $('#showImage')
				.removeClass('loader')
				.append(this);
			  $(this).addClass('showImage1');
			}).error(function () {
			}).attr({
				src: folderContents[0]+'/'+prevPicNum+'.JPG',
				height: '600px',
				id: 'showImage1',
			});
	})
})
