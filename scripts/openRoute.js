var myRoute=Route,homeFiles=["./scripts/ringSceneRoute-ringFn.js","./scripts/ringSceneRoute-ringScene.js","./scripts/ringSceneRoute-gameScene.js"];myRoute.mapRoute("/index",homeFiles,function(e){var s=document.getElementById("pageBody");$.ajax({type:"post",url:"./views/main.html",success:function(t){s.innerHTML=t,myRoute.deferLoad(e)}})});var flappyFiles=["./scripts/flappyBird-imgLoad.js","./scripts/flappyBird-sky.js","./scripts/flappyBird-land.js","./scripts/flappyBird-pipe.js","./scripts/flappyBird-bird.js","./scripts/flappyBird-gameScene.js","./scripts/flappyBird-overScene.js","./scripts/flappyBird-drawScene.js"];myRoute.mapRoute("/FlappyBird",flappyFiles,function(e){document.getElementById("pageBody").innerHTML='<canvas id="cvs"></canvas>',myRoute.deferLoad(e)});var sceneFiles=["./scripts/changeScene-chagneScene.js","./scripts/changeScene-histogramChart.js","./scripts/changeScene-pieChart.js","./scripts/changeScene-progressBar.js","./scripts/changeScene-ringFn.js","./scripts/changeScene-ringSecnePlus.js","./scripts/changeScene-addSceneChangeEvent.js","./scripts/changeScene-gameScenePlus.js"];myRoute.mapRoute("/Scene",sceneFiles,function(e){document.getElementById("pageBody").innerHTML='<div id="sceneContainer"></div>',myRoute.deferLoad(e)});var waterfallFiles=["./scripts/waterfallPlus.js"];myRoute.mapRoute("/Waterfall",waterfallFiles,function(e){var s=document.getElementById("pageBody");$.ajax({type:"post",url:"./views/waterfall.html",success:function(t){s.innerHTML=t,setTimeout(function(){myRoute.deferLoad(e)},150)},async:!1})});var carouselFiles=["./scripts/css3Carousel2.js","./scripts/floatNav.js"];myRoute.mapRoute("/Carousel",carouselFiles,function(e){var s=document.getElementById("pageBody");$.ajax({type:"post",url:"./views/css3Carousel2-6.html",success:function(t){s.innerHTML=t,myRoute.deferLoad(e)}})});var carouselCss2=["./scripts/css3Carousel1.js","./scripts/floatNav.js"];myRoute.mapRoute("/Carousel2",carouselCss2,function(e){var s=document.getElementById("pageBody");$.ajax({type:"post",url:"./views/css3Carousel1-4.html",success:function(t){s.innerHTML=t,myRoute.deferLoad(e)}})});var carouselJS1=["./scripts/carouselJS1-animate.js","./scripts/carouselJS1.js","./scripts/floatNav.js"];myRoute.mapRoute("/Carousel3",carouselJS1,function(e){var s=document.getElementById("pageBody");$.ajax({type:"post",url:"./views/carouselJS1-6.html",success:function(t){s.innerHTML=t,myRoute.deferLoad(e)}})});var carouselJS2=["./scripts/carouselJS2.js","./scripts/floatNav.js"];myRoute.mapRoute("/Carousel4",carouselJS2,function(e){var s=document.getElementById("pageBody");$.ajax({type:"post",url:"./views/carouselJS2-5.html",success:function(t){s.innerHTML=t,myRoute.deferLoad(e)}})});var mouseInOrOut=["./scripts/mouseInOrOut.js","./scripts/floatNav.js"];myRoute.mapRoute("/Carousel5",mouseInOrOut,function(e){var s=document.getElementById("pageBody");$.ajax({type:"post",url:"./views/mouseInOrOut.html",success:function(t){s.innerHTML=t,myRoute.deferLoad(e)}})});