const colors = ['red', 'blue', 'green', 'yellow', 'orange']

const rev=[];
for(let i=0;i<colors.length;i++){
    const color=colors[i];
    rev.unshift(color)

}
console.log(rev)
// --------------------- task 2
const even=[];
const numbers = [12, 98, 5, 41, 23, 78, 46];
for(let n=0;n<numbers.length;n++){
    const num=numbers[n];
    if(num%2==0){
        even.push(num)
    }
}
console.log(even)
// -----------------task 3
var nam = ['Tom', 'Tim', 'Tin', 'Tik']

const tom= nam.join('')
console.log(tom)
// -------------------- task 4

const statement = 'I am a hard working person'

const stat= statement.split(' ');
stat.reverse()
console.log(stat.join(' '))


