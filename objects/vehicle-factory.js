'use strict';
  
const Vehicle = () => ({
  drive() {
    return 'Moving Faster';
  },
  stop(){
    return 'Stopping';
  },
});

function Car(name){
  let car = Object.assign(
    {},
    Vehicle(),
    {name},
    {wheels: 4}, 
  );
  return car;
}

function Motorcycle(name){
  let motorcycle = Object.assign(
    {},
    Vehicle(),
    {name},
    {wheels: 2},
    {wheelie}
  );
  function wheelie(){
    return 'Wheee!';
  }
  return motorcycle;
}

const FlyingVehicle = () => ({
  fly() {
    return 'In the Air;';
  },
  land(){
    return 'Back on Land';
  },
});

function Helicopter(name){
  let helicopter = Object.assign(
    {},
    FlyingVehicle(),
    {name},
    {wheels: 0},
    {skidsUp}
  );
  function skidsUp(){
    return 'Dont try this at home!';
  }
  return helicopter;
}

function Airplane(name){
  let airplane = Object.assign(
    {},
    FlyingVehicle(),
    {name},
    {wheels: 3},
    {wheelsUp}
  );
  function wheelsUp(){
    return 'give me some room and I can FLY!';
  }
  return airplane;
}


module.exports = {Car, Motorcycle, Helicopter, Airplane};


