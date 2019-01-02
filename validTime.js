function validTime(time) {
    
    var part = time.split(":");
    
    var hour = part[0];
    var min = part[1];
    
    return 0 <= hour && hour < 24 && 0 <= min && min < 60;
}
