
$(document).ready(function(){
			$('#score').click(function(){
				$('#scroll').toggle()
			})


		})


		var ctt="";
		
$(document).ready(function(){
	$(window).resize(function(){
		
		

		
		if($(window).innerWidth()<=700){
			$("#score").css("margin-left",'4%')
			if(ctt==null){$('#correct').html('<h5>Your score =>> ' + '0'+'</h5>' )}
			else{$('#correct').html('<h5>Your score => ' + ctt+'</h5>' )}
		if(ctt==4 || ctt==5){
			$('#grade').html('<h5>So your Grade => A</h5>'+'<h5>Excellent</h5>')

		}
		else if(ctt==3){
			$('#grade').html('<h5>So your Grade => B</h5>')

		}
		else if(ctt<3){

			$('#grade').html('<h6>So your Grade => C'+'<br>'+'You need more practice</h6>')

		}
		}
		else{
			$("#score").css("margin-left",'37%');
			if(ctt==null){$('#correct').html('<h2>Your score => ' + '0'+'</h2>' )}
			else{$('#correct').html('<h2>Your score => ' + ctt+'</h2>' )}
		if(ctt==4 || ctt==5){
			
			$('#grade').html('<h2>So your Grade => A</h2>'+'<h2>Excellent</h2>')

		}
		else if(ctt==3){
			$('#grade').html('<h2>So your Grade => B</h2>')

		}
		else if(ctt<3){

			$('#grade').html('<h2>So your Grade => C'+'<br>'+'You need more practice</h2>')

		}

		}
		
	})
})



$(document).ready(function(){
	var b=localStorage.getItem('myValue');
	ctt=b;
	
	
	if($(window).innerWidth()<700){
		$("#score").css("margin-left",'4%')
		if(b==null){$('#correct').html('<h5>Your score =>> ' + '0'+'</h5>' )}
		else{$('#correct').html('<h5>Your score => ' + b+'</h5>' )}
	if(b==4 || b==5){
		$('#grade').html('<h5>So your Grade => A</h5>'+'<h2>Excellent</h5>')

	}
	else if(b==3){
		$('#grade').html('<h5>So your Grade => B</h5>')

	}
	else if(b<3){

		$('#grade').html('<h6>So your Grade => C'+'<br>'+'You need more practice</h6>')

	}

	}
	else{
	if(b==null){$('#correct').html('<h2>Your score => ' + '0'+'</h2>' )}
		else{$('#correct').html('<h2>Your score => ' + b+'</h2>' )}
	if(b==4 || b==5){
		
		$('#grade').html('<h2>So your Grade => A</h2>'+'<h2>Excellent</h2>')

	}
	else if(b==3){
		$('#grade').html('<h2>So your Grade => B</h2>')

	}
	else if(b<3){

		$('#grade').html('<h2>So your Grade => C'+'<br>'+'You need more practice</h2>')

	}
}
	
	localStorage.removeItem('myValue');


});

	
	
	var a=0;var b=0;var c=0;var d=0;var e=0;

	$(document).ready(function(){
		
		
		$("#a1").click(function(){
			if(a==0){
				$("#a1").css("color","red")
			a++;
			}
			else{
			
				a=0;
				$("#a2").css("color","white");
				b=0;
				$("#a3").css("color","white")
			c=0;
			$("#a4").css("color","white")
			$("#a5").css("color","white")
			e=0;
			d=0;
				}
		})
		
	
	
	
		$("#a2").click(function(){
			if(b==0){
			$("#a2").css("color","red")
			$("#a1").css("color","red")
			a++;
			b++;}
			else{
				$("#a2").css("color","white")
				b=0;
				$("#a3").css("color","white")
			c=0;
			$("#a4").css("color","white")
			$("#a5").css("color","white")
			e=0;
			d=0;
				}
		})
	
	
	
		$("#a3").click(function(){
			if(c==0){
			$("#a3").css("color","red");
			$("#a2").css("color","red");
			$("#a1").css("color","red");
			a++;
			b++;
			c++;
		}
		else{
			$("#a3").css("color","white")
			c=0;
			$("#a4").css("color","white")
			$("#a5").css("color","white")
			e=0;
			d=0;
			}
		})
	

		$("#a4").click(function(){
			if(d==0){
			$("#a4").css("color","red")
			$("#a3").css("color","red")
			$("#a2").css("color","red")
			$("#a1").css("color","red")
			a++;
			b++;
			c++;

			d++;
		}
		else{
			$("#a4").css("color","white")
			$("#a5").css("color","white")
			e=0;
			d=0;
			}
		})
	
	
		$("#a5").click(function(){
			if(e==0){
			$("#a5").css("color","red")
				$("#a4").css("color","red")
			$("#a3").css("color","red")
			$("#a2").css("color","red")
			$("#a1").css("color","red")
			a++;
			b++;
			c++;

			d++;
			e++;
		}
		else{
			$("#a5").css("color","white")
			e=0;
			}
		})
	
		

	})


	
	$(document).ready(function(){
		
		
		$("#a1").mouseover(function(){
			if(a==0){
			$("#a1").css("color","red")
			a++;
			$("#showresponse").html("VeryPoor")
			}
			else{
				$("#a1").css("color","white")
				$("#showresponse").html("")
			
				a=0;
					$("#a2").css("color","white")
				b=0;
				$("#a3").css("color","white")
			c=0;
			$("#a4").css("color","white")
			$("#a5").css("color","white")
			e=0;
			d=0;
				}
		})
		
	
	
	
		$("#a2").mouseover(function(){
			if(b==0){
			$("#a2").css("color","red")
			$("#a1").css("color","red")
			$("#showresponse").html("Poor")
			a++;
			b++;}
			else{

				$("#a2").css("color","white")
				b=0;
				$("#a3").css("color","white")
				$("#showresponse").html("VeryPoor")
			c=0;
			$("#a4").css("color","white")
			$("#a5").css("color","white")
			e=0;
			d=0;
				}
		})
	
	
	
		$("#a3").mouseover(function(){
			if(c==0){
				$("#showresponse").html("Good")
			$("#a3").css("color","red")
			$("#a2").css("color","red")
			$("#a1").css("color","red")
			a++;
			b++;
			c++;
		}
		else{
			$("#showresponse").html("Poor")
			$("#a3").css("color","white")
			c=0;
			$("#a4").css("color","white")
			$("#a5").css("color","white")
			e=0;
			d=0;
			}
		})
	

		$("#a4").mouseover(function(){
			if(d==0){
				$("#showresponse").html("VeryGood")
			$("#a4").css("color","red")
			$("#a3").css("color","red")
			$("#a2").css("color","red")
			$("#a1").css("color","red")
			a++;
			b++;
			c++;

			d++;
		}
		else{
			$("#showresponse").html("Good")
			$("#a4").css("color","white")
			$("#a5").css("color","white")
			e=0;
			d=0;
			}
		})
	
	
		$("#a5").mouseover(function(){
			if(e==0){
				$("#showresponse").html("Excellent")
			$("#a5").css("color","red")
				$("#a4").css("color","red")
			$("#a3").css("color","red")
			$("#a2").css("color","red")
			$("#a1").css("color","red")
			a++;
			b++;
			c++;

			d++;
			e++;
		}
		else{
			$("#showresponse").html("veryGood")
			$("#a5").css("color","white")
			e=0;
			}
		})
	
		

	})
	$(document).ready(function(){
		$("#last").hide();
		
	})

	

	function aler(event){
		

		if(a!=0){
		
		$(document).ready(function(){
			$("#second").hide();
			$("#last").show();
			$("#first").hide();
			$("#score").hide();$("#score1").hide();
			
		})
		document.getElementById("rate").href="#";
		}
		else{
			event.preventDefault();
			alert("Please rate us **")
			document.getElementById("rate").href="#";
		}
	}
