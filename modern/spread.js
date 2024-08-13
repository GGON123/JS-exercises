//ver.1 spread
const webPublishing = ['HTML', 'CSS'];
console.log('wp', typeof webPublishing);
const interactiveWeb = [...webPublishing, 'JS'];
console.log('iw', interactiveWeb);

//ver.2
let iw2 = ['JS'];
// unrolling (no loop)
iw2.push('HTML');
iw2.unshift('CSS');
console.log('iw2', iw2);

//ver.3
let iw3 = ['JS'];
for (const web of webPublishing) {
  iw3.unshift(web)
}
console.log('iw3', iw3);

//ver.4
let iw4 = ['JS'];
for (let i = webPublishing.length - 1; i >=0; i--) {
  iw4.unshift(webPublishing[i]);
}
console.log('iw4', iw4);

// spread 여러개
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log('arr3', arr3);

//spread array into object
const members = ['Jay', 'Kay', 'El'];
const newObject = {...members};
console.log('no', newObject);