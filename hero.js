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

Hero.prototype.sortTasks = function(sortProperty){
  this.tasks.sort(function(a, b) {
    return a[sortProperty] - b[sortProperty];
  });
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
