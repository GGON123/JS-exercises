// Map
const codeit = new Map();
codeit.set('title', 'Inside out 2');
codeit.set(2017, '...');
console.log('codeit', codeit);

// key 값 빼오기
console.log('codeit 2017 key', codeit.get(2017));

// key 유무
console.log(codeit.has('title'));
console.log(codeit.has('name'));

// 요소 개수 반환
console.log(codeit.size);

// 삭제
codeit.delete('title');
console.log(codeit.get('title'));
console.log('codeit', codeit);