function differentSymbolsNaive(s) {

var arr = s.split("");        
var newArr = [];
        
   for(var i = 0; i < arr.length; i++){
      if(newArr.includes(arr[i]) === false){
         newArr.push(arr[i]);
       }
   }
   return newArr.length;     
}
