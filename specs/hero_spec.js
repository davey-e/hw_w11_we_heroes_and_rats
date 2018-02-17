const assert = require('assert');
const Hero = require('../hero.js');

describe("Hero Tests", function(){

  let hero1;

  beforeEach("Setup", function(){
    hero1 = new Hero("Sir Lancelot the Brave", 100);
  });

  it("should have a name", function(){
    assert.strictEqual(hero1.name, "Sir Lancelot the Brave");
  });

  it("should have health", function(){
    assert.strictEqual(hero1.health, 100);
  });

})
