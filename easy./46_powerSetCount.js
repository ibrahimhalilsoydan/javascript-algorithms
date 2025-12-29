export const powerSet =(arr =[])=>{


    const nOSS = 2**arr.length
    let result =[];


    for (let i=0; i< nOSS;i++){
        let tempBinary =Number(i).toString(2);
        let currentbinary = "0".repeat(arr.length - tempBinary.length)+tempBinary;

        let tempValue =""

        for(let j=0; j< arr.length; j++){
            if(currentbinary[j]=== "1") tempValue += arr[j]
        }
        result.push(tempValue)
    }


    return result
}