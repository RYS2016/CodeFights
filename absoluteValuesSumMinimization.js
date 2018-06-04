function absoluteValuesSumMinimization(a) {
    var arr = [];  
    
        for (var i = 0; i < a.length; i++){   
        	var sum = 0;            
                for (var j = 0; j < a.length; j++){                       	
                      sum = sum + Math.abs(a[i] - a[j])                        
                }                   
                arr.push(sum)                     
        }         
        for (var k = 0; k < arr.length; k++){
        	var x = arr.indexOf(Math.min.apply(null, arr))         
        }
          return a[x];
}
