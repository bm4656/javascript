## 💡 클로저

closure 폐쇄

- 특정한 두가지의 조합(combination) → **함수와 그 외부를 둘러싸고 있는 렉시컬 환경의 조합**이다.
- 자바스크립트에서 클로저는 함수 생성 시 함수가 생성될 때마다 생성된다!
- 내부 함수에서 외부 함수에 있는 상태(스코프)에 접근할 수 있는 권한
  - 그 상태란? 클로저가 생성된 시점의 유효 범위 내에 있는 모든 지역 변수를 말한다.

```tsx
function outer() {
  let outerVar = 0; // outerVar: outer에 의해 생성된 지역 변수
  function inner() {
    // inner(): 내부 함수, 클로저!
    console.log(outerVar); // 부모 함수에서 선언된 변수 사용
  }
  return inner;
}
const func = outer();
func(); // 0
```

- 외부 함수가 실행을 종료한 후에도 내부 함수가 외부 함수의 변수에 접근할 수 있다!
- outer 함수가 실행을 마친 후에도 fun를 호출하면 outer에 접근 가능하다.
- 클로저에 의해서 함수가 리턴이 될 때 Inner 뿐만아니라 이 외부의 있는 outer 렉시컬 환경도 함께 묶여서 클로저로 반환되기 때문에 가능한 것!

> 내부에서 외부를 가리킬 수 있다고 다 클로저라고 할 수 없고 중첩된 함수에서 내부에 있는 함수외 외부의 있는 상태(렉시컬 환경)이 저장되어 있기 때문에 내부함수에서 외부에 있는 렉시컬 환경에 접근하는, 즉 데이터에 접근할 수 있는 이것을 클로저 → 폐쇄된 느낌 닫히는 느낌 내부함수와 외부 환경의 상태가 함꼐 묶이는 닫히는 느낌

## 💦 클로저…근데 어디에 사용해..?

- 정보 은닉화 → private 메서드
- 콜백함수와 이벤트 처리

### private 메서드

- 클래스의 private 필드 또는 메소드를 사용하는 효과를 얻을 수 있다.
- 내부 정보를 은닉하고, 공개 함수를 통한 데이터 조작을 위해 → 캡슐화와 정보 은닉

```tsx
function makeCounter() {
  let count = 0; //내가 은닉하고하는 데이터
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
```

- _코드에 대한 접근을 제한하는 데만 유용_
- _전역 이름 공간을 관리하는 강력한 방법을 제공_
