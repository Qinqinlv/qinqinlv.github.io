$(".mouseInOrOut > .list").on("mouseenter mouseleave",function(e){function t(e){a.addClass("current"),a.children("div").removeClass().addClass(e)}function s(e){a.removeClass("current"),a.children("div").removeClass().addClass(e)}var a=$(this),r=$(this).width(),o=$(this).height(),i=(e.pageX-this.offsetLeft-r/2)*(r>o?o/r:1),c=(e.pageY-this.offsetTop-o/2)*(o>r?r/o:1),h=Math.round((Math.atan2(c,i)*(180/Math.PI)+180)/90+3)%4;if("mouseenter"==e.type)switch(h){case 0:t("top");break;case 1:t("right");break;case 2:t("bottom");break;case 3:t("left")}else switch(h){case 0:s("top");break;case 1:s("right");break;case 2:s("bottom");break;case 3:s("left")}});