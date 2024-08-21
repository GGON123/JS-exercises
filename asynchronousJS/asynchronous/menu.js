const response = fetch('https://learn.codeit.kr/api/menus');
// Promise 프라미스 pending 걸려있다. 진행중. 끝난게 아니다.
// 서버를 갔다 오는데 시간이 걸린다.
// 서버에서 응답이 올 때까지 기다리지 않는다.
console.log('response', response);
console.log('--------------------------------');
// 비효율. 1초가 아깝다.
// setTimeout(()=>console.log('response later', response), 1000);
const response2 = await fetch('https://learn.codeit.kr/api/menus');
const menus = await response2.json();
console.log('response2', menus);

