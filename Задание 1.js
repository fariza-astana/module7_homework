//Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.

function Mycloth (name) {
    this.name = name,
    this.textile = "cotton"
}

function Cloth (name, price) {
    this.name = name,
    this.price = price
}
Cloth.prototype = new Mycloth()

 const dress =  new Cloth("dress", "45$");
 const shirt = new Cloth("shirt", "20$");

 console.log(dress);
console.log(shirt);