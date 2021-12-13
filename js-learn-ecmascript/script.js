/****************************************************************************
 *                 Scope
 ****************************************************************************/
var str = "JavaScript";

for(const i = 0; i < 5; i++) {
  let str = "Ecma";
  console.log("localy" + str);
}

console.log("globaly" + str);

/****************************************************************************
 *                 Spread operator
 ****************************************************************************/

let cats = ["Biscuit", "Jungle"];
let dogs = ["Stella", "Camper"];

let animals = [
  "Smoky",
  "Miro",
  "Swimmy",
  ...cats,
  ...dogs
];

console.log(animals);
/****************************************************************************
 *                 Destructoring
 ****************************************************************************/
let [first, , , , fifth] = [
  "Spokane",
  "Boston",
  "Los Angeles",
  "Seattle",
  "Portland"
];
console.log(first);
console.log(fifth);

/****************************************************************************
 *                 Object spread operator
 ****************************************************************************/
const daytime = {
  breakfast: "oatmeal",
  lunch: "peanut butter and jelly"
};

const nighttime = "mac and cheese";

const backpackingMeals = {
  ...daytime,
  nighttime
};

console.log(backpackingMeals);

/****************************************************************************
 *                 Object destructoring
 ****************************************************************************/
const vacation = {
  destination: "Chile",
  travelers: 2,
  activity: "skiing",
  cost: "so much"
};

function marketing({ destination, activity }) {
  return `Come to ${destination} and do some ${activity}`;
}

console.log(marketing(vacation));

const { title, price } = {
  title: "Reuben",
  price: 7,
  description: "A classic",
  ingredients: [
    "bread",
    "corned beef",
    "dressing",
    "sauerkraut",
    "cheese"
  ]
};

console.log(title);
console.log(price);

