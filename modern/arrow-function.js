const a = function() {
  console.log('Hello');
};
a();
// 익명함수일 때 function() -> () =>
const b = () => {
  console.log('Hello');
};
b();
// 인수가 하나이면 소괄호 생략가능
const c = number => {
  return number * 2;
};
console.log('c(2)', c(2));
// return 생략 가능
const d = (a, b) => {
  return a + b;
}
const e = (a, b) => a + b;
console.log ('e(1, 2)', e(1, 2));

// 둘 다 일때(인수가 하나고 return일 때)
const cv2 = number => number * 2;
console.log('cv2', cv2(3));

//즉시 실행 함수 (Immediately Invoked Function Expression, IIFE)
(() => {
  console.log('Hi');
})()