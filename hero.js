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

module.exports = Hero;
