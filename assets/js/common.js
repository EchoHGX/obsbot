$(function(){
	if($(window).width() > 767){
		var bodyf = $(window).width()* 50/1920;
		if (bodyf < 37.5) { bodyf = 37.5;}
		$("body").css("font-size", bodyf + "px");
	}else{
		$.getScript("/themes/web/assets/js/fontsize.js");
	}

	//点击搜索图标显示搜索框
	$(".c_head .cnav .open_search").click(function(){
		$(".alert_search").addClass("showing");
	});

	$(".c_head_mobile .menu_nav .open_search").click(function(){
		$(".alert_search").addClass("showing");
		$(".mobile_tbn .menu_btn").click();
	});


	//关闭搜索框
	$(".alert_search .cancel").click(function(){
		$(".alert_search").removeClass("showing");
	});

	$(".mobile_tbn .menu_btn").click(function(){
		if (!$(this).hasClass("menuactive")) {
			$(this).addClass("menuactive");
			$(".c_head_mobile ,.c_head_mobile .menu_nav").addClass("showing");
			return false;
		}
		$(this).removeClass("menuactive");
		$(".c_head_mobile .menu_nav").removeClass("showing")
		setTimeout(function(){
			$(".c_head_mobile").removeClass("showing")
		},1000);
	});

	$(".acztxt_list .ztxt").eq(0).addClass("showing");

	$(".c_footer .nav_title").click(function(){
		if ($(this).hasClass("showing")) {
			$(this).removeClass("showing").parent().parent(".mft_nav_item").css("height","1.88rem");
			$(this).parent(".share").removeClass("showing")
			return false;
		}
		var alh = $(this).parent(".mft_nav_box").height();
		$(this).addClass("showing").parent().parent(".mft_nav_item").css("height",alh + 'px');
		$(this).parent(".share").addClass("showing");
	});

	$(".c_footer .share .mft_a").click(function(){
		$(this).toggleClass("showing").siblings(".mft_a").removeClass("showing");
	});
  
  	if($(".acztxt_list .ztxt_box")){
      	setTimeout(function(){
           $(".acztxt_list .ztxt_box").css("height",$(".acztxt_list .ztxt").outerHeight() + 30 + "px");
          console.log($(".acztxt_list .ztxt").outerHeight());
        },1000);
      
	};
  
  	if($(".pages .setps")){
     	setTimeout(function(){
          var size = $(".pages .setps .setp_ztxt .setp_btn").length;
          $(".pages .setp_icon .icon_line").css("height",(($(window).width() > 2500) ?  90 : ($(window).width() > 1800 ? 60 : 35)) * size + "px");
        },500);
    };
  
  	$(".c_footer a").each(function(){
      if($(this).attr("href") == "javascript:;"){
       	$(this).css("color","#5a5a5a"); 
      }
    });
});
