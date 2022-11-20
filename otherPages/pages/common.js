
var count=0;
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
	
	
	
	
    if(count==0){
        b="Q|"
        document.getElementById("Main-Heading").innerHTML=b;
    count++;
    }
    else if(count==1){
        b="Qu|"
        document.getElementById("Main-Heading").innerHTML=b;
    count++;

    }
    else if(count==2){
        b="Qui|"
        document.getElementById("Main-Heading").innerHTML=b;
    count++;

    }
    else if(count==3){
        b="Quic|"
        document.getElementById("Main-Heading").innerHTML=b;
    count++;

    }
    else if(count==4){
        b="Quick|"
        document.getElementById("Main-Heading").innerHTML=b;
    count++;

    }
    else if(count==5){
        b="QuickQ|"
        document.getElementById("Main-Heading").innerHTML=b;
    count++;

    }
    else if(count==6){
        b="QuickQu|"
        document.getElementById("Main-Heading").innerHTML=b;
    count++;


    }
    else if(count==7){
        b="QuickQui|"
        document.getElementById("Main-Heading").innerHTML=b;
    count++;

    }
    else if(count==8){
        b="QuickQuiz|"
        document.getElementById("Main-Heading").innerHTML=b;
    count++;
   

    

    }
    else if(count==9){
        b="QuickQui|"
        document.getElementById("Main-Heading").innerHTML=b;
    count++;

    }
    else if(count==10){
        b="QuickQu|"
        document.getElementById("Main-Heading").innerHTML=b;
    count++;

    }
    else if(count==11){
        b="QuickQ|"
        document.getElementById("Main-Heading").innerHTML=b;
    count++;

    }
    else if(count==12){
        b="Quick|"
        document.getElementById("Main-Heading").innerHTML=b;
    count++;

    }
    else if(count==13){
        b="Quic|"
        document.getElementById("Main-Heading").innerHTML=b;
    count++;

    }
    else if(count==14){
        b="Qui|"
        document.getElementById("Main-Heading").innerHTML=b;
    count++;

    }
    else if(count==15){
        b="Qu|"
        document.getElementById("Main-Heading").innerHTML=b;
    count++;

    }
    else if(count==16){
        b="Q|"
        document.getElementById("Main-Heading").innerHTML=b;
    count++;

    }
    else if(count==17){
        b="|"
        document.getElementById("Main-Heading").innerHTML=b;
    count=0;

    }
   
    

}










  

 
