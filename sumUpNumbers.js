function sumUpNumbers(inputString) {
    
   var number = "";
   var numbers = [];
        
   function isNum(n){
       return "0" <= n && n <= "9";
   }
    
       for (let i = 0; i < inputString.length; i++){
            let char = inputString.charAt(i);
                if(isNum(char)){
                   number += char;
                      if(i === inputString.length - 1 || !isNum(inputString.charAt(i + 1))){
                         numbers.push(number);
                         number = "";
                      }              
               }
        }
   var sum = 0;

   for (let num of numbers){
      sum += parseInt(num);
   }
   return sum;
}
