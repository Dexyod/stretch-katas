const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  let checkedA = checkIngredients(bakeryA, recipes);
  let checkedB = checkIngredients(bakeryB, recipes);
  let result = "";
  for (let i = 0; i < checkedA.length; i++) {
    for (let j = 0; j < checkedB.length; j++) {
      if (checkedA[i] === checkedB[j]) {
        result += checkedA[i];
      }
    }
  }
  return result;
};
const checkIngredients = (bakery, recipes) => {
  let matchedRecipes = [];
  for (let i = 0; i < bakery.length; i++) {
    for (let j = 0; j < recipes.length; j++) {
      if (
        bakery[i] === recipes[j].ingredients[0] ||
        bakery[i] === recipes[j].ingredients[1]
      ) {
        matchedRecipes.push(recipes[j].name);
      }
    }
  }
  return matchedRecipes;
};

let bakeryA = ["saffron", "eggs", "tomato paste", "coconut", "custard"];
let bakeryB = ["milk", "butter", "cream cheese"];
let recipes = [
  {
    name: "Coconut Sponge Cake",
    ingredients: ["coconut", "cake base"],
  },
  {
    name: "Persian Cheesecake",
    ingredients: ["saffron", "cream cheese"],
  },
  {
    name: "Custard Surprise",
    ingredients: ["custard", "ground beef"],
  },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ["potatoes", "bay leaf", "raisins"];
bakeryB = ["red bean", "dijon mustard", "apples"];
recipes = [
  {
    name: "Potato Ganache",
    ingredients: ["potatoes", "chocolate"],
  },
  {
    name: "Sweet Fish",
    ingredients: ["anchovies", "honey"],
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ["dijon mustard", "raisins"],
  },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
