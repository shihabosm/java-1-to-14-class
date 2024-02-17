function hideelementById(elementId){
    const element=document.getElementById(elementId)
    element.classList.add('hidden');
}

function showElentById(elementId){
    const element=document.getElementById(elementId)
    element.classList.remove('hidden');
}
function setBackgroundColorById(elementId){
    const element=document.getElementById(elementId)
    element.classList.add('bg-orange-400')

}
function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400')
}

function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value
}
function setTextElementValueById(elementId,value){
    const element=document.getElementById(elementId)
    element.innerText=value

}
 
function getTextElementById(elementId){
    const element=document.getElementById(elementId);
    const text =element.inner;
    return text;
}
// function getARandomAlphabet(){
//     // get and create an alphabet array
//     const alphabetString='abcdefghijklmnopqrstuvwxyz' ;
//     const alphabets= alphabetString.split('')
//     // console.log(alphabets)

// // get a random index between 0-25
// const randomNumber=Math.random()*25;
// const index =Math.round(randomNumber)
// console.log(index);
// const alphabet=alphabets[index];
// // console.log(index,alphabet)
// return alphabet;
// }
function getARandomAlphabet(){
    const alphabetString='abcdefghijklmnopqrstuvwxyz' ;
    const alphabets=alphabetString.split('')
    const randomNumber=Math.random()*25;
    const index=Math.round(randomNumber)
    const alphabet=alphabets[index]
    return alphabet
}