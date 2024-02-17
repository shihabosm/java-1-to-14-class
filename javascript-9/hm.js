function lowestHeight(heights){
   let min=heights[0];

    for(const height of heights){
        if(min>height){
            min=height
        }
        
    }
    return min;

}



const heights2 = [167, 190, 120, 165, 137];
const result =lowestHeight(heights2);
console.log(result)
