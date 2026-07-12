export const FOOD_CATEGORIES = [
  {
    id: "meat",
    items: ["poultry", "pork", "beef", "veal", "game", "lamb", "fish", "seafood"],
  },
  {
    id: "sides",
    items: ["potatoes", "rice", "pasta", "buckwheat", "quinoa", "couscous", "dumplings"],
  },
  {
    id: "dairy",
    items: ["yogurt", "cheese", "cowMilk", "acidophilusMilk"],
  },
  {
    id: "fruitVeg",
    items: [
      "subtropicalFruit",
      "temperateFruit",
      "rootVeg",
      "leafyVeg",
      "fruitingVeg",
      "spinach",
      "lentils",
    ],
  },
  {
    id: "grains",
    items: [
      "barleyFlakes",
      "oatFlakes",
      "cornFlakes",
      "buckwheatFlakes",
      "speltFlakes",
      "ryeFlakes",
    ],
  },
  {
    id: "fats",
    items: ["margarine", "animalButter", "oliveOil", "rapeseedOil", "sunflowerOil", "lard"],
  },
  {
    id: "plantDrinks",
    items: ["soyMilk", "almondMilk", "coconutMilk", "riceMilk", "speltMilk", "oatMilk"],
  },
  {
    id: "bread",
    items: ["buckwheatBread", "wholegrainWheatBread", "wholegrainRyeBread", "whiteBread"],
  },
  {
    id: "other",
    items: ["nuts", "legumes", "eggs", "mushrooms"],
  },
] as const;

export type FoodCategoryId = (typeof FOOD_CATEGORIES)[number]["id"];
export type FoodItemId = (typeof FOOD_CATEGORIES)[number]["items"][number];

export const PREFERENCE_VALUES = ["like", "neutral", "dislike"] as const;
export type PreferenceValue = (typeof PREFERENCE_VALUES)[number];

// Starter list based on common Slovak food allergens/intolerances — NOT a
// verified export from Planeat. Maxim should cross-check and complete this
// against the actual Planeat allergen list before this goes live; the free
// "notes" field on the health step covers anything missing in the meantime.
export const ALLERGENS = [
  "pineapple",
  "peanuts",
  "eggplant",
  "bananas",
  "whiteBread",
  "cowMilkProtein",
  "garlic",
  "citrus",
  "sugar",
  "chickpeas",
  "yeast",
  "beans",
  "grapefruit",
  "peas",
  "beef",
  "pears",
  "mushrooms",
  "apples",
  "strawberries",
  "cocoa",
  "kiwi",
  "corn",
  "chicken",
  "lactose",
  "gluten",
  "poppySeed",
  "almonds",
  "honey",
  "melon",
  "carrot",
  "nuts",
  "tomatoes",
  "bellPepper",
  "parsley",
  "fish",
  "sesame",
  "sunflowerSeeds",
  "soy",
  "eggs",
  "celery",
  "rye",
] as const;
export type AllergenId = (typeof ALLERGENS)[number];
