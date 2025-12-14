export const sumMultipliers = (arr) => {
  let sum = 0;
  arr.forEach((element) => {
    sum += element;
  });

  const sorted = [...arr].sort((a, b) => b - a);

  return sorted[0] * sorted[1] > sum * 2 ? true : false;
};
