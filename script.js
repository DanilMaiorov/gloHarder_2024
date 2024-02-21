// lesson_06

const isNumber = function(num) {
  return !isNaN(parseFloat(num)) && isFinite(num)
};

const randomizer = function() {
  return Math.ceil((Math.random() * 100))
};

const message = function(a, b, c) {
  alert(`Загаданное число ${a > b ? "больше" : "меньше"}, осталось попыток: ${c}`);
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
  // console.log(chances, 'количество попыток');
  // console.log(num, 'рандомное число');
  let answer = prompt(messageCounter(chances), 50)
  // console.log(answer, 'введенное число');
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
numberBot(randomizer());