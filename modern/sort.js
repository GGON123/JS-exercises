const letters = ['D', 'C', 'E', 'B', 'A'];
const numbers = [1, 10, 4, 21, 36000];
// deep copy 배열 복사
const dup = numbers.slice();
console.log('dup', dup);

// sort (mutable 기존배열을 바꾼다. 새로 생기는게 아니다.)
numbers.sort(function(a, b) {
  return a - b;
  }
);
console.log('numbers', numbers);

numbers.sort((a, b) => b - a);
console.log('numbers', numbers);


// reverse (mutable 기존배열을 바꾼다. 새로 생기는게 아니다.)
letters.reverse();
console.log('letters', letters);