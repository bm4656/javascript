# 🔥 객체

> **키(key)과 값(value)으로 구성된 프로퍼티(Property)들의 집합**

- 자바스크립트는 객체(object) 기반의 스크립트 언어
  - 자바스크립트의 객체는 객체지향의 상속을 구현하기 위해 “프로토타입(prototype)” 상속 받음→ 프로토타입은 타 언어와 구별되는 중요한 개념!
  - 객체는 데이터를 의미하는 프로퍼티(property)와 데이터를 참조하고 조작할 수 있는 동작(behavior)을 의미하는 메소드(method)로 구성된 집합 → 데이터와 동작을 하나의 단위로 구조화할 수 있다!
- **자바스크립트를 이루고 있는 거의 “모든 것”**
- 원시 타입을 제외한 나머지 값들(함수, 배열, 정규표현식 등)은 모두 객체

## 💡 프로퍼티(key: value)

- 프로퍼티 키 : 빈 문자열을 포함하는 모든 문자열 또는 symbol 값
- 프로퍼티 값 : 모든 값
- 프로퍼티는 프로퍼티 키로 유일하게 식별할 수 있다.

## 💡 메소드(method)

- 프로퍼티 값이 함수일 경우
- 일반 함수와 구분하기 위해 메소드라 부른다.

```jsx
const apple = {
  name: 'apple',
  display: function () {
    console.log(`${this.name} 🍎`);
  },
};
```

## 💡 객체 생성 방법

- 클래스 기반 객체 지향 언어(ex. Java)는 클래스를 사전에 정의, 필요한 시점에 new 연산자를 사용하여 인스턴스를 생성하는 방식
- 자바스크립트는 프로토타입 기반 객체 지향 언어로서 클래스라는 개념이 없고 별도의 객체 생성 방법이 존재 _→ ES6에 클래스 추가됨(Syntactic sugar)_

## 💡 1. 객체 리터럴

- 가장 일반적인 자바스크립트의 객체 생성 방식이다.

```jsx
let apple = {  //객체
  name: 'apple', // 키: "name",  값: "apple"
	apple_tree: '🌳'
  'bye-icon': '✋',
  0: 1,
  ['good-icon']: '👍',
};
```

- 프로퍼티 추가 가능

```jsx
// 속성 추가
apple.emoji = '🍎';
console.log(apple.emoji);
console.log(apple['emoji']);
```

- `delete`연산자를 사용하면 프로퍼티 삭제 가능

```jsx
// 속성 삭제
delete apple.emoji;
console.log(apple);
```

### 💦 상수 객체는 수정될 수 있다?

- ⚠️ 주의 : `**const`로 선언된 객체는 수정될 수 있다.\*\*
- `const`는 `user`의 값(객체 참조 값)을 고정하지만, **그 내용은 고정하지 않는다.(객체의 내용(프로퍼티) 변경👌)**
- `const`는 `user=...`를 전체적으로 설정하려고 할 때만 오류가 발생.

```jsx
const user = {
  name: 'John',
};

user.name = 'Luna'; // (*)

alert(user.name); // Luna
```

## 💡 2. new Object()

- new 연산자와 **Object 생성자 함수**를 호출하여 빈 객체 생성한 후
- 프로퍼티 또는 메소드를 추가하여 객체 완성한다.

```jsx
// 빈 객체의 생성
let person = new Object();
// 프로퍼티 추가
person.name = 'Kim';
person.gender = 'female';
person.sayHello = function () {
  console.log('Hi! My name is ' + this.name);
};

console.log(typeof person); // object
console.log(person); // {name: "Kim", gender: "female", sayHello: ƒ}

person.sayHello(); // Hi! My name is Kim
```

> 객체 리터럴 방식으로 생성된 객체는 결국 빌트인(Built-in) 함수인 Object 생성자 함수로 객체를 생성하는 것을 단순화시킨 축약 표현(short-hand)이다.

## 💡3. Object.create()

- 생성자 함수를 사용하면 객체를 생성하기 위한 템플릿(클래스)처럼 사용하여 프로퍼티가 동일한 객체 여러 개를 간편하게 생성할 수 있다.

```jsx
// 생성자 함수
function Fruit(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
  // return this; // 생략가능
}

const apple = new Fruit('apple', '🍎');
const orange = new Fruit('orange', '🍊');

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);
apple.display();
```

---

# 🔥 객체 프로퍼티 접근하기

## 🔆 대괄호([]) 표기법

- 객체의 프로퍼티 값에 접근하는 방법

```jsx
apple.name; // 마침표 표기법 dot notation

console.log(apple.bye - icon); //오류!
console.log(apple['bye-icon']); // 특수문자 포함된 키->대괄호 표기법 bracket notation
```

### 🌼 마침표(.) 표기법

- 키가 유효한 식별자인 경우에만 가능
- 유효한 변수 식별자의 경우 공백이 없어야 함
- 숫자로 시작하지 않아야 함
- `$`와 `_`를 제외한 특수문자가 없어야 함

### 🌼 키가 유효한 변수 식별자가 아닌 경우 → 대괄호([]) 표기법

