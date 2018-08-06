$(window).on('scroll', function () {
	var nav =$('#navbar')
	all=$( nav ).find( "li" );
	active=$( nav ).find( "li.active" );

  var cur_pos = $(this).scrollTop();
	var containers=$('.container')
	var height1=containers[0].clientHeight;
	var height2=containers[1].clientHeight;
	var offset2=containers[1].offsetTop;
	var height3=containers[2].clientHeight;
	var height4=containers[3].clientHeight;
	var height5=containers[4].clientHeight;
	var height6=containers[5].clientHeight;
	if(cur_pos<height1+height2+offset2-350){
		active.removeClass("active");
		$(all[0]).addClass("active");
	}else if(cur_pos<height1+height2+offset2+height3-350){
		active.removeClass("active");
		$(all[1]).addClass("active");
	}else if(cur_pos<height1+height2+offset2+height3+height4-350){
		active.removeClass("active");
		$(all[2]).addClass("active");
	}else if(cur_pos<height1+height2+offset2+height3+height4+height5-350){
		active.removeClass("active");
		$(all[3]).addClass("active");
	}else{
		active.removeClass("active");
		$(all[4]).addClass("active");
	}
});
