// JSON : JavaScript Object Notation
// 서버와 클라이넌트(브라우저, 모바일) 간의 HTTP 통신을위한
// 오브젝트 형태의 텍스트 포맷
// stringify(object): JSON
// parse(JSON): object
const bomin = {
  name: 'bomin',
  age: 24,
  eat: () => {
    console.log('맛있다!');
  },
};
//데이터 상태만 포함, 함수자체는 데이터가 아니니까 변환 안된다!

// 직렬화 Serializing : 객체를 문자열로 변환
const json = JSON.stringify(bomin);
console.log(bomin);
console.log(json);

// 역직렬화 Deserializing: 문자열 데이터를 자바스크립트 객체로 변환
const object = JSON.parse(json);
console.log(object);
