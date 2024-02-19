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