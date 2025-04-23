const arraySorter = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j + 1] < array[j]) {
        let swap = array[j + 1];
        array[j + 1] = array[j];
        array[j] = swap;
      }
    }
  }
};

const sortArray = (array) => {
  const arrayObj = { evens: [], odds: [], chars: [] };

  for (const c of array) {
    if (Number(c) % 2 === 0) {
      arrayObj.evens.push(Number(c));
    } else if (Number(c) % 3 === 0) {
      arrayObj.odds.push(Number(c));
    } else {
      arrayObj.chars.push(c);
    }
  }

  for (key in arrayObj) {
    arraySorter(arrayObj[key]);
  }

  return arrayObj;
};

sortArray([2, "10", "15", "8", "3", "c", "a", "p", "h"]);
