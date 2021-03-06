function isPerfect(num) {
  let perfectCount = 0;
  for (let i = 0; i <= num; i++) {
    if (num % i == 0) {
      perfectCount += i;
    }
  }
  if (num * 2 == perfectCount) {
    return true;
  } else {
    return false;
  }
}

function perfectNumList() {
  let pList = [];
  for (let j = 1; j <= 1000; j++) {
    if (isPerfect(j)) {
      pList.push(j);
    }
  }
  console.log(pList);
}

perfectNumList();
