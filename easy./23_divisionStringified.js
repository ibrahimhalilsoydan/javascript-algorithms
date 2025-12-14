export const divisionStringified =(n1 ,n2)=>{

    const division =n1/n2;
    let newNum =division/1000

    return (Math.floor(newNum*1000)/1000).toString().replace(".",",")

}