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
  if (a.difficulty < b.difficulty)
    return -1;
  if (a.difficulty > b.difficulty)
    return 1;
  return 0;
}

function compareUrgency(a,b) {
  if (a.urgency < b.urgency)
    return -1;
  if (a.urgency > b.urgency)
    return 1;
  return 0;
}

function compareReward(a,b) {
  if (a.reward < b.reward)
    return -1;
  if (a.reward > b.reward)
    return 1;
  return 0;
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

module.exports = Hero;
