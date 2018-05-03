function avoidObstacles(inputArray) {
    
    var counter = 1;

    for (var i = 0; i < inputArray.length; i++){
        
        if (inputArray[i] % counter === 0)
           counter++;          
    }   
         return counter;   
}
