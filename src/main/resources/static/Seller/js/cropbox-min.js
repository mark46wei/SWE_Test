"use strict";var cropbox=function(h){var q=document.querySelector(h.imageBox),k={state:{},ratio:1,options:h,imageBox:q,thumbBox:q.querySelector(h.thumbBox),spinner:q.querySelector(h.spinner),image:new Image,getDataURL:function(){var y=this.thumbBox.clientWidth,D=this.thumbBox.clientHeight,t=document.createElement("canvas"),A=q.style.backgroundPosition.split(" "),E=q.style.backgroundSize.split(" "),F=parseInt(A[0])-q.clientWidth/2+y/2,G=parseInt(A[1])-q.clientHeight/2+D/2,w=parseInt(E[0]),H=parseInt(E[1]),x=parseInt(this.image.height),B=parseInt(this.image.width);t.width=y,t.height=D;var z=t.getContext("2d");z.drawImage(this.image,0,0,B,x,F,G,w,H);var C=t.toDataURL("image/png");return C},getBlob:function(){for(var d=this.getDataURL(),s=d.replace("data:image/png;base64,",""),r=atob(s),c=[],o=0;o<r.length;o++){c.push(r.charCodeAt(o))}return new Blob([new Uint8Array(c)],{type:"image/png"})},zoomIn:function(){this.ratio*=1.1,m()},zoomOut:function(){this.ratio*=0.9,m()}},b=function(a,d,c){a.attachEvent?a.attachEvent("on"+d,c):a.addEventListener&&a.addEventListener(d,c)},j=function(a,d,c){a.detachEvent?a.detachEvent("on"+d,c):a.removeEventListener&&a.removeEventListener(d,render)},l=function(a){window.event?a.cancelBubble=!0:a.stopImmediatePropagation()},m=function(){var d=parseInt(k.image.width)*k.ratio,c=parseInt(k.image.height)*k.ratio,n=(q.clientWidth-d)/2,r=(q.clientHeight-c)/2;q.setAttribute("style","background-image: url("+k.image.src+"); background-size: "+d+"px "+c+"px; background-position: "+n+"px "+r+"px; background-repeat: no-repeat")},p=function(a){l(a),k.state.dragable=!0,k.state.mouseX=a.clientX,k.state.mouseY=a.clientY},f=function(o){if(l(o),k.state.dragable){var d=o.clientX-k.state.mouseX,t=o.clientY-k.state.mouseY,u=q.style.backgroundPosition.split(" "),w=d+parseInt(u[0]),n=t+parseInt(u[1]);q.style.backgroundPosition=w+"px "+n+"px",k.state.mouseX=o.clientX,k.state.mouseY=o.clientY}},v=function(a){l(a),k.state.dragable=!1},g=function(d){var i=window.event||d,c=i.detail?-120*i.detail:i.wheelDelta;k.ratio*=c>-120?1.1:0.9,m()};return k.spinner.style.display="block",k.image.onload=function(){k.spinner.style.display="none",m(),b(q,"mousedown",p),b(q,"mousemove",f),b(document.body,"mouseup",v);var a=/Firefox/i.test(navigator.userAgent)?"DOMMouseScroll":"mousewheel";b(q,a,g)},k.image.src=h.imgSrc,b(q,"DOMNodeRemoved",function(){j(document.body,"DOMNodeRemoved",v)}),k};