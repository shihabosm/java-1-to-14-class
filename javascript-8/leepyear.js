/** simple logic
 * year will be a leep year is divisible by 4 by 4
 * 
 */
function isLeepYear(year){

    if(year%4===0){
        return true
    }
    else{
        return false
    }
}

const leep=isLeepYear(2024);
console.log(leep);

/**
 * 1.those year that is not divisible by 100, if the year divisible by 4:
  then it will be a leap year
  *2.if the year is divisible by 400, then it is a leap year
  * 3.else it is not a leap year
 */
function isLeepYear2(year){
    if(year % 100 !==0 && year % 4===0){
        return true;
    }
    if(year %100 ===0 && year % 400===0){
        return true;
    }
    else{
        return false
    }
}
const isLeep=isLeepYear2(2100)
const isLeep1=isLeepYear2(2400)
const isLeep2=isLeepYear2(1900)
const isLeep3=isLeepYear2(2052)
console.log(isLeep,isLeep1,isLeep2,isLeep3)