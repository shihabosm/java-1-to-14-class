// defined a function name as "findAddress()" which will take object as input
// 2. access the elements of the objects.
// 3.formet the string as give a sample  -- "10,15A,Earth perfect"
// 4. replace the missing property with_

function findAddress(obj){
    const street =obj.street || "_"
    const house=obj.house || "_"
    const  socity=obj.socity || "_"


    const str= street+','+house+','+socity

    return str;

}
console.log(findAddress({street:10,}))