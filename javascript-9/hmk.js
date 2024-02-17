// function matchFinder(string1,string2){
//     if(typeof string1 !=='string' || typeof string2 !=='string'){
//         return 'please provide a string values'
//     }

//     const result =string1.includes(string2)
//     return result;
// }
// console.log(matchFinder('john Doe', '5'))

// problems solving 
// function sortMaker(array){
//     const [a,b]=array;
//     if (a<0 || b<0){
//         return 'please invalid number '
//     }
//     if(a>b){
//         return [a,b];

//     }
//     if(a===b){
//         return 'equal'
//     }
//     if(b>a){
//         return [b,a]
//     }


// }
// const array=[5,5];
// const result = sortMaker(array);
// console.log(result);

//  switch
// const dayOfWeek='5';

// switch (dayOfWeek){
//     case 1:
//         console.log('shoni');
//         break;
//         case 2:
//             console.log('robi')
//             break
            
//         case 3:
//             console.log('som')
//             break
//         case 4:
//             console.log('mong')
//             break
//         case 5:
//             console.log('budh')
//             break
//         case 6:
//             console.log('briho')
//             break
//         case 7:
//             console.log('shukro')
//             break
//             default:
//                 console.log('invalid date ')
//                 break

// }

// const arr=['apple','banana','coconut','grap','mango'];

// for (let i=arr.length -1;i>=0;i--){
//     console.log(arr[i])
// }

// const nums=[10,20,30,40,50];
//  let sum=0;
// for (let i=0; i<nums.length;i++){
// sum=sum+nums[i]
// }
// console.log(sum)

// // swap array elements 
// const nums2=[10,20,30,40,50];
// const temp =nums2[1];
// nums2[1]=nums2[3];
// nums2[3]=temp;
// console.log(nums2);

// 
const fruits=['apple','banana','coconut','grape','mango'];
const target='apple';
let foundIndex=-1;

for (let i=0;i<fruits.length;i++){
    const currentFruits=fruits[i];
    if(currentFruits==target){
        foundIndex=i
    }

}
if(foundIndex>-1){
    console.log(foundIndex,'founded')
}
else{
    console.log('not found')
}

// find max and min

const number=[50,98,45,98,78,25,98,45];
let max=number[0];
let min=number[0];
for (let i=0; i<number.length;i++){
    const curnum=number[i]
    if(max<curnum){
        max=curnum;
    }
    if(min>curnum){
        min=curnum
    }
}
console.log(max,min)