const height=[65,66,68,72,78,60,65,66];
function getMax(numbers){
    let max=numbers[0];
   
for (const num of numbers){
  if(num>max){
    max=num
  }
}
return max;
}

const max=getMax(height);
console.log('max value is: ', max);

// lowest number
function getMin(numbers){
    let min=numbers[0];
    for(const num of numbers){
        if(min>num){
            min=num
        }
    }
    return min
}
const result=getMin(height);
console.log(result);