// 숫자
const n = 1;
console.log('number', n);
// 문자열
const s = 'Hello World';
console.log('String', s);
// Boolean
const b = true;
console.log('boolean', b);
// null
const m = null;
console.log('null', m);
// undefined
const p = undefined;
console.log('nudefined', p);
// 배열
const a = [1, 2, 3];
console.log('array', a);
const a1 = a[1];
console.log('a[1]', a1);
// 객체
const o = {
  name: 'GGON123',
  age: 28,
  address: '서울특별시'
};
console.log('object', o);
// BigInt
const bigint = BigInt(9007199254740993);
console.log('BigInt', bigint);
// Symbol
const user = Symbol(1);
console.log('comparison', user === 1);
console.log('comparison', user === user);
const user2 = user
console.log('comparison', user === user2);

