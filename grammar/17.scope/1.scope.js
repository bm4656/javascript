// 코드 블럭: { }, if() { }, for() { }, function() { }
// 블럭 외부에서는 블럭 내부의 변수를 참조할 수 ❌
{
  const a = 'a';
}
// const a = 'a';
console.log(a);

// 함수 외부에서는 함수 내부의 변수를 참조할 수 ❌
function print() {
  const msg = 'Hello World';
  console.log(msg);
}
console.log(msg);

// 함수 외부에서는 함수의 매개변수를 참조 ❌
function sum(a, b) {
  console.log(a, b);
}
console.log(a, b);
