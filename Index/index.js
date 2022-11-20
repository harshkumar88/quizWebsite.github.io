$(document).ready(function(){
	

	
	
	$("#toggle-menu").click(function(){
		$('#ab').animate({width: 'toggle'});
		$("#toggle-menu").hide("5000");
	});
	$(".menu-div button").click(function(){
		$('#ab').animate({width: 'toggle'});
		$("#toggle-menu").show("5000");
	});
	// if($(window).innerWidth()>800){
	

	// $('.attempt1').mouseover(function(){
		// $('.span1').html('Click on attempt to start quiz')
		
		

	// })
	// $('.attempt1').mouseout(function(){
		// $('.span1').html('')
		
		

	// })
	// $('.attempt2').mouseover(function(){
		// $('.span2').html('Click on attempt to start quiz')
		
		

	// })
	// $('.attempt2').mouseout(function(){
		// $('.span2').html('')
		
		

	// })
	// $('.attempt3').mouseover(function(){
		// $('.span3').html('Click on attempt to start quiz')
		
		

	// })
	// $('.attempt3').mouseout(function(){
		// $('.span3').html('')
		
		

	// })
	// $('.attempt4').mouseover(function(){
		// $('.span4').html('Click on attempt to start quiz')
		
		

	// })
	// $('.attempt4').mouseout(function(){
		// $('.span4').html('')
		
		

	// })
// }
});

var detail=[];
var dd=[];
function ab(){
	 
	
	var a=document.getElementById('name2').value;
	
	
	detail.push(a);
		var b=document.getElementById('email2').value;
	
	dd.push(b);
	console.log(detail)



}













function abc(){
	
	
	var a=document.getElementById('name1').value;
	var b=document.getElementById('email1').value;
	
	if(a==detail[0] && b==dd[0]){
		$(document).ready(function(){
  
  
    $("#another").slideUp('slow');
    $("#scroll").slideDown('slow');
    $("#choose").html('Choose the Topic')
    $('#saw').removeClass('uuu');
    
   



   
    });



	}
	else{
		$('#alert').addClass('alert')
		
		
	}

		

	
	
	
	

}

var b=localStorage.getItem('myValue');


	if(b=='9'){
	$(document).ready(function(){
  
  
    $("#another").slideUp('slow');
    $("#scroll").slideDown('slow');
    $("#choose").html('Choose the Topic')
    $('#saw').removeClass('uuu');
    localStorage.removeItem('myValue');

    
    
   



   
    });
}




