var last = null;
window.onload=function(){
var a = document.getElementsByTagName("a");
for(i=0,len=a.length;i<len;i++){
 a[i].onclick=function(){
  if(last){
  last.style.background="rgba(104,171,194,0.5)";
  last.style.color="#fff";
  }
  this.style.background="#fff";
  this.style.color="#4fa2c4";
  last=this;
 }
}
}