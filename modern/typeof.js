console.log('typeof null', typeof null);
console.log('typeof NaN', typeof NaN);
const a = 3 / 0;
console.log('a', a);
console.log('typeof Infinity', typeof Infinity);

// NaN
//b === c
const b = Math.sqrt(-3)
console.log('b', b);
const c = (-3)**(1/2);
console.log('c', c);

// function
function sayHi() {
  console.log('Hi!?');
}
console.log('typeof sayHi', typeof sayHi);

// truthy, falsy
const d = null;
if (!d) {
  console.log('D true');
} else {
  console.log('D false')
};