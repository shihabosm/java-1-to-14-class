const person={
    name:'sadar uddin',
    age:25,
    profession: 'developer',
    salar:25000,
    merried: true,
    'fav place':['bandarban','senmatin'],

}
person.salar=3000,
person['age']=26,
person['fav place'].push('sundorbon')
console.log(person)


const keyName='profession'
console.log(person[keyName])