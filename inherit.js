Function.prototype.inherits = function (Parent){
    function Surrogate() {};
    Surrogate.prototype = Parent.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
}

function MovingObject(name){
    this.name = name;


}

MovingObject.prototype.move = function(){
    console.log("Ship Moving...");
}

function Ship(){
    
}

Ship.inherits(MovingObject);

function Asteroid() {
    console.log("Astroid Moving...");
}

Asteroid.inherits(MovingObject);

const ship = new Ship();
ship.move();

const asteroid = new Asteroid();
asteroid.move();









