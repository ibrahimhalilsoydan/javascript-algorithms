export const snakeCase = (str) => {
  //const newSentence = str.replace(/[^a-zA-Z]/g,"_").toLowerCase()

  const arr = str.split(/[^a-zA-ZçğıöşüÇĞİÖŞÜ]+/);

  return arr.join("_").toLowerCase();
  // return newSentence
};
