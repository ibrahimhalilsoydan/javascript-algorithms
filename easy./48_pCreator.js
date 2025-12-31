export const pCreator = (str) => {
  const strippedStr = str.replace(/[^a-zA-Z]/g, "").toLowerCase();

  if (isPalindrome(strippedStr)) return "The string itself is a palindrome";

  let removedLetters = [];
  let [removed, newArry] = removeLetter(strippedStr);
  removedLetters.push(removed);

  if (isPalindrome(newArry) === true) {
    return removed;
  } else {
    let [removed2, newArry2] = removeLetter(newArry);
    removedLetters.push(removed2);

    if (isPalindrome(newArry2) === true) {
      return removedLetters.join("");
    } else {
      return "Not Palindrome Material";
    }
  }
};

function isPalindrome(word) {
  return word.split("").reverse().join("") === word ? true : false;
}

function removeLetter(str) {
  let it = Math.floor(str.length / 2);
  let arr = str.split("");

  for (let i = 0; i < it; i++) {
    if (str[i] != str[str.length - 1 - i]) {
      arr.splice(i, 1);
      return [str[i], arr.join("")];
    }
  }
}
