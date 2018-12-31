'use strict';

class SeaCreature{
  constructor(name, servedWith){
    this.name = name;
    this.servedWith = servedWith;
  }
  seaDweller(){
    return 'I live under the SEA!';
  }
  fished(){
    return 'I am commercially caught';
  }
}

class Fish extends SeaCreature{
  constructor(name){
    super(name, 'served with tartar sauce');
  }
  scaled(){
    return 'I have scales';
  }
}

class Lobster extends SeaCreature{
  constructor(name){
    super(name, 'served with butter and lemon');
  }
  clawed(){
    return 'I have some nasty claws!';
  }
}


module.exports = {Fish, Lobster};


