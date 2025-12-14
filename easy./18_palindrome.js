export const isPalindrome = (str) => {

 /*  const reversed = [...str].reverse().join("");

  for (let i = 0; i < reversed.length; i++) {
    if (reversed[i] === str[i]) {
      return true;
    } else {
      return false;
    }
  } */

    const newStr = str.replace(/ /g, "").toLowerCase();

    return newStr.split('').reverse().join('')=== newStr ? true:false;
};
