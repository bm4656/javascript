# 🌼 Spread Operator

- 완전히 원본 주소와 참조를 끊어주는 방법을 사용해야 내부 프로퍼티 값을 변경하더라도 복사한 원본 객체의 값이 바뀌지 않는다.
- 이 때 원본의 값을 변경시키지 않고, 복사한 객체의 프로퍼티 값만 변경하는 방법 `Spread Operator (...)` 가 있다.

```jsx
let obj = {
  name: 'apple',
};
let obj2 = { ...obj, name: 'orange' };

console.log(obj); //{ name: 'apple' }
console.log(obj2); //{ name: 'orange' }

console.log(obj === obj2); //false
```

- 이제 obj2는 단순히 obj의 주소값을 참조만 하는게 아니라 **새로운 주소값**에 값을 할당하므로 `false`

## 💦 그렇다면 Spread Operator는 얕은 복사? 깊은 복사?

```jsx
let a = [[1], [2], [3]];
let b = [...a];
b.shift().shift(); // 1

console.log(b); //[ [ 2 ], [ 3 ] ]
console.log(a); //[ [], [ 2 ], [ 3 ] ]
```

**[참고](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax):**  Spread 문법은 배열을 복사할 때 1 레벨 깊이에서 효과적으로 동작합니다. 그러므로, 위와 같이 다차원 배열을 복사하는것에는 적합하지 않을 수 있습니다. (`[Object.assign()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)`과 전개 구문이 동일합니다)

💡 **Spread Operator로 복사한 객체(배열)은 1depth의 값에서만 깊은 복사를 실행한다!**
