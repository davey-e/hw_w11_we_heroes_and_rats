const assert = require('assert');
const Task = require('../task.js');

describe("Task Tests", function(){

  let task1;

  beforeEach("Setup", function(){
    task1 = new Task("Find the Holy Grail", 50, 20, 100);
  });

  it("should have a description", function(){
    assert.strictEqual(task1.description, "Find the Holy Grail");
  });

  it("should have a difficulty level", function(){
    assert.strictEqual(task1.difficulty, 50);
  });

  it("should have an urgency level", function(){
    assert.strictEqual(task1.urgency, 20);
  });

  it("should have a reward", function(){
    assert.strictEqual(task1.reward, 100);
  });

  it("should have a completed status which starts as false", function(){
    assert.strictEqual(task1.completed, false);
  });

  it("should be able to change completed to true", function(){
    task1.markAsComplete();
    assert.strictEqual(task1.completed, true);
  })

})
