const organizeInstructors = function (instructors) {
  let result = {};
  let course;

  for (let i = 0; i < instructors.length; i++) {
    course = instructors[i].course;
    if (course in result) {
      result[course].push(instructors[i].name);
    } else {
      result[course] = [instructors[i].name];
    }
  }

  return result;
};

console.log(
  organizeInstructors([
    { name: "Samuel", course: "iOS" },
    { name: "Victoria", course: "Web" },
    { name: "Karim", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  organizeInstructors([
    { name: "Brendan", course: "Blockchain" },
    { name: "David", course: "Web" },
    { name: "Martha", course: "iOS" },
    { name: "Carlos", course: "Web" },
  ])
);
