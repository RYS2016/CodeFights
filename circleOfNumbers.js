function circleOfNumbers(n, firstNumber) {
    
    if (n/2 > firstNumber) {
        return n/2 + firstNumber
    }else if (n/2 < firstNumber){
        return firstNumber - n/2 
    }else{
        return 0
    }
}
