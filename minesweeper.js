function minesweeper(matrix) {
    var count = [];
    for (var i = 0; i < matrix.length; i++) {
        count.push([]);
        for (var j = 0; j < matrix[i].length; j++) {
            count[i][j] = 0;
           
            if (matrix[i][j - 1] === true) {
                count[i][j]++;
            }

            if (matrix[i][j + 1] != undefined) {
                if (matrix[i][j + 1] === true) {
                    count[i][j]++;
                }
            }
       
            if (matrix[i - 1] != undefined) {
                if (matrix[i - 1][j] === true) {
                    count[i][j]++;
                }
            }
            if (matrix[i + 1] != undefined) {
             
                if (matrix[i + 1][j] === true) {
                    count[i][j]++
                }
            }
          
            if (matrix[i + 1] !== undefined) {
                if (matrix[i + 1][j + 1] === true) {
                    count[i][j]++;
                }
            }
            
            if (matrix[i + 1] !== undefined) {
                if (matrix[i + 1][j - 1] === true) {
                    count[i][j]++;
                }
            }
           
            if (matrix[i - 1] !== undefined) {
                if (matrix[i - 1][j + 1] === true) {
                    count[i][j]++;
                }
            }
           
            if (matrix[i - 1] !== undefined) {
                if (matrix[i - 1][j - 1] === true) {
                    count[i][j]++;
                }
            }
        }
    }
    return count;
}
