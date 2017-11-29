                          


                        // 1、兼容的通过类名获取元素

                          function getClass(classname,obj){         //构建函数，创建两个形参。
                                  
                                var obj = obj || document;          //看obj是否接到实参传入的值。

          					    	if(obj.getElementsByClassName){             //如果浏览器有这个方法，则执行。
          					    		return obj.getElementsByClassName(classname);   //返回通过类名获得的元素集合。
          					    	}
          					    	else{                                             // 否则 执行下一段代码。
                 						 var all = obj.getElementsByTagName('*');       //  通过标签名获取页面的所有元素。
                                // console.log(all);
                 						 var newarr = [];            //创建一个新数组，接收符合条件的元素。
                 						 for (var i = 0; i < all.length; i++) {        //创建一个循环，遍历元素集合。
                 						   if (check(all[i].className,classname)) {     //调用check()函数，同时传入参数
                                                  newarr.push(all[i]);      //把符合条件的元素，添加进新创建的数组。
                 						   }
                 						 }
          					    	}
                       				return newarr;                               //从函数里返回符合要求的数组
          					    }
          					    function check(class1,class2){                     //创建check()函数，检查元素是否有多个类名。

		          						var a =class1.split(" ");                        //把参数传进来的字符串用空格分隔成数组a。
		          						for (var j = 0; j< a.length; j++) {              // 创建循环，遍历数组a。
		          							if (a[j] == class2) {                          //  如果，a[J]等于 传入的参数。
                                                  return true;             //  返回true
		          							}
		          						}
		          					return false;	                                     //否则返回false 
          					    }




                // 2、兼容的获取元素的内容。
                    // 传入1个参数时，设置元素的
                    // 传入2个参数时，设置元素的内容。

                  function getText(obj,val){
                    if (val ==undefined) {
                      if (obj.innerText) {
                      return obj.innerText;
                    }
                    else{
                        return obj.textContent;
                    }
                  }
                   else{
                          if (obj.innerText) {
                            obj.innerText = val;
                          }
                          else{
                             obj.textContent = val;
                          }
                   }
                    
                  }



              //3、兼容的获取元素的样式
              // obj:代表谁的样式 pro：代表获取什么样式
              function getStyle(obj,pro){
                if (obj.currentStyle) {
                      return obj.currentStyle[pro]; //对象调用属性
                }else{
                  return getComputedStyle(obj,null)[pro];
                }

              }



              // 4、
              // function $(str,obj){
              //   // console.log(str)
              //   if (str.indexOf(".")== 0){
              //         str = str.split(".");
              //         str.shift();
              //         // console.log(str);
              //     return document.getElementsByClassName(str);

              //   }else if (str.indexOf("#")== 0) {
              //            str = str.split("#");
              //            console.log(str);
              //         str.shift();
              //     return document.getElementById(str);
              //   }else{
              //     return document.getElementsByTagName(str);
              //   }
              // }
   

              //函数的功能是，当传入 .a时通过类名寻找，当传入#a，通过获取Id寻找。
