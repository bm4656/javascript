let obj = {
  name: 'apple',
};
let obj2 = { ...obj, name: 'orange' };

console.log(obj); //{ name: 'apple' }
console.log(obj2); //{ name: 'apple' }

// obj2.name = 'banana';

// console.log(obj); //{ name: 'banana' }
// console.log(obj2); //{ name: 'banana' }

// console.log(obj == obj2); //true
console.log(obj === obj2); //true
