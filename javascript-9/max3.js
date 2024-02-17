const jim=256;
const tim=89;
const kim=368;

if(jim>tim && jim>kim){
    console.log('jim is ultimate boss')
}
else if(tim >jim && tim >kim){
    console.log('tim is ultimate boss')
}
else{
    console.log('kim is ultimate boss')
}

//  test work
function  maxNum(num1,num2,num3){
    if(num1>num2 && num1>num3){
        return ('num1 is bigger them'),num1
    }
    else if(num2>num1 && num2 >num3){
        return ('num2 is bigger them'),num2
    }
    else{
        return ('num3 is bigger them' ),num3
    }
}
const num1=56;
const num2=789;
const num3=456;
const result=maxNum(num1,num2,num3)
console.log(result)
