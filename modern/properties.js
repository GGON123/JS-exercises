// 전통적인 방식
const user = {
  name: 'GGON',
  age: 28
};
console.log('user.name', user.name);
console.log('user["name"]', user['name']);
console.log('user', user);

const name = 'GGON';
const age = 28;

// New 방식
const user2 = {
  name: name,
  age: age
};
console.log('user2', user2);

const user3 = {
  name,
  age
};
console.log('user3', user3);

// function 생략 전
const user4 = {
  firstName: 'GGON',
  lastName: 'Kang',
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`;
  }
};
console.log('user4 full name', user4.getFullName());
// function 생략 후
const user5 = {
  firstName: 'GGON',
  lastName: 'Kang',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};
console.log('user5 full name', user5.getFullName());

// 속성의 이름도 대괄호를 통해 동적으로 만들 수 있다.
const propertyName = 'birth';
const getJob = () => 'job';
const codeit = {
  ['topic' + 'name']: 'Modern JS',
  [propertyName]: 2017,
  [getJob()]: 'Lecturer'
};
console.log('codeit', codeit);