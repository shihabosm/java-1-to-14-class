function findOut(numbers,num){
    let count=0;
for(const number of numbers){
    if(number===num){
        count++;
    }
   
}
return count;
}
const numbers = [5,6,11,12,98, 5]
const result2=findOut(numbers,5)
console.log('Output:',result2)