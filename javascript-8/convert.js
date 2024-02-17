// 12 inch 1 feet 

function inchToFeet(inch){
    const feet =inch/12;
    return feet;
}

// 75 
function inchToFeet2(inch){
    const feetFraction =inch/12;
    const feetNumber=parseInt(feetFraction)
    const inchRemainnig=inch%12;
    const result=feetNumber + ' ft ' + inchRemainnig +' inch '
    return result


}



const shuvoHeight=inchToFeet(75);
// console.log(shuvoHeight)
const shuvoHeight2=inchToFeet2(75);
// console.log(shuvoHeight2)

function mileToKilometer(mile){
    const kilo=mile*1.60934;
    return kilo;
}

function kilometerTomiles(kilo){
    const mile=kilo*0.621371;
    return mile;
}
 

// // revission 
function inchToFeet3(inch){
    const feet =inch/12;
    const inchRemainnig=parseInt(feet);
    const mudolo= inch%12;
    const result=inchRemainnig +' ft ' +mudolo+' inch '
    return result;
}
const shihabHeight=inchToFeet3(64);
console.log(shihabHeight)

function feetToinch(feet,inch){
    const inn=feet*12+inch;
    return inn;


}


const shihabHeight2=feetToinch(5,10)
console.log(shihabHeight2)