export const secondGreatLow = (arr) => {
  const shotArr = arr.sort((a, b) => a - b);
  const uniqe = [...new Set(shotArr)];
  const low = [];
  const big = [];

  if (uniqe.length > 2) {
    low.push(uniqe[0], uniqe[1]);
  } else {
    low.push(uniqe[0]);
  }

  if (uniqe.length > 2) {
    const lastTwo = uniqe.slice(-2); // [sondan 2 değer]
    big.push(...lastTwo); // DİKKAT: ... ile düz ekliyoruz
  } else {
    big.push([uniqe[uniqe.length - 1]]);
  }

  return `En büyük  deger(ler): ${big}
En küçük  deger(ler):${low} `;

  // çift deger kontrolü

  /*let newArr =[]
    arr.forEach(num => {
        !newArr.includes(num)&& newArr.push(num)
        
    });
    devamını yazmadım beni yaptıgım daha işlevsel

    // newArr K-B sıralama
    newArr.sort((a,b)=> a-b);



    return newArr*/
};
