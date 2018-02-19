const assert = require('assert');
const Rat = require('../rat.js');
const Food = require('../food.js');

describe("Rat Tests", function(){

    let rat1;
    let food1;

    beforeEach("Setup", function(){
        rat1 = new Rat();
        food1 = new Food("Spam", 50);
    });

    it("should be able to touch food and make it poisoned", function(){
        assert.strictEqual(food1.poisoned, false);
        rat1.touchFood(food1);
        assert.strictEqual(food1.poisoned, true);
    })

})