- 점 표기법의 한계를 극복하는 장점
- **키에 어떤 문자열이 있던지 상관없이 동작**
- 문자열 혹은 문자열을 참조하는 변수
- 대괄호 안에 문자열을 **따옴표로 묶어줘야** 함
- 대괄호 표기법은 모든 표현식의 평가 결과를 프로퍼티 키로 사용할 수 있다. → _[computed property](https://ko.javascript.info/object#ref-76)_

### 🌼 Computed Property

- 객체의 key값을 표현식(변수, 함수 등)을 통해 지정

## 🔆 객체 동적으로 할당하기

- 동적으로 속성에 접근하고 싶을때 대괄호 표기법을 사용하면 된다.
- 코드를 실행하는 단계에서 키값을 알고 접근한다.

```jsx
const obj = {
  name: 'Luna',
  age: 20,
};
// 코딩하는 시점에, 정적으로 접근이 확정된다.
obj.name;
obj.age;

// 동적으로 속성에 접근하고 싶을때 대괄호 표기법 사용
function getValue(obj, key) {
  return obj[key];
}
console.log(getValue(obj, 'name'));
```

## 🔆 단축 프로퍼티

- 프로퍼티 이름과 값이 변수의 이름과 동일할 때 축약 가능

```jsx
const x = 0;
const y = 0;
//key, value 같을 때 생략 가능
const obj = { x, y }; //{ x: x, y: y };
console.log(obj);

function makeObj(name, age) {
  return {
    name,
    age,
  };
}
```

## 🔆 프로퍼티 이름의 제약사항

- 변수 이름과 다르게 예약어 사용에 제약이 없다.

```jsx
// 예약어를 키로 사용해도 ok
let obj = {
  for: 1,
  let: 2,
  return: 3,
};
alert(obj.for + obj.let + obj.return); // 6
```

- 문자형이나 심볼형에 속하지 않은 값은 문자열로 자동 형 변환됨
  - ex) 키에 숫자 `0`을 넣으면 문자열 `"0"`으로 자동변환
- 특별대우 `__proto__`

```jsx
let obj = {};
obj.__proto__ = 5; // 숫자를 할당
alert(obj.__proto__); // [object Object]
//-> 숫자를 할당했지만 값은 객체가...무시됐다....
```

## 🔆 ’in’ 연산자

- 해당 key를 가진 프로퍼티가 객체 내에 있는지 확인하고자 할 때
- `"key" in obj`
- 일치 연산자를 `"=== undefined"` 로도 프로퍼티 존재 여부 가능, 하지만

```jsx
let obj = {
  test: undefined,
};

console.log(obj.test); // 값이 `undefined`이므로, undefined가 출력. 그런데 프로퍼티 test는 존재

console.log('test' in obj); // `in`을 사용하면 프로퍼티 유무 제대로 확인(true가 출력).
```

## 🔆 ’for…in’ 반복문

- `for..in` 반복문으로 객체의 모든 키를 순회 가능
- 객체(배열 포함)에 포함된 모든 프로퍼티에 대해 루프를 수행

```jsx
for (key in object) {
  // 각 프로퍼티 키(key)를 이용하여 본문(body)을 실행
}
```

- 배열에는 사용하지 않는 것이 좋음
- 순서를 보장하지 않기 때문 → **배열은 `for..of` 사용하기**

```jsx
//for..in 반복문으로 모든 객체의 키 순회
let obj = {
  name: 'apple',
  color: 'green',
  price: '3000₩',
};

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

//따라서 배열의 요소 순회할 때는 for..of 사용!
for (let value of arr) {
  console.log(value);
}
/*
one
two
*/
```

### 💦 프로퍼티엔 순서가 있을까?

- 객체는 '특별한 방식으로 정렬’된다.
- 정수 프로퍼티(integer property)는 자동으로 정렬
  - 변형 없이 정수에서 왔다 갔다 할 수 있는 문자열
  - 문자열 "49"는 정수로 변환하거나 변환한 정수를 다시 문자열로 바꿔도 변형이 없기 때문에 🅾️
  - 하지만 '+49’와 '1.2’는 ❌
- 그 외의 프로퍼티는 객체에 추가한 순서 그대로 정렬.

```jsx
let user = {
  name: 'John',
  surname: 'Smith',
};
user.age = 25; // 프로퍼티 추가

// 정수 프로퍼티가 아닌 프로퍼티는 추가된 순서대로 나열
for (let prop in user) {
  console.log(prop); // name, surname, age
}

//정수 프로퍼티의 경우
let codes = {
  49: '독일',
  41: '스위스',
  44: '영국',
  // ..,
  1: '미국',
};

for (let code in codes) {
  console.log(code); // 1, 41, 44, 49
}
```

- 나라 번호를 선택하는 화면에서 `49`가 맨 앞에 오도록 하고 싶다?
- 하지만 나라 번호(키)가 정수이어서 `1, 41, 44, 49`순으로 프로퍼티가 자동 정렬…
- 나라 번호가 정수로 취급되지 않도록 속임수를 쓰기! → `+`달기

```jsx
let codes = {
  '+49': '독일',
  '+41': '스위스',
  '+44': '영국',
  // ..,
  '+1': '미국',
};

for (let code in codes) {
  console.log(+code); // 49, 41, 44, 1
  console.log(code); // +49, +41, +44, +1
}
```

https://ko.javascript.info/object#ref-78

https://poiemaweb.com/js-object
