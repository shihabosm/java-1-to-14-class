function minMax(number){
   let max=number[0];
   let min=number[0];

   for(const num of number){
    if(max < num){
        max = num;
    }
    if(min > num){
        min = num
    }

   }
 return [max,min]
}
const numbers=[54,65,98,21,54,65,98,45,54,]
const result=minMax(numbers)
console.log(result)