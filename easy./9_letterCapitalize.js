 export const letterCapitalize=(str)=>{

    let newStr =[];

    str.split(" ").forEach((part)=>{
        newStr.push(part.charAt(0).toUpperCase()+part.slice(1, part.length));
    })

    return newStr.join(" ");
   
}
   


 

    



