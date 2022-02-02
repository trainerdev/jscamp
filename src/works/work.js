function findPrime(...number) {
  for (let i = 0; i < number.length; i++) {
    let control = 0;
    for (let j = 2; j < number[i]/2+1; j++) {
      if (number[i] % j == 0) {
        control++;
        break;
      }
    }
    if (control == 0) {
      console.log(number[i] + " Bir Asal Sayıdır!");
    } else {
      console.log(number[i] + " Bir Asal Sayı Değildir!");
    }
  }
}

findPrime(15,23,7,9,36,17);
