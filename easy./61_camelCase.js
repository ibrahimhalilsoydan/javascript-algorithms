export const camelCase=(str)=>{
    const lastArr=[]

    const arr = str.split(" ");

    arr.forEach(element => {
        lastArr.push(element[0].toUpperCase()+element.slice(1))
        
    });

    return lastArr.join("")
}