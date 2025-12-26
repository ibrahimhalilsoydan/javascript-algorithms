export const twoSum = (nums, target) => {
  let returnValue = "";

  if (nums.length === 2 && nums[0] + nums[1] === target) returnValue = [0, 1];

  const set = [...new Set(nums)];

  for (let i = 0; i < set.length; i++) {
    for (let j = i + 1; j < set.length; j++) {
      if (set[i] + set[j] === target) returnValue = [i, j];
    }
  }

  return returnValue === "" ? false : returnValue;
};


 


/* export const twoSum = (nums, target) => {

 if (nums.length === 2 && nums[0] + nums[1] === target) returnValue = [0, 1];

  // Set yok, doğrudan orijinal dizi (nums) üzerinde geziyoruz
  for (let i = 0; i < nums.length; i++) {
    // j her zaman i'nin bir önünden başlar (kendisiyle toplanmasın diye)
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]; // Orijinal indeksleri direkt döndürür
      }
    }
  }

  return false;
};
 */