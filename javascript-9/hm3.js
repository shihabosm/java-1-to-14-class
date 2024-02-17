
function Shopping(laptop,tablet,mobile){
    const laptopP = 35000 ;
  const   tabletP = 15000 ;
    const  mobileP = 20000 ;

    const laptopTotal=laptop*laptopP;
    const tableTotal=tablet*tabletP;
    const mobileTotal=mobile*mobileP
    const result =laptopTotal + tableTotal+mobileTotal;
    return result;
}
const result =Shopping(2,5,4)
console.log(result)