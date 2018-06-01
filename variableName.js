function variableName(name) {
 
    var OK = /^[a-z_]\w*$/.test(name);
    
     if (!OK)  
          return false
    else
        return true   
}
