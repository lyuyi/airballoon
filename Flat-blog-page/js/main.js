// 函数表示自动加载/调用（因为运用了jQuery库，所以用jq的快捷方法）
;$(function() 
{    
	'use strict';//使用严格模式

	var sidebar = $('#sidebar'), //使用CSS，选择侧栏    
		mask = $('.mask'), //选择mask
		// backButton = $('.back-to-top'),//选择返回菜单
		
		
		// 只要sidebar_trigger被点击就调用function函数
	    sidebar_trigger = $('#sidebar_trigger');//侧栏触发器
	function showSideBar()
	{
	    mask.fadeIn();// fadeIn() 用于淡入已隐藏的元素，显示mask
	    sidebar.css('right', 0);
	}
	function hideSideBar()//隐藏侧栏
	{
		mask.fadeOut();// fadeOut() 用于淡出可见元素
		sidebar.css('right',-sidebar.width());//sidebar有多少就往回收多少,如是正则往左边移
	}
	sidebar_trigger.on('click',showSideBar)//监听侧栏触发器点击事件
	mask.on('click',hideSideBar)//监听mask
	// backButton.on('click', function() //监听返回按钮
	// {
	// 	$('html,body').animate({
	// 		scrollTop:0
	// 	})
	// }, 600)//返回速度600毫秒

 }) 
 //scrollTop() 方法返回或设置匹配元素的滚动条的垂直位置。
 //监听事件，返回到顶部后按钮不见
 	// $(window).on('scroll', function () {
 	// 	if ($(window).scrollTop() > $(window).height())//滚动的高度大于窗口高度执行if语句
 	// 		backButton.fadeIn();//显示返回按钮
 	// 	else
 	// 		backButton.fadeOut();
	 // })
 	//刷新浏览器就自动触发事件
 // 	$(window).trigger('scroll');
 // })
