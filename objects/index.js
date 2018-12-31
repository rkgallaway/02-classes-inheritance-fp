'use strict';

const Vehicle = require('./vehicle-constructor.js');
const SeaCreature = require('./sea-creature-constructor.js');
// const Vehicle = require('./vehicle-class.js');
// const Vehicle = require('./vehicle-factory.js');

// Implement a car, motorcycle, helicopter, airplane, fish and lobster
const mazda = new Vehicle.Car('Mazda 3');
console.log(mazda.name, mazda.drive(), mazda.stop());

const harley = new Vehicle.Motorcycle('Harley');
console.log(harley.name, harley.wheelie(), harley.stop());

const heli = new Vehicle.Helicopter('Heli');
console.log(heli.name, heli.fly(), heli.land(), heli.skidsUp());

const airy = new Vehicle.Airplane('Airy');
console.log(airy.name, airy.fly(), airy.land(), airy.wheelsUp());

const nemo = new SeaCreature.Fish('Nemo');
console.log(nemo.name, nemo.seaDweller(), nemo.servedWith(), nemo.scaled());

const lobby = new SeaCreature.Lobster('Lobby');
console.log(lobby.name, lobby.seaDweller(), lobby.servedWith(), lobby.clawed());



