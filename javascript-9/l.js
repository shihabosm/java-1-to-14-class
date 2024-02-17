const phone=[
    {name:'sumsung',price:20000,camera:'12 mp',color:'black'},
    {name:'xoami',price:18000,camera:'12 mp',color:'black'},
    {name:'opp',price:30000,camera:'12 mp',color:'black'},
    {name:'Iphone',price:100000,camera:'12 mp',color:'black'},
    {name:'walton',price:31000,camera:'12 mp',color:'black'},
    {name:'HTC',price:27000,camera:'12 mp',color:'black'},
]

function getCheapestObject(phones){
    let min =phones[0]
    for(const phone of phones){
       if(phone.price <min.price){
        min=phone
       }
    }
   return min;
}

const cheap=getCheapestObject(phone);
console.log('Cheapest phone is:',cheap)