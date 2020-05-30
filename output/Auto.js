var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Engine = /** @class */ (function () {
    function Engine(horsePower, engineType) {
        this.horsePower = horsePower;
        this.engineType = engineType;
    }
    Engine.prototype.start = function () {
        console.log("Engine Started");
    };
    Engine.prototype.stop = function () {
        console.log("Engine Stopped");
    };
    return Engine;
}());
// making another custom engine class
var CustomEngine = /** @class */ (function () {
    function CustomEngine() {
    }
    CustomEngine.prototype.start = function () {
        console.log("Custom engine Started");
    };
    CustomEngine.prototype.stop = function () {
        console.log("Custom engine stopped");
    };
    return CustomEngine;
}());
var Accessory = /** @class */ (function () {
    function Accessory(assessoryNumber, title) {
        this.assessoryNumber = assessoryNumber;
        this.title = title;
    }
    return Accessory;
}());
var Auto = /** @class */ (function () {
    function Auto(baseprice, engine, make, model) {
        this._engine = engine;
        this._basePrice = baseprice;
        this.make = make;
        this.model = model;
    }
    Auto.prototype.calculateTotal = function () {
        var taxRate = .08;
        return this._basePrice + (taxRate * this._basePrice);
    };
    Auto.prototype.addAccessoryList = function () {
        var accessories = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            accessories[_i] = arguments[_i];
        }
        // we can inject multiple accessory object
        // with a comma at once
        this.accessoryList = '';
        for (var i = 0; i < accessories.length; i++) {
            var ac = accessories[i]; // take each accessory object
            // and then addthe property 
            // and concat to a string 
            this.accessoryList += ac.assessoryNumber + ' ' + ac.title + ' ';
        }
    };
    return Auto;
}());
var auto = new Auto(4000, new CustomEngine(), 'Chevy', 'silverdo');
var total = auto.calculateTotal();
console.log("The total number " + total);
/// applying inheritence
// in the car class
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(baseprice, engine, make, model, bedLength, fourByfour) {
        var _this = 
        // now feed the base constructor what it needs
        _super.call(this, baseprice, engine, make, model) || this;
        _this.bedLength = bedLength;
        _this.fourByFour = fourByfour;
        return _this;
    }
    return Truck;
}(Auto));
var truck = new Truck(4000, new CustomEngine(), 'Chevy', 'silverdo', 'longBed', true);
console.log("Total of the truck " + truck.calculateTotal());
