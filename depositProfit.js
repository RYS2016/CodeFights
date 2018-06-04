function depositProfit(deposit, rate, threshold) {
    
    var count = 0;
    
    for(var i = deposit; i < threshold; i = i + (i*rate/100)){
        
        if (i <= threshold){
            count++
        }
    }
    return count
}
