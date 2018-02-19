const Hero = function(name, health, favouriteFood){
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
  this.tasks = [];
}

Hero.prototype.sayName = function(){
  return "Hello, my name is " + this.name;
}

Hero.prototype.eatFood = function(foodToEat){
  if(foodToEat.name === this.favouriteFood){
    this.health += (foodToEat.replenishmentValue * 1.5);
  } else {
  this.health += foodToEat.replenishmentValue;
  }
}

function compareDifficulty(a,b) {
  return a.difficulty - b.difficulty;
}

function compareUrgency(a,b) {
  return a.urgency - b.urgency;
}

function compareReward(a,b) {
  return a.reward - b.reward;
}

Hero.prototype.sortTasks = function(sortProperty){
  if(sortProperty === "difficulty"){
    this.tasks.sort(compareDifficulty);
  } else if (sortProperty === "urgency"){
    this.tasks.sort(compareUrgency);
  } else if (sortProperty === "reward"){
    this.tasks.sort(compareReward);
  }
}

Hero.prototype.viewTasksByCompletedStatus = function(status){
  const result = this.tasks.filter(function(task){
    if(status === "completed"){
      return task.completed === true;
    } else if(status === "incomplete"){
      return task.completed === false;
    }
  });
  return result;
}

module.exports = Hero;
