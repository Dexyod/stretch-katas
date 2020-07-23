const instructorWithLongestName = function (instructors) {
  var longestName = 0;
  var index = 0;
  for (i = 0; i < instructors.length; i++) {
    if (instructors[i].name.length > longestName) {
      longestName = instructors[i].name.length;
      index = i;
    }
  }
  return instructors[index];
};

console.log(
  instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Domascus", course: "Web" },
  ])
);
