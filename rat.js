const Rat = function(){
}

Rat.prototype.touchFood = function(foodToTouch){
    foodToTouch.makePoisonous();
}

module.exports = Rat;