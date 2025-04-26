// write a function that returns the character that occurs mot in a string

const maxChars = (str) => {
  const charMap = {};
  let max = 0;
  let maxChar = "";
  for (let char of str) {
    charMap[char] = ++charMap[char] || 1;
  }
  for (let key in charMap) {
    if (charMap[key] > max) {
      (max = charMap[key]), (maxChar = key);
    }
  }
  return maxChar;
};

//Divide an array of chunck size for exzmple ([1,2,3,4,5], 3)
function chunk(array, size) {
  const result = [];
  let index = 0;
  while (index < array.length) {
    result.push(array.slice(index, index + size));
    index += size;
  }
  return result;
}

const capitalizeword = (list) => {
  let newSentence = [];
  let splitWord = list.split(" ");
  for (let word of splitWord) {
    newSentence.push(word.at(0).toUpperCase() + word.slice(1));
  }
  return newSentence.join(" ");
};
capitalizeword("This is a snake");

//anagrams
const charMap = (str) => {
  const charMap = {};
  str = str.toUpperCase().replace(/[\W]/g, "");
  for (let char of str) {
    charMap[char] = ++charMap || 1;
  }
};

function anagrams(stringA, stringB) {
  //build char map for stringA
  const charMapA = charMap(stringA);
  //build char map for stringA
  const charMapB = charMap(stringB);

  //compare each character in the both char maps

  if (Object.keys(charMapA).length !== Object.keys(charMapB).length)
    return false;

  for (let key in charMapA) {
    if (charMapA[key] !== charMapB[key]) return false;
  }
  return true;
}

