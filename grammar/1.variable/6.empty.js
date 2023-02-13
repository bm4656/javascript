// null, undefined
let variable;
console.log(variable); //undifined

variable = null;
console.log(variable); //null

let activeItem; // 아직 활성화된 아이템이 있는지 없는지 모르는 상태
activeItem = null; // 활성화된 아이템이 없는 상태

console.log(typeof null); //object -> X
//타입도 null이며, 값도 null인 Primitive Type이다. js의 오류, 실수 -> 못바꾸는 이유: 이미 많이 사용해서 기존 레거시가 터질 수도 있어서...
console.log(typeof undefined); //undifined
