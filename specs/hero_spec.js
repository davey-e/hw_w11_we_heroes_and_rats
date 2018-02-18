const assert = require('assert');
const Hero = require('../hero.js');
const Food = require('../food.js');

describe("Hero Tests", function(){

  let hero1;
  let spam;
  let rabbit;

  beforeEach("Setup", function(){
    hero1 = new Hero("Sir Lancelot the Brave", 100, "Spam");
    spam = new Food("Spam", 50);
    rabbit = new Food("Rabbit", 20);
  });

  it("should have a name", function(){
    assert.strictEqual(hero1.name, "Sir Lancelot the Brave");
  });

  it("should have health", function(){
    assert.strictEqual(hero1.health, 100);
  });

  it("should have a favourite food", function(){
    assert.strictEqual(hero1.favouriteFood, "Spam");
  });

  it("should be able to say their name", function(){
    assert.strictEqual(hero1.sayName(), "Hello, my name is Sir Lancelot the Brave");
  });

  it("should be able to eat food to increase health", function(){
    hero1.eatFood(rabbit);
    assert.strictEqual(hero1.health, 120);
  });

  it("should be able to eat food and increase health by 1.5 times if favourite food", function(){
    hero1.eatFood(spam);
    assert.strictEqual(hero1.health, 175);
  })

})
