
$("#name input").on("focus",function(){
	$(this).addClass("focus");
	$("#name").addClass("focus1");
});

$("#name input").on("blur",function(){
	if($(this).val() == "")
	$(this).removeClass("focus");
	$("#name").removeClass("focus1");
});
$("#password input").on("focus",function(){
	$(this).addClass("focus");
	$("#password").addClass("focus1");
});

$("#password input").on("blur",function(){
	if($(this).val() == "")
	$(this).removeClass("focus");
	$("#password").removeClass("focus1");
});

var b1;
var d1;
var a;
var change=false;
var fill=false

$(window).resize(function(){
	if($(window).innerWidth()>=1200 && fill==true){
	
		
		$(".slide1").addClass("transmit")
		$(".slide2").addClass('transmit1')
		$("#show").addClass('transmit2')
		
		$("#next").addClass('transmit4')
		$("#next").removeClass('display')
	
		

		
	
	

		
	}
	


  });


document.addEventListener("keyup",function(event){
	if(event.keyCode==13){
		if($(window).innerWidth()<1200){
		
		$("#next").removeClass('display')
		$(".slide3").addClass('display')
		
		
	}
	b1=document.getElementById('aname1').value ;
	d1=document.getElementById('pass1').value ;

	
	var arr=[];

	arr[0]=b1;
	
	arr[1]=d1;
	localStorage.setItem('myValue',arr);
	change=true;
	
	if(b1!=""){
	document.getElementById('aname1').removeAttribute('required');
	
}
if(b1=="" && d1==""){
	alert('you have to fill ,Username and Password')

}
else{
if(b1==""){
	alert('you have to fill username')
}
if(d1==""){	alert('you have to fill Password')

}
}
if(d1!=""){
		document.getElementById('pass1').removeAttribute('required');
	
}


if(b1!="" && d1!=""){
	document.getElementById('aname1').removeAttribute('required');
	document.getElementById('pass1').removeAttribute('required');
	document.getElementById('aname1').value="";
	document.getElementById('pass1').value="" ;

	
	alert("your details has been saved,kindly login")
}


	


	


	}
})

var comp={'a':'1'};

function sign(){
	alert("hi")
	
	if($(window).innerWidth()<1200){
		
		$("#next").removeClass('display')
		$(".slide3").addClass('display')
		side=true;
		
		
	}

	
	
	b1=document.getElementById('aname1').value ;
	d1=document.getElementById('pass1').value ;

console.log(comp)
	
	$.ajax({
		url:"login.php",
		method:"post",
		data:comp,
		success:function(res){
			console.log(res)
			;
		}
		
	})



	
	var arr=[];

	arr[0]=b1;
	
	arr[1]=d1;
	localStorage.setItem('myValue',arr);
	change=true;
	
	if(b1!=""){
	document.getElementById('aname1').removeAttribute('required');
	
}
if(b1=="" && d1==""){
	alert('you have to fill ,Username and Password')

}
else{
if(b1==""){
	alert('you have to fill username')
}
if(d1==""){	alert('you have to fill Password')

}
}
if(d1!=""){
		document.getElementById('pass1').removeAttribute('required');
	
}


if(b1!="" && d1!=""){
	document.getElementById('aname1').removeAttribute('required');
	document.getElementById('pass1').removeAttribute('required');
	document.getElementById('aname1').value="";
	document.getElementById('pass1').value="" ;

	
	alert("your details has been saved,kindly login")
}


	


	

	
	
	
	
	
	
}


function login(event){

	
	
	
	var b=document.getElementById('aname').value ;
	var d=document.getElementById('pass').value ;



	if(change){
		var arr=localStorage.getItem('myValue',arr);
	var arr=arr.split(",");
		

	
	
	

	


	if(b==arr[0] && d==arr[1] && arr[1]!="" && arr[0]!=""){
		var a='9';
		 localStorage.removeItem('myValue');
	localStorage.setItem('myValue',a);
	
	window.location.href='../../Home page/home.js'
	alert('Thanks for connecting with us')



	
		
		



	
	
}

else{
if(b!='' && d!=''){
	alert('your details dont match,kindly login again ')
	document.getElementById("form").action='login.html'

	
}


}
}
else{
	alert('your account not exist,kindly signup')

	document.getElementById("form").action='login.html'
	document.getElementById('aname').removeAttribute('required');
	document.getElementById('pass').removeAttribute('required');

}
}

$(document).ready(function(){
	$("#sign").click(function(){
		fill=true;
		if($(window).innerWidth()<1200){
			$(".slide2").addClass('display')
			$(".slide1").addClass("display")
			$("#next").addClass('display')
			
			
		}
		
		else{
	
		$(".slide1").addClass("transmit")
		$(".slide2").addClass('transmit1')
		$("#show").addClass('transmit2')
		$("#next").removeClass('transmitagain4')
		$("#next").addClass('transmit4')
		}
	})
})

$(document).ready(function(){
	
	$("#login").click(function(){

		if($(window).innerWidth()<1200){
			
			$(".slide2").addClass('display')
			$(".slide1").removeClass("display")
			$("#next").addClass('display')
			$(".slide3").addClass('display')
			
			
		}
		

		else{
			
	
		$(".slide1").removeClass("transmit")
		$(".slide1").removeClass("display")
		$(".slide2").removeClass('transmit1')
		$(".slide2").removeClass('display')
		$("#show").removeClass('transmit2')
		$("#next").removeClass('transmit4')
		$("#next").removeClass('display')
	
		
	
		$(".slide1").addClass("slideagain1")
		$(".slide2").addClass('slideagain2')
		$("#show").addClass('slideagain3')
		$("#next").addClass('transmitagain4')
		}
	})
})






	










