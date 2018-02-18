const assert = require('assert');
const Food = require('../food.js');

describe("Food Tests", function(){

  let food1;

  beforeEach("Setup", function(){
    food1 = new Food("Spam");
  });

  it("should have a name", function(){
    assert.strictEqual(food1.name, "Spam");
  });


})
