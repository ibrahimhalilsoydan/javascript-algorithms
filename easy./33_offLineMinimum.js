export const offLineMin =(strArr)=>{

    const [index,freq]= E_Info(strArr);
    const numberArr =strArr.splice(0,index+1).filter(char => char != "E")

    




    return numberArr.sort((a,b) => a-b).splice(0,freq);

    
}


function E_Info(strArr){

    let index ="";
    let freq_E=0;

    for(let i=0;i<strArr.length;i++){
        if(strArr[i]==="E") index=i, freq_E++
    }

    return[index,freq_E]
}