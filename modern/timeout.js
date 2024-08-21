function sayHello() {
  console.log('Hello');
}

console.log('1');
console.log('2');

setTimeout(sayHello, 1000);
setTimeout(()=>console.log('Hi'), 500);

console.log('3');