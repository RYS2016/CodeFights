function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {

    if ((yourLeft == friendsLeft || yourLeft == friendsRight) && 
        (yourRight == friendsRight || yourRight == friendsLeft)){
        return true;              
    }
    return false;    
}
