const conditionalSum = function (values, condition) {
  let even = [];
  let odd = [];
  let sum = 0;
  if (condition === "even") {
    for (const value of values) {
      if (value % 2 === 0) {
        even.push(value);
      }
    }
    for (let i = 0; i < even.length; i++) {
      sum += even[i];
    }
    return sum;
  } else if (condition === "odd") {
    for (const value of values) {
      if (value % 2 !== 0) {
        odd.push(value);
      }
    }
    for (let i = 0; i < odd.length; i++) {
      sum += odd[i];
    }
    return sum;
  }
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
