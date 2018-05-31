function evenDigitsOnly(n) {
        
        var even = true;
    
        var arr = n.toString()
    
        for (var i = 0; i < arr.length; i++){
                if(arr[i] % 2 !== 0){
                     even = false;                         
                }                
        }
        return even;    
}
