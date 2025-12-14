export const letterCount =(str)=>{


    const arr =str.replace(/[^a-zA-Z ]/g,"").toLowerCase().split(" ");

    let wordObjects=[]

    for(let i=0;i<arr.length;i++){

        let obj={}
        arr[i].split('').forEach((letter) => {
            
            letter in obj ? obj[letter]++:obj[letter]=1
        });

        wordObjects.push(obj);

    }

    let maxFrequencies=[];
    wordObjects.forEach((nesne)=>{
        maxFrequencies.push(Math.max(...Object.values(nesne)));
    });

    let maxValue = Math.max(...maxFrequencies)

    return maxValue < 2 ? -1:(arr[ maxFrequencies.indexOf(maxValue)] ? arr[maxFrequencies.indexOf(maxValue)]: -1)
}
