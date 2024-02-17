// const disha=56;
// const salman=95;

// if(disha>salman ){
//     console.log('disha is biggest man', disha)
// }
// else{
//     console.log('salman is biggest man ',salman)
// }
   
// // 
// function bigNum(num1,num2){
//     if(num1>num2){
//         console.log(num1)

//     }
//     else{
//         console.log(num2)
//     }

// }
// bigNum(56,65)
// -------------------------------------------------
function getMax(num1,num2){
    if(num1>num2){
        return num1
    }
    else{
        return num2
    }
}
const max1=getMax(96,65)
const max2=getMax(56,98)
const ultimateMax=getMax(max1,max2)
console.log('max of two is:',ultimateMax)