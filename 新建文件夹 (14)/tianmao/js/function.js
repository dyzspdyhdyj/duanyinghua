// 2016-8-4
// 1解决获取类名的兼容问题

 function getClass(classname,father){
	father=father||document;
	// 1判断浏览器
		if (father.getElementsByClassName)                 //判断
		{
           return father.getElementsByClassName(classname) //现代浏览器按原方法
		}   
		else
		{
		   var all=father.getElementsByTagName("*")  //将所有的标签写入all
		   var newall=[];                            //新建一个空的数组
			for (var i=0; i<all.length;i++) {        //遍历数组中的所有元素
			  if (checkpre(all[i].className,classname)) //比较
			     {
                    newall.push(all[i])              //将数组中输出的相等元素输入空数组
			     }; 
			};
			return newall;  
		}
    
}

function checkpre(val,classname){
  var arr=classname.split(" ");
    for (var i = 0; i < arr.length; i++) {
      if (arr[i]==val) {
          return true;
      }
    }
      return false;
}


/*********************************************************************/
//2016-8-5-11:14
//2.获取样式的兼容函数
//obj：对象
//appr；属性
function getStyle(obj,appr){
	if (obj.currentStyle) {
	return	 obj.currentStyle[appr]
	}
	else{
	 return	getComputedStyle(obj,null)[appr]
	}
}
/*********************************************************************/
//3.获取元素的兼容函数
//2016-8-8-11:18
//"#" id "."" 类名 "a" 标签
//selecter: 当他为字符串，获取元素。
        //  当他为函数，实现页面加载完成。
function $(selecter,father){	
	if(typeof selecter=="string"){
var father=father||document;
selecter=selecter.replace(/^\s*|\s*$/g,"")
if(selecter.charAt(0)=="."){
  return getClass(selecter.slice(1),father);
}else if(selecter.charAt(0)=="#"){
	return document.getElementById(selecter.slice(1));
}else if(/^[a-z]+\d*$/g.test(selecter)){
	return father.getElementsByTagName(selecter);
}
}
    else if(typeof  selecter=="function"){
    	window.onload=function(){
    		selecter()
    	}
    }
}
//正则：一个定规则的表达式对象
/*********************************************************************/
//2016-8-10-16:00
//4.获取节点中的子节点
//father:父节点
//type "a"子节点为元素节点
//     "b"子节点为元素节点或非空子节点
function getChilds(obj,type){
    type=type||"a"
    var arr=[];
    var newobj=obj.childNodes;
    for (var i = 0; i < newobj.length; i++) {
      if (type=="a") {
        if (newobj[i].nodeType==1) {
           arr.push(newobj[i]);
        }
      }else if(type=="b"){
        if (newobj[i].nodeType==1||(newobj[i].nodeType==3&&newobj[i].nodeValue.replace(/^\s*|\s*$/g,"")!="")) {
            arr.push(newobj[i]);
        }
      }
    } 
  return arr;
}
//5.获取元素的第一个子节点
function getFirst(father,type){
  type=type||"a"
  if (type=="a") {
    return getChilds(father,"a")[0];
  }
  else if(type=="b"){
    return getChilds(father,"b")[0];
  }
}
//6.获取元素的最后一个子节点
function getLast(father,type){
  type=type||"a"
  if (type=="a") {
    var i=getChilds(father).length-1;
    return getChilds(father,"a")[i]
  }
  else if(type=="b"){
    var i=getChilds(father).length-1;
    return getChilds(father,"b")[i]
  }
  
}
//7.获取指定的子节点
function getNum(father,num,type){
  type=type||"a"  
  if (type=="a") {
    return getChilds(father,"a")[num-1]
  }
  else if(type=="b"){
    return getChilds(father,"b")[num-1]
  }
}
//8.获取下一个元素节点
  function getNext(obj,type){
    type=type||"a"
    var next=obj.nextSibling
    if (next==null) {
      return false;
    }
    if (type=="a") {
      while(next.nodeType=="3"||next.nodeType=="8"){
        next=next.nextSibling;
        if (next==null) {
        return false;
        }
      }
    }
    if (type=="b") {
      while(next.nodeType=="3"&&!next.nodeValue.replace(/^\s*|\s*$/g)||next.nodeType=="8")
        next=next.nextSibling;
      if (next==null) {
        return false;
      };
    }
    return next
  }
//9.获取上一个元素节点
function getAfter(obj,type){
    type=type||"a"
    var next=obj.previousSibling
    if (next==null) {
      return false;
    }
    if (type=="a") {
      while(next.nodeType=="3"||next.nodeType=="8"){
        next=next.previousSibling;
        if (next==null) {
        return false;
        }
      }
    }
    if (type=="b") {
      while(next.nodeType=="3"&&!next.nodeValue.replace(/^\s*|\s*$/g)||next.nodeType=="8")
        next=next.previousSibling;
      if (next==null) {
        return false;
      }
    }
    return next
  }
//10.把一个元素插入到摸一个元素的前后
//2016-08-11-10:51
function insertBefore(obj,nextobj){
    var father=nextobj.parentNode
    father.insertBefore(obj,nextobj)
}
function insertAfter(obj,nextobj){
    var thobj=getNext(nextobj)
    father=nextobj.parentNode
    if(thobj){
       return	   father.insertBefore(obj,thobj)
    }else{
    	return     father.appendChild(obj)
    }
}
//11.绑定事件的兼容函数
//2016-08-11-18:09
function addEvent(objj,event,fun){
	if(obj.attachEvent){
		obj.attachEvent("on"+event,function(){
			fun.call(obj);
		})
	}else{
		obj.addEventListener(event,fun,false)
	}
}
//12.鼠标滚轮的兼容函数
//2016-08-15-17.22
function mousewheel(obj,upfun,downfun){
	if(obj.attachEvent){
		obj.attachEvent("onmousewheel",scrollFn);//IE opera 
	}else if(obj.addEventListener){
		obj.addEventListener("mousewheel",scrollFn,false); //chrome safari -webkit
	    obj.addEventListener("DOMMouseScroll",scrollFn,false);//FF -moz
	}

function scrollFn(e){
	var eve =e||window.event;
	if(eve.preventDefault){
      eve.preventDefault();
    }
    else{
      eve.returnValue=false;
    } 
    var fangxiang=eve.wheelDelta||eve.detail;
    
    if (fangxiang==-3||fangxiang==120)
    {
    	if(upfun){
    		upfun();
    	}
    }
    if(fangxiang==3||fangxiang==-120){
    	if(downfun){
            downfun();
    	}
    }
}
}
//13.hover
//判断某个元素是否包含有另外一个元素
//2016-08-16-15:30
 function contains (parent,child) {
  if(parent.contains){
     return parent.contains(child) && parent!=child;
  }else{
    return (parent.compareDocumentPosition(child)===20);
  }
 }

//判断鼠标是否真正的从外部移入，或者是真正的移出到外部；
  function checkHover (e,target) {
   if(getEvent(e).type=="mouseover"){
      return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
   }else{
    return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
    }
  }
//鼠标移入移出事件
/*
  obj   要操作的对象
  overfun   鼠标移入需要处理的函数
  outfun     鼠标移除需要处理的函数
*/
function hover (obj,overfun,outfun) {
    if(overfun){
      obj.onmouseover=function  (e) {
        if(checkHover(e,obj)){
           overfun.call(obj,[e]);
        }
      }
    }
    if(outfun){
      obj.onmouseout=function  (e) {
        if(checkHover(e,obj)){
           outfun.call(obj,[e]);
        }
      }
    }
}
 function getEvent (e) {
      return e||window.event;
 }
/********************************/