//3. Given an array nums of size n, return the majority element. The majority
//element is the element that appears more than ⌊n / 2⌋ times. You may
//assume that the majority element always exists in the array.

const majorityElement = (nums) => {
  let listObject = {};
  let max = 0,
    maxChar = "";

  for (const num of nums) {
    listObject[num] = ++listObject[num] || 1;
  }

  for (key in listObject) {
    if (listObject[key] > max) {
      max = listObject[key];
      maxChar = key;
    }
  }
  return maxChar;
};

majorityElement(["b", "a", "a", "b", 1, 1, 1]);
