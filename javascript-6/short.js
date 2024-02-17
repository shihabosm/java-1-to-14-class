const person=['rakib','nokib','sakib','akib','dakib','anis','Anis'];
const sortedPerson=person.sort();
console.log(sortedPerson)

// sort --->
const numbers=[4,7,12,38,3,6,];
/*
Ascending ----> smaller to larger:[2,3,4,6,7,8]
Desending ---->larger to smaller:[8,7,6,4,3,2]
*/
// const number_asc=numbers.sort() //not work 
// const number_asc=numbers.sort(function (a,b) {return a-b})
const number_asc=[...numbers].sort(function (a,b) {return b-a})
console.log(number_asc)
