function runInDelay(seconds) {
  // 약속 객체 리턴- 내가 어느 시점에 seconds가 지나서 타임아웃 완료가 되면, 성공적으로 끝났는지 실패인지 내가 알려줄게
  return new Promise((resolve, reject) => {
    if (!seconds || seconds < 0) {
      reject(new Error('seconds가 0보다 작다!'));
    }
    // setTimeout(() => resolve(), seconds * 1000);
    setTimeout(resolve, seconds * 1000);
  });
}

// runInDelay(2)
//   .then(() => console.log('타이머 완료')) //필요한 일을 수행
//   .catch(console.error) //에러를 처리
//   .finally(() => console.log('끝났어!')); //최종적으로 무조건 호출

runInDelay().then(() => console.log('타이머 완료'));
