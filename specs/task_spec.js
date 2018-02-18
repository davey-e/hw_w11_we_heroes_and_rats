const assert = require('assert');
const Task = require('../task.js');

describe("Task Tests", function(){

  beforeEach("Setup", function(){
    task1 = new Task("Find the Holy Grail", "Almost impossible");
  });

  it("should have a description", function(){
    assert.strictEqual(task1.description, "Find the Holy Grail");
  });

  it("should have a difficulty level", function(){
    assert.strictEqual(task1.difficulty, "Almost impossible");
  });

})
