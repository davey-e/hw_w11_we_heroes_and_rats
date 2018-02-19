const assert = require('assert');
const Food = require('../food.js');

describe("Food Tests", function(){

  let food1;

  beforeEach("Setup", function(){
    food1 = new Food("Spam", 50);
  });

  it("should have a name", function(){
    assert.strictEqual(food1.name, "Spam");
  });

  it("should have a replenishment value", function(){
    assert.strictEqual(food1.replenishmentValue, 50);
  });

  it("should have poisoned status which starts as false", function(){
    assert.strictEqual(food1.poisoned, false);
  })

})
