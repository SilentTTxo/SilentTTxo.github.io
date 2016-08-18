var color = ['#fe7b89','#ff9879','#42c7da']
$(function(){
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
});