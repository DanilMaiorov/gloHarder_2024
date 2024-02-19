// lesson_02
let num = 266219;

let nums = num.toString().split('');

const multi = (result) => {
  result = (result ** 3).toString().slice(0,2)
  console.log(result);
}

/* 1 */
const res1 = nums.reduce(function (acc, curr) {
  return (acc * curr)
})

multi(res1);

/* 2 */
let res2 = 1;

for (let i = 0; i < nums.length; i++) {
  const el = nums[i];
  res2 = res2 * +el
}

multi(res2);

// lesson_03


let ruWeek = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
let enWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

let language = prompt("ru", "en");

/* 1 */

if (language == "ru") {
  console.log(ruWeek);
} else {
  console.log(enWeek);
};

/* 2 */

console.log(language);

switch (language) {
  case "ru":
    console.log(ruWeek);
    break;
  default:
    console.log(enWeek);
    break
}

/* 3 */
let weeks = [];

const langs = {
  "ru": 0,
  "en": 1
};

let changedLanguage = langs[language];

weeks.push(ruWeek, enWeek);

console.log(weeks[changedLanguage]);