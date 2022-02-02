import User from "./user";

// extends User: id, firstName, lastName, city, age User classındada olduğundan bu komut ile tekrar
// yazmamıza gerek kalmaz. super() in içine geçerek tek seferde yazdırabiliriz.
// super() extends ettiğimiz herhangi bir class ın yerine geçer.

export default class Customer extends User{
    constructor(id, firstName, lastName, city, age, creditCardNumber) {
        super(id, firstName, lastName, city, age)
        this.creditCardNumber = creditCardNumber
      }
}