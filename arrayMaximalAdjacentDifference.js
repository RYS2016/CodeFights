function arrayMaximalAdjacentDifference(inputArray) {

        var arr = inputArray.splice("");
        var top = Math.max.apply(Math, arr);
        
        var n = arr.indexOf(top);
        
        var a = top - arr[n - 1];
        var b = top - arr[n + 1];

        if (n == arr.length - 1){
                return a;
        }else if(n == 0){
                return b;
        }else if(a > b){
                return a;
        }else if(a < b){
                return b;
        }       
}
