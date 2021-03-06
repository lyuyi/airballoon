window.onload=function(){
    waterfall('main','pin');
    var dataInt={'data':[{'src':'1.jpg'},{'src':'2.jpg'},{'src':'3.jpg'},{'src':'4.jpg'}]};
    window.onscroll=function(){
        if (checkscrollside()) {
            var oParent = document.getElementById('main');
            for (var i=0;i<dataInt.data.length;i++){
                var oPin=document.createElement('div');
                oPin.className='pin'; 
                oParent.appendChild(oPin);              //添加 子节点
                var oBox=document.createElement('div');
                oBox.className='box';
                oPin.appendChild(oBox);
                var oImg=document.createElement('img');
                oImg.src='./images/'+dataInt.data[i].src;
                oBox.appendChild(oImg);
            }
            waterfall('main','pin');
        };
    }
}

function waterfall(parent,pin){
    var oParent=document.getElementById(parent);
    var aPin=getClassObj(oParent,pin);
    var iPinW=aPin[0].offsetWidth;
    var num=Math.floor(document.documentElement.clientWidth/iPinW);
    oParent.style.cssText='width:'+iPinW*num+'px;margin:0 auto;';
    var pinHArr=[];
    for (var i = 0; i < aPin.length; i++) {
        var pinH=aPin[i].offsetHeight;
        if(i<num){
            pinHArr[i]=pinH;
        }else{
            var minH=Math.min.apply(null,pinHArr);
            var minHIndex=getminHIndex(pinHArr,minH);
            aPin[i].style.position='absolute';
            aPin[i].style.top=minH+'px';
            aPin[i].style.left=aPin[minHIndex].offsetLeft+'px';
            pinHArr[minHIndex]+=aPin[i].offsetHeight
        }
    }
}

function getClassObj(parent,className){
    var obj=parent.getElementsByTagName('*');
    var pinS=[];
    for (var i=0;i<obj.length;i++) {
      if (obj[i].className==className) {
            pinS.push(obj[i]);
         }  
    };
    return pinS;
}

function getminHIndex(arr,minH){
    for(var i in arr){
        if (arr[i]==minH) {
            return i;
        }
    }
}

function checkscrollside(){
    var oParent=document.getElementById('main');
    var aPin=getClassObj(oParent,'pin');
    var lastPinH=aPin[aPin.length-1].offsetTop+Math.floor(aPin[aPin.length-1].offsetHeight/2);//创建【触发添加块框函数waterfall()】的高度：最后一个块框的距离网页顶部（client可视区域 +scrollTop->已滚走的）+ 自身高的一半(实现未滚到底(一半)就开始加载)
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;//注意解决兼容性,获取浏览器顶部已滚走的距离
    var documentH=document.documentElement.clientHeight;//页面高度，即浏览可视区域器
    return (lastPinH<scrollTop+documentH)?true:false;//到达指定高度后 返回true，触发waterfall()函数
}