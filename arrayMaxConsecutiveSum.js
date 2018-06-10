function arrayMaxConsecutiveSum(inputArray, k) {
 
    var sum = 0;
    var max = 0;
    
    for (var i = 0; i < inputArray.length; i++){
        sum += inputArray[i];
        if (i >= k){
            sum -= inputArray[i - k];
        }
        if (sum > max){
            max = sum;
        }
    }
    return max;
}
