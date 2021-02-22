//Переписать консольное приложение из предыдущего юнита на классы.

class Electrodevice {
    constructor (typeDevice) {
        this.production = "Korea";
        this.usage = "for home";
    }
    getPower (power) {
        return `Power is ${power} w.`
    }
}

class Device extends Electrodevice {
    constructor (size, cost, name, production) {
        super(production);
        this.size = size;
        this.cost = cost;
        this.name = name;
    }
    getPower (power) {
        return super.getPower(power);
    }
}
 const mobile = new Device ("small", "500$", "mobile");
const tv = new Device ("big", "1500$", "tv")

 console.log(mobile);
 console.log(mobile.getPower(25));

console.log(tv);
console.log(tv.getPower(200));

