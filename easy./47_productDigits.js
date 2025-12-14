export const productDigits =(num)=>{
    
    let multipliers=[];

    for(let i=1;i<=num;i++){
        num % i === 0 && multipliers.push(i)
    }

    let medium =multipliers.length/2;
    
    console.log(multipliers[medium-1]+"-"+multipliers[medium])
    if(multipliers[medium-1]* multipliers[medium]===num){
        console.log(multipliers[medium-1].toString().length+
    multipliers[medium].toString().length)
    }

    return multipliers

}