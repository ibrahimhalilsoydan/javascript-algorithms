export const firstReverse =(str)=>{

    const arr =[...str];

    const reverseArr = arr.reverse();
    const lastArr =reverseArr.join("");

    //return str.split("").reverse().join(""); -> aynu sonucu verecektir.
    return lastArr;
}