
export const fourLargest=(arr)=>{
    let arrMax =[];

    arr.forEach((subArr) => {
       arrMax.push( Math.max(...subArr))
    });

    return arrMax;
}