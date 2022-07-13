var Check_Leap = (year) => 
{
  if ((0 === year % 4) && (0 !== year % 100) || (0 === year % 400)){
   return "Leap Year"
 }
  else{
    return "Non Leap Year";
  }
  

};