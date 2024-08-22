// npm install date-fns 해야함
import { format } from "date-fns";
const now = new Date();
console.log(now);

const nowDate = format(now, 'MM/dd/yyyy');
console.log(nowDate);