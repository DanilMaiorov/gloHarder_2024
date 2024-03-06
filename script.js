'use strict';

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
