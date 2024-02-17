/**
 * chair --> 3cft
 * table -->10 cft
 * bed-->50cft
 * 
 */

function woodQuantity(chairQuantity,tableQuantity,badQuantity){
    const perChairWood=3;
    const perTableWood=10;
    const perBedWood=50;
    const CheiTotalWood=chairQuantity*perChairWood;
    const TablTotalWood=tableQuantity*perTableWood;
    const BedTotalWood=badQuantity*perBedWood;
    
    const totalWood=CheiTotalWood+TablTotalWood+BedTotalWood;
    return totalWood;


}
const wood =woodQuantity(0,3,1);
console.log('woode neede',wood)

/**
 * shirt price ->500
 * pant price ->300
 * shoe price ->900
 */
function shooping(shartp,pantp,shoep){

    const perShart=500;
    const perPant=300;
    const perShoe=900;

    const shartPrice=shartp*perShart;
    const pantPrice=pantp*perPant;
    const shoePrice=shoep*perShoe;

    const total=shartPrice+pantPrice+shoePrice;
    return total;

}
const Shoping=shooping(2,1,2)
console.log(Shoping)



/**
 * mula--20
 * begun--40
 * 
 */
function vegetable(mula,begun){
    const mulap=20;
    const begunp=40;
    const mulatotalp=mula*mulap;
    const beguntotalp=begun*begunp;
    const total =mulatotalp+beguntotalp;
    return total;

}
const value=vegetable(2,3)
console.log(value)