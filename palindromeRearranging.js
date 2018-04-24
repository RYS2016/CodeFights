function palindromeRearranging(inputString) {
    
   var arr = Array.from(inputString);
   arr.sort();
   var count = 0;
   
   for (var i = 0; i < arr.length - 1; i++) {
      if (arr[i] != arr[i + 1]) {
         count++;
            if(count > 1 && arr[i] == arr[i - 1])
               return true;
            else if (count > 1)
               return false;
      }
   }
   return true;
}
