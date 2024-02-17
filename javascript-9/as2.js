// we will right a function named as "matheFinder()" which will take to input .
// will try to  find match  between ;
// return trun and false based on the match 
// return error massege if parameter are not message

function  matchFinder(string1,string2){
if(typeof string1 !=='string' || typeof string2 !=='string'){
    return 'please provide a string values'
}
    const result =string1.includes(string2);
    return result

}
console.log(matchFinder('javascript', '5'))