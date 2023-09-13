console.log(globalThis); //노드에서 사용하는 글로벌 객체 | 브라우저에서는 Window가 전역객체
console.log(this); //현재 모듈에 대한 정보 출력 - JS에서 대체로 전역 객체를 가르킴
console.log(Infinity);
console.log(NaN);
console.log(undefined);

eval('const num = 2; console.log(num)');
console.log(isFinite(1));
console.log(isFinite(Infinity));

console.log(parseFloat('12.43'));
console.log(parseInt('12.43'));
console.log(parseInt('11'));

//URL (URI, Uniform Resource Identifier 하위 개념) 어떤 리소스를 나타낼수 있는 고유한 주소나 아이디를 가리킴
//아스키 문자로만 구성되어야함
//한글이나 특수문자는 이스케이프(정해진 다른 문자로 변환) 처리 해야 한다
const URL = 'https://사이트.com';
const encoded = encodeURI(URL);
console.log(encoded); //https://%EC%82%AC%EC%9D%B4%ED%8A%B8.com

//전체 URL이 아니라 부분적인 것은 Component 이용
const part = '사이트.com';
console.log(encodeURIComponent(part)); //%EC%82%AC%EC%9D%B4%ED%8A%B8.com
