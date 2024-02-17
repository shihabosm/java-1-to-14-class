function noDuplicat(num){
    const nums=[]
    for (const numbr of num ){
        if (nums.includes(numbr) === false){
            nums.push(numbr)
        }
    }
    return nums

}
const num=[5,98,6,5,23,5,6,4,95,4]
const number=noDuplicat(num)
console.log(number)

