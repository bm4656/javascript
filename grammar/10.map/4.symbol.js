// Symbol 심벌
// 유일한 키를 생성할 수 있음 🔑
const map = new Map();
// const key1 = 'key';
// const key2 = 'key';
const key1 = Symbol('key');
const key2 = Symbol('key');
map.set(key1, 'Hello');
console.log(map.get(key1)); //Hello
console.log(map.get(key2)); //undefined
console.log(key1 === key2); //false

// 동일한 이름으로 하나의 키를 사용하고 싶다면, Symbol.for
// 전역 심벌 레지스트리 (Global Symbol Registry)
const k1 = Symbol.for('key');
const k2 = Symbol.for('key');
console.log(k1 === k2); //true

console.log(Symbol.keyFor(k1)); //key
console.log(Symbol.keyFor(key1)); //undefined - 전역 심볼 레지스트리에 관리하지 않기 때문

const obj = { [k1]: 'Hello', [Symbol('key')]: 1 };
console.log(obj);
console.log(obj[k1]);
console.log(obj[Symbol('key')]);
