window.onload = function(){
	var text = document.getElementById('search');
	text.onfocus = function(){
		if (text.value =="包月流量包" ) {
			text.value = "";
		}
	}
	text.onblur = function(){
		if (text.value) {

		}else{
			text.value = "包月流量包";
		}
	}
//logo旁城市选择
   document.body.onclick=function(e){
      var divdishi = $("#divdishi");
      var ev = e||window.event;
      var currentObj = ev.target|| ev.srcElement;
      if (currentObj.className=="topcity") {
         divdishi.style.display = "block";
      }else if (currentObj.className=="return_sf") {
           divdishi.style.display = "none";
            $("#allCity").style.display="block";
         }else{
            divdishi.style.display = "none";
            $("#allCity").style.display="none";
         }
   }
      
  


 // 导航栏
   var nav_box = getClass("nav_box")[0];
   var nav_box2 = getClass('nav_box2',nav_box);
   var dropdpwn_nav = getClass('dropdpwn_nav',nav_box);
   for (var i = 0; i < nav_box2.length; i++) {
   	    nav_box2[i].num = i;
   	    nav_box2[i].onmouseover = function(){
   	    	for (var i = 0; i < nav_box2.length; i++) {
   	    	  	dropdpwn_nav[i].style.display ="none";	
   	      }
   	      dropdpwn_nav[this.num].style.display ="block";
   	   }
   	   nav_box2[i].onmouseout = function(){
   	   	dropdpwn_nav[this.num].style.display ="none";
   	   }
   	    
   }


   // 轮播图
   var imgBox = $(".banner_imgbox")[0];
   var imgList = $("li",imgBox);
   var banner = $(".banner")[0];
   var left = $(".nav_1")[0];
   var right = $(".nav_2")[0];
   var btnList = $("li",$(".nav_3")[0])
   var width = parseInt(getStyle(imgList[0],"width"));
   var now = 0;
   var next = 0; 
   var flag = true;
   var t = setInterval(move,2000);
   function move(type){
      type = type || "r";
      if (type == "r") {

            next = now+1;
         if (next>imgList.length-1) {
            next = 0;
         }
         btnList[now].className = "";
         btnList[next].className ="nav_3_list";
         imgList[next].style.left = width+"px";
         animate(imgList[now],{left:-width},500,function(){
            flag = true;
         });
         animate(imgList[next],{left:0},500); 
         now = next;
      }else if (type == "l") {
            next = now-1;
            if (next<0) {
            next = imgList.length-1;
            }
            btnList[now].className = "";
            btnList[next].className ="nav_3_list";
            imgList[next].style.left = -width+"px";
            animate(imgList[now],{left:width},500,function(){
               flag = true;
            });
            animate(imgList[next],{left:0},500); 
            now = next;
         }

       
   }
   banner.onmouseover =function(){
      clearInterval(t);
   }
   banner.onmouseout =function(){
      t = setInterval(move,2000);
   }

   left.onclick = function (){
      if (flag) {
         flag = false;
         move("l")
      }
         
   }
   right.onclick = function (){
      if (flag) {
         flag = false;
         move("r")
      }
         
   }
   for (var i = 0; i < btnList.length; i++) {
      btnList[i].index = i;
      btnList[i].onclick =function(){
         if (this.index<now) {
            
            imgList[this.index].style.left = -width+"px";
            animate(imgList[now],{left:width},500);
            animate(imgList[this.index],{left:0},500); 
           
         }
         if (this.index>now) {
            imgList[this.index].style.left = width+"px";
            animate(imgList[now],{left:-width},500);
            animate(imgList[this.index],{left:0},500); 
            
         }
         btnList[now].className = "";
         btnList[this.index].className ="nav_3_list";
         now = this.index;
      }

   }
   
   // 小轮播图。

   var tag = $(".tag")[0];
   var dt_box =$(".dt_box")[0];
   var imgBoxs = $(".tag_box",tag);
   var tag_btn_left = $(".tag_btn")[0];
   var tag_btn_right = $(".tag_btn1")[0];
   var wid = parseInt(getStyle(imgBoxs[0],"width"));
    wid +=12;
   var num = 0;
   var $_flag=true;
   var m = setInterval(move1,2000);
   function move1(){
         num++;
         if (num>4) {
            tag.style.left=0;
            num=1;
         }
         if(num<0){
            num=3;
            tag.style.left="-1200px";
         }
         animate(tag,{left:-wid*num},500,function(){
            $_flag = true;
         })
         
   }
   dt_box.onmouseover = function(){
      clearInterval(m);
   }
   dt_box.onmouseout = function(){
      m = setInterval(move1,2000);
   }
   tag_btn_right.onclick = function(){
      if ($_flag) {
         $_flag = false;
         move1();
      }
      
   }
   tag_btn_left.onclick = function(){
      if ($_flag) {
         $_flag = false;
         num-=2;
         move1();
      }   
   }

   // 公告轮播
   var container = $(".container")[0];
   var newLists=$("li",$(".gg_banner_box")[0]);
   var gg_btnLeft=$(".gg_btnLeft")[0];
   var gg_btnRight =$(".gg_btnRight")[0];
   var ggt = setInterval(movegg,2000);
   function movegg(){
      var firstNewList = getFirstNode($(".gg_banner_box")[0]);
      $(".gg_banner_box")[0].appendChild(firstNewList);
   }
   container.onmouseover=function(){
      clearInterval(ggt);
   }
   container.onmouseout = function(){
      ggt=setInterval(movegg,2000);
   }
   gg_btnRight.onclick=function(){
      var firstNewList = getFirstNode($(".gg_banner_box")[0]);
      $(".gg_banner_box")[0].appendChild(firstNewList);
   }
   gg_btnLeft.onclick=function(){
      var lastNewList = getLastNode($(".gg_banner_box")[0]);
      var firstNewList = getFirstNode($(".gg_banner_box")[0]);
      $(".gg_banner_box")[0].insertBefore(lastNewList,firstNewList);
   }
}


   
   
   
   
   
   
 




	


   






