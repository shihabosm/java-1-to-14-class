//1. make a function a sortMaker(), which will take an array array as input 
// 2. access the alement input array
// 3. if any elemnts is negative  return "Invalid Input
// 4.if elements are equal return "equal"
//5. if elements are not equal . then return in decending order 
// 

function sortMaker(arr){
    const [a,b]=arr;
    
    if (a<0 || b<0){
        return 'Invalid Input'
    }
    if(a==b){
        return "Equal"
    }
    if(a>b){
        return [a,b]
    }
    else{
        return [b,a]
    }

}
console.log(sortMaker([6,-6]))