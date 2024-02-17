/**
 * function  takes a an array as parameter
 * give me the average of the odd numbers in the array
 */
/**
 * 1.put odd numbers in an array
 * 
 */
function oddAvg(numbers){
    const odd=[];
    for (const number of numbers){
        // console.log(number)
        if(number % 2 ===1){
            odd.push(number)
        }
    }
    // odd id the array that contains only the odd numbers
    //   console.log(odd)
    let sum=0;
    for (const number of odd){
        sum=sum+number

    }
    const count =odd.length
    console.log(sum,count)
    const avg=sum/count;
    return avg
}
const numbers =[42,13,58,65,81,96,7,105];
const avg=oddAvg(numbers);
console.log('average of the odd numbers is:',avg)