function animate(t,e,l){clearInterval(t.timer),t.timer=setInterval(function(){var r=!0;for(var a in e){var n=0;"opacity"==a?(n=Math.round(parseInt(100*getStyle(t,a)))||0,console.log(n)):n=parseInt(getStyle(t,a));var i=(e[a]-n)/10;i=i>0?Math.ceil(i):Math.floor(i),"opacity"==a?"opacity"in t.style?t.style.opacity=(n+i)/100:t.style.filter="alpha(opacity = "+10*(n+i)+")":"zIndex"==a?t.style.zIndex=e[a]:t.style[a]=n+i+"px",n!=e[a]&&(r=!1)}r&&(clearInterval(t.timer),l&&l())},10)}function getStyle(t,e){return t.currentStyle?t.currentStyle[e]:window.getComputedStyle(t,null)[e]}