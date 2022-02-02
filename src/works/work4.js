function primeNum(num) {
  let control = 0;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      control++;
    }
  }
  if (control == 0) {
    return true;
  } else {
    return false;
  }
}

function primeNumList() {
  let primeList = [];
  for (let j = 2; j <= 1000; j++) {
    if (primeNum(j)) {
      primeList.push(j);
    }
  }
  console.log(primeList);
}

primeNumList();
