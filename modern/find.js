const devices = [
  {name: 'GalaxyNote', brand: 'Samsung'},
  {name: 'MacbookPro', brand: 'Apple'},
  {name: 'Gram', brand: 'LG'},
  {name: 'SurfacePro', brand: 'Microsoft'},
  {name: 'ZenBook', brand: 'Asus'},
  {name: 'MacbookAir', brand: 'Apple'},
];
// find 여러개가 있으면 위에서 부터 맨처음꺼를 찾는다.
const myLaptop = devices.find (
  (elment, index, array) => {
    console.log('index', index);
    return elment.brand === 'Apple';
  }
);
console.log('mine', myLaptop);

// some: 조건을 만족하는 요소가 1개 이상 있는지/ 값이 아닌 true, false로 반환
const numbers = [1, 3, 5, 7, 9];
const someReturn = numbers.some((element, index, array) => {
  console.log('index', index);
  return element > 5;
});
console.log('some', someReturn);

// every: 조건을 만족하지 않는 요소가 1개 이상 있는지
const everyReturn = numbers.every((element, index, array) => {
  console.log('index', index);
  return element < 5;
});
console.log('every', everyReturn);