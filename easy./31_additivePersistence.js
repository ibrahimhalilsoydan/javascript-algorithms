export const additivePersistence = (num) => {
  if (num < 10) return 0;

  let sumOfDigits = sum(num);
  let steps = 1;

  while (sumOfDigits > 9) {
    console.log(sumOfDigits);
    steps++;
    sumOfDigits = sum(sumOfDigits);
  }

  return `steps:${steps} sumOfDigits: ${sumOfDigits}`;
};

const sum = (n) => {
  let sum = 0;
  const arr = n.toString().split("");
  for (let i = 0; i < arr.length; i++) {
    sum += parseInt(arr[i]);
  }

  return sum;
};
