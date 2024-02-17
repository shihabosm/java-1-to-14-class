function oddAvg(number){
    const odd=[];
    for(const num of number){

        if(num%2===1){
            odd.push(num)
        }
    }
  
    let sum =0;
  
    const count=odd.length;
    for (const oddSum of odd){
        sum+=oddSum
    }
   
    const avg=sum/count;
    return avg
    

}

const num=[25,65,98,25,45,32,15,98,89,];
const number=oddAvg(num);
console.log(number);