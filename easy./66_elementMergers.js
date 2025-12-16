export const elementMerger =(arr)=>{

    let newArr = mergeArr(arr)

    while(newArr.length >1){
        newArr =mergeArr(newArr);
    }

    return newArr
}

const mergeArr=(arr)=>{

    let subArr=[];

    for(let i=1; i<arr.length;i++){
        subArr.push(Math.abs(arr[i]-arr[i-1]))
    }

    return subArr;
}