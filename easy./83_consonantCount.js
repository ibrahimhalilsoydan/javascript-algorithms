export const countConsonant =(str)=>{


    let count =0;

    const  regEx =/[^aeiouAEIOU]/

    for(let i= 0; i< str.length;i++){

        regEx.test(str[i]) && count++
    }
    return count;
}