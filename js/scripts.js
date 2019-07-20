function birtday(){
  
  var DD = parseInt(document.querySelector("#value1").value);
  var MM = document.querySelector("#value2").value;
  
  var YY = parseInt(document.querySelector("#value3").value);
  var CC = parseInt(document.querySelector("#value4").value);
  var op = document.querySelector("#Gender").value;
  // var cs = document.querySelector("#nana").value;
  var Sub=( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )% 7; 
  var Submit =Math.floor(Sub) ;
  if(DD<=29 && MM==2){
  if(DD>=1 && DD<=31){
    
    
 if(op=="cal"&& Submit == 7){
   document.getElementById("pag").innerHTML="Akosua";
  }
  else if(op=="cal"&& Submit == 1){
    document.getElementById("pag").innerHTML="Adwoa";
   }
   else if(op=="cal"&& Submit == 2){
    document.getElementById("pag").innerHTML="Abenaa";
   }
   else if(op=="cal"&& Submit == 3){
    document.getElementById("pag").innerHTML="Akua";
   }
   else if(op=="cal"&& Submit == 4){
    document.getElementById("pag").innerHTML="Yaa";
   }
   else if(op=="cal"&& Submit == 5){
    document.getElementById("pag").innerHTML="Afua";
   }
   else if(op=="cal"&& Submit == 6){
    document.getElementById("pag").innerHTML="Ama";
   }
   else if(op=="sal"&& Submit == 7){
    document.getElementById("pag").innerHTML="Kwasi";
   }
   else if(op=="sal"&& Submit == 1){
    document.getElementById("pag").innerHTML="Kwadwo";
   }
   else if(op=="sal"&& Submit == 2){
    document.getElementById("pag").innerHTML="Kwabena";
   }
   else if(op=="sal"&& Submit == 3){
    document.getElementById("pag").innerHTML="Kwaku";
   }
   else if(op=="sal"&& Submit == 4){
    document.getElementById("pag").innerHTML="Yaw";
   }
   else if(op=="sal"&& Submit == 5){
    document.getElementById("pag").innerHTML="Kofi";
   }
   else if(op=="sal"&& Submit == 6){
    document.getElementById("pag").innerHTML="Kwame";
   } 
  } else{
    document.getElementById("pag").innerHTML="Invalid date! Try Again";
  }
  }
  else{
    document.getElementById("pag").innerHTML="Invalid date! Try Again";
  }
// document.querySelector("#result").innerHTML = Submit;
}
  
 