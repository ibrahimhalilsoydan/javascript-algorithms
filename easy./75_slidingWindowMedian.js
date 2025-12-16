export const slidingWindowMedian = (arr, k) => {
  let median = [];

  for (let i = 0; i < arr.length - (k - 1); i++) {
    median.push(arr.slice(i, i + k).sort((a, b) => a - b)[1]);
  }

  return median.join(",");
};
