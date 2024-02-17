/**
 * LOOPING  Technique
 * 1.for loop
 * 2.while loop
 * do while ---->ignore
 * for of --->array loop korar jonno
 * for in ----> object loop korar jonno
 * 
 * 
 */
const friends =['Elon', 'Bill', 'mark', 'waren']
for(const friend of friends){
    // console.log(friend)
}
for (let i=0; i<friends.length;i++){
    console.log(i)
    // console.log(friends[i])
}
const numbers=[5,84,8544,871,9844,897,57,85,99,54,97,45,44,]
for (let i=0; i<numbers.length;i++){
    // console.log(numbers[i])
}

let i=0;
while(i<friends.length){
console.log(friends[i])
i++;
}
let n=0;
while(n<numbers.length){
    console.log(numbers[n])
    n++;
}