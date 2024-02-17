function lowestNamae(name){
    let low=name;
    for (const nam of name){
        if(low.length > nam.length){
            low=nam
        }
    }
return low
}

const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
const result=lowestNamae(heights2)
console.log(result)






