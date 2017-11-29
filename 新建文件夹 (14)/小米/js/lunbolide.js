
window.onload=function(){
	//顶层
	let che=document.getElementsByClassName('che')[0];
	let gou=document.getElementsByClassName('gou')[0];
	//nav
	let nav=document.getElementsByClassName('nav')[0];
	let zhong=nav.getElementsByClassName('zhong')[0];
	let li2=zhong.getElementsByClassName('zh');
	let tan=document.getElementsByClassName('tan');
	//banner
	let banner=document.getElementsByClassName('banner')[0];
	let lunbo=banner.getElementsByClassName('lunbo')[0]
	let img1=document.getElementsByClassName('img1')[0];
	let imgtu=img1.getElementsByTagName('li');
	let yuan1=document.getElementsByClassName('lunbo-yuan')[0];
	let yuan=yuan1.getElementsByTagName('li');
	let lunbozuo=lunbo.getElementsByClassName('lunbo-zuo')[0];	
	let lunboyou=lunbo.getElementsByClassName('lunbo-you')[0];	
	let num=0;
	let now=0//记录窗口显示的下标
	let now1=0//记录窗口显示的下标
	let next=0;//下一张
	let next1=0;//下一张
	let flag=true;
	let flag1=true;
	let imgtuw=parseInt(getComputedStyle(img1,null).width);
	let t=setInterval(dong, 2000);
	let ce = document.getElementsByClassName('ce')[0];
	let li1=ce.getElementsByTagName('li');
	let item=document.getElementsByClassName('item');
	let pinzuo=document.getElementById('pinzuo');
	let pinyou=document.getElementById('pinyou');
	let neiron=document.getElementsByClassName('neiron')[0];
	let pinzuo1=document.getElementById('pinzuo1');
	let pinyou1=document.getElementById('pinyou1');
	let tui=document.getElementsByClassName('tui')[0];
	let tu=tui.getElementsByClassName('tu')[0];
	//家电到周边
	let jiadian=document.getElementsByClassName('jiadian');
	//内容
	// let neirong=document.querySelector('.neiron-');
	// let neirongtu=neirong.querySelector('.tu');
	// let one=neirongtu.querySelector('.one')
	// console.log(neirongtu)
	//购物车
		che.onmouseover=function(){
			gou.style.display='block';
		}
		che.onmouseout=function(){
			gou.style.display='none';
		}
	//nav的功能展示
		for(let i=0;i<li2.length;i++){
			li2[i].onmouseover=function(){
				tan[i].style.display='block';
				// tan[i].style.height=230+'px';
			}
			li2[i].onmouseout=function(){
				tan[i].style.display='none';
				// tan[i].style.height=0;
			}
		}
	//鼠标移入停止自动轮播
		banner.onmouseover=function(){
			clearInterval(t);
		}
		banner.onmouseout=function(){
			t=setInterval(dong, 2000);
		}
	//轮播图自动播放	
		function dong(){
			next++;
			if(next==imgtu.length){
				next=0;
			}
			for(let j=0;j<imgtu.length;j++){
				// imgtu[j].style.display='none';
				// animate(imgtu[j],{opacity:0});
				yuan[j].style.background='rgba(255,255,255,0)';
			}
			imgtu[next].style.display='block';
			// animate(imgtu[num],{opacity:1});
			yuan[next].style.background='#7c7c81';
			imgtu[next].style.left=`${imgtuw}px`;
			animate(imgtu[now],{left:-imgtuw});
			animate(imgtu[next],{left:0},function(){
				flag=true;
			});
			now=next;
		}
	//轮播图点击圆点切换 
		for(let j=0;j<imgtu.length;j++){
			yuan[j].onclick=function(){
				for(let j=0;j<yuan.length;j++){
					yuan[j].style.background='rgba(255,255,255,0)';
				}
					imgtu[j].style.display='block';
					yuan[j].style.background='#7c7c81';
				if(now==j){
					return;
				}
				imgtu[j].style.left=`${imgtuw}px`;
				animate(imgtu[now],{left:-imgtuw});
				animate(imgtu[j],{left:0});
				now=next=j;		
			}			
		}
	//点击左右切换
		function botu(){
			next--;
			if(next<0){
			next=imgtu.length-1;
			}
			for(let j=0;j<imgtu.length;j++){
				yuan[j].style.background='rgba(255,255,255,0)';
			}
			imgtu[next].style.display='block';
			yuan[next].style.background='#7c7c81';
			imgtu[next].style.left=`${-imgtuw}px`;
			animate(imgtu[now],{left:imgtuw});
			animate(imgtu[next],{left:0},function(){
				flag=true;
			});
			now=next;
		}
		lunbozuo.onclick=function(){
			if(!flag){
				return;
			}
			botu();
			flag=false;
		}
		lunboyou.onclick=function(){
			if(!flag){
				return;
			}
			dong();
			flag=false;
		}	
	//侧导航展开
		for(let i=0;i<li1.length;i++){
			li1[i].onmouseover=function(){
				item[i].style.display='block';
			}
			li1[i].onmouseout=function(){
				item[i].style.display='none';
			}
		}
	//单品滑动
		let li3=neiron.getElementsByTagName('li')[0];
		let w=(li3.offsetWidth+parseInt(getComputedStyle(li3,null).marginRight))*5;
		let i=0;
		pinyou.onclick=function(){
			if(i==1){
				return;
			}
			i++;
			neiron.style.left= -(w*i)+'px';
			if(i==1){
				pinzuo.style.color='#c2b4b0';
				pinyou.style.color='#e0e0e0';
			}
		}
		pinzuo.onclick=function(){
			if(i==0){
				return;
			}
			i--;
			neiron.style.left=-(w*i)+'px';
			if(i==0){
				pinzuo.style.color='#e0e0e0';
				pinyou.style.color='#c2b4b0';
			}

		}
	//推荐滑动
		let li4=tu.getElementsByTagName('li')[0];
		let v=(li4.offsetWidth+parseInt(getComputedStyle(li4,null).marginRight))*5;
		let j=0;
		pinyou1.onclick=function(){
			if(j==1){
				return;
			}
			j++;
			tu.style.left= -(v*j)+'px';
			if(j==1){
				pinzuo1.style.color='#c2b4b0';
				pinyou1.style.color='#e0e0e0';
			}
		}
		pinzuo1.onclick=function(){
			if(j==0){
				return;
			}
			j--;
			tu.style.left=-(v*j)+'px';
			if(j==0){
				pinzuo1.style.color='#e0e0e0';
				pinyou1.style.color='#c2b4b0';
			}

		}
	//家电到周边
		function qiehuan(element){
			let liebiao=element.getElementsByClassName('liebiao11')[0];
			let liebiaotu=liebiao.getElementsByClassName('tu');
			let jiadian1=element.getElementsByClassName('jiadian-biao')[0];
			let you=jiadian1.getElementsByClassName('you')[0];
			let youli=you.getElementsByTagName('li');
			for(let j=0;j<youli.length;j++){
				youli[j].onmouseover=function(){
					for(let z=0;z<youli.length;z++){
						liebiaotu[z].style.display='none';
					}
					liebiaotu[j].style.display='block';
				}
			}
		}
		qiehuan(jiadian[0]);
		qiehuan(jiadian[1]);
		qiehuan(jiadian[2]);
		qiehuan(jiadian[3]);
		qiehuan(jiadian[4]);
	//内容
		// for(let i=0;i<neirongtu.length;i++){
		// 	neirontu[i].function(){

		// 	}
		// }
		let neirong=document.querySelector('.neiron-');
		let neirongtu=neirong.querySelector('.tu');
		let first=neirongtu.getElementsByClassName('first');
		
		function neironaa(element){
			let hada=element.getElementsByClassName('hada')[0];
			let ha=hada.getElementsByClassName('ha');
			let haw=parseInt(getComputedStyle(ha[0],null).width);
			let di=element.getElementsByClassName('di')[0];
			let one=di.getElementsByClassName('one');
			let you=element.getElementsByClassName('you')[0];
			let zuo=element.getElementsByClassName('zuo')[0];
			let a=0;
			console.log(di)
			for(let j=0;j<ha.length;j++){
				one[j].onclick=function(){
					for(let i=0;i<one.length;i++){
						one[i].style.background='#ccc';
						one[i].style.borderColor='white';
					}
						one[j].style.background='white';
						one[j].style.borderColor='red';
					hada.style.left=`${-haw*j}px`;
					a=j;		
				}			
			}
			you.onclick=function(){
				if(a==2){
					return;
				}
				a++;
				hada.style.left= -(haw*a)+'px';
				for(let i=0;i<one.length;i++){
					one[i].style.background='#ccc';
					one[i].style.borderColor='white';
				}
				one[a].style.background='white';
				one[a].style.borderColor='red';
			}
			zuo.onclick=function(){
				if(a==0){
					return;
				}
				a--;
				hada.style.left= -(haw*a)+'px';
				for(let i=0;i<one.length;i++){
					one[i].style.background='#ccc';
					one[i].style.borderColor='white';
				}
				one[a].style.background='white';
				one[a].style.borderColor='red';
			}
		}
		neironaa(first[0]);	
		neironaa(first[1]);	
		neironaa(first[2]);	
		neironaa(first[3]);	
}