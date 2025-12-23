export const arrayMatching = (arr) => {
  const arr1 = arr[0].match(/[0-9]+/gi);

  const arr2 = arr[1].match(/[0-9]+/gi);

  let longArr = "equel";
  if (arr1.length > arr2.length) longArr = "first";
  if (arr1.length < arr2.length) longArr = "second";

  let newArr = [];

  if (longArr === "equel") newArr = createArr(arr1, arr2, arr1.length);
  if (longArr === "first") newArr = createArr(arr1, arr2, arr2.length, "first");
  if (longArr === "second")
    newArr = createArr(arr1, arr2, arr1.length, "second");

  let result = newArr[0];

  for (let i = 1; i < newArr.length; i++) {
    result = result + "-" + String(newArr[i]);
  }

  return "[" + result + "]";
};

const createArr = (a, b, len, balance = "equel") => {
  let arr = [];

  for (let i = 0; i < len; i++) {
    arr.push(parseInt(a[i]) + parseInt(b[i]));
  }

  if (balance === "equel") return arr;
  if (balance === "first") return arr.concat(a.slice(-(a.length - b.length)));
  if (balance === "second") return arr.concat(b.slice(-(b.length - a.length)));
};
