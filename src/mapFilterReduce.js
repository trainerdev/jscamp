// map fonksiyonu

let cart = [
  { id: 1, productName: "Telefon", quantity: 3, unitPrice: 4000 },
  { id: 2, productName: "Bardak", quantity: 2, unitPrice: 30 },
  { id: 3, productName: "Kalem", quantity: 1, unitPrice: 20 },
  { id: 4, productName: "Şarj Cihazı", quantity: 1, unitPrice: 100 },
  { id: 5, productName: "Kitap", quantity: 3, unitPrice: 30 },
  { id: 6, productName: "Pot", quantity: 5, unitPrice: 150 },
];

cart.map((product) => console.log(product.productName));
// map: cart arrayini dönmemizi sağlar, product arraydeki her elemana verilen takma isim,
// (istediğini koyabilirsin) console.log(product.productName): product takma isimli array elemanının,
// productName i ni yazdır.

cart.map((product) => {
  console.log(
    product.productName + " : " + product.unitPrice * product.quantity
  );
});

// reduce fonksiyonu

let total = cart.reduce((acc, product) => acc + product.unitPrice, 0);
// reduce: acc sabit, product takma isim => acc+product ın unit price larını topla,
// acc = 0 (istediğin değerden başlatabilirsin.)

console.log(total);

// filter fonksiyonu

let quantityOver2 = cart.filter((product) => product.quantity > 2);
// filter: cart arrayindeki product ın quantity si 2 den büyük olanları yazdır.

console.log(quantityOver2);

function addToCart(sepet) {
  sepet.push({ id: 7, productName: "Ruhsat", quantity: 1, unitPrice: 20 });
}

addToCart(cart);

console.log(cart);

let sayi = 10;

function sayiTopla(number) {
  number += 1;
}

sayiTopla(sayi);
console.log(sayi);
