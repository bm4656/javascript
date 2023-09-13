// UTC기준 (협정 세계시, 1970년 1월 1일 UTC 자정과의 시간 차이를 밀리초 단위로 표기)
console.log(new Date());
console.log(new Date('Jun 5, 2022'));
console.log(new Date('2022-12-17T03:24:00'));

console.log(Date.now());
console.log(Date.parse('2022-12-17T03:24:00')); //ms초 단위로

const now = new Date();
now.setFullYear(2023);
now.setMonth(0); // 0: 1
console.log(now.getFullYear());
console.log(now.getDate()); // 0: 1
console.log(now.getDay()); // 0 일요일일부터, 1... 6: 토요일
console.log(now.getTime());
console.log(now);

console.log(now.toString()); //Wed Sep 13 2023 22:36:50 GMT+0900 (Korean Standard Time)
console.log(now.toDateString()); //날짜만 -> Wed Sep 13 2023
console.log(now.toTimeString()); //시간만 -> 22:36:50 GMT+0900 (Korean Standard Time)
console.log(now.toISOString()); // ISO 8601 형식 -> 2023-09-13T13:36:50.764Z
console.log(now.toLocaleString('en-US')); //9/13/2023, 10:36:50 PM
console.log(now.toLocaleString('ko-KR')); //2023. 9. 13. 오후 10:36:50
