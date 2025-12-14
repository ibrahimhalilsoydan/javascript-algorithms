export const thirdGreates=(arr)=>{


    


const thirdLongest = [...arr].sort((a, b) => b.length - a.length)[2];
console.log(thirdLongest);

}