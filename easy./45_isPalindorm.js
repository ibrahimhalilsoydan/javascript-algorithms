export const isPalindrome =(str)=>{

    const clean = str.replace(/[^a-zA-Z]/g, "").toLowerCase();


        const reverseStr =clean.split("").reverse().join("")


        return clean === reverseStr ? true :false
}