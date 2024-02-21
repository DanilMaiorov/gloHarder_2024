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




/* let nummm = 50;

let popitka = 10;

const clean = function() {
  let counter = prompt('asd', 1)
  popitka--
  const hands = function() {
    console.log('руки');

  };
  const head = function() {
    console.log('голова');
  };
  const legs = function() {
    console.log('ноги');
  };

  const body = function() {
    hands();
    head();
    legs();
  };
  body();
  console.log(popitka);
  if (popitka > 0) {
    if (counter > 50) {

      console.log('минус попитка 1');
      clean()
    } else if (counter < 50) {

      console.log('минус попитка 2');
      clean()
    } else {
      if (confirm('еще?')) {
        console.log(popitka)
        popitka = 10;
        console.log(popitka)
        clean();
      }
      return console.log('пака чистый');
    }
  } else {

    if(confirm('еще?')) {
      console.log(popitka)
      popitka = 10;
      console.log(popitka)
      clean();
    } else {
      return console.log('пака грязный');
    }
  }
};
clean(); */