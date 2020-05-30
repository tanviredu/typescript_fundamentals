var Shapes;
(function (Shapes) {
    // export the class so that it can be used by another
    // module
    var Ractangle = /** @class */ (function () {
        function Ractangle(height, width) {
            this.height = height;
            this.width = width;
        }
        Ractangle.prototype.getArea = function () {
            return this.height * this.width;
        };
        return Ractangle;
    }());
    Shapes.Ractangle = Ractangle;
})(Shapes || (Shapes = {}));
var myprogram;
(function (myprogram) {
    function run() {
        var rect = new Shapes.Ractangle(2, 2);
        var area = rect.getArea();
        console.log(area);
    }
    run();
})(myprogram || (myprogram = {}));
