function draw(e){var i=$(window).width();console.log("clientW",i);var t=$(window).height(),n=1;i>=992?(n=1,cvs.width=i,cvs.height=t-80):i>=768?(n=.8,cvs.width=i,cvs.height=t-80):i>=450?(n=.6,cvs.width=i,cvs.height=t-71):(n=.5,cvs.width=i,cvs.height=t-71);var p=getGameScene({ctx:ctx,imgObj:e,scale:n}),a=getOverScene(ctx),c=!0,d=(new Date).getTime(),r="";p.addListener(function(){c=!1;var e=0,i=0,t=0,n=((new Date).getTime()-d)/1e3;e=(e=parseInt(n%60))>9?e:"0"+e,i=(i=parseInt(n/60%60))>9?i:"0"+i,t=parseInt(n/3600),r="用时："+(t=t>9?t:"0"+t)+"小时"+i+"分钟"+e+"秒",a.render(r)}),function e(){p.render(d),c&&requestAnimationFrame(e)}()}var cvs=document.getElementById("cvs"),ctx=cvs.getContext("2d");imgLoad({bird:"./public/images/flappyBird/bird.png",land:"./public/images/flappyBird/land.png",pipeDown:"./public/images/flappyBird/pipeDown.png",pipeUp:"./public/images/flappyBird/pipeUp.png",sky:"./public/images/flappyBird/sky.png"},draw);