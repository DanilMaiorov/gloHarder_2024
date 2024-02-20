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
      console.log(i);
    }
  }
};

validNums(100);