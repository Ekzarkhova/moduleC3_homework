class ElectricalAppliance {
    constructor(name, power){
        this.name = name;
        this.power = power;
        this.isPlugged = false;
    }

plugIn() {
    console.log(this.name + " is plugged!");
    this.isPlugged = true;
}

unplug() {
    console.log(this.name + " is unplugged!");
    this.isPlugged = false;
}
}

class Telephone extends ElectricalAppliance {
    constructor (name, brand, power, bulbType) {
        super(name, power);
        this.brand = brand;
        this.bulbType = bulbType;
        this.isPlugged = true;
    }
}

class Iron extends ElectricalAppliance {
    constructor(name, brand, power, type, functionality) {
        super(name, power);
        this.brand = brand;
        this.type = type;
        this.functionality = functionality;
        this.isPlugged = false;
    }
}

const tableTelephone = new Telephone("Table Telephone", "Samsung", 2, "Android");

const homeIron = new Iron("Table Iron", "Centek", 220, "portable", "for home");

tableTelephone.unplug();

homeIron.plugIn();

console.log(homeIron)
console.log(tableTelephone)