export const wordCount = (str) =>{

   /*const arr =str.trim().replace(/\s+/g, " ").split(" ");

    let count=0;
    arr.forEach(word => {
        
        count++;
    });

    return count;*/


    return str.trim().replace(/\s+/g, " ").split(" ").length;

}