function evenSizedString(str){
    const size =str.length;
    console.log(str,size)

    if(size%2===0){
        console.log('evev size',true)
        return true
    }
    else{
        console.log('odd size' ,false)
        return false
    }
   
}

const odd= evenSizedString('Dhaka')
const evev= evenSizedString('faka')
// console.log(evev,odd)