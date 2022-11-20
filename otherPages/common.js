
var extra=0;
var time=200;
$("document").ready(function(){
    
   
        var s=setInterval(function(){
            if(extra==8){
                clearInterval(s)
                setTimeout(function(){
                      setInterval(function(){
                    a();
                },200)

                },1500)
              
            }
           
            a();
              
              
          },time);

    
    
   
})
function a(){

	
	
	
    if(extra==0){
        b="Q|"
        document.getElementById("Main-Heading").innerHTML=b;
    extra++;
  
    }
    else if(extra==1){
        b="Qu|"
        document.getElementById("Main-Heading").innerHTML=b;
    extra++;

    }
    else if(extra==2){
        b="Qui|"
        document.getElementById("Main-Heading").innerHTML=b;
    extra++;

    }
    else if(extra==3){
        b="Quic|"
        document.getElementById("Main-Heading").innerHTML=b;
    extra++;

    }
    else if(extra==4){
        b="Quick|"
        document.getElementById("Main-Heading").innerHTML=b;
    extra++;

    }
    else if(extra==5){
        b="QuickQ|"
        document.getElementById("Main-Heading").innerHTML=b;
    extra++;

    }
    else if(extra==6){
        b="QuickQu|"
        document.getElementById("Main-Heading").innerHTML=b;
    extra++;


    }
    else if(extra==7){
        b="QuickQui|"
        document.getElementById("Main-Heading").innerHTML=b;
    extra++;

    }
    else if(extra==8){
        b="QuickQuiz|"
        document.getElementById("Main-Heading").innerHTML=b;
    extra++;

 

    }
    
    else if(extra==9){
        b="QuickQui|"
        document.getElementById("Main-Heading").innerHTML=b;
    extra++;

    }
    else if(extra==10){
        b="QuickQu|"
        document.getElementById("Main-Heading").innerHTML=b;
    extra++;

    }
    else if(extra==11){
        b="QuickQ|"
        document.getElementById("Main-Heading").innerHTML=b;
    extra++;

    }
    else if(extra==12){
        b="Quick|"
        document.getElementById("Main-Heading").innerHTML=b;
    extra++;

    }
    else if(extra==13){
        b="Quic|"
        document.getElementById("Main-Heading").innerHTML=b;
    extra++;

    }
    else if(extra==14){
        b="Qui|"
        document.getElementById("Main-Heading").innerHTML=b;
    extra++;

    }
    else if(extra==15){
        b="Qu|"
        document.getElementById("Main-Heading").innerHTML=b;
    extra++;

    }
    else if(extra==16){
        b="Q|"
        document.getElementById("Main-Heading").innerHTML=b;
    extra++;

    }
    else if(extra==17){
        b="|"
        document.getElementById("Main-Heading").innerHTML=b;
    extra=0;

    }
    
   
    

}










