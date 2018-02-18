const assert = require('assert');
const Hero = require('../hero.js');
const Food = require('../food.js');

describe("Hero Tests", function(){

  let hero1;
  let food1;

  beforeEach("Setup", function(){
    hero1 = new Hero("Sir Lancelot the Brave", 100, "Rabbit");
    food1 = new Food("Spam", 50);
  });

  it("should have a name", function(){
    assert.strictEqual(hero1.name, "Sir Lancelot the Brave");
  });

  it("should have health", function(){
    assert.strictEqual(hero1.health, 100);
  });

  it("should have a favourite food", function(){
    assert.strictEqual(hero1.favouriteFood, "Rabbit");
  });

  it("should be able to say their name", function(){
    assert.strictEqual(hero1.sayName(), "Hello, my name is Sir Lancelot the Brave");
  });

  it("should be able to eat food to increase health", function(){
    hero1.eatFood(food1);
    assert.strictEqual(hero1.health, 150);
  });

})
