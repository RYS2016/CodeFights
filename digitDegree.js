function digitDegree(n) {
    let count = 0;
    
    if(n <= 9){
        return count;
    }else{
        
        while(true){
            count++;
            n = n.toString().split("").reduce((x,y) => {
               return parseInt(x) + parseInt(y);                
            });

            if (n <= 9){
                break;
            }
        }
    }
    return count;
}
