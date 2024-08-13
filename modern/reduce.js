const numbers = [1, 2, 3, 4];
let sum = 0;
numbers.forEach(element => {
  sum += element;
});
console.log('sum', sum);

// reduce
const sumAll = numbers.reduce(
  (accumulator, element, index, array) => {
    console.log('accumulator', accumulator);
    return accumulator + element;
  }
  , 0
);
console.log('sumAll', sumAll);

// 강사님의 문제 팩토리얼 4!= 1 * 2 * 3 * 4
// 전통 for문
function factorial(numbers) {
  let total = 1;
  for (let number of numbers) {
    total *= number;
  }
  return total;
}
console.log('factorial', factorial(numbers));

// forEach
let total = 1;
numbers.forEach((element, index, array) => {
  total *= element;
})
console.log('total', total);

// reduce
const factorial2 = numbers.reduce(
  (accumulator, element, index,array) => {
    return accumulator * element;
  }, 1
);
console.log('factorial2', factorial2);