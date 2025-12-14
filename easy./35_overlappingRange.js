export const overlappingRanges=(arr)=>{

    const firstSet= createArr(arr[0],arr[1]);
    const secondSet=createArr(arr[2],arr[3]);

    let iterSectionSet=[]

    firstSet.map(item=>{
        if(secondSet.indexOf(item)>-1){
            iterSectionSet.push(item)
        }
    })

    return iterSectionSet.length >= arr[4]? true:false;
}

const createArr=(x,y)=>{

     let subSet=[]

    for(let i= x; i<=y; i++){
       subSet.push(i)
    }
    return subSet
}