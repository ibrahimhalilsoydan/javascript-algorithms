export const twoSum =(numArr)=>{

    for(let i=0; i< numArr.length;i++){
      let currentValue = numArr[i]
      let difference = 9-currentValue;   

      const indexOfSecondValue = numArr.indexOf(difference);

      if(indexOfSecondValue > -1 && numArr[i] != numArr[indexOfSecondValue])
        return [i, indexOfSecondValue]
    }


}