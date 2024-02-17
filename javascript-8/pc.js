// function inchToFeet(number){

//     const height=number/12;

//     const integer= parseInt(height);
//     const inch=number%12;

// const intofeet=integer +' ft '+inch+' inch '

//     return intofeet


// }

// const height=inchToFeet(72);
// console.log(height)

// ------------------------------
function kiloTomiles(kilo){
    const mile=kilo*0.62137119 ;
   
    // const parmile=parseInt(mile)


    return mile;
}
const kilo=kiloTomiles(10)
console.log(kilo)

// kg to gram 
// function gramToKg(gram){
//     const kg=gram/1000;
//     const inkg=parseInt(kg);
//     const ingram=gram%1000;
//     const result=inkg+" kg "+ingram+' gm ';
//     return result;
// }
// const gm=gramToKg(5200)
// console.log(gm)