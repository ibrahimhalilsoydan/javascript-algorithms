export const numberAddition =(str)=>{

    const strArr =str.split('');

    let nuberArr=[];

    for(let i=0;i<strArr.length;i++){

        if((/[^0-9]/).test(strArr[i])){
            nuberArr.push(strArr[i])
        }else{
            if(nuberArr.length===0){
                nuberArr.push(strArr[i])
            }else if((/[0-9]/).test(nuberArr[nuberArr.length-1])){
                nuberArr[nuberArr.length-1]= nuberArr[nuberArr.length-1]+strArr[i]
            }else if((/[^0-9]/).test(nuberArr[nuberArr.length-1])){
                nuberArr.push(strArr[i])
            }
        }
    }
    
    return calculate(nuberArr);
}

const calculate =(arr)=>{
    let sum =0;
    for(let j=0;j<arr.length;j++){

        if(arr[j].match(/\d+/)) sum+= parseInt(arr[j])
    }

    return sum;
}