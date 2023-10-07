// let module1 = require('./module1');
let { add, me } = require('./module1');
let module2 = require('./module2');

console.log(add(4, 2)); //6
console.log(module2.multiply(4, 2)); //8
console.log(me); // 보밍
