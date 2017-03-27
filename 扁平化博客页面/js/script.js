
function openNew(){
//获取页面的高度和宽度
var sWidth=document.body.scrollWidth;
var sHeight=document.body.scrollHeight;
// alert('sHeight')
//获取页面的可视区域高度和宽度
var wHeight=document.documentElement.clientHeight;

var oMask=document.createElement("div");
	oMask.id="mask";
	oMask.style.height=sHeight+"px";
	oMask.style.width=sWidth+"px";
	document.body.appendChild(oMask);
var oLogin=document.createElement("div");
	oLogin.id="login";
	oLogin.innerHTML="<div class='loginCon'><p>一个人，一句代码，一个像素，认真对待</p><div id='close'>×</div></div>";
	document.body.appendChild(oLogin);

//获取弹出框的宽和高
var dHeight=oLogin.offsetHeight;
var dWidth=oLogin.offsetWidth;
	//设置弹出框的left和top
	oLogin.style.left=sWidth/2-dWidth/2+"px";
	oLogin.style.top=wHeight/2-dHeight/2+"px";
//点击关闭按钮
var oClose=document.getElementById("close");

	//点击弹出框以外的区域也可以关闭弹出框
	oClose.onclick=oMask.onclick=function(){
				document.body.removeChild(oLogin);
				document.body.removeChild(oMask);
				};
				};
				
window.onload=function(){
		var oBtn=document.getElementById("btnLogin");
			//点击弹出按钮
			oBtn.onclick=function(){
				openNew();
				return false;
				}
			
	}