function add(num1,num2){
    const sum=num1+num2;
    return sum;
}
function subtract(num1,num2){
    const sub = num1-num2;
    return sub;

}
function multiply(num1,num2){
    const mult=num1*num2;
    return mult;

}
function divide(num1,num2){
    const divid=num1/num2
    return divid;
}

function calculator(a,b,operation){
    if(operation==='add'){
        const add=add(a,b,)
        return add;
    }
    else if(operation==='subtract'){
        const sub=subtract(a,b)
        return sub;
    }
    else if(operation==='multiply'){
        const mult=multiply(a,b)
        return mult;
    }
    else if(operation==='divide'){
        const divid=divide(a,b);
        return divid;
    }
    else{
        return " please 'add' , 'subtract' , 'multiply' , 'divide' , operation"
    }
}

const result =calculator(5,5,'divide')
console.log(result)