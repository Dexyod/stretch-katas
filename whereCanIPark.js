const whereCanIPark = function (spots, vehicle) {
  let result = [];
  for (let x = 0; x < spots.length; x++) {
    for (let y = 0; y < spots[x].length; y++) {
      if (
        (spots[x][y] === "R" || spots[x][y] === "S" || spots[x][y] === "M") &&
        vehicle === "motorcycle"
      ) {
        result.push(y, x);
        return result;
      } else if (
        (spots[x][y] === "R" || spots[x][y] === "S") &&
        vehicle === "small"
      ) {
        result.push(y, x);
        return result;
      } else if (spots[x][y] === "R" && vehicle === "regular") {
        result.push(y, x);
        return result;
      }
    }
  }
  return false;
};

console.log(
  whereCanIPark(
    [
      // COLUMNS ARE X
      // 0    1    2    3    4    5
      ["s", "s", "s", "S", "R", "M"], // 0 ROWS ARE Y
      ["s", "M", "s", "S", "r", "M"], // 1
      ["s", "M", "s", "S", "r", "m"], // 2
      ["S", "r", "s", "m", "r", "M"], // 3
      ["S", "r", "s", "m", "r", "M"], // 4
      ["S", "r", "S", "M", "M", "S"], // 5
    ],
    "regular"
  )
);

console.log(
  whereCanIPark(
    [
      ["M", "M", "M", "M"],
      ["M", "s", "M", "M"],
      ["M", "M", "M", "M"],
      ["M", "M", "r", "M"],
    ],
    "small"
  )
);

console.log(
  whereCanIPark(
    [
      ["s", "s", "s", "s", "s", "s"],
      ["s", "m", "s", "S", "r", "s"],
      ["s", "m", "s", "S", "r", "s"],
      ["S", "r", "s", "m", "r", "s"],
      ["S", "r", "s", "m", "R", "s"],
      ["S", "r", "S", "M", "m", "S"],
    ],
    "motorcycle"
  )
);
