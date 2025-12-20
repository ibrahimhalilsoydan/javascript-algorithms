export const simpleEvens=(num)=>{
/* 
    const arr =String(num).split("");
    let result=0;

    for (let i=0; i<arr.length;i++){
        
        if(arr[i] % 2 == 0){
            result++
        }else{
            return false
        }
    }



    return true + " => " + result; */

    let result =true;

    num.toString().split('').forEach((n)=>{
        if(n % 2 !=0) result =false;
    })

    return result
}

