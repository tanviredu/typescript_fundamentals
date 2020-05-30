///
///<comment> type script starts here</comment>
/// run the tsc server sart coding
///

// defining a class
class Car{
    // defining class variable
    engine:string;
    
    // init the class variable 
    // in the constructtor
    constructor(engine:string){
        this.engine = engine;
    }
    
    
    // then we make some method
    // and no need to use the function keyword
    start(){
        alert("Engine started : "+this.engine);
    }
    stop(){
        alert("Stopping Engine :"+this.engine);
        
    }
}

// now we use simple javascript to show this on wimndow onload
window.onload = function(){
    var car = new Car("Volvo");
    car.start();
    car.stop();
}