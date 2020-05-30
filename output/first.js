///
///<comment> type script starts here</comment>
/// run the tsc server sart coding
///
// defining a class
var Car = /** @class */ (function () {
    // init the class variable 
    // in the constructtor
    function Car(engine) {
        this.engine = engine;
    }
    // then we make some method
    // and no need to use the function keyword
    Car.prototype.start = function () {
        alert("Engine started : " + this.engine);
    };
    Car.prototype.stop = function () {
        alert("Stopping Engine :" + this.engine);
    };
    return Car;
}());
// now we use simple javascript to show this on wimndow onload
window.onload = function () {
    var car = new Car("Volvo");
    car.start();
    car.stop();
};
