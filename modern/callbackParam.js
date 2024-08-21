function printMessageWithParams(func, name){
  console.log('Printing message...');
  func(name);
}

function sayHello(name) {
  console.log(`Hello ${name}!`);
}

printMessageWithParams(sayHello, 'GGON');

printMessageWithParams( 
  name => console.log(`Hello ${name}!`)
  , 'GGON'
);
// -------------------------------------------------
function forEach(callback, array) {
  for (let elt of array) {
    console.log(callback(elt));
  }
}

const words = ['a', 'b', 'c', 'd'];

function abcd(elt) {
  return elt;
}

forEach(abcd, words);