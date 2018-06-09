function firstDigit(inputString) {   
   
    var num = inputString.split("").filter((el) => Number(el))

        if (num[0] === undefined) {
       		num[0] = "0";
        }

    return num[0];    
}
