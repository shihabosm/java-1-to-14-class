
function cubeNumber(number){
    if(typeof number !== 'number'){
        return 'please provide a number'
    }
    const result=Math.pow(number,3);
    return  result;
}
console.log(cubeNumber(3))