const cutOff = 80;
// ver.1
const passChecker = (score) => {
  if (score > cutOff) {
    return 'Pass!';
  } else {
    return 'Fail!';
  }
};
console.log(typeof passChecker);
console.log(passChecker(75));
//ver.2
const passChecker2 = (score) => {
  return score > cutOff ? 'Pass!' : 'Fail!';
};
console.log(passChecker2(75));
//ver.3
const passChecker3 = (score) => score > cutOff ? 'Pass!' : 'Fail!';
console.log(passChecker3(75));
//ver.4
const passChecker4 = score => score > cutOff ? 'Pass!' : 'Fail!';
console.log(passChecker4(75));