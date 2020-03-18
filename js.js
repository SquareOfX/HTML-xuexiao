// JavaScript Document
window.onclick=function(){
	var oDiv=document.getElementById("div");
	var aH3=oDiv.getElementsByTagName("h3");
	var oUl=oDiv.getElementsByTagName("ul")[0];
	var aUl=oUl.getElementsByTagName("ul");
	for(var i=0;i<aH3.length;i++){
		aH3[i].index=i;
		aH3[i].onclick=function(){
			if(this.className=='')
			{aUl[this.index].style.display='block';
			this.className='active'}
			else{aUl[this.index].style.display='none'
			this.className=''
			}
			}
			}
			}
			
function tu(id){
	document.getElementById("y1").src="./img/"+id+".jpg"}
	var i=1
	function qh(){
		i++
		window.status=" "+i
		if(i>5){i=1}
		document.getElementById("y1").src="./img/"+i+".jpg";
		document.getElementById("tp1")
		document.getElementById("tp2")
		document.getElementById("tp3")
		document.getElementById("tp4")
		document.getElementById("tp5")
		document.getElementById("tp"+i)
		setTimeout("qh()",2000)
		}


//校验账号的格式 
   function check_code() {    
     console.log(1);   
      //获取账号    
	    var code =  document.getElementById("code").value;      
		//校验其格式(\w字母或数字或下划线) 
		     var span =   document.getElementById("code_msg");  
				     var reg = /^\w{6,10}$/;  
					     if(reg.test(code)) {       
			  //通过，增加ok样式     
			     span.className = "ok";   
				    } else {      
					//不通过，增加error样式 
					span.className = "error";   
					     }   
						  } 
function check_pwd(){ 
console.log(2);    
var code2 =document.getElementById("pwd").value;     
 var span2 =      document.getElementById("pwd_msg");    
		var reg2 = /^\w{8,10}$/;  
		if(reg2.test(code2)) {
		span2.className = "ok";      } 
		else {        span2.className = "error";      }  
		 } 
			