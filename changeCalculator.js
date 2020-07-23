const calculateChange = (total, cash) => {
  let change = {};
  let changeDue = cash - total;

  const coinDenom = [
    "twentyDollar",
    "tenDollar",
    "fiveDollar",
    "twoDollar",
    "oneDollar",
    "quater",
    "dime",
    "nickel",
    "penny",
  ];

  const coinValue = [2000, 1000, 500, 200, 100, 25, 10, 5, 1];

  let count;

  for (let i = 0; i < coinValue.length; i++) {
    count = Math.floor(changeDue / coinValue[i]);
    if (count > 0) {
      change[coinDenom[i]] = count;
      changeDue = changeDue % coinValue[i];
    }
  }

  return change;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
