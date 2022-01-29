// Girilen iki parametre (sayı) nin arkadaş sayı olup olmadığını söyleyen fonksiyon.

function findFriendNum(num1, num2) {
  let list1 = [];
  for (let i = 1; i < num1 / 2 + 1; i++) {
    if (num1 % i == 0) {
      list1.push(i);
    } else {
    }
  }
  const total1 = list1.reduce((acc, i) => {
    return acc + i;
  });
  let list2 = [];
  for (let j = 0; j < num2 / 2 + 1; j++) {
    if (num2 % j == 0) {
      list2.push(j);
    } else {
    }
  }
  const total2 = list2.reduce((acc, j) => {
    return acc + j;
  });

  if ((total1 === num2) & (total2 === num1)) {
    console.log(num1 + " ve " + num2 + " Arkadaş Sayıdır.");
  } else {
    console.log(num1 + " ve " + num2 + " Arkadaş Sayı Değildir.");
  }
}

findFriendNum(220, 284);
