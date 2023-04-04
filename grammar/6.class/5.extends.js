// class Tiger {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹자!');
//   }
//   sleep() {
//     console.log('잔다');
//   }
// }

// class Dog {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹자!');
//   }
//   sleep() {
//     console.log('잔다');
//   }
//   play() {
//     console.log('놀자아~!');
//   }
// }

//부모 클래스
class Animal {
  constructor(color) {
    //멤버변수
    this.color = color;
  }
  eat() {
    console.log('먹자!');
  }
  sleep() {
    console.log('잔다');
  }
}

//자식 클래스
class Tiger extends Animal {}
const tiger = new Tiger('노랑이');
console.log(tiger); //Tiger { color: '노랑이' }
tiger.sleep(); //잔다
tiger.eat(); //먹자!

//자식 클래스
class Dog extends Animal {
  constructor(color, ownerName) {
    //부모의 생성자함수 참조
    super(color);
    this.ownerName = ownerName;
  }
  play() {
    console.log('놀자아~!');
  }

  // 오버라이딩 overriding : 덮어쓰기!
  eat() {
    super.eat();
    console.log('강아지가 먹는다!');
  }
}
const dog = new Dog('빨강이', '레드');
console.log(dog); //Dog { color: '빨강이', ownerName: '레드' }
dog.sleep(); //잔다
dog.play(); //놀자아~!
