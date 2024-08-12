// 파라미터의 기본값
function sayHi(name = 'codeit') {
  console.log(`Hi ${name}`);
};
sayHi('GGON123');
sayHi();

// Arguments, this function accepts a list of arguments
// variable arity
function printArguments() {
  // for each
  for (const argument of arguments) {
    console.log('arg', argument);
  };
};

function printArgumentsV2(...arg2) {
  for (const arg of arg2) {
    console.log('arg2', arg)
  }
}

printArguments(1, 2, 3);
printArgumentsV2(1, 2, 3);

function printRankingList(first, second, ...others) {
  console.log('first', first);
  console.log('second', second);
  console.log('others', others);
  for (const other of others) {
    console.log('other', other);
  };
};

printRankingList('GGON123', 'Jerry', 'Tom', 'Alex')