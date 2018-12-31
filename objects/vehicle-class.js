'use strict';

class Vehicle {
  constructor(name, wheels){
    this.wheels = wheels;
    this.name = name;
  }
  drive(){
    return 'Moving Forward';
  }
  stop(){
    return 'Stopping';
  }
}

class Car extends Vehicle{
  constructor(name){
    super(name, 4);
  }
}

class Motorcycle extends Vehicle{
  constructor(name){
    super(name, 2);
  }
  wheelie(){
    return 'Wheee!';
  }
}

class FlyingVehicle{
  constructor(name, wheels){
    this.name = name;
    this.wheels = wheels;
  }
  fly(){
    return 'In the Air;';
  }
  land(){
    return 'Back on Land';
  }
}

class Helicopter extends FlyingVehicle{
  constructor(name){
    super(name, 0);
  }
  skidsUp(){
    return 'Dont try this at home!';
  }
}

class Airplane extends FlyingVehicle{
  constructor(name){
    super(name, 3);
  }
  wheelsUp(){
    return 'give me some room and I can FLY!';
  }
}

module.exports = {Car, Motorcycle, Helicopter, Airplane};
