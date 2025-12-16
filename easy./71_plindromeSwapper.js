export const palindromeSwapper =(str)=>{


    if(str === str.split('').reverse().join('')) return "palindrome";

    for(let i =0;i < str.length-1;i++){

        let arr = str.split('')
        let temp1 =arr[i]
        let temp2 = arr[i+1]
        arr[i] = temp2;
        arr[i+1]= temp1;
        const newStr = arr.join('');

        if(newStr === newStr.split('').reverse().join('')) return newStr + " is palindrome";
    }
    
        return -1;
}