var page=localStorage.getItem("page");
localStorage.removeItem("page");


if(page=='science'){

	
	$(document).ready(function(){
		$("#score1 a").click(function(){

			localStorage.setItem("ans",1)
			document.getElementById("anchor").href="../Questions/science.html";

		})
	})
}
else if(page=='current'){
	
	$(document).ready(function(){
	
		$("#score1 a").click(function(){

			localStorage.setItem("ans",2)
			document.getElementById("anchor").href="../Questions/current.html";

		})
	})
}
else if(page=='history'){

	$(document).ready(function(){
		$("#score1 a").click(function(){

			localStorage.setItem("ans",3)
			document.getElementById("anchor").href="../Questions/history.html";

		})
	})

}
else if(page=='politics'){

	$(document).ready(function(){
		$("#score1 a").click(function(){

			localStorage.setItem("ans",4)
			document.getElementById("anchor").href="../Questions/politics.html";

		})
	})

}


	var again=localStorage.getItem("again");
	localStorage.removeItem('again')
	if(again=='science2'){
		
		$(document).ready(function(){
			$("#score").hide()
			$("#score1").css("margin-left",'45%')
		
		
		
		
		})
		
	}
	
	 else if(again=='current2'){
		
		$(document).ready(function(){
			$("#score").hide()
			$("#score1").css("margin-left",'45%')
		
		
		
		
		})
		
	}
	
	
	else if(again=='history2'){
		
		$(document).ready(function(){
			$("#score").hide()
			$("#score1").css("margin-left",'45%')
		
		
		
		
		})
		
	}
	
	
	else if(again=='politics2'){
		
		$(document).ready(function(){
			$("#score").hide()
			$("#score1").css("margin-left",'45%')
		
		
		
		
		})
		
	}
	else{
		$("#score").show()
	}
	
var poin=0;

	$(document).ready(function(){
		
		$(".radio").click(function(){
			poin++;
		})
		
	})

	$(document).ready(function(){
		
		$("#again").click(function(){
			
			
			if(poin!=0){
				alert("Thanks for Visiting Our Website!")
				document.getElementById("again").href="../../Home page/home.html";
				Email.send({
					Host: "smtp.gmail.com",
					Username: "sender@email_address.com",
					Password: "Enter your password",
					To: 'rkharshkumar88@gamil.com',
					From: "harsh1559.be20@chitkara.edu.in",
					Subject: "Sending Email using javascript",
					Body: "Well that was easy!!",
				  })
					.then(function (message) {
					  alert("mail sent successfully")
					});
				
			}
			else{
				alert("please choose any one..")
			}
		})
		
	})



	
	