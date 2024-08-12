// console.log('this', this);

function sayHi() {
  console.log('this in function', this);
};
sayHi();

// 일반익명함수에서 this
const user = {
  firstName: 'Tess',
  lastName: 'Jang',
  getFullName: function () {
    return `${this.lastName} ${this.firstName}`;
  }
};
console.log(user.getFullName());

// 화살표함수에서 this
const user2 = {
  firstName: 'Alex',
  lastName: 'Lee',
  getFullName: () => {
    return `${this.lastName} ${this.firstName}`;
  }
};
console.log(user2.getFullName());

// 일반기명함수로 선언 runtime, who calls this method?
function printThis() {
  console.log(this.content);
}

const myObj = {
  content: 'GGON Kang',
  printContent: printThis
}
myObj.printContent();

const otherObj = {
  content: 'Codeit',
  age: 7,
  printContent: printThis
}
otherObj.printContent();



// 혼자 이해하고 연습
function printTHIS() {
  console.log(this.address);
}

const f = {
  name:'GGON123',
  age: 28,
  address: '서울특별시',
  printAddress: printTHIS
};
f.printAddress();