function knapsackLight(value1, weight1, value2, weight2, maxW) {
    
    let sum = weight1 + weight2;
    let totalValue = 0;
         
        if (weight1 > maxW && weight2 > maxW){
            totalValue = 0;
            return totalValue;
        }
    
        if (weight1 <= maxW && weight2 > maxW){
            totalValue = value1;
            return totalValue;
        }
    
        if (weight2 <= maxW && weight1 > maxW){
            totalValue = value2;
            return value2;
        }
        
        if (sum == maxW || sum < maxW){
           totalValue = value1 + value2;
        return totalValue;   
        }
        
        if ((weight1 <= maxW && weight2 <= maxW) && sum > maxW){
            if(value1 > value2){
                totalValue = value1;
            }else if(value2 > value1){
                totalValue = value2;
            }else{
                if(weight1 > weight2){
                    totalValue = value1;
                }else{
                    totalValue = value2;
                }
            }
        return totalValue;
        }   
  }
