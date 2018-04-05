function centuryFromYear(year) {
    if((year % 100) == 0) {
        return (year/100);
    }else if((year/100>=50)){
        return Math.round((year/100) + 1);
    }else{
        return Math.floor((year/100) + 1);
    }
}
