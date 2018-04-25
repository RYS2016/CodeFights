function palindromeRearranging(inputString) {
    
      var arr = inputString.split("");
      
      var myObj = {};
   
      for (var i = 0; i < inputString.length; i++){
         if(!myObj.hasOwnProperty(arr[i])){
            myObj[arr[i]] = 1;
         }else{
            myObj[arr[i]]++;
         }
      }
      var count = 0;
   
      for (amount in myObj){
         if (myObj[amount] % 2 != 0 ){
            count++;
         }
      }
      return count < 2 ? true : false;
}
