//for..in 반복문으로 모든 객체의 키 순회
let obj = {
  name: 'apple',
  color: 'green',
  price: '3000₩',
};

for (key in obj) {
  console.log(key + ': ' + obj[key]);
}
// prop에 객체의 프로퍼티 이름이 반환. 단, 순서는 보장❌
for (let prop in obj) {
  console.log(prop + ': ' + obj[prop]);
}
/*
name: apple
color: green
price: 3000₩
*/

let arr = ['one', 'two'];
// index변수에 배열의 경우 인덱스 반환
for (let index in arr) {
  console.log(index + ': ' + arr[index]);
}
/*
0: one
1: two
*/
// 배열 요소들만을 순회하지 않는다.
arr.name = 'myArr';
for (let index in arr) {
  console.log(index + ': ' + arr[index]);
}
/*
0: one
1: two
name: myArr
*/
console.log(arr);
//따라서 배열의 요소 순회할 때는 for..of 사용!
for (let value of arr) {
  console.log(value);
}
/*
one
two
*/
for (const [index, value] of arr.entries()) {
  console.log(index, value);
}
