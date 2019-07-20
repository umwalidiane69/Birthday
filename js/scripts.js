function birtday(){
  
  var DD = parseInt(document.querySelector("#value1").value);
  var MM = parseInt(document.querySelector("#value2").value);
  
  var YY = parseInt(document.querySelector("#value3").value);
  var CC = parseInt(document.querySelector("#value4").value);
  var op = document.querySelector("#Gender").value;
  // var cs = document.querySelector("#nana").value;
  var Sub=( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )% 7; 
  var Submit =Math.floor(Sub);
  if(MM>=1 && MM<=12){
  if(DD>=1 && DD<=31){
   if(DD>=29 && MM==2){
    
      document.getElementById("pag").innerHTML="Invalid date of February! Try Again";
    }
    else{
  if(op=="cal"&& Submit == 7){
   document.getElementById("pag").innerHTML="birth day: Sunday && akan name: Akosua";
  }
  else if(op=="cal"&& Submit == 1){
    document.getElementById("pag").innerHTML="birth day: Monday && akan name: Adwoa";
   }
   else if(op=="cal"&& Submit == 2){
    document.getElementById("pag").innerHTML="birth day: tuesday && akan name: Abenaa";
   }
   else if(op=="cal"&& Submit == 3){
    document.getElementById("pag").innerHTML="birth day: wednesday && akan name: Akua";
   }
   else if(op=="cal"&& Submit == 4){
    document.getElementById("pag").innerHTML="birth day: Thursday && akan name: Yaa";
   }
   else if(op=="cal"&& Submit == 5){
    document.getElementById("pag").innerHTML="birth day: Friday && akan name: Afua";
   }
   else if(op=="cal"&& Submit == 6){
    document.getElementById("pag").innerHTML="birth day: saturday && akan name: Ama";
   }
   else if(op=="sal"&& Submit == 7){
    document.getElementById("pag").innerHTML="birth day: Sunday && akan name: Kwasi";
   }
   else if(op=="sal"&& Submit == 1){
    document.getElementById("pag").innerHTML="birth day: Monday && akan name: Kwadwo";
   }
   else if(op=="sal"&& Submit == 2){
    document.getElementById("pag").innerHTML="birth day: tuesday && akan name: Kwabena";
   }
   else if(op=="sal"&& Submit == 3){
    document.getElementById("pag").innerHTML="birth day: wednesday && akan name: Kwaku";
   }
   else if(op=="sal"&& Submit == 4){
    document.getElementById("pag").innerHTML="birth day: Thursday && akan name: Yaw";
   }
   else if(op=="sal"&& Submit == 5){
    document.getElementById("pag").innerHTML="birth day: Friday && akan name: Kofi";
   }
   else if(op=="sal"&& Submit == 6){
    document.getElementById("pag").innerHTML="birth day: saturday && akan name: Kwame";
   } 
  } 
}
  else{
    document.getElementById("pag").innerHTML="Invalid Date! Try Again";
  }
}
else{
  document.getElementById("pag").innerHTML="Invalid Month! Try Again";
}
//document.querySelector("#result").innerHTML = Submit;
  }
  
 