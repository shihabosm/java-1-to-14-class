// make function named as canPay(), this will take two input parameter 

function canPay(changeArray,totalDue){
    if(changeArray.length===0){
        return 'invalid array'
    }


    let sum=0;
    for (let i=0; i<changeArray.length;i++){
        const elements=changeArray[i]
        sum=sum+elements
    }
    if(sum >=totalDue){
        return true;
    }
    else{
        return false;
    }

}
console.log(canPay([1,5,5],10))