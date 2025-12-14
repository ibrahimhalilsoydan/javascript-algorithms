export const superIncreasing = (arr) => {
  
    for(let i=1; i<arr.length;i++){
      let sum =sumOfSubsets(arr,i);
    }

  return arr


 /* let prefix = 0;
  return arr.map((v) => {
    const comp = v > prefix ? "büyük" : v === prefix ? "eşit" : "küçük";
    const out = { value: v, prefixSum: prefix, comparison: comp };
    prefix += v;
    return out;
  });*/
};

const sumOfSubsets =(arr,index)=>{
  for(let j=0; j<index;j++){
    sum+= arr
  }
}
