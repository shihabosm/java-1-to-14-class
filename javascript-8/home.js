// task 1
function  celciusToF(celcius){
const temp=(celcius*9/5+32);
const result=temp+' °F '
return result;
    
}
const celcius=23;
const result=celciusToF(celcius)
console.log(result);
// task 2

function bigWord(str){
    const array=str.split(' ')
    
// console.log(array)
let longWord=[];
for(const word of array){
if(word.length>longWord.length){
    longWord=word
}
   
}
return longWord;

}

const str1='I am learning Programming to become a programmer'

// console.log(array)
const result2=bigWord(str1)
console.log(result2)
// tsak 3
function vowelConunt(str){

    const vow='aioue';
    let count=0;
    for(const string of str){
        // console.log(string)
        if(vow.includes(string)===true){
            count+=1;
        }
    }
return count
}

const str='education function'
const vowel=vowelConunt(str1)
console.log(vowel)

// task 5
const rand =Math.round(Math.random()*10)+10;
console.log(rand)
