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

// 바나나과 사과를 같이 가지고 오기
// function fetchFruits() {
//   return getBanana() //
//     .then((banana) =>
//       getApple() //
//         .then((apple) => [banana, apple])
//     );
// }

// fetchFruits() //
//   .then((fruits) => console.log(fruits));

async function fetchFruits() {
  const banana = await getBanana();
  const apple = await getApple();
  //async 로 만들어졌기에 이 배열을 resolve 하는 Promise 반환됨
  return [banana, apple];
}

fetchFruits() //
  .then((fruits) => console.log(fruits));
