/**
 * array has some duplicate elements
 * []
 */
const biryaniKhor=['abul','babul','cabul','abul','babul','dabul','kabul','cabul'];


function  noDuplicat(array){
    const uniq=[];
    for (const item of array){
        if(uniq.includes(item)===false){
            uniq.push(item)
        }
    }
    return uniq

}
const uniqueArray=noDuplicat(biryaniKhor)
console.log(uniqueArray)
// --------------------------------------------
const numbers=[1,5,61,5,7,5,81,61,45,65,20,45];
function doplicatNumber(number){
    
    const dopNum=[];
    for(const num of number){
        if(dopNum.includes(num)===false){
            dopNum.push(num)
        }
    }
    return dopNum;

}

const num=doplicatNumber(numbers)

console.log(num)