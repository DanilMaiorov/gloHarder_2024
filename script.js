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

// lesson_03_1

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

// lesson_03_2

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

// lesson_05_1
const arr = ["1234", "2345", "3456", "4567", "5678", "6789", "2112"];

/* 1 */
const twoFour = function() {
  let newArr = [];
  arr.forEach(item => {
    if ([2, 4].includes(+item[0])) {
      newArr.push(item);
    }
  });
  return newArr
};
console.log(twoFour());

/* 2 */
const twoFour2 = function(a, b) {
  let newArr2 = [];
  arr.forEach(item => {
    if (item.startsWith(a) ||item.startsWith(b)) {
      newArr2.push(item);
    }
  });
  return newArr2
};
console.log(twoFour2(2, 4));

/* 3 */
let newArr3 = arr.filter(item => {
  if (item[0] === '2' || item[0] === '4')
  return item
});
console.log(newArr3);

// lesson_05_2

const filter = function(arg) {
  for (let i = 2; i < arg; i++) {
    if(arg % i === 0) {
      return false
    }
  }
  return arg !== 1
};

const validNums = function(value) {
  for (let i = 2; i <= value; i++) {
    if(filter(i)) {
      console.log(`Число ${i} - делители этого числа: 1 и ${i}`);
    }
  }
};

// validNums(100);

// lesson_06

const isNumber = function(num) {
  return !isNaN(parseFloat(num)) && isFinite(num)
};

const randomizer = function() {
  return Math.ceil((Math.random() * 100))
};

const message = function(number, answ, tryes) {
  alert(`Загаданное число ${number > answ ? "больше" : "меньше"}, осталось попыток: ${tryes}`);
};

  const messageCounter = function(number) {
    if (number === 10) {
      return `Угадай число от 1 до 100. Попыток в распоряжении: ${number}`
    } else {
      return "Попытайся снова угадать, всего-то от 1 до 100"
    }
  };

let chances = 10;

const numberBot = function(num) {
  let answer = prompt(messageCounter(chances), 50)
  if (answer !== null) {
    if (chances >= 2) {
      if(isNumber(answer)) {
        if (answer > num) {
          chances--;
          message(num, answer, chances);
          numberBot(num);
        } else if (answer < num) {
          chances--;
          message(num, answer, chances);
          numberBot(num);
        } else {
          if (confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?")) {
            chances = 10;
            numberBot(randomizer());
          }
          return alert("всеГО хорошеГО!");
        }
      } else {
        alert("Введено не число");
        numberBot(num);
      }
    } else {
      if(confirm("Попытки закончились, хотите сыграть еще?")) {
        chances = 10;
        numberBot(randomizer());
      } else {
        return
      }
    }
  } else {
    return alert("всеГО хорошеГО!");
  }

};
// numberBot(randomizer());


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

/* lesson_09 */

const par = document.createElement('p');
const par2 = document.createElement('p');
document.body.prepend(par, par2)

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "декабрь"];

const monthsForms = function(str) {
  if (str.slice(-1) === 'т') {
    return str + "a";
  } else {
    return str.replace(str.slice(-1), "я");
  }
};
const zeroAdd = function(num) {
  return num < 10 ? `0${num}` : num;
};

const wordForms = function(value, wordsArr) {
  if (value % 10 === 1 && value % 100 !== 11) {
    return wordsArr[0];
  } else if (value % 10 >= 2 && value % 10 <= 4 && (value % 100 < 10 || value % 100 >= 20)) {
    return wordsArr[1];
  }
  return wordsArr[2];
}

const renderDate = function(forms, task) {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();
  let currentWeekDay = currentDate.getDay();
  const currentHour = currentDate.getHours();
  const currentMinute = currentDate.getMinutes();
  const currentSecond = currentDate.getSeconds();

  if (task === 1) {
    days.forEach((day, i) => {if(currentWeekDay === i) currentWeekDay = day});
    months.forEach((month, i) => {if(currentMonth === i) currentMonth = month});

    return par.textContent = `Сегодня ${currentWeekDay}, ${currentDay} ${monthsForms(currentMonth)} ${currentYear} года, ${currentHour} ${forms(currentHour, ["час", "часа", "часов"])} ${currentMinute} ${forms(currentMinute, ["миинута", "минуты", "минут"])} ${currentSecond} ${forms(currentSecond, ["секунда", "секунды", "секунд"])}`;
  } else {
    return console.log(par2.textContent = `${zeroAdd(currentHour)}:${zeroAdd(currentMinute)}:${zeroAdd(currentSecond)}: ${zeroAdd(currentDay)}.${zeroAdd(currentMonth)}.${currentYear}`);
  }
};

renderDate(wordForms, 1);
renderDate(zeroAdd, 2);

setInterval(() => {
  renderDate(wordForms, 1);
  renderDate(zeroAdd, 2);
}, 1000);
