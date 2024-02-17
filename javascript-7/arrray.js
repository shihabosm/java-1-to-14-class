/**
 * objective:write a function give me the sum of all numbers in an array
 * step-1:decleare a function
 * step-2 call check whether the function is called properly
 * step-3 set a parameter
 * step-4 pas the parameter (s) check whether parameter is passed is a poper format
 * step-5 do the function task step by step
 */

function sumOfnumbers(numbers){
    let sum=0;
for(const number of numbers){
    console.log(number)
    sum=sum+number
    
}
return sum;

}
const num=[54,62,12,6]
const sum =sumOfnumbers(num)
console.log('sum of numbers is',sum)