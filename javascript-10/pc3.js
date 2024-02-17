function numbersAvg(numbers){
    let sum=0;
    for(const num of numbers){
        const result=num**2;
        sum=sum+result;

    }
    console.log(sum)
    const avg=sum/numbers.length;
    return avg;

}

const result=[4,6,10,12];
console.log(numbersAvg(result));