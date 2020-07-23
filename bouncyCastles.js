const PI = 3.14159;

const sphereVolume = function (radius) {
  return (4 / 3) * PI * (radius * radius * radius);
};

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  return (1 / 3) * PI * (radius * radius) * height;
};

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  const baseArea = width * depth;
  const volume = baseArea * height;
  return volume;
};

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  let total = 0;
  for (const key in solids) {
    if (solids.hasOwnProperty(key)) {
      const element = solids[key];
      if (element["type"] === "sphere") {
        total += sphereVolume(element["radius"]);
      } else if (element["type"] === "cone") {
        total += coneVolume(element["radius"], element["height"]);
      } else if (element["type"] === "prism") {
        total += prismVolume(
          element["height"],
          element["width"],
          element["depth"]
        );
      }
    }
  }
  return total;
};

const largeSphere = {
  type: "sphere",
  radius: 40,
};

const smallSphere = {
  type: "sphere",
  radius: 10,
};

const cone = {
  type: "cone",
  radius: 3,
  height: 5,
};

const duck = [largeSphere, smallSphere, cone];

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);
