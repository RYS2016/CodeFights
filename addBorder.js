function addBorder(picture) {
 
    var arr = [];
    var count = '';

    for (var i = 0; i < picture.length; i++){
    	arr.push("*" + picture[i] + "*");
    }            
    for (var j = 0; j < arr[0].length; j++){
        count += "*";
    }
        arr.unshift(count);       
   	    arr.push(count);   
    return arr;     
}
