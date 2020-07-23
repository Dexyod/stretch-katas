const camelCase = function (input) {
  return input.replace(/\W+(.)/g, function (match, char) {
    return char.toUpperCase();
  });
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
