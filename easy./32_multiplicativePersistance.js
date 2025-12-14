export const multiPlicativePersistance = (num) => {
  if (num < 10) return 0;

  let multiOfDigist = multi(num);
  let step = 1;

  while (multiOfDigist > 9) {
    console.log(multiOfDigist);
    step++;
    multiOfDigist = multi(multiOfDigist);
  }

  return `step: ${step} multiOfDigist: ${multiOfDigist}`;
};

const multi = (n) => {
  let multi = 1;

  const arr = n.toString().split("");

  for (let i = 0; i < arr.length; i++) {
    multi *= parseInt(arr[i]);
  }

  return multi;
};
