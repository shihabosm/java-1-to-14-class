/**
 * for a given string tell me whether it has even  number of characters or not
 * 
 */
function evenSizedString(str){
    const size =str.length;
    console.log(str,size)

    if(size%2===0){
        console.log('evev size')
        return true
    }
    else{
        console.log('odd size')
        return false
    }
   
}

const odd= evenSizedString('Dhaka')
const evev= evenSizedString('faka')
console.log(evev,odd)

function doubleOrTriple(number, doDouble){
    if(doDouble){
        const result =number*2
        return result;
    }
    else{
        const result=number*3
        return result;
    }
}
console.log(doubleOrTriple(5,true))
console.log(doubleOrTriple(5,false))

function numberOfElements(numbers){
    const len=numbers.length;
   return len;
}
const lent= numberOfElements([12,45,78,45,121254,4,5])
console.log(lent)

// function getAge(person){
//     const age=person.age
//     return age
// }

