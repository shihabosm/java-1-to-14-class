const sentence= 'I am learning web Dev.';
// const result= '.veD bew gninrael ma I'
let revers='';
for(const letter of sentence){
    // console.log(letter)
    revers=letter + revers

}
console.log(revers)
let rev ='';
for (let i=0; i <sentence.length ; i++){
    // console.log(i);
    // console.log(sentence[i])
    const letter=sentence[i];
    rev= letter +rev;
}
console.log(rev)
// shortcut 
const reversed= sentence.split('').reverse().join('');
console.log(reversed)