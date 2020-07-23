const blocksAway = function (directions) {
  let result = {
    east: 0,
    north: 0,
  };
  let taxi = "start";
  for (let i = 0; i < directions.length; i++) {
    if (directions[i] === "right" && taxi === "start") {
      result.east += directions[i + 1];
      taxi = "east";
    } else if (directions[i] === "left" && taxi === "start") {
      result.north += directions[i + 1];
      taxi = "north";
    } else if (directions[i] === "right" && taxi === "east") {
      result.north -= directions[i + 1];
      taxi = "south";
    } else if (directions[i] === "left" && taxi === "east") {
      result.north += directions[i + 1];
      taxi = "north";
    } else if (directions[i] === "right" && taxi === "south") {
      result.east -= directions[i + 1];
      taxi = "west";
    } else if (directions[i] === "left" && taxi === "south") {
      result.east += direction[i + 1];
      taxi = "east";
    } else if (directions[i] === "right" && taxi === "west") {
      result.north += directions[i + 1];
      taxi = "north";
    } else if (directions[i] === "left" && taxi === "west") {
      result.north -= directions[i + 1];
      taxi = "south";
    } else if (directions[i] === "right" && taxi === "north") {
      result.east += directions[i + 1];
      taxi = "east";
    } else if (directions[i] === "left" && taxi === "north") {
      result.east -= directions[i + 1];
      taxi = "west";
    }
  }
  return result;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(
  blocksAway([
    "left",
    1,
    "right",
    1,
    "left",
    1,
    "right",
    1,
    "left",
    1,
    "right",
    1,
  ])
);
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
