export const firstFactorial =(num)=>{

    if(num===1 || num===0) return 1;

    let result = 1;

    for( let i =2; i<= num; i++){
        result *= i;
    }
    return result;
}