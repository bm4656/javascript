function foo(str) {
  console.log(str + this.name);
}
const bar = { name: 'John' };

// call
foo.call(bar, 'hi '); // foo의 this에 bar를 바인딩

//apply
foo.apply(bar, ['hi ']); // foo의 this에 bar를 바인딩

//bind
const newFoo = foo.bind(bar); // foo의 this에 bar를 바인딩한 새로운 함수를 반환
newFoo('hi ');
