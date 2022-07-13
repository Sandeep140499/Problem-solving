 
var Perfect_Check = (N) => 
{
         sum = 0;
      for (i=1; i<N; i++) {
        if (N % i === 0)
        sum +=i;
      }
      if (sum== N){
        return "YES";
      }
      else {
        return "NO"
      }
          
        
};
 