## 🔆 참조 타입

- 원시 타입을 제외한 나머지는 참조 타입 → 객체 Object
- **객체 값을 갖는 변수: 객체의 메모리 주소를 참조한다**
- Object의 데이터 자체는 별도의 메모리 공간(heap)에 저장
- 변수에 할당 시 **데이터에 대한 주소(힙(Heap) 메모리의 주소값)**가 저장
- 자바스크립트 엔진이 변수가 가지고 있는 메모리 주소를 이용해서 변수의 값에 접근!

## 💡 객체의 복사(by reference)

- 객체는 `참조에 의해(by reference)` 저장, 복사
- **변수 obj 엔 객체가 그대로 저장되는 것이 아니라, 객체가 저장되어있는 '메모리 주소’인 객체에 대한 '참조 값’이 저장**

```jsx
// 객체타입은 참조값(메모리주소, 레퍼런스)가 복사되어 전달
let obj = {
  //0x1234
  name: 'apple',
};
let obj2 = obj; //참조값을 복사 - 0x1234

console.log(obj); //{ name: 'apple' }
console.log(obj2); //{ name: 'apple' }

obj2.name = 'banana';

console.log(obj); //{ name: 'banana' }
console.log(obj2); //{ name: 'banana' }
```

- 객체의 값을 복사한 후 프로퍼티의 내용을 변경하고자 할 때
  → **단순히 객체를 복사한 다음 프로퍼티를 수정하면 원본 객체의 프로퍼티까지 변경됨‼️**
- 복사한 객체 obj2는 새로운 값을 할당한 게 아니라 obj **객체의 주소값을 단순히 참조**하고 있기 때문

```jsx
//참조하고 있는 주소값이 같다.
console.log(obj == obj2); //true
console.log(obj === obj2); //true
```

> 이렇게 원래 값과 복사한 값이 같은 주소값을 보고 있으면 **얕은 복사**
