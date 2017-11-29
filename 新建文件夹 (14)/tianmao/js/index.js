 $(function(){
    var imgs=$("a",$(".bigbox")[0])
	var btn=$(".btn")
	var banner=$(".banner-body")[0]
	var arr=["#2aece8","#feae4f","#d5dce6","#93cde5","#6231fe","#1170ce"]
	var banners=$(".banner-box")[0]
      
      var num=0;
      function rightMove(type){
        type=type||"right"
        if(type=="right"){
        	num++
        	if(num>=imgs.length){
        		num=0
        	}
        }else if(type=="left"){
        	num--
        	if(num<=-1){
        		num=imgs.length-1
        	}
        }
        
        for(var i=0;i<imgs.length;i++){
        	imgs[i].style.opacity="0"
        	btn[i].className="btn"
        	banner.style.background=arr[num]        	         
        }
        // imgs[num].style.opacity="1"
        animate(imgs[num],{opacity:1});
        btn[num].className="btn active"
     }
    	var t2=setInterval(rightMove,2000)
        
    	//鼠标移入移出

    	// banner.onmouseover=function(){
    	// 	clearInterval(t2)
    	// }
    	// banner.onmouseout=function(){
    	// 	t2=setInterval(rightMove,2000)
    	// }  
        hover(banner,function(){
            clearInterval(t2)
        },function(){t2=setInterval(rightMove,2000)})
    	//小按钮
    	for(var i=0;i<btn.length;i++){
    		btn[i].aa=i
    		btn[i].onclick=function(){
    			for(var j=0;j<btn.length;j++){
    				btn[j].className="btn"
    				imgs[j].style.opacity="0"
    			}
    			btn[this.aa].className="btn active"
    			imgs[this.aa].style.opacity="1"
    			banner.style.background=arr[this.aa]
    			num=this.aa

    		}
    	}
    var box=getClass("photo");
    var zhezhao=getClass("box-guanzhu");
    for(var i=0;i<box.length;i++){
        box[i].aa=i;
        box[i].onmouseover=function(){
        zhezhao[this.aa].style.display="block";
        }
        box[i].onmouseout=function(){
            zhezhao[this.aa].style.display="none";
        }
    }

   
function chaoliu(){// 潮流前线
    // var fanbing=$(".bgcolor");
    var quanqiutu=$(".bgcircle");
    // for(var fan=0;fan<fanbing.length;fan++){
        // fanbing[fan].bb=fan;
        // fanbing[fan].onmouseover=function(){
            // var fbimg=$("img",fanbing[this.bb])[0];
            // animate(fbimg,{height:150,width:150},150);
        // }
        // fanbing[fan].onmouseout=function(){
            // var fbimg=$("img",fanbing[this.bb])[0];
            // animate(fbimg,{height:140,width:140},150);
        // }
    // }
    for(var quan=0;quan<quanqiutu.length;quan++){
        quanqiutu[quan].bb=quan;
        quanqiutu[quan].onmouseover=function(){
            var qqimg=$("img",quanqiutu[this.bb])[0];
            animate(qqimg,{width:140},150);
        }
        quanqiutu[quan].onmouseout=function(){
            var qqimg=$("img",quanqiutu[this.bb])[0];
            animate(qqimg,{width:120},150);
        }
    }
}
chaoliu();

function dingwei(){
    var box=$("div",$(".dingweibox")[0]);
    var dingqian=$(".dingqian");
    var dinghou=$(".dinghou");
    for(var i=0;i<box.length;i++){
        box[i].aa=i;
        box[i].onmouseover=function(){
            dingqian[this.aa].style.display="block";
            dinghou[this.aa].style.display="block";
            animate(dingqian[this.aa],{left:-107},200)
            animate(dinghou[this.aa],{left:-7},200)
        }
        box[i].onmouseout=function(){
            dingqian[this.aa].style.display="none";
            dinghou[this.aa].style.display="none";
            animate(dingqian[this.aa],{left:-150},200)
            animate(dinghou[this.aa],{left:-50},200)
        }
    }


var box2=$(".dingweibox3")[0];
var dingwei=$(".dingwei")[0];
box2.onmouseover=function(){
    dingwei.style.display="block";
    animate(dingwei,{left:900},200,function(){
        animate(dingwei,{left:1161},200)
    })
}
box2.onmouseout=function(){
    dingwei.style.display="none";
    animate(dingwei,{left:1000},200);
}
}
dingwei();


function qinzi(){
var box=$(".center");
for(var i=0;i<box.length;i++){
    box[i].bb=i;
    box[i].onmouseover=function(){
        var xbox=$("div",box[this.bb]);
        for(var j=0;j<xbox.length;j++){
        xbox[j].aa=j;
        xbox[j].onmouseover=function(){
            var imgs=$("img",xbox[this.aa])[0];
            animate(imgs,{marginRight:20},300,Tween.Linear)
        }
        xbox[j].onmouseout=function(){
            var imgs=$("img",xbox[this.aa])[0];
            animate(imgs,{marginRight:0},300,Tween.Linear)
        }
    }
    
    }
}
}
qinzi();

//楼层和隐藏搜索栏
 // var box2=$(".babytime")[0]
        var floor=$(".center")
        var num2=0;
        var btn2=$(".leftbtn");
        var arr3=["#600030","#460046","#28004D","#272727","#4D0000","#5E005E","#FF95CA"]
         var flag=true;
         var flak=true;
         var flaq=true;
         var box1=$(".gundong")[0]
         var show=$(".show")[0]
         var gao=show.offsetTop;
           var box3=$(".leftbox")[0]

window.onscroll=function(){ 
      var tops=document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop;
      if (flaq) {
      for( var i=0;i<floor.length;i++){
        if(tops>=floor[i].offsetTop){
            num2=i;
          for(var j=0;j<btn2.length;j++){
           btn2[j].style.background="";
          }     
           btn2[i].style.background=arr3[i];        
        }
        }
    }
           if(tops>=gao){
           if(flag){
        animate(box1,{top:0},300);
        animate(box3,{left:16},100)
            flag=false;
            flak=true;
        }
      }
      else {
        if(flak){
        animate(box1,{top:-50},300);
        animate(box3,{left:-36},100)
        flag=true;
        flak=false;
        }
      }
        for(var i=0;i<btn2.length;i++){
            btn2[i].aa=i
            btn2[i].onmouseover=function(){
                for(var j=0;j<btn2.length;j++){
                    if(num2!=j){
                btn2[j].style.background=""
        }
                   
    }
        this.style.background=arr3[this.aa]
    }
            btn2[i].onmouseout=function(){
                    if(num2!=this.aa){
                this.style.background=""    
            
}
}
var ot=document.documentElement.scrollTop?document.documentElement:document.body;
btn2[i].onclick=function(){
    flaq=false;
    // ot.scrollTop=floor[this.aa].offsetTop
    animate(ot,{scrollTop:floor[this.aa].offsetTop},100,function(){
        flaq=true;
    })
}
}

}

      
function sunzi(){
var btn=$("li",$(".banner-left")[0])
var box=$(".xuanxiangkabox")
        for (var i = 0; i < btn.length; i++) {
            btn[i].aa=i
            btn[i].onmouseover=function(){
                box[this.aa].style.display="block"
                btn[this.aa].style.backgroundColor="white"
            }
               btn[i].onmouseout=function(){
                box[this.aa].style.display="none"
                btn[this.aa].style.backgroundColor=""
            }
        }
        for (var i = 0; i < box.length; i++) {
            box[i].bb=i
            box[i].onmouseover=function(){
                box[this.bb].style.display="block"
                btn[this.aa].style.backgroundColor="white"

            }
               box[i].onmouseout=function(){
                box[this.bb].style.display="none"
                btn[this.aa].style.backgroundColor=""

            }
        }
        }
    sunzi();
    var nownum=-1
function nanshannan(){
    var bigbox=$(".babymidword")[0]
    var box=$(".babymidwordimg",bigbox)
    // for (var i = 0; i < box.length; i++) {
    // box[i].style.marginTop="0px"
    //  }
    animate(box[0],{marginTop:-30},1000,function(){
    box[0].style.marginTop="0px"
    var first=getFirst(bigbox);
    bigbox.appendChild(first);
    })
}
// nanshannan()
var t9=setInterval(nanshannan,3000);
function nanshannan1(){
    var bigbox=$(".babymidword")[1]
    var box=$(".babymidwordimg",bigbox)
    // for (var i = 0; i < box.length; i++) {
    // box[i].style.marginTop="0px"
    //  }
    animate(box[0],{marginTop:-30},1000,function(){
    box[0].style.marginTop="0px"
    var first=getFirst(bigbox);
    bigbox.appendChild(first);
    })
}
// nanshannan()
var t8=setInterval(nanshannan1,3000);
function nanshannan2(){
    var bigbox=$(".babymidword")[2]
    var box=$(".babymidwordimg",bigbox)
    // for (var i = 0; i < box.length; i++) {
    // box[i].style.marginTop="0px"
    //  }
    animate(box[0],{marginTop:-30},1000,function(){
    box[0].style.marginTop="0px"
    var first=getFirst(bigbox);
    bigbox.appendChild(first);
    })
}
// nanshannan()
var t7=setInterval(nanshannan2,3000);
function nanshannan3(){
    var bigbox=$(".babymidword")[3]
    var box=$(".babymidwordimg",bigbox)
    // for (var i = 0; i < box.length; i++) {
    // box[i].style.marginTop="0px"
    //  }
    animate(box[0],{marginTop:-30},1000,function(){
    box[0].style.marginTop="0px"
    var first=getFirst(bigbox);
    bigbox.appendChild(first);
    })
}
// nanshannan()
var t6=setInterval(nanshannan3,3000);
function nanshannan4(){
    var bigbox=$(".babymidword")[4]
    var box=$(".babymidwordimg",bigbox)
    // for (var i = 0; i < box.length; i++) {
    // box[i].style.marginTop="0px"
    //  }
    animate(box[0],{marginTop:-30},1000,function(){
    box[0].style.marginTop="0px"
    var first=getFirst(bigbox);
    bigbox.appendChild(first);
    })
}
// nanshannan()
var t5=setInterval(nanshannan4,3000);
function nanshannan5(){
    var bigbox=$(".babymidword")[5]
    var box=$(".babymidwordimg",bigbox)
    // for (var i = 0; i < box.length; i++) {
    // box[i].style.marginTop="0px"
    //  }
    animate(box[0],{marginTop:-30},1000,function(){
    box[0].style.marginTop="0px"
    var first=getFirst(bigbox);
    bigbox.appendChild(first);
    })
}
// nanshannan()
var t4=setInterval(nanshannan5,3000);
function header(){
var btn=$(".navtopli3")[0]
var box=$(".mytmall")[0]
var btn1=$(".mytmalljt")[0]
btn.onmouseover=function(){
        box.style.display="block";
        btn.style.backgroundColor="#fff";
        btn1.style.backgroundColor="#fff";
        btn.style.borderLeft="1px solid #eee";
        btn1.style.borderRight="1px solid #eee";
}
btn.onmouseout=function(){
        box.style.display="none";
        btn.style.backgroundColor="";
        btn1.style.backgroundColor="";
        btn.style.borderLeft="";
        btn1.style.borderRight="";
}
box.onmouseover=function(){
        box.style.display="block";
        btn.style.backgroundColor="#fff";
        btn1.style.backgroundColor="#fff";
        btn.style.borderLeft="1px solid #eee";
        btn1.style.borderRight="1px solid #eee";
}
box.onmouseout=function(){
        box.style.display="none";
        btn.style.backgroundColor="";
        btn1.style.backgroundColor="";
        btn.style.borderLeft="";
        btn1.style.borderRight="";
}
}
header();
function header1(){
var btn=$(".navtopli6")[0]
var box=$(".shoucangjia")[0]
var btn1=$(".shoucangjiajt")[0]
btn.onmouseover=function(){
        box.style.display="block";
        btn.style.backgroundColor="#fff";
        btn1.style.backgroundColor="#fff";
        btn.style.borderLeft="1px solid #eee";
        btn1.style.borderRight="1px solid #eee";
}
btn.onmouseout=function(){
        box.style.display="none";
        btn.style.backgroundColor="";
        btn1.style.backgroundColor="";
        btn.style.borderLeft="";
        btn1.style.borderRight="";
}
box.onmouseover=function(){
        box.style.display="block";
        btn.style.backgroundColor="#fff";
        btn1.style.backgroundColor="#fff";
        btn.style.borderLeft="1px solid #eee";
        btn1.style.borderRight="1px solid #eee";
}
box.onmouseout=function(){
        box.style.display="none";
        btn.style.backgroundColor="";
        btn1.style.backgroundColor="";
        btn.style.borderLeft="";
        btn1.style.borderRight="";
}
}
header1();
function header3(){
var btn=$(".navtopli10")[0]
var box=$(".shangjiazhichi")[0]
var btn1=$(".navtopli11")[0]
btn.onmouseover=function(){
        box.style.display="block";
        btn.style.backgroundColor="#fff";
        btn1.style.backgroundColor="#fff";
        btn.style.borderLeft="1px solid #eee";
        btn1.style.borderRight="1px solid #eee";
}
btn.onmouseout=function(){
        box.style.display="none";
        btn.style.backgroundColor="";
        btn1.style.backgroundColor="";
        btn.style.borderLeft="";
        btn1.style.borderRight="";
}
box.onmouseover=function(){
        box.style.display="block";
        btn.style.backgroundColor="#fff";
        btn1.style.backgroundColor="#fff";
        btn.style.borderLeft="1px solid #eee";
        btn1.style.borderRight="1px solid #eee";
}
box.onmouseout=function(){
        box.style.display="none";
        btn.style.backgroundColor="";
        btn1.style.backgroundColor="";
        btn.style.borderLeft="";
        btn1.style.borderRight="";
}
}
header3();
function header2(){
var btn=$(".shoujibanbox")[0]
var box=$(".shoujibanimgbox")[0]
var box1=$(".shoujiban")[0]
btn.onmouseover=function(){
        box.style.display="block";
        box1.style.display="block";
}
btn.onmouseout=function(){
        box.style.display="none";
        box1.style.display="none";
}
box.onmouseover=function(){
        box.style.display="block";
        box1.style.display="block";
}
box.onmouseout=function(){
        box.style.display="none";
        box1.style.display="none";
}
}
header2();
function header4(){
var btn=$(".navtopli13")[0]
var box=$(".wangzhandaohang")[0]
var btn1=$(".wangzhandaohangjiantou")[0]
btn.onmouseover=function(){
        box.style.display="block";
        btn.style.backgroundColor="#fff";
        btn1.style.backgroundColor="#fff";
        btn.style.borderLeft="1px solid #eee";
        btn1.style.borderRight="1px solid #eee";
}
btn.onmouseout=function(){
        box.style.display="none";
        btn.style.backgroundColor="";
        btn1.style.backgroundColor="";
        btn.style.borderLeft="";
        btn1.style.borderRight="";
}
box.onmouseover=function(){
        box.style.display="block";
        btn.style.backgroundColor="#fff";
        btn1.style.backgroundColor="#fff";
        btn.style.borderLeft="1px solid #eee";
        btn1.style.borderRight="1px solid #eee";
}
box.onmouseout=function(){
        box.style.display="none";
        btn.style.backgroundColor="";
        btn1.style.backgroundColor="";
        btn.style.borderLeft="";
        btn1.style.borderRight="";
}
}
header4();
 // 猫耳朵
function lalala(){
    var box4=$(".jianguan",$(".banner-top")[0])
    var btn3=$(".bianli",$(".banner-top")[0])
        hover(box4[0],function(){
        animate(btn3[0],{opacity:1,top:-44},300)
        },function(){
        animate(btn3[0],{opacity:0,top:-31},300)
        })
        hover(box4[1],function(){
        animate(btn3[1],{opacity:1,top:-44},300)
        },function(){
        animate(btn3[1],{opacity:0,top:-31},300)
        })
        hover(box4[2],function(){
        animate(btn3[2],{opacity:1,top:-32},300)
        },function(){
        animate(btn3[2],{opacity:0,top:-20},300)
        })
        hover(box4[3],function(){
        animate(btn3[3],{opacity:1,top:-64},300)
        },function(){
        animate(btn3[3],{opacity:0,top:-51},300)
        })
        hover(box4[4],function(){
        animate(btn3[4],{opacity:1,top:-64},300)
        },function(){
        animate(btn3[4],{opacity:0,top:-51},300)
        })
                hover(box4[5],function(){
        animate(btn3[5],{opacity:1,top:-64},300)
        },function(){
        animate(btn3[5],{opacity:0,top:-51},300)
        })
                        hover(box4[6],function(){
        animate(btn3[6],{opacity:1,top:-64},300)
        },function(){
        animate(btn3[6],{opacity:0,top:-51},300)
        })
                        hover(box4[7],function(){
        animate(btn3[7],{opacity:1,top:-64},300)
        },function(){
        animate(btn3[7],{opacity:0,top:-51},300)
        })
         hover(box4[8],function(){
        animate(btn3[8],{opacity:1,top:-64},300)
        },function(){
        animate(btn3[8],{opacity:0,top:-51},300)
        })
        hover(box4[9],function(){
        animate(btn3[9],{opacity:1,top:-64},300)
        },function(){
        animate(btn3[9],{opacity:0,top:-51},300)
        })
        hover(box4[10],function(){
        animate(btn3[10],{opacity:1,top:-64},300)
        },function(){
        animate(btn3[10],{opacity:0,top:-51},300)
        })
}
    lalala()

        })


