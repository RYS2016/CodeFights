function matrixElementsSum(matrix) {
    var sum = 0;    
    
        for (var k = 0; k < matrix[0].length; k++){   //inner loop
            for (var i = 0; i < matrix.length; i++){  //outer loop
                if (matrix[i][k] > 0)
                    sum += matrix[i][k];
                if (matrix[i][k] === 0)
                    break
            }            
        }
    return sum;
}
