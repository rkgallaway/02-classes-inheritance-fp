'use strict';

const SeaCreature = require('../sea-creature-class.js');

describe('Sea Creatures', () => {

  describe('Fish', () => {
    let fish = new SeaCreature.Fish('foo');
    it('served with tartar sauce', () => {
      expect(fish.servedWith).toEqual('served with tartar sauce');
    });
    it('I live in the sea', () => {
      expect(fish.seaDweller()).toEqual('I live under the SEA!');
    });
    it('I am commercially caught', () => {
      expect(fish.fished()).toEqual('I am commercially caught');
    });
    it('Most fish have scales', () => {
      expect(fish.scaled()).toEqual('I have scales');
    });
  });

  describe('Lobster', () => {
    let lobster = new SeaCreature.Lobster('foo');
    it('served with butter and lemon', () => {
      expect(lobster.servedWith).toEqual('served with butter and lemon');
    });
    it('I live in the sea', () => {
      expect(lobster.seaDweller()).toEqual('I live under the SEA!');
    });
    it('I am commercially caught', () => {
      expect(lobster.fished()).toEqual('I am commercially caught');
    });
    it('Maine lobsters have mean claws', () => {
      expect(lobster.clawed()).toEqual('I have some nasty claws!');
    });
  });
});