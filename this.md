# 💡 this

> this 이것 - JavaScript에서 **`this`** 키워드는 다른 언어와 조금 다르게 동작한다.

- `this`는 앞으로 만들어질 인스턴스나 지금의 객체 자기 자신을 가리키는 **_자기 참조 변수(self-referencing variable)이다._**
- JavaScript에서는 문맥에 따라 this 이것이 가리키는 것이 달라진다.

# 🔆 this 바인딩

> this 바인딩은 this(키워드이지만 식별자 역할을 함)와 this를 가리킬 객체를 바인딩하는 것이다.

- 바인딩이란 식별자(변수)와 값을 연결하는 과정이다.
- this를 사용하면서 나 자신의 인스턴스를 가리키는 것, 특정한 객체와 이 this를 묶어두는 것 등이 this 바인딩이다.
- Java, C#,C++ 등에서는 this 바인딩이 정적으로 결정된다. 즉 한 번 인스턴스를 가리키는 this가 결정이 되면 계속 그 인스턴스만 정적으로 가리킨다.
- JavaScript, typeScript에서 this는 런타임 상에서 함수 호출 방식에 따라 동적으로 this 바인딩이 결정된다. 따라서 개발자가 예상치 못한대로 코드가 흘러갈 수 있다.

# 🔆 문맥에서의 this

- 실행 컨텍스트(global, function 또는 eval)의 프로퍼티는 느슨한 모드에서 항상 객체를 참조하며, 엄격 모드에서는 어떠한 값이든 될 수 있다.

## 🍏 전역 문맥

- 전역 문맥에서 `this`는 엄격 모드 여부에 관계 없이 전역 객체를 참조한다.
- 글로벌 컨텍스트의 this
  - 브라우저: window
  - 노드 : 모듈
  ```tsx
  console.log(this); // {}

  const a = 0;
  module.exports.a = a;
  console.log(this); // { a: 0 }
  console.log(globalThis); //전역 객체
  ```

## 🍎 함수 문맥

- 함수에서의 this는 함수 호출하는 caller에 따라 결정된다.

### 🪀 단순 호출

> 전역 함수, 중첩 함수(nested function)를 일반 함수로 호출하면 함수 내부의 this에는 **전역 객체**가 바인딩된다.

- 느슨한 모드에서는 `globalThis`

```jsx
function f1() {
  return this;
}

// 브라우저
f1() === window; // true

// Node.js
f1() === globalThis; // true
```

- 엄격 모드에서는 `undefined` → 함수 내부 스코프 안에 this 정보가 없기 때문이다.

```jsx
'use strict';

function f2() {
  return this;
}

f2() === undefined; // true
```

### 🪀 생성자로서의 this

- 생성자 함수나 클래스에서의 this는 앞으로 **생성될 인스턴스 자체**를 가리킨다.

```jsx
function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(this.name);
  };
}
const cat1 = new Cat('나비');
const cat2 = new Cat('춘배');
cat1.printName(); // 나비
cat2.printName(); // 춘배
```

### 🪀 객체의 메서드로서

> 함수를 어떤 객체의 메서드로 호출하면 `this`의 값은 그 객체를 사용한다.

- 메서드 내부의 this는 **메서드를 호출한 객체**, 즉 메서드를 호출할 때 메서드 이름 앞의 마침표(.) 연산자 앞에 기술한 객체가 바인딩된다.

```java
const person = {
  name: "Kim",
  getName() {
    // 메서드 내부의 this는 메서드를 호출한 객체에 바인딩
    return this.name;
  },
};

// 메서드 getName을 호출한 객체는 person
console.log(person.getName()); // Kim
```

## 🔓 동적 바인딩

- JavaScript는 누가 **호출**하냐에 따라 this가 달라지는 **dynamic binding**이다.
- 함수가 호출되는 상황 4가지
  - 함수 호출 : 함수 직접 호출
  - 메서드 호출 : 객체의 메서드 호출
  - 생성자 호출 : 생성자 함수를호출
  - 간접 호출 : call, apply 등으로 함수 간접 호출
- **호출 환경에 따라 this는 동적으로 세팅 → 동적 바인딩(dynamic binding)**
- bind, apply, call 등으로 this가 가리키는 것을 조작할 수 있다.

## 🔒 this 고정하기

- javaScript에서 this 바인딩을 고정하는 방법은 다음과 같다.

### 📌 \***\*apply, call, bind 메서드\*\***

- this를 특정 객체에 명시적으로 바인딩하는 방법!

**bind 메서드**

- bind 함수를 이용해서 수동적으로 바인딩 해줄 수 있다.

```jsx
function f() {
  return this.a;
}

let g = f.bind({ a: 'azerty' });
console.log(g()); // azerty

let h = g.bind({ a: 'yoo' }); // bind는 한 번만 동작함!
console.log(h()); // azerty

let o = { a: 37, f: f, g: g, h: h };
console.log(o.a, o.f(), o.g(), o.h()); // 37, 37, azerty, azerty
```

**apply, call 메서드**

- **call** 메서드는 **인수 목록을 받고**, **apply** 메서드는 **인수 배열을 하나** 받는다**.**
  `ex) call(this, var1, var2, var3, …) / apply(this, [ el, el2, el3, … ])`

### 📌 화살표 함수

> 화살표 함수는 생성 시점의 렉시컬 환경에서의 this를 기억하고 고정한다. 즉, 정적 바인딩된다.

- 화살표 함수에서 `this`는 자신을 감싼 정적 범위!
- call, bind, apply를 사용해도 바뀌지 않는다.
- 전역 코드에서 화살표 함수 this → 자신을 감싼 전역 객체

```jsx
let globalObject = this;
let foo = () => this;
console.log(foo() === globalObject); // true
```

- 화살표 함수 밖에서 제일 근접한 스코프를 this가 가리킨다.

```
const obj = {
  method() {
    console.log('context : ', this); // obj
    let f1 = function () {
      console.log('[f1] this : ', this);
    };
    let f2 = () => console.log('[f2] this : ', this);
    **f1(); // global**
    **f2(); // obj -> this는 가장 근접한 스코프 obj 가리킴**
  },
};
o.method();
```

- f1() 실행 시 새로운 컨텍스트 생성 → f1에 바인딩된 컨텍스트 없다 → this는 global 가리킴
- f2()는 함수 컨텍스트 생성 → this 변수는 부모의 컨텍스트 가리킴 → this는 o가 됨
