var Engine = /** @class */ (function () {
    function Engine(hoursePower, engineType) {
        this.hoursePower = hoursePower;
        this.engineType = engineType;
    }
    return Engine;
}());
var Car = /** @class */ (function () {
    function Car(engine) {
        // directly set the value
        // can use the 
        this._engine = engine;
    }
    Car.prototype.start = function () {
        console.log("Can engine started " + this._engine.engineType);
    };
    return Car;
}());
// make an object
var engine = new Engine(100, 'volvo');
var car = new Car(engine);
car.start();
