// Lexical Scope , Static Scope
// 자바스크립트는 렉시컬 스코프 원칙을 따른다.
// 렉시컬 스코프란 함수를 호출한 곳이 아닌 선언한 곳 기준으로 스코프를 결정하는 원칙

let apple = '🍏';

function redApple() {
  let apple = '🍎';
  print();
}

function print() {
  console.log(apple);
}

redApple(); // 예상: "🍎" | 출력값: "🍏"
print(); // 예상: "🍏" | 출력값: "🍏"
