const checkAir = function (samples, threshold) {
  let dirtyAir = [];

  for (const sample of samples) {
    if (sample === "dirty") {
      dirtyAir.push(sample);
    }
  }
  dirtyAir = dirtyAir.length / samples.length;
  if (dirtyAir > threshold) {
    return "Polluted";
  } else {
    return "Clean";
  }
};

console.log(
  checkAir(
    [
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
    ],
    0.3
  )
);

console.log(checkAir(["dirty", "dirty", "dirty", "dirty", "clean"], 0.25));

console.log(
  checkAir(["clean", "dirty", "clean", "dirty", "clean", "dirty", "clean"], 0.9)
);
