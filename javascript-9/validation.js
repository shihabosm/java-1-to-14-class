function multiply(num1,num2){
    if(typeof num1 !=='number' || typeof num1 !=='number'){
        return 'please provide a number'
    }
    const mult=num1*num2;
    return mult;

}
const  result =multiply(5,7);
console.log(result);

function fullName (first , second){
    if(typeof first !=='string' || typeof second !=='string'){
        return 'please provide a string'
    }
    else if(isNaN(first)==false || isNaN(second) ==false){
        return 'please provide a string'
    }
    const full= first+' '+second;
    return full
}
const full =fullName('Rahan', 'islam');
console.log(full);

function getPrice(product){
    if(typeof product !=='object'){
        return 'please provide an objects'
    }
    else if(Array.isArray(product) == true){
        return 'please provide an objects'
    }

    const price =product.price;
    return price;
}
// const price = getPrice ({name:'culkani',price:45,color:'blue'})
const price = getPrice ([52])
console.log(price)