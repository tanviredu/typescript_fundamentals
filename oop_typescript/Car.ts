class Engine{
     public hoursePower:number;
     public engineType:string;
    
    constructor(hoursePower:number,engineType:string){
        this.hoursePower = hoursePower;
        this.engineType = engineType;
    }
}

class Car{
    // we take a engine type
    private _engine:Engine;
    
    constructor(engine:Engine){
        // directly set the value
        // can use the 
        this._engine = engine;
    }
    
    start(){
        console.log("Can engine started "+this._engine.engineType);
    }
}


// make an object
var engine = new Engine(100,'volvo');
var car = new Car(engine);
car.start();

