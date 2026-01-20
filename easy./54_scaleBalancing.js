export const scaleBalancing = (arr) => {
  const [left, right] = returnNumerals(arr[0]);
  const availableWeights = returnNumerals(arr[1]).sort((a, b) => a - b);

  const difference = Math.abs(left - right);

  // 1 Tek ağırlıkla dengeleme
  if (availableWeights.includes(difference)) {
    return difference.toString();
  }

  // 2 İki ağırlığın toplamı ile dengeleme (two-pointer)
  let l = 0;
  let r = availableWeights.length - 1;

  while (l < r) {
    const sum = availableWeights[l] + availableWeights[r];

    if (sum === difference) {
      return `${availableWeights[l]},${availableWeights[r]}`;
    }

    sum > difference ? r-- : l++;
  }

  // 3 İki ağırlığın farkı ile dengeleme
  for (let i = availableWeights.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (availableWeights[i] - availableWeights[j] === difference) {
        return `${availableWeights[i]},${availableWeights[j]}`;
      }
    }
  }

  return "Not possible";
};

const returnNumerals = (str) => {
  const matches = str.match(/\d+/g);
  if (!matches) return [];
  return matches.map(Number);
};
