export const meanMode = (arr) => {
    
    const mean =calculateMean(arr);

    const mode = calculateMode(arr)
     return mean === mode ? 1 :0;
};


 const calculateMean =(arr)=>{

    let sum =0
    for(let index =0; index < arr.length; index++){
        sum += arr[index]
    }

    return sum/arr.length;
  };

  const calculateMode =(arr)=>{

    //{eleman:array içerisindeki teskrar sayısı}:{1:1, 3:5,5:1}
    //max = ...

    let frekans ={}

    for(let j=0; j< arr.length; j++){
        if(arr[j] in frekans){
            frekans[arr[j]] = frekans[arr[j]]+1
        }else{
            frekans[arr[j]]=1
        }
    }

    const max =Math.max(...Object.values(frekans))

    return iterateOverObj(frekans,max)
  }

  const iterateOverObj =(frekans,max)=>{

    for(let j in frekans){
        if(frekans[j]===max){
            return parseInt(j);
        }
    }
  }












/* 
arrayın ortalamsı moduna eşitse retur 1 degilse return 0 

mod array içerisinde ençok tekrar 3eden */


/*  for (let i = 0; i <= arr.length; i++) {
    total += i;
  }

  const mean = total / arr.length;

  const mode = arr
    .sort(
      (a, b) =>
        arr.filter((v) => v === a).length - arr.filter((v) => v === b).length
    )
    .pop();

  return mean === mode ? "1" : "0"; */