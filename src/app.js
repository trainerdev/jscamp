console.log("Merhaba Kodlama.io");

let dolarDun = 9.2;
let dolarBugun = 9.3;

{
  let dolarDun = 9.1;
}

console.log(dolarDun);

const euroDun = 11.2; // const ile yapılan tanımlama sabit tanımlamadır değiştirilemez.

console.log(euroDun);

// array
// camelCasing
// PascalCasing
let konutKredileri = [
  "Konut Kredisi",
  "Emlak Konut Kredisi",
  "Kamu Konut Kredisi",
];

console.log("<ul>");
for (let i = 0; i < konutKredileri.length; i++) {
  // for döngüsü, let i = 0 (0 dan başla), i<3 (i 3 den küçükse devam et), i++ her döngüde i yi 1 arttır.
  console.log("<li>" + konutKredileri[i] + "</li>");
}
console.log("</ul>");

console.log(konutKredileri);

function deneme(ar) {
  let control = 0;
  for (let i = 0; i <= ar.length; i++) {
    control += i;
  }
  console.log(control);
}

deneme([1, 2, 3]);
