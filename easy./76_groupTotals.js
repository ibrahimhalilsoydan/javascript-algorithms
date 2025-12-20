export const groupTotals =(arr)=>{


    let obj ={};

    for(let i=0;i< arr.length;i++){

        if(arr[i][0] in obj){

            obj[arr[i].split(':')[0]]+=Number(arr[i].split(':')[1])

        }else{
            obj[arr[i].split(':')[0]] =Number(arr[i].split(':')[1])
        }
    }

    let result =[]

    for(let key in obj){
        result.push(key + ":"+ obj[key])

    }

    return result.sort().join(' ');
}