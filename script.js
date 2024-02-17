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
const res2 = 1;

for (let i = 0; i < nums.length; i++) {
  const el = nums[i];
  res2 = res2 * +el
}

multi(res2);
