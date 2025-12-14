export const exOh =(str)=>{

    let oLetter=0;
    let xLetter=0;

    /*bu kısın stryi kısa yoldan arr yapar[...str].forEach((item)=>{
        item === "x" ? xLetter++ : oLetter++;
        })
        
        return xLetter === oLetter ? true :false
        */

    const arr =str.toLowerCase().split('');

    arr.forEach(item => {
        if(item ==="o"){
            oLetter++;
        }else{
            xLetter++;
        }
    });

    return oLetter === xLetter;
    
}
   