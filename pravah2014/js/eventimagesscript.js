( function( $ ) {
	
	$.fn.hoverfold = function( args ) {

		this.each( function() {
		
			$( this ).children( '.view' ).each( function() {
			
				var $item 	= $( this ),
					img		= $item.children('img').attr('src'),
					struct	= '<div class="openMe"><div class="slice s1">';
						struct	+='<div class="slice s2">';
							struct	+='<div class="slice s3">';
								struct	+='<div class="slice s4">';
									struct	+='<div class="slice s5">';
									struct	+='</div>';
								struct	+='</div>';
							struct	+='</div>';
						struct	+='</div>';
					struct	+='</div></div>';
					
				var $struct = $( struct );
				
				
				$item.find( 'img' ).remove().end().append($struct).find( 'div.slice' ).css( 'background-image', 'url(' + img + ')' ).prepend( $( '<span class="overlay" ></span>' ) );
				
			} );
			
		});
		
		$('.view-back').each(function(){
		$(this).parent().parent().find('.nextArrow').each(function(){
			this.$s1 =this.$mine.children().eq(1).children();
			this.$s2 = this.$mine.children().eq(1).children().children().eq(1);
			this.$s3 = this.$mine.children().eq(1).children().children().eq(1).children().eq(1);
			this.$s4 = this.$mine.children().eq(1).children().children().eq(1).children().eq(1).children().eq(1);
			this.$s5 = this.$mine.children().eq(1).children().children().eq(1).children().eq(1).children().eq(1).children().eq(1);
		})
	});

};
	
	$.fn.hoverfold2 = function( args ) {
			
				var $item 	= $( this ),
					img		= $(this).children().children('img').attr('src'),
					struct	= '<div class="openMe"><div class="slice s1">';
						struct	+='<div class="slice s2">';
							struct	+='<div class="slice s3">';
								struct	+='<div class="slice s4">';
									struct	+='<div class="slice s5">';
									struct	+='</div>';
								struct	+='</div>';
							struct	+='</div></div>';
						struct	+='</div>';
					struct	+='</div>';
					
				var $struct = $( struct );
				
				$item.find('.openMe').remove().end().append( $struct ).find( 'div.slice' ).css( 'background-image', 'url(' + img + ')' ).prepend( $( '<span class="overlay" ></span>' ) );
				
				$('.view-back').each(function(){
		$(this).parent().parent().find('.nextArrow').each(function(){
			this.$s1 =this.$mine.children().eq(1).children();
			this.$s2 = this.$mine.children().eq(1).children().children().eq(1);
			this.$s3 = this.$mine.children().eq(1).children().children().eq(1).children().eq(1);
			this.$s4 = this.$mine.children().eq(1).children().children().eq(1).children().eq(1).children().eq(1);
			this.$s5 = this.$mine.children().eq(1).children().children().eq(1).children().eq(1).children().eq(1).children().eq(1);
		})
	});

	};

	
} )( jQuery );