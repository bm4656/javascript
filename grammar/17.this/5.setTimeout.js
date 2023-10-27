const myArray = ['zero', 'one', 'two'];

myArray.myMethod = function (sProperty) {
  // this[sProperty]가 myArray[sProperty]와 동일함 확인
  console.log(arguments.length > 0 ? this[sProperty] : this);
};
// 여기서 this는 myArray
myArray.myMethod(); // [ 'zero', 'one', 'two', myMethod: [Function (anonymous)] ]
myArray.myMethod(1); // one

// 여기서 this는 window 객체
// 타이머 완료 후 호출 시점에 this가 따로 설정되지 않았기 때문 -> window(global)
setTimeout(myArray.myMethod, 1.0 * 1000); // 1초 후, window
setTimeout(myArray.myMethod, 1.5 * 1000, '1'); //1.5초 후, undefined

// 💡 해결법
// 1. 함수 감싸기
setTimeout(function () {
  myArray.myMethod();
}, 2.0 * 1000); // [ 'zero', 'one', 'two', myMethod: [Function (anonymous)] ]
setTimeout(function () {
  myArray.myMethod('1');
}, 2.5 * 1000); // one

// 2. 화살표 함수
setTimeout(() => {
  myArray.myMethod();
}, 2.0 * 1000); // [ 'zero', 'one', 'two', myMethod: [Function (anonymous)] ]
setTimeout(() => {
  myArray.myMethod('1');
}, 2.5 * 1000); // "one"

// 3. bind
const myBoundMethod = function (sProperty) {
  console.log(arguments.length > 0 ? this[sProperty] : this);
}.bind(myArray);

myBoundMethod(); //  [ 'zero', 'one', 'two', myMethod: [Function (anonymous)] ]
myBoundMethod(1); // one
setTimeout(myBoundMethod, 1.0 * 1000); // [ 'zero', 'one', 'two', myMethod: [Function (anonymous)] ]
setTimeout(myBoundMethod, 1.5 * 1000, '1'); // one