//$('.a',obj) 
            function $(seletor,obj){                        //创建$函数，并设置形参。
              if (typeof seletor == "string") {
                //对形参seletor接收到的值进行判断，如果该值得类型是字符串，则执行里面的代码
                var obj = obj || document;
                 seletor = seletor.replace(/^\s*|\s*$/g,"")
                if (seletor.charAt(0) == ".") {
                  
                      return getClass(seletor.slice(1),obj);
                }else if (seletor.charAt(0) == "#") {
                      return document.getElementById(seletor.slice(1)) 
                }else if (/^[a-z][a-z0-6]{0,8}$/.test(seletor)){
                  return obj.getElementsByTagName(seletor,obj);
                }else if (/^<[a-z][a-z0-6]{0,8}>$/.test(seletor)) {
                  return document.createElement(seletor.slice(1,-1));
                }
              }
              else if (typeof seletor == "function") { 
                    window.onload = function(){
                      seletor();
                    }
              }
            }


          // 获取子元素节点和不为空的文本
           function getNodeChildren(obj,pre){  //创建函数
              pre = pre || "no";               //初始化，设置默认为获取子元素节点。
              var arr = [];                   //创建一个空的新数组。
              var nodes = obj.childNodes;      //获取对象下的所有子节点
              for (var i = 0; i < nodes.length; i++) {   //对获取到的所有子节点进行遍历
                  if (pre == "no") {            //  如果不需要获取文本节点则执行。
                      if (nodes[i].nodeType ==1) {    //判断i个节点的类型，如果为1，则执行。
                        arr.push(nodes[i]);           //把第i个元素节点，添加到新建的数组内。
                      }
                  }else if (pre = "yes") {      //如果要获取文本节点(不包含空格)，则执行。
                        if (nodes[i].nodeType ==1 || nodes[i].nodeType ==3&&nodes[i].nodeValue.replace(/^\s*|\s*$/g,"")){
                              arr.push(nodes[i]); //判断：
                        }
                    }
              }
              return arr;
           }

            //获取第一个子节点(不包括空格的文本节点)
           function getFirstNode(obj,type){
              type = type||"no";
              if (type == "no") {
                return getNodeChildren(obj,"no")[0];
              }else if (type == "yes") {
                 return getNodeChildren(obj,"yes")[0];
              }
              

           }
            //获取最后一个子节点
           function getLastNode(obj,type){
              type = type || "no";
              if (type == "no") {
                return getNodeChildren(obj,"no")[getNodeChildren(obj,"no").length-1];
              }else if (type == "yes") {
                return getNodeChildren(obj,"yes")[getNodeChildren(obj,"yes").length-1];
              }

           }

           //获取第num个节点
           function getNumNode(obj,num,type){
              type = type || "no";
              if (type == "no") {
                  return getNodeChildren(obj,"no")[num-1];
              }else if (type == "yes") {
                  return getNodeChildren(obj,"yes")[num-1];
              }

           }

           //获取下一个节点，(只考虑文本或元素)
           function getNext(obj,type){
              type = type || "no";
              next =obj.nextSibling; 
               if (next == null) {
                    return false;
                  }
               if (type == "no") {
                  while(next.nodeType ==3||next.nodeType==8 ){
                     if (next == null) {
                          return false;
                      }
                      next = next.nextSibling;
                    }
                  // return next;
              }
               if (type == "yes") {
                    while(next.nodeType ==3&&!next.nodeValue.replace(/^\s*|\s*$/g,"")||next.nodeType==8 ){
                        if (next == null) {
                          return false;
                        }
                        next = next.nextSibling
                      }
                }  
                return next;
            }

            //获取上一个节点
            function getPrevious(obj,type){
              type = type || "no";
              previous =obj.previousSibling; 
               if (previous == null) {
                    return false;
                  }
               if (type == "no") {
                  while(previous.nodeType ==3||previous.nodeType==8 ){
                     if (previous == null) {
                          return false;
                      }
                      previous = previous.previousSibling;
                    }
                  // return next;
              }
               if (type == "yes") {
                    while(previous.nodeType ==3&&!previous.nodeValue.replace(/^\s*|\s*$/g,"")||previous.nodeType==8 ){
                        if (previous == null) {
                          return false;
                        }
                        previous = previous.previousSibling
                      }
                }  
                return previous;
            }


            //封装insertBefore:插入某个对象之前。
            function insertBefore(newObj,beforeObj){
                var parent = beforeObj.parentNode
                parent.insertBefore(newObj,beforeObj);
            }

            //封装insertAfter：插入某个对象之后
            function insertAfter(newObj,beforeObj){
               var parent = beforeObj.parentNode;
               var next = getNext(beforeObj,"yes")
               if (next) {
                  parent.insertBefore(newObj,next);
               }else{
                 parent.appendChild(newObj);
               }
            }

  //事件添加
   function addEvent(obj,event,fun){
    console.log(obj);
      if (obj.addEventListener) {
         //绑定在obj身上的是funEvent
        obj.addEventListener(event,funEvent,false)
      }else{
         obj.attachEvent("on"+event,funEvent) //绑定在obj身上的是funEvent
      }
      return funEvent;
      function funEvent(){
        var e = e || window.event;//兼容事件对象
        fun.call(obj,e);//改变this指针，并
      }
    }

  //事件删除
  function removeEvent(obj,event,fun){
    if (obj.addEventListener) {
       //要删除的是真正绑定在obj上的funEvent;
      obj.removeEventListener(event,fun,false)
    }else{
      obj.detachEvent('on'+event,fun);
    }
  }  


 //滚轮事件
  function mousewheel(obj,upfun,downfun){

      if (obj.attachEvent) {
          obj.attachEvent("onmousewheel",fun);
      }else{
          obj.addEventListener("mousewheel",fun,false);
          obj.addEventListener("DOMMouseScroll",fun,false);
      }
      function fun(e){
        var ev = e||window.event;
         if (ev.returnValue) {
            ev.returnValue = false;
         }else{
          ev.preventDefault();
         }
        var num = ev.wheelDelta||ev.detail;
        if (num ==-120||num==3) {
          downfun.call(obj);
        }else if (num ==120||num==-3) {
          upfun.call(obj);
        }
      }
  }


//15.hover
//判断某个元素是否包含有另外一个元素
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

// cookie的封装的函数
//设置cookie
function setCookie(attr,value,time){
    if(time){
        var now=new Date();
        now.setTime(now.getTime()+time*1000);
        document.cookie=attr+"="+value+"; expires="+now.toGMTString();

    }else{
        document.cookie=attr+"="+value;
    }
}
// setCookie("aa","bb",30)
//获取其中值
function getCookie(val){
    var str=document.cookie;
    var arr=str.split("; ");
    for(var i=0;i<arr.length;i++){

        var arrvalue=arr[i].split("=");

        if(val==arrvalue[0]){
            return arrvalue[1];
        }
    }
    return false;
}
//删除cooie
function delCookie(attr){
    var now=new Date();
    now.setTime(now.getTime()-1);
    document.cookie=attr+"=fyfhgh;expires="+now.toGMTString();
}
   





