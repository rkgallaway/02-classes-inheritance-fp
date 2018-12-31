'use strict';

const Vehicle = function(name, wheels) {
  this.name = name;
  this.wheels = wheels;
};

Vehicle.prototype.drive = () => {
  return 'Moving Forward';
};

Vehicle.prototype.stop = () => {
  return 'Stopping';
};

// Car Constructor
const Car = function(name) {
  Vehicle.call(this, name, 4);
};

Car.prototype = new Vehicle();

const Motorcycle = function(name) {
  Vehicle.call(this,name,2);
};

Motorcycle.prototype = new Vehicle();

Motorcycle.prototype.wheelie = () => {
  return 'Wheee!';
};

const FlyingVehicle = function(name, wheels){
  this.name = name;
  this.wheels = wheels;
};

FlyingVehicle.prototype.fly = () => {
  return 'In the Air;';
};

FlyingVehicle.prototype.land = () => {
  return 'Back on Land';
};

//Flying Vehicle constuctor
const Helicopter = function(name) {
  FlyingVehicle.call(this, name, 0);
};

Helicopter.prototype = new FlyingVehicle();

Helicopter.prototype.skidsUp = () => {
  return 'Dont try this at home!';
};

const Airplane = function(name) {
  FlyingVehicle.call(this, name, 3);
};

Airplane.prototype = new FlyingVehicle();

Airplane.prototype.wheelsUp = () => {
  return 'give me some room and I can FLY!';
};

module.exports = {Car, Motorcycle, Helicopter, Airplane};
