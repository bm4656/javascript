// // 내부 정보를 은닉하고, 공개 함수(public, 외부)를 통한 데이터 조작을 위해
// // 캡슐화와 정보은닉
// // 클래스 private 필드 또는 메소드를 사용하는 효과와 동일

// function makeCounter() {
//   let count = 0; //내가 은닉하고자 하는 데이터 상태
//   function increase() {
//     count++;
//     console.log(count);
//   }
//   return increase;
// }

// const increase = makeCounter();
// increase();
// increase();
// increase();

// // 하지만 이제는 클래스를 사용하면 된다. 최신JS/TS

// class Counter {
//   #count = 0;
//   increase() {
//     this.#count++;
//     console.log(this.#count);
//   }
// }

// const counter = new Counter();
// counter.increase();
// counter.increase();

function makeCounter() {
  let count = 0;
  function changeBy(val) {
    count += val;
  }
  return {
    increase() {
      changeBy(1);
    },
    decrease() {
      changeBy(-1);
    },
    value() {
      return count;
    },
  };
}
const counter = makeCounter();

console.log(counter.value()); // 0

counter.increase();
counter.increase();
console.log(counter.value());

counter.decrease();
console.log(counter.value());
