'use strict';
  
const SeaCreature = () => ({
  seaDweller() {
    return 'I live under the SEA!';
  },
  fished(){
    return 'I am commercially caught';
  },
});

function Fish(name){
  let fish = Object.assign(
    {},
    SeaCreature(),
    {name},
    {servedWith: 'served with tartar sauce'},
    {scaled}
  );
  function scaled(){
    return 'I have scales';
  }
  return fish;
}

function Lobster(name){
  let lobster = Object.assign(
    {},
    SeaCreature(),
    {name},
    {servedWith: 'served with butter and lemon'},
    {clawed}
  );
  function clawed(){
    return 'I have some nasty claws!';
  }
  return lobster;
}


module.exports = {Fish, Lobster};

  