function makeArrayConsecutive2(statues) {
    
    return Math.max(...statues) - Math.min(...statues) - statues.length + 1;    
}

//No need to sort! 
//Just find out max and min in array. 
//Calculate how much must be inside and compare with length of start array! 
//Just add something))
