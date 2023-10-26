'use strict';
/**
 * 글로벌 컨텍스트의 this
 *  - 브라우저: window
 *  - 노드: 모듈
 */
// console.log(this);
// const a = 0;
// module.exports.a = a;
// console.log(this); //{ a: 0 }
// console.log(globalThis); //전역 객체, 생략 가능
// // globalThis.setTimeout()
// // setTimeout()
// console.clear();

/**
 * 함수 내부에서의 this
 * 엄격모드에서는 undefined - 함수 내부 스코프 안에 this 정보가 없기 때문
 * 느슨한 모드에서는 globalThis
 */
function fun() {
  return this;
}
console.log(fun() === globalThis);
console.log(fun() === undefined);

/**
 * 생성자 함수 또는 클래스에서의 this, 앞으로 생성될 인스턴스 자체를 가리킴
 */
function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(this.name);
  };
}
const cat1 = new Cat('냐옹');
const cat2 = new Cat('미야옹');
cat1.printName();
cat2.printName();
