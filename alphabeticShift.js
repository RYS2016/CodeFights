function alphabeticShift(inputString) {

	var al = "abcdefghijklmnopqrstuvwxyz"
    var arr = [];
    
    for (var i = 0; i < inputString.length; i++){
 
       	if (inputString[i] !== undefined){
          	
            var pos = al.search(inputString[i]);
          	    arr.push(al[pos + 1]);
            
            	if (inputString[i] == "z"){
              	arr[i] = al[0];
              }            
          }   
     }   
    return arr.join("");
}
