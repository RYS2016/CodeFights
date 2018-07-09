function electionsWinners(votes, k) {
    var max = Math.max(...votes);
    
    function maxVote(v){
        return v == max;
    }
    
    var arr = votes.filter(maxVote);

    if (arr.length > 1 && k == 0) return 0;
    if (arr.length == 1 && k == 0) return 1;
    
    if (arr.length >= 1 && k > 0){
        var count = 0;
        for (var i = 0; i < votes.length; i++){
            if ((votes[i] + k) > max){
                count++;
            }
        }
        return count;
    }
}
