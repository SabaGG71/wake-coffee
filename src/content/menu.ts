// The Wake Coffee & Kitchen menu, from the café's printed menu (screenshots
// Saba shared on 2026-11-12: lunch page "2/4", Craft Beverages, Summer
// Signatures). Names and descriptions are as printed, with three changes:
// - No prices. This is the catering site and every event is quoted.
// - Italic lines are set upright, and "•" lists use "·".
// - Spelling: "Vinegarette" → "Vinaigrette", "Dukes Mayo" → "Duke’s Mayo".
//
// Still to get from Adam: the breakfast page (1/4), the current seasonal list
// (the printed one says "Summer"), what VA and VGA stand for, and whether
// every item can be served at events.

// Two-tone names, the way the printed menu sets them: `accent` prints in teal.
export type Item = { name: string; accent?: string; line?: string }

export const signatures: (Item & { draft?: boolean; flavors?: string[] })[] = [
  {
    name: "Cookie Butter Draft Latte",
    accent: "Cookie Butter",
    draft: true,
    line: "Our signature draft latte featuring espresso, creamy oat milk, and our house-made cookie butter sauce.",
  },
  {
    name: "Wake Signature Lattes",
    accent: "Lattes",
    line: "Double espresso with our house-made syrups and your choice of milk.",
    flavors: ["Vanilla", "Sweet Cinnamon", "Pistachio"],
  },
  {
    name: "Sweet Cinnamon Shaken Espresso",
    accent: "Shaken Espresso",
    line: "Double espresso shaken over ice with house sweet cinnamon syrup and finished with our signature Wake Whitecap.",
  },
  {
    name: "Matcha Latte",
    accent: "Matcha",
    line: "Hand-whisked ceremonial matcha balanced with our house vanilla.",
  },
]

// In the printed column order: the list flows down the first column first.
export const classics: { name: string; note?: string }[] = [
  { name: "House Coffee" },
  { name: "Cold Brew" },
  { name: "Cortado", note: "4oz" },
  { name: "Caramel Latte" },
  { name: "House Lemonade" },
  { name: "Double Espresso" },
  { name: "Americano" },
  { name: "Cappuccino" },
  { name: "Cafe Mocha" },
  { name: "Orange Juice" },
]

export const tea: Item[] = [
  { name: "London Fog", line: "Earl Grey + House Vanilla + Steamed Milk" },
  { name: "Chai Latte", line: "Spiced Chai + Steamed Milk" },
  { name: "Siren Essentials Hot Tea", line: "Black · Green · Rotating Seasonal Teas" },
  { name: "Iced Tea", line: "Green or Black" },
]

// `colors` only paint the flavour swatch, taken from the fruit in the name.
export const riptides = {
  line: "House sparkling energy drinks",
  flavors: [
    { name: "Summer Surge", line: "Strawberry + Watermelon", colors: ["#e5484d", "#6cbf6a"] },
    { name: "Energy Goddess", line: "Golden Turmeric", colors: ["#e3a21a", "#f4d47c"] },
    { name: "Solar Drift", line: "Blood Orange + Mango", colors: ["#c8372d", "#f5a524"] },
    { name: "Paradise", line: "Mango + Coconut + Pineapple", colors: ["#f5a524", "#f3ead8", "#f2d13b"] },
    { name: "Cool Lagoon", line: "Blue Raspberry", colors: ["#2f6fd6", "#82c4f2"] },
    { name: "Sunset Tide", line: "Strawberry + Blood Orange", colors: ["#e5484d", "#ee7a3c"] },
  ],
}

// Printed as "Summer Signatures." The Cookie Butter Draft Latte is on that
// page too; it shows once, at the top, so the page doesn't repeat itself.
export const seasonal = {
  title: "Seasonal signatures",
  line: "Built in our kitchen. Here for the season.",
  items: [
    {
      name: "Banoffee Shaken Espresso",
      accent: "Shaken Espresso",
      line: "Roasted banana and caramelized sugar, finished with our signature Wake Whitecap and graham cracker crumble.",
    },
    {
      name: "Yuzu Vanilla Matcha",
      accent: "Matcha",
      line: "Bright yuzu balanced with smooth house vanilla and ceremonial matcha.",
    },
    {
      name: "Pink Sunset Palmer",
      accent: "Palmer",
      line: "House lemonade blended with our custom Siren Essentials apple, mango, and lychee tea.",
    },
  ] as Item[],
}

