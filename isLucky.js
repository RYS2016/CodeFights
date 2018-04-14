function isLucky(n) {
    
  	var arr = n.toString().split('');                       //We converting a number to string and then to an array
    var firstHalf = (arr.length/2) - 1;                     //We found a length of the half of an array
    var sum1 = 0;
    var sum2 = 0;
    
    for (var i = 0; i <= firstHalf; i++){                   //The sum of the first half of the array
    	sum1 += Number(arr[i]);        
        }
    
    for (var k = firstHalf + 1; k < arr.length; k++){       //The sum of the second half of the array
    	sum2 += Number(arr[k]);
        }
    
    if (sum1 === sum2){
    	return true;
    }else{
    	return false;
    }
}
