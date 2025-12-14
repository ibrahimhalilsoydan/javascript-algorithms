export const vowelCount =(str)=>{

 

    let i=0;


    [...str].forEach((letter)=>{
        if((/[a/e/i/o/u/A/E/I/O/U]/).test(letter)){
            i++;
        }
    })

    return i;

/*const vowels = ["a","e","i","o","u"];  // kontrol edeceğin harfler
const lowStr =str.toLowerCase();
let count = 0;

for (const vowel of vowels) {
  for (const char of lowStr) {
    if (char === vowel) {
      count++;
    }
  }
}

return count;*/

/*
export const vowelCount = (str) => {
  if (!str) return 0;
  const vowels = new Set(["a","e","i","o","u"]); // Set -> includes O(1)
  const lowStr = str.toLowerCase();
  let count = 0;

  for (const ch of lowStr) {
    if (vowels.has(ch)) count++;
  }

  return count;
}
*/ 


}