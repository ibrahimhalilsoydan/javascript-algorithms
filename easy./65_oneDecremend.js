export const oneDecrement =(num)=>{

    let count =0;

    const numStr= num.toString();

    for(let i=1; i<numStr.length;i++){

        if(numStr[i-1] - numStr[i]==1){
            count++
        }
    }


    return count
}