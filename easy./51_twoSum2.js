/* export const twoSum2 = (numArr, target) => {

    numArr.sort((a,b)=> a-b)

  for (let i = 0; i < numArr.length; i++) {
    for (let j = 0; j < numArr.length; j++) {
      if (
         i != j &&
        numArr[i] < numArr[j] &&
        numArr[i] + numArr[j] === target
      ) {
        return `Birinci elemman index ${j}, elemanın degeri :${numArr[j]}\n İkinci elemman index ${i}, elemanın degeri :${numArr[i]}`;
      }
    }
  }

  return numArr;
}; */


export const twoSum2 = (numArr, target) => {
    // Diziyi sıralıyoruz (Orijinal diziyi bozmamak için kopyasını alıp sıralamak daha güvenlidir)
    // [...numArr] syntax'ı dizinin kopyasını oluşturur.
    const sortedArr = [...numArr].sort((a, b) => a - b);
    
    let left = 0; // Başlangıç indeksi
    let right = sortedArr.length - 1; // Bitiş indeksi

    while (left < right) {
        const sum = sortedArr[left] + sortedArr[right];

        if (sum === target) {
            return `Bulundu: ${sortedArr[left]} ve ${sortedArr[right]}`;
        } else if (sum < target) {
            // Toplam küçükse, soldaki sayıyı büyütmemiz lazım
            left++;
        } else {
            // Toplam büyükse, sağdaki sayıyı küçültmemiz lazım
            right--;
        }
    }

    return "Eşleşen çift bulunamadı.";
};