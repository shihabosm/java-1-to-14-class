function priceAvg(phones){
    let sum=0;

    for(const phone of phones){
        sum=sum +phone.price
    }
        const priceAVG=sum / phones.length
        return priceAVG;
}



const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];
const  result =priceAvg(phones);
console.log(result);