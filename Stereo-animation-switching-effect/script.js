$(function (){
			var num = 0;
			$("#j_silder_outer .img-item").each(function(index, el) {
				$(this).css({
					"left":$(this).width() * index + "px",
					
					"transitionDelay": index * 0.3 + "s"
				});
			
				$(this).find(".img").css({
					"backgroundPosition": -$(this).width() * index + "px"
				});;
			});
			//.on 绑定事件
			$(".prev").on("click",function (){
				$("#j_silder_outer .img-item").css("transform", "rotateX(" + (++num * 90) + "deg)");
			});

			$(".next").on("click",function (){
				$("#j_silder_outer .img-item").css("transform", "rotateX(" + (--num * 90) + "deg)");
			});
			
			var timejg=2900;//轮播间隔时间
			var time = setInterval(move,timejg);
			function move(){
				$("#j_silder_outer .img-item").css("transform", "rotateX(" + (--num * 90) + "deg)");
			}
			$('.slider-outer').hover(function(){
				clearInterval(time);
			},function(){
				time = setInterval(move,timejg);
			});
		})