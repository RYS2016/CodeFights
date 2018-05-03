function avoidObstacles(inputArray) {
    
for (var counter = 1;; counter++) {
        var found = true;
    for (var i = 0; i < inputArray.length; i++){
        
        if (inputArray[i] % counter === 0)
           found = false;       
    }
        if (found) return counter;
    }   
}
