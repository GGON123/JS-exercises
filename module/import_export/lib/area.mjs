// 여기에 코드를 작성하세요.
import {PI, add} from './calculator.mjs';

export default function circle(x) { 
  return PI * x * x;
}

export function square(x) {
  return x * x;
}

// export default {
//   circle, // circle: circle,
//   square  // square: square
// }