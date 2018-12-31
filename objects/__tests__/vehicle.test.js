'use strict';

const Vehicle = require('../vehicle-factory.js');

describe('Vehicles', () => {

  describe('Car', () => {
    let car = new Vehicle.Car('foo');
    it('has 4 wheels', () => {
      expect(car.wheels).toEqual(4);
    });
    it('can drive', () => {
      expect(car.drive()).toBeTruthy();
    });
    it('can stop', () => {
      expect(car.stop()).toBeTruthy();
    });
    it('cannot do a wheelie', () => {
      expect(car.wheelie).toBeUndefined();
    });
  });

  describe('Motorcycle', () => {
    let motorcycle = new Vehicle.Motorcycle('foo');
    it('has 2 wheels', () => {
      expect(motorcycle.wheels).toEqual(2);
    });
    it('can drive', () => {
      expect(motorcycle.drive()).toBeTruthy();
    });
    it('can stop', () => {
      expect(motorcycle.stop()).toBeTruthy();
    });
    it('can do a wheelie', () => {
      expect(motorcycle.wheelie()).toBeTruthy();
    });
  });

  describe('Heicopter', () => {
    let helicopter = new Vehicle.Helicopter('foo');
    it('has no wheels, only skids', () => {
      expect(helicopter.wheels).toEqual(0);
    });
    it('can fly', () => {
      expect(helicopter.fly()).toBeTruthy();
    });
    it('can land -I hope!', () => {
      expect(helicopter.land()).toBeTruthy();
    });
    it('takeoff means skids up!', () => {
      expect(helicopter.skidsUp()).toBeTruthy();
    });
  });

  describe('Airplane', () => {
    let airplane = new Vehicle.Airplane('foo');
    it('has 3 wheels', () => {
      expect(airplane.wheels).toEqual(3);
    });
    it('can fly', () => {
      expect(airplane.fly()).toBeTruthy();
    });
    it('can land -I hope!', () => {
      expect(airplane.land()).toBeTruthy();
    });
    it('takeoff means wheels up!', () => {
      expect(airplane.wheelsUp()).toBeTruthy();
    });
  });

});
