export const rectangleArea = (arr) => {
  const x1 = arr[0][1];
  const y1 = arr[0][3];

  const x2 = arr[1][1];
  const y2 = arr[1][3];

  const x3 = arr[2][1];
  const y3 = arr[2][3];

  return Math.abs(x1 * y2 + x2 * y3 + x3 * y1 - (y1 * x2 + y2 * x3 + y3 * x1));
};
