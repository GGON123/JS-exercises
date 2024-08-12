const a = 3;
const b = {name: 'GGON123', age: 28};
const c = function(name) {
  console.log('Hello ' + name);
};

console.log('c', c);
c('GGON123');

const d = {name: 'GGON123', age: 28,
  hobby: function() {
    console.log('Poke Roque');
    // return 'poke Roque';
  }
};

console.log('d', d);
console.log('d', d.name, d.age);
d.hobby();

// 함수 선언
function myFunction() {
  // 함수 표현식
  return function() {
    console.log('Hi?');
  };
};
const f = myFunction();
console.log('f', f);
f();
