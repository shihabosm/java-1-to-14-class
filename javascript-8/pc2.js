// // function leapYear(year){
// //     if(year%4===0){
// //         return true;
// //     }

// // }
// const yr=leapYear(2052)
// console.log(yr)
function leapYear2(year){
if(year %100 !== 0 && year % 4 == 0){
    return true;
}
else  if(year % 100===0 && year % 400 ===0){
    return true;
}
 else{
    return false
 }

}
const year=leapYear2(2100)
console.log(year)