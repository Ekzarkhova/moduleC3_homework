function ElectricalAppliance(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
}

ElectricalAppliance.prototype.plugIn = function() {
    console.log(this.name + " is plugged!");
    this.isPlugged = true;
};

ElectricalAppliance.prototype.unplug = function() {
    console.log(this.name + " is unplugged!");
    this.isPlugged = false;
};

// Прибор 1
function Telephone (name, brand, power, bulbType) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.bulbType = bulbType;
    this.isPlugged = true;
}

Telephone.prototype = new ElectricalAppliance();

// Прибор 2
function Iron(name, brand, power, type, functionality) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.type = type;
    this.functionality = functionality;
    this.isPlugged = false;
}

Iron.prototype = new ElectricalAppliance();


const tableTelephone = new Telephone("Table Telephone", "Samsung", 2, "Android");


const homeIron = new Iron("Table Iron", "Centek", 220, "portable", "for home");


tableTelephone.unplug();

homeIron.plugIn();


console.log(homeIron)
console.log(tableTelephone)