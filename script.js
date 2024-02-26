'use strict';
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

// lesson_03 - 1

const ruWeek = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
const enWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

let language = prompt("ru", "en");

/* 1 */
if (language == "ru") {
  console.log(ruWeek);
} else {
  console.log(enWeek);
};

/* 2 */
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

// lesson_03 - 2

let namePerson = prompt("Кто?", "Артем")

namePerson === "Артем" ? console.log("директор") : namePerson === "Александр" ? console.log("преподаватель") : console.log("студент");


//lesson_04

let newString = "Внутри одного тернарного оператора можно написать другой";

const stringCheck = function(data) {
  return typeof data === 'string' || data instanceof String
};

const trimmer = function(str, call) {
  let trimStr = str.trim();
  return call(str) ? console.log(trimStr.length <= 30 ? trimStr : trimStr.slice(0, 27) + "...") : console.log("Не строка")
};

trimmer(newString, stringCheck);




//lesson_07

let box = document.querySelector(".container");

let date = new Date();
const currentDay = date.getDay();
console.log(currentDay);
const week = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

const newWeek = week.map(function (item, index) {
  if(item === "суббота" || item === "воскресенье") {
    if (index == 6) {
      return `<span style="font-style: italic;" data-index="${0}">${item}</span>`
    } else {
      return `<span style="font-style: italic;" data-index="${index + 1}">${item}</span>`
    }
  } else {
    return `<span data-index="${index + 1}">${item}</span>`
  }
})

newWeek.forEach(item => {
  const oneDay = document.createElement('div');
  oneDay.innerHTML = item;
  box.append(oneDay)
})

document.querySelectorAll('span').forEach(function(item) {
  if (+item.dataset.index === currentDay) {
    item.style.fontWeight = "bold";
  }
})