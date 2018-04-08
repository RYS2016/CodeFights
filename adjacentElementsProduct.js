function adjacentElementsProduct(inputArray) {
    
      var largest = inputArray[0] * inputArray[1];
      
      for (var i=0; i < inputArray.length-1; i++){
            var currentValue = inputArray[i] * inputArray[i+1];
            
            if (currentValue >= largest){
                  largest = currentValue;
            }
      }
      return largest;
}
