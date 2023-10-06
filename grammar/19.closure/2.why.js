// 내부 정보를 은닉하고, 공개 함수(public, 외부)를 통한 데이터 조작을 ㅜ이해
// 캡슐화와 정보은닉
// 클래서 private 필드 또는 메소드를 사용하는 효과와 동일

function makeCounter() {
  let count = 0; //내가 은닉하고자 하는 데이터 상태
  function increase() {
    count++;
    console.log(count);
  }
  return increase;
}

const increase = makeCounter();
increase();
increase();
increase();

// 하지만 이제는 클래스를 사용하면 된다. 최신JS/TS
