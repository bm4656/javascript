function execute() {
  console.log('1');
  //나에게 3초 뒤에 던져줘~!
  setTimeout(() => {
    console.log('2');
  }, 3000);
  console.log('3');
}

execute();
