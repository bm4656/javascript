// 호이스팅

sayHello(); // "Hello, World!"

function sayHello() {
  console.log('Hello, World!');
}

sayHello();
//
// helloVarTop(); //TypeError: helloVar is not a function
// var helloVar = function () {
//   console.log('Hello, World!');
// };

//
var helloVarBottom = function () {
  console.log('Hello, World!');
};

helloVarBottom(); // "Hello, World!"

//
// helloLet(); //ReferenceError: Cannot access 'helloLet' before initialization

// let helloLet = function () {
//   console.log('Hello, World!');
// };

//
let helloLet = function () {
  console.log('Hello, World!'); // "Hello, World!"
};
helloLet();
