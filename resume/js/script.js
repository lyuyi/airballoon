$('.ddw').val(0);
$('.ddw2').val(0);
setTimeout(function(){
$('.num').eq(0).find('.fcont').stop().animate({'top':'40%'},500)
	},500);
$(function(){
$('.num_box').mousewheel(function(event, delta) {
	var m=$('.ddw2').val();
	if (m == 1){
		return;	
	}
	qpgd(delta);
});
});
function qpgd(a){
	var z =$('.ddw').val();
    b = parseInt(z);
	c = $('.num').length;
if(a<0){
	if(-b==c-1){
		return;
	}
	b-=1;
	$('.ddw2').val(1);
	}else if(a>0){
		if(-b==0){
			return;
	}
	b+=1;
	$('.ddw2').val(1);
	}
if(-b==0){
$('.num').eq(1).find('.scont').animate({'top':'0'},500);
setTimeout(function(){
$('.num').eq(0).find('.fcont').animate({'top':'30%'},500);
	},1000);
	}else if(-b==1){
$('.num').eq(0).find('.fcont').animate({'top':'0'},500);
$('.num').eq(2).find('.econt').animate({'top':'0'},500);
setTimeout(function(){
$('.num').eq(1).find('.scont').animate({'top':'25%'},500);
	},1000);
		}else if(-b==2){
$('.num').eq(1).find('.scont').animate({'top':'0'},500);
$('.num').eq(3).find('.tcont').animate({'top':'0'},500);
setTimeout(function(){
$('.num').eq(2).find('.econt').animate({'top':'10%'},500);
	},1000);
		}else if(-b==3){
$('.num').eq(2).find('div').animate({'top':'0'},500);
$('.num').eq(4).find('.xcont').animate({'top':'0'},500);
setTimeout(function(){
$('.num').eq(3).find('.tcont').animate({'top':'15%'},500);
	},1000);
		}
		else if(-b==4){
$('.num').eq(3).find('.tcont').animate({'top':'0'},500);
$('.num').eq(5).find('div').animate({'top':'0'},500);
setTimeout(function(){
$('.num').eq(4).find('.xcont').animate({'top':'35%'},500);
	},1000);
		}
		else if(-b==5){
$('.num').eq(4).find('.xcont').animate({'top':'0'},500);
setTimeout(function(){
$('.num').eq(5).find('div').animate({'top':'30%'},500);
	},1000);
		}	
		
$('.ddw').val(b);
$('.fixed_r li').eq(-b).addClass('on').siblings('li').removeClass('on');
var single_hh = $(window).height();
click_hh =-single_hh*b;
$('.num_box').animate({'bottom': click_hh},1000);
setTimeout(function(){
	$('.ddw2').val(0);
	},1400);
}
	$('.fixed_r li').eq(0).addClass('on');
	$('.fixed_r li').click(function(){
		var b = $(this).index();
		$(this).addClass('on').siblings('li').removeClass('on');
		$('.ddw').val(-b);


if(b==0){
$('.num').eq(1).find('div').animate({'top':'0'},500);
setTimeout(function(){
$('.num').eq(0).find('div').animate({'top':'30%'},500);
	},1000);
	}else if(b==1){
$('.num').eq(0).find('div').animate({'top':'0'},500);
$('.num').eq(2).find('div').animate({'top':'0'},500);
setTimeout(function(){
$('.num').eq(1).find('div').animate({'top':'30%'},500);
	},1000);
		}else if(b==2){
$('.num').eq(1).find('div').animate({'top':'0'},500);
$('.num').eq(3).find('div').animate({'top':'0'},500);
setTimeout(function(){
$('.num').eq(2).find('div').animate({'top':'30%'},500);
	},1000);
		}else if(b==3){
$('.num').eq(2).find('div').animate({'top':'0'},500);
$('.num').eq(4).find('div').animate({'top':'0'},500);
setTimeout(function(){
$('.num').eq(3).find('div').animate({'top':'30%'},500);
	},1000);
		}
		else if(b==4){
$('.num').eq(3).find('div').animate({'top':'0'},500);
$('.num').eq(5).find('div').animate({'top':'0'},500);
setTimeout(function(){
$('.num').eq(4).find('div').animate({'top':'30%'},500);
	},1000);
		}
		else if(-b==5){
$('.num').eq(4).find('div').animate({'top':'0'},500);
setTimeout(function(){
$('.num').eq(5).find('div').animate({'top':'30%'},500);
	},1000);
		}	


var single_hh = $(window).height();
click_hh =single_hh*b;
$('.num_box').animate({'bottom': click_hh},1000);
		})
function quanp(){
var single_hh = $(window).height();
var single_ww = $(window).width();
$('.num').height(single_hh);
$('.num li').width(single_ww);
}
quanp();
$(window).resize(function(){
	if (typeof indexSlides != 'undefined' && indexSlides.reformat) 
		indexSlides.reformat();
		quanp();
});
