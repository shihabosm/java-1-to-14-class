// // task 1
// function fourMult(num1,num2,num3,num4){

//     const mult=num1*num2*num3*num4;
//     return mult
// }
// const mult=fourMult(5,9,6,3)
// console.log(mult)
// // task 2
// function oddEven(numr){

//     if(numr%2===1){
//         const mult=numr*2;
       
//         return mult
//     }
//     else{
//         const divid=numr/2;
       
//         return divid
//     }
    
   
// }
// // const sum= oddEven(6);
// // console.log(sum)
// // // task 3
// // function makeAvg(numbers){
// //     const len=numbers.length;
// //     let sum=0;
// //     for(const number of numbers){
// //         sum=sum+number;
       
        
   
// //     }
// //     const avg=sum/len; // vitore 
// //     return avg;
    

// // }

// const avg=[55,60,87,95,54,40,30];
// const num1=makeAvg(avg);
// console.log(num1.toFixed(3))

// task 4 
function binary(bin){

    let count=0;
    let count1=0;
    for(const b of bin){
        // console.log(b)
       
        if(b==0){
            count++;
    
        }else{
            count1++;
        }
    }
    return [count,count1] 
}

const binaryNum='11001010000100'
const result=binary(binaryNum)
console.log(result[0])
console.log(result[1])

// // task 5
// function odd_even(num){
   
//  if(num%2==0){
//     return 'even'
//  }
//  if(num%2==1){
//     return 'odd'
//  }

// }
//  const int=42;
//  const intResult=odd_even(int)
//  console.log(intResult)
