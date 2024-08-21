import { getEmployees, getMenus } from './asyncFunctions.js';

const promise = []

const employeesPromise = getEmployees();
const menusPromise = getMenus();

promise.push(employeesPromise);
promise.push(menusPromise);

const allPromise = Promise.all(promise);
const result = await allPromise;

const employees = result[0];
const menus = result[1];

console.log('직원 데이터:');
console.log(employees);
console.log('메뉴 데이터:');
console.log(menus);

// console.log('-----------------------------------------------------------');

// // 동시가 아닌 것은 무엇일까?
// // 순차적으로 직원 데이터 -> 메뉴데이터 가져오기!
// const employees = await getEmployees();
// const menus = await getMenus();
// console.log('직원 데이터:');
// console.log(employees);
// console.log('메뉴 데이터:');
// console.log(menus);

// console.log('-----------------------------------------------------------');

// // Promise.then을 쓴다면 응답이 먼저 오는 것부터 먼저 출력된다.
// getEmployees().then(employees => {
//   console.log('직원 데이터:');
//   console.log(employees);
// });

// getMenus().then(menus => {
//   console.log('메뉴 데이터:');
//   console.log(menus);
// });

// console.log('-----------------------------------------------------------');

// // then사용하고 원하는 순서로 만들기
// getEmployees().then(employees => {
//   console.log('직원 데이터:');
//   console.log(employees);
//   getMenus().then(menus => {
//     console.log('메뉴 데이터:');
//     console.log(menus);
//   });
// });

// console.log('-----------------------------------------------------------');