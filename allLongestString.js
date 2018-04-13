function allLongestStrings(inputArray) {
        var largest = [];
        var start = inputArray[0];
    
    for (var i = 0; i < inputArray.length; i++){    
        if (start.length < inputArray[i].length ){ 
                start = inputArray[i];
            } //looping through an inpurArray to find the largest element
        }
          
    for (var k = 0; k < inputArray.length; k++){
    	if (inputArray[k].length == start.length){ 
        	 largest.push(inputArray[k])
            }//looping one more time to find more element of the same  size
        }
	return largest;
}
