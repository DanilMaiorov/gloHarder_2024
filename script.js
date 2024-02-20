// lesson_05_1
arr = ["1234", "2345", "3456", "4567", "5678", "6789", "2112"];

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


