'use strict';

const SeaCreature = function(name, servedWith) {
  this.name = name;
  this.servedWith = servedWith;
};

SeaCreature.prototype.seaDweller = () => {
  return 'I live under the SEA!';
};

SeaCreature.prototype.fished = () => {
  return 'I am commercially caught';
};

//Creature Constructor
const Fish = function(name){
  SeaCreature.call(this, name, 'served with tartar sauce');
};

Fish.prototype = new SeaCreature();

Fish.prototype.scaled = () => {
  return 'I have scales';
};

const Lobster = function(name) {
  SeaCreature.call(this, name, 'served with butter and lemon');
};

Lobster.prototype = new SeaCreature();

Lobster.prototype.clawed = () => {
  return 'I have some nasty claws!';
};

module.exports = {Fish, Lobster};
