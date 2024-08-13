// 배열 구조 분해
const members = ['Kang', 'Myoung', 'Gon'];
const [macbook, ipad, coupon] = members;
console.log(macbook);
console.log(ipad);
console.log(coupon);

// 객체 구조 분해
const macbookPro = {
  title: 'MBP 16',
  price: 400000
};
const {title, price} = macbookPro;
console.log(title, price);
console.log(title);
console.log(price);

const members2 = ['Kang', 'Myoung', undefined, 'Gon', 'GGON'];
const [mac, pad, airpod = 'Jack', ...coupons] = members2;
console.log(mac, pad, airpod, coupons);