export type Diet = "V" | "VA" | "VGA" | "GF" | "GFA"

// VA and VGA are read from how the menu uses them. Adam to confirm.
export const diets: Record<Diet, string> = {
  V: "Vegetarian",
  VA: "Vegetarian available",
  VGA: "Vegan available",
  GF: "Gluten free",
  GFA: "Gluten free available",
}

export type Dish = { name: string; diet?: Diet[]; line: string }

export const salads: Dish[] = [
  {
    name: "House Salad",
    diet: ["V", "VGA", "GF"],
    line: "Spring Mix · Tomato · Pickled Onions · Cucumber · House Creamy Balsamic",
  },
  { name: "Caesar", diet: ["V"], line: "Romaine · Parmesan · Sourdough Croutons · House Caesar Dressing" },
  {
    name: "Apple",
    diet: ["V", "VGA"],
    line: "Spring Mix · Craisins · Goat Cheese · Honeycrisp Apple · Cashews · Apple Cider Vinaigrette",
  },
  {
    name: "Southwest Chopped",
    diet: ["V", "GFA"],
    line: "Lettuce · Tomato · Beans · Corn · Pickled Jalapeno · Red Onion · Ranch · Tortilla Strips · BBQ Sauce",
  },
]

export const saladExtras = ["Add a breaded chicken cutlet or steak", "Make it a wrap"]

export const soups: Dish[] = [
  { name: "Chili", line: "Beef · Cheddar · Cilantro Cream · Sourdough" },
  { name: "Seasonal Soup", line: "Made fresh, rotating" },
]

export const sandwichNote = "Served with Rippers"

export const sandwiches: Dish[] = [
  {
    name: "Egg Salad",
    diet: ["V", "GFA"],
    line: "Hard Boiled Eggs · Relish · Mayonnaise · Seasoning · Toasted Sourdough",
  },
  {
    name: "Parm Crusted Grilled Cheese",
    diet: ["V", "GFA"],
    line: "Brioche Toast · American · Provolone · Mozzarella · Cheddar",
  },
  {
    name: "BLT",
    diet: ["GFA"],
    line: "House-cut thick bacon · Lettuce · Tomato · Red Pepper Aioli · Toasted Sourdough",
  },
  {
    name: "Burger",
    diet: ["GFA"],
    line: "6oz Patty · American Cheese · Lettuce · Tomato · Sauteed Onion · Pickles · WTF Sauce · Brioche",
  },
  {
    name: "Turkey",
    diet: ["VA", "GFA"],
    line: "Fried Avocado · Lettuce · Tomato · Cheddar · Roasted Pepper Mayo · Bastone",
  },
  {
    name: "Chicken Salad",
    diet: ["GFA"],
    line: "Craisins · Honeycrisp Apple · Red Onion · Cashews · Cheddar · Duke’s Mayo · Sourdough",
  },
  {
    name: "Reuben",
    diet: ["GFA"],
    line: "Corned Beef · Swiss · Sauerkraut · Grilled Onions · Pickles · WTF Sauce · Toasted Rye",
  },
  {
    name: "Fried Chicken Sandwich",
    line: "Chicken Breast · Bacon · Provolone · Lettuce · Tomato · Honey Mustard · Brioche",
  },
]

// From the bottom of the printed lunch page. The printed line has a dash
// after "real care"; a colon reads the same.
export const mission = {
  title: "Good Food Doesn’t Lie.",
  line: "At Wake Coffee & Kitchen, our mission is to serve food and coffee that reflect real care: crafted with attention, made from scratch, and rooted in consistency, comfort, and community.",
}

// The sticky section bar. Ids match the sections on /menu.
export const menuNav = [
  {
    label: "Drinks",
    items: [
      { id: "signatures", label: "Signatures" },
      { id: "classics", label: "Classics" },
      { id: "tea", label: "Tea" },
      { id: "riptides", label: "Riptides" },
      { id: "seasonal", label: "Seasonal" },
    ],
  },
  {
    label: "Food",
    items: [
      { id: "salads", label: "Salads" },
      { id: "soup", label: "Soup" },
      { id: "sandwiches", label: "Sandwiches" },
    ],
  },
]
