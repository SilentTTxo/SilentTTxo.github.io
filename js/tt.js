var color = ['#fe7b89','#ff9879','#42c7da']
$(function(){
	//颜色处理
	banner = $(".dateTag");
	for(i=0;i<banner.length;i++){
		$(banner[i]).css({
			"background": color[i%3]
		});
	}
	data = $(".banner");
	h1 = $("h1>a");
	for(i=0;i<data.length;i++){
		/*$(data[i]).css({
			"color":color[i%3]
		})*/
		$(h1[i]).css({
			"color":color[i%3]
		})
		$(h1[i].parentElement).css({
			"border-left-color": color[i%3]
		})
	}
	side = $(".sidebar>h2");
	for(i=0;i<side.length;i++){
		$(side[i]).css({
			"background": color[i%3]
		});
	}

	//去抖动
	$(".post-title>a").each(function(index, el) {
		$(el).hover(function() {
			temp = $(this).parent(".post-title").parent(".banner");
			temp.removeClass('shake-slow');
			temp.prepend('<img src="./css/pics/HeyMan.gif" alt="" class="HeyMan">');
		}, function() {
			temp = $(this).parent(".post-title").parent(".banner");
			temp.addClass('shake-slow');
			$(".HeyMan").remove();
		});
	});
});