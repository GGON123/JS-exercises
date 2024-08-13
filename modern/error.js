// throw new TypeError('타입 에러가 났습니다.');
console.log('Start---------------------------');

//에러를 사전에 미리 막고 싶을 때
try {
  //에러가 날 소지가 있는 코드들...
  console.log('try');
  console.log('name', name);
  console.log('try again');
} catch (error) {
  console.log('error', error);
} finally {
  // 항상 실행
  console.log('finally');
}
console.log('End---------------------------');