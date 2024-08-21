import { getInterviews, getEmployees } from './asyncFunctions.js';

function addNewEmployee(employees, interview) {
  const { name, department } = interview;
  const newEmployee = {
    id: employees.length + 1,
    name,
    department,
    email: `${name}@codeitmall.kr`,
  };
  employees.push(newEmployee);
}

// const interviews = await getInterviews();
// const employees = await getEmployees();
// interviews.forEach(interview => {
//   if (interview.result === 'pass') {
//     addNewEmployee(employees, interview);
//   }
// });
// console.log(employees);

const interviews = await getInterviews();
const employees = await getEmployees();
// chaining 체이닝
const checkPass = interview => interview.result === 'pass';
const hire = interview => addNewEmployee(employees, interview);
interviews.filter(checkPass)  .forEach(hire);
console.log(employees);