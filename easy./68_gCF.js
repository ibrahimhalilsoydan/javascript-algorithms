export const gCF =(arr)=>{

    const [first,second]=arr;

    let cielingValue= Math.min(...arr);
    let divisor =[];


    for(let i= 2;i<=cielingValue;i++){

        if(first%i===0 && second %i === 0) divisor.push(i)
    }


    return Math.max(...divisor)
}