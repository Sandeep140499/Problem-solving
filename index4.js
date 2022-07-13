var Reverse_Number = (N) => 
{
       let num = 0;
     
     num = Number(String(N).split('').reverse().join(''));
     return num;

};