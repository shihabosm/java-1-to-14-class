const nayok ={
    name:'sakib khan',
    id:121,
    address:'movie cinema',
    isSingle:true,
    friends:['Apu','Raaz','Salman','aamir'],
    movise:[{name:'no 1', year:2015,},{name:'king khan',year:2018,}],
    act:function(){
        console.log('acting like sakib khan')

    },
    car:{
        brand:'tesla',
        price:5000000,
        made:2025,
        manufacture:{
            name:'tesla',
            ceo:'Elon Mask',
            country:'USA'
        }
    }
}
console.log(nayok.act())
nayok.act()