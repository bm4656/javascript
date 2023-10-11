function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍌');
    }, 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍎');
    }, 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error('no orange'));
}

// 바나나과 사과를 같이 가지고 오기 -> 4초 걸렸어.. 기다렸어..
getBanana() //
  .then((banana) =>
    getApple() //
      .then((apple) => [banana, apple])
  )
  .then(console.log);

//Promise.all 병렬적으로 한번에 모든 Promise를 실행!
Promise.all([getBanana(), getApple()]) //
  .then((fruits) => console.log('all', fruits));

//Promise.race 주어진 Promise 중에 제일 빨리 수행된 것이 이김!
Promise.race([getBanana(), getApple()]) //
  .then((fruit) => console.log('race', fruit));

//Promise.settle 실패하든 성공하든 모든 결과를 묶에서 보여줌.
Promise.allSettled([getBanana(), getApple(), getOrange()]) //
  .then((fruits) => console.log('all-settle', fruits))
  .catch(console.log);
