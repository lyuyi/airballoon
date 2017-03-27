$( window ).on( "load",function(){
	waterfall('main','pin');
	var dataInt={'data':[{'src':'1.jpg'},{'src':'2.jpg'},{'src':'3.jpg'},{'src':'4.jpg'}]};
	window.onscroll=function(){
		if(checkscrollside()){
			$.each( dataInt.data, function( index, value){
				var $oPin = $('<div>').addClass('pin').appendTo( $( "#main") );
				var $oBox = $('<div>').addClass('box').appendTo( $oPin );
				$('<img>').attr('src','./images/' + $( value).attr('src') ).appendTo($oBox);
			});
			waterfall();
		};
	}
});

function waterfall(parent,pin){
	var $aPin = $( "#main>div" );
	var iPinW = $aPin.eq( 0 ).width();
	var num = Math.floor( $( window ).width() / iPinW );
	$( "#main" ).css({
		'width:' : iPinW * num,
		'margin:' : '0 auto'
	});
	var pinHArr=[];
	$aPin.each( function( index, value ){
		var pinH= $aPin.eq( index ).height();
		if( index < num ){
			pinHArr[ index ] = pinH;
		}else{
			var minH = Math.min.apply( null , pinHArr );
			var minHIndex = $.inArray( minH, pinHArr );
			$( value ).css({
				'position': 'absolute',
				'top': minH + 15,
				'left': $aPin.eq( minHIndex ).position().left
			});
			pinHArr[ minHIndex ] += $aPin.eq( index ).height() + 15;
		}
	});
}

function checkscrollside(){
	var $aPin = $( "#main>div" );
	var lastpinH = $aPin.last().get(0).offsetTop + Math.floor($aPin.last().height()/2);//get(index)指定获取哪个索引的元素
	var scrollTop = $( window ).scrollTop();
	var documentH = $( document ).width();
	return (lastpinH < scrollTop + documentH ) ? true : false;
}