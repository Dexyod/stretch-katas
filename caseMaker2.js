const makeCase = (input, casing) => {
  let result = "";
  let cases = [];

  if (typeof casing === "string") {
    cases.push(casing);
  } else {
    cases = casing;
  }

  if (cases.length > 1) {
    for (let i = 0; i < cases.length; i++) {
      if (
        cases[i] === "camel" ||
        cases[i] === "pascal" ||
        cases[i] === "snake" ||
        cases[i] === "kebab" ||
        cases[i] === "title"
      ) {
        switch (cases[i]) {
          case "camel":
            result = input.replace(/\W+(.)/g, function (a, c) {
              return c.toUpperCase();
            });
            break;
          case "pascal":
            result = input
              .match(/[a-z]+/gi)
              .map(function (a) {
                return a.charAt(0).toUpperCase() + a.substr(1).toLowerCase();
              })
              .join("");
            break;
          case "snake":
            result = input.replace(/ /g, "_");
            break;
          case "kebab":
            result = input.replace(/ /g, "-");
            break;
          case "title":
            result = input.replace(/\w\S*/g, function (a) {
              return a.charAt(0).toUpperCase() + a.substr(1).toLowerCase();
            });
            break;
        }
      }

      for (let j = 0; j < cases.length; j++) {
        if (cases[j] === "vowel" || cases[j] === "consonant") {
          switch (cases[j]) {
            case "vowel":
              result = result.replace(/[aeiou]/g, function (a) {
                return a.charAt().toUpperCase();
              });
              break;
            case "consonant":
              result = result.replace(/[bcdfghjklmnpqrstvwxyz]/gi, function (
                a
              ) {
                return a.charAt().toUpperCase();
              });
              break;
          }
        }
      }
      for (let k = 0; k < cases.length; k++) {
        if (cases[k] === "upper" || cases[k] === "lower") {
          switch (cases[k]) {
            case "upper":
              result = result.toUpperCase();
              break;
            case "lower":
              result = result.toLowerCase();
              break;
          }
        }
      }
    }
  }
  if (cases.length <= 1) {
    for (let i = 0; i < cases.length; i++) {
      switch (cases[i]) {
        case "upper":
          result += input.toUpperCase();
          break;
        case "lower":
          result += input.toLowerCase();
          break;
        case "vowel":
          result += input.replace(/[aeiou]/g, function (a) {
            return a.charAt().toUpperCase();
          });
          break;
        case "consonant":
          result += input.replace(/[bcdfghjklmnpqrstvwxyz]/gi, function (a) {
            return a.charAt().toUpperCase();
          });
          break;
        case "camel":
          result += input.replace(/\W+(.)/g, function (a, c) {
            return c.toUpperCase();
          });
          break;
        case "pascal":
          result += input
            .match(/[a-z]+/gi)
            .map(function (a) {
              return a.charAt(0).toUpperCase() + a.substr(1).toLowerCase();
            })
            .join("");
          break;
        case "snake":
          result += input.replace(/ /g, "_");
          break;
        case "kebab":
          result += input.replace(/ /g, "-");
          break;
        case "title":
          result += input.replace(/\w\S*/g, function (a) {
            return a.charAt(0).toUpperCase() + a.substr(1).toLowerCase();
          });
          break;
      }
    }
  }

  return result;
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
