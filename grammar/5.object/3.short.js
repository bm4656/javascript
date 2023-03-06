const x = 0;
const y = 0;
//key, value 같을 때 생략 가능
const coordinate = { x, y }; //{ x: x, y: y };
console.log(coordinate);

function makeObj(name, age) {
  return {
    name,
    age,
  };
}
