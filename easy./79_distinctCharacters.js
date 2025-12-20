export const distinctCharacters = (str) => {
  let charArr = [];

  for (let i = 0; i < str.length; i++) {
    charArr.indexOf(str[i]) == -1 && charArr.push(str[i]);
  }

  return charArr.length >= 10 ? true : false;
};
