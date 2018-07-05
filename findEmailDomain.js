function findEmailDomain(address) {
    
    let element = address.split("@");
    
    return element[element.length - 1];
}
