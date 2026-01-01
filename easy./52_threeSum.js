export const threeSum = (arr, target) => {
  arr.sort((a, b) => a - b);

  let subSets = [];

  for (let i = 0; i < arr.length - 2; i++) {
    // Eğer i 0 ise kontrol etme (ilk eleman), değilse bir öncekiyle aynı mı bak.
    if (i === 0 || arr[i] !== arr[i - 1]) {
      let left = i + 1;
      let right = arr.length - 1;

      while (left < right) {
        let currentSum = arr[i] + arr[left] + arr[right];

        if (currentSum > target) {
          right--;
        } else if (currentSum < target) {
          left++;
        } else {
          // Eşleşme bulundu (currentSum === target)
          subSets.push([arr[i], arr[left], arr[right]]);

          // bir sonraki sayı farklı olana kadar ilerle
          while (left < right && arr[left] === arr[left + 1]) left++;

          while (left < right && arr[right] === arr[right - 1]) right--;

          // İşaretçileri kaydır
          left++;
          right--;
        }
      }
    }
  }

  return subSets;
};
