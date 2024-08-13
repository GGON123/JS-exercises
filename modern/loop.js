const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;

// forEach: higher order function 고차함수
numbers.forEach(
  //callback
  function(element, index, array) {
    console.log(element, index, array);
    sum += element;
  }
);
console.log('sum', sum);

sum = 0;
numbers.forEach((element, index, array) => {
  sum += element;
});
console.log('sum', sum);

sum = 0;
numbers.forEach((_, index) => {
  sum += index;
});
console.log('sum', sum);

// 표현식이 아니다.
sum = 0;
const result = numbers.forEach((element, index, array) => {
  sum += element;
});
console.log('result', result); // result undefined


// map
const twiceNumbers = numbers.map(
  (element, intex, array) => {
    return element * 2;
  }
);
console.log('tn', twiceNumbers);

const twiceNumbers2 = numbers.map(
  (element, intex, array) => element * 2
);
console.log('tn2', twiceNumbers2);


// filter
const devices = [
  {name: 'GalaxyNote', brand: 'Samsung'},
  {name: 'MacbookPro', brand: 'Apple'},
  {name: 'Gram', brand: 'LG'},
  {name: 'MacbookAir', brand: 'Apple'}
];
const apples = devices.filter(
  (element, index, array) => {
    return element.brand === 'Apple';
  }  
);
console.log('apples', apples);

// 강사님 미션 filter 심플하게 만들기
const apples2 = devices.filter(element => element.brand === 'Apple');
console.log('apples2', apples2);