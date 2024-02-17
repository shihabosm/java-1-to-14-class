/**
 * first 100 -->100
 * *100to200-->90
 * above 2000--->70

*/

function layeredDiscount(quantity){
const first100price=100;
const second200price=90;
const above200Price=70;
if(quantity<=100){
    const firstPrice=quantity*first100price;
    return firstPrice;
}else if(quantity<=200){
    const firstPrice= 100*first100price;
    const secondprice=(quantity-100)*second200price;
    const total=firstPrice+secondprice;
    return total;
}
else{
    
    const firstPrice = 100 * 100 + 100 * 90
    
    const abovePrice=(quantity-200)*70
   
    const total =firstPrice+abovePrice;
    return total;
   
   


}

}

const quantity=layeredDiscount(201);
console.log(quantity)
