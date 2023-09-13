const textObj = new String('Hello World!');
const text = 'Hello World!';
console.log(textObj);
console.log(text);
console.log(text.length);

console.log(text[0]);
console.log(text[1]);
console.log(text[2]);
console.log(text.charAt(0));
console.log(text.charAt(1));
console.log(text.charAt(2));

//몇번째 index인지 반환
console.log(text.indexOf('l'));
console.log(text.lastIndexOf('l')); //뒤에서 부터

//해당 문자열이 포함되는지 -> 대소문자 구분
console.log(text.includes('tx'));
console.log(text.includes('h'));
console.log(text.includes('H'));

//특정 문자열로 시작하는지
console.log(text.startsWith('He'));
console.log(text.endsWith('!'));

//대문자나 소문자로 변환
console.log(text.toUpperCase());
console.log(text.toLowerCase());

//문자열 자르기
console.log(text.substring(0, 2)); //0부터 2번째 인덱스 이전까지 잘라 -> He
console.log(text.slice(2)); //2번째 인덱스부터 잘라낸 애 -> llo World!
console.log(text.slice(-2));

//문자열 공백 제거
const space = '            space       ';
console.log(space.trim());

//문자열 끊어서 배열로 반환
const longText = 'Get to the, point';
console.log(longText.split(' ')); //[ 'Get', 'to', 'the,', 'point' ]
console.log(longText.split(', ', 2)); //[ 'Get to the', 'point' ]
