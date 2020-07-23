const sumLargestNumbers = function (data) {
  let sum = 0;
  let largestNum = 0;
  let secondLargestNum = 0;
  if (data.length > 2) {
    for (let i = 0; i < data.length; i++) {
      if (data[i] > largestNum) {
        secondLargestNum = largestNum;
        largestNum = data[i];
      } else if (data[i] > secondLargestNum && data[i] !== largestNum) {
        secondLargestNum = data[i];
      }
    }
    sum = largestNum + secondLargestNum;
  } else {
    sum = data[0] + data[1];
  }
  return sum;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
