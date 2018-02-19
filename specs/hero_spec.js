const assert = require('assert');
const Hero = require('../hero.js');
const Food = require('../food.js');
const Task = require('../task.js');

describe("Hero Tests", function(){

  let hero1;
  let spam;
  let rabbit;
  let task1;

  beforeEach("Setup", function(){
    hero1 = new Hero("Sir Lancelot the Brave", 100, "Spam");
    spam = new Food("Spam", 50);
    rabbit = new Food("Rabbit", 20);
    task1 = new Task("Find the Holy Grail", 50, 20, 100);
    task2 = new Task("Rescue Prince Herbert from Swamp Castle", 25, 10, 50);
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

  it("should have a collection of tasks, which starts empty", function(){
    assert.deepStrictEqual(hero1.tasks, []);
  });

  it("should be able to add tasks to the tasks collection", function(){
    hero1.tasks.push(task1);
    hero1.tasks.push(task2);
    assert.deepStrictEqual(hero1.tasks, [task1, task2]);
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
  });

})
