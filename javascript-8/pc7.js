function bigWord(str){
const array=str.split(' ')
let longWord=''
for(const word of array){
    if(word.length>longWord.length){
        longWord=word
    }

}
return longWord;
}


const str='I am learning Programming to become a programmer'
const result=bigWord(str);
console.log(result)