// constructor oluşturucu
// this (this=o yani class ın adı (User)) de firstName diye bir şey oluştur,
// onun adıda firstName olsun. Gibi bir kullanıma sahip.

export default class User {
  constructor(id, firstName, lastName, city, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.city = city;
    this.age = age;
  }
}
