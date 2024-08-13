// Set
const members = new Set();
members.add('Jay');
members.add('Kay');
members.add('El');
// set.has(value): Set 안에 값이 존재하면 true, 아니면 false를 반환하는 메소드
console.log(members.has('El'));
console.log(members.has('Jason'));
// set.size: 요소의 개수를 반환하는 프로퍼티.
console.log(members.size);

for (const member of members) {
  console.log(member);
}

members.forEach(member => {console.log(member);});

members.delete('El');
console.log(members.size);

members.clear();
console.log(members.size);

// Set은 중복을 없애준다.
const numbers = [1, 3, 4, 3, 3, 3, 2, 1, 1, 1, 5, 5, 3, 2, 1, 4];
console.log('numbers', numbers);
const uniqNumbers = new Set(numbers);
console.log('uN', uniqNumbers); // Set(5) {1, 3, 4, 2, 5}