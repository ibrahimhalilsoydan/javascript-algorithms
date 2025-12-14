export const arrayAddition = (arr) => {
  /*  let topNum = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > topNum) {
      topNum = arr[i];
    }
  }

  let total = 0;
  arr.forEach((element) => {
    total += element;
  });

  return topNum === (total - topNum); */

  /*  const newArr =[...arr];

  let sum =0;

  const maxValue =Math.max(...arr);

  newArr.splice(arr.indexOf(maxValue),1)

  for(let i=0;i<newArr.length;i++){
    sum +=newArr[i]
  }

  return sum === maxValue */

  /*  arr.sort((a,b)=>a-b);
    let sum =0;
  const maxValue =arr[arr.length-1]

  for(let i=0;i<arr.length-1;i++){
    sum+=arr[i]
  }


  return maxValue === sum ?true:false
*/

    const maxValue = Math.max(...arr);
    let sum =0;

    for(let i=0; i<arr.length;i++){
        sum+=arr[i]
    }


  return sum/2===maxValue?true:false;
};
