window.onload=function(){
	document.onclick=function (ev)
{
    var oEvent=ev||event;  //需要获取和事件相关的信息时使用. 兼容各个浏览器
    var aDiv=[];
    var oDiv=null;
    var _oDiv=document.createElement('div');
    var i=0;
    var x=oEvent.clientX;//clientX 事件属性返回当事件被触发时鼠标指针向对于浏览器页面（或当前窗口）的水平坐标。定义的oEvent对象事件函数
    var y=oEvent.clientY;
    _oDiv.style.position='absolute';
    _oDiv.style.background='blue';
    _oDiv.style.width='4px';
    _oDiv.style.height='30px';
    _oDiv.style.left=oEvent.clientX+'px';
    _oDiv.style.top=document.documentElement.clientHeight+'px';
    document.body.appendChild(_oDiv);
    var t=setInterval(function (){
        if(_oDiv.offsetTop<=y)
        {
            clearInterval(t);
            show();
            document.body.removeChild(_oDiv);
        }
        _oDiv.style.top=_oDiv.offsetTop-30+'px';
    }, 30);
    function show()
    {
        var oDiv=null;
        for(i=0;i<150;i++)
        {
            oDiv=document.createElement('div');
            oDiv.style.width='10px';
            oDiv.style.height='10px';
            oDiv.style.borderRadius='50%';
            oDiv.style.background='#'+Math.ceil(Math.random()*0xEFFFFF+0x0FFFFF).toString(16);//ceil大于等于，随机random，16进制
            oDiv.style.position='absolute';
            oDiv.style.left=x+'px';
            oDiv.style.top=y+'px';
            var a=Math.random()*360;
            //oDiv.speedX=Math.random()*40-20;
            //oDiv.speedY=Math.random()*40-20;
            oDiv.speedX=Math.sin(a*180/Math.PI)*50*Math.random();
            oDiv.speedY=Math.cos(a*180/Math.PI)*50*Math.random();
            document.body.appendChild(oDiv);
            aDiv.push(oDiv);
        }
    }
    setInterval(doMove, 30);//实现运动效果的domove()函数
    function doMove()
    {
        for(i=0;i<aDiv.length;i++)
        {
            aDiv[i].style.left=aDiv[i].offsetLeft+aDiv[i].speedX+'px';  
            aDiv[i].style.top=aDiv[i].offsetTop+aDiv[i].speedY+'px';
            aDiv[i].speedY+=1;
            if(aDiv[i].offsetLeft<0 || aDiv[i].offsetLeft>document.documentElement.clientWidth || aDiv[i].offsetTop<0 || aDiv[i].offsetTop>document.documentElement.clientHeight)
            {
                document.body.removeChild(aDiv[i]);
                aDiv.splice(i, 1);//从数组中添加/删除项目，然后返回被删除的项目.删除从 index 处开始的1个元素
            }
        }
    }
};
}