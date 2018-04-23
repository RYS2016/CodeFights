function arrayChange(inputArray) {
    
    var count = 0;
    
    for (var i = 0; i < inputArray.length; i++){
       while (inputArray[i] >= inputArray[i + 1]){
           inputArray[i + 1] += 1;
           count++;           
       }
     }
    return count;
}
