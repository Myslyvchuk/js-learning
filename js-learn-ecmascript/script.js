/****************************************************************************
 *                 Scope
 ****************************************************************************/
var str = "JavaScript";

for(let i = 0; i < 5; i++) {
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
/****************************************************************************
 *                Promise request
 ****************************************************************************/
const spacePeople = () => {
  return new Promise((resolves, rejects) => {
    const api =
        "http://api.open-notify.org/astros.json";
    const request = new XMLHttpRequest();
    request.open("GET", api);
    request.onload = () => {
      if (request.status === 200) {
        resolves(JSON.parse(request.response));
      } else {
        rejects(Error(request.statusText));
      }
    };
    request.onerror = (err) => rejects(err);
    request.send();
  });
};

spacePeople().then(
    (spaceData) => console.log(spaceData),
    (err) =>
        console.error(new Error("Can't load people"))
);

/****************************************************************************
 *                Fetch function request
 ****************************************************************************/
let getSpacePeople = () =>
    fetch(
        "http://api.open-notify.org/astros.json"
    ).then((res) => res.json());

let spaceNames = () =>
    getSpacePeople()
        .then((json) => json.people)
        .then((people) => people.map((p) => p.name))
        .then((names) => names.join(", "));

spaceNames().then(console.log);


/****************************************************************************
 *                Async await
 ****************************************************************************/

const delay = (seconds) =>
    new Promise((resolves) =>
        setTimeout(resolves, seconds * 1000)
    );

const countToFive = async () => {
  console.log("zero seconds");
  await delay(1);
  console.log("one second");
  await delay(2);
  console.log("two seconds");
  await delay(3);
  console.log("three seconds");
};

countToFive();
/****************************************************************************
 *                Async await fetch
 ****************************************************************************/

const githubRequest = async (login) => {
  let response = await fetch(
      `https://api.github.com/users/${login}`
  );
  let json = await response.json();
  console.log("response")
  let summary = `${json.name}, ${json.company}`;
  console.log(summary);
};
githubRequest("eveporcello");

class Flower {
  constructor(color, quantity) {
    this.color = color;
    this.quantity = quantity;
    this[color] = quantity;
  }
}

let flower = new Flower("blue", 3);

console.log(flower);