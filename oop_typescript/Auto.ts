class Engine{
    
    public horsePower:number;
    public engineType:string;
    constructor(horsePower:number,engineType:string){
        this.horsePower = horsePower;
        this.engineType = engineType; 
    }
    
    start(){
        console.log("Engine Started");
    }
    
    stop(){
        console.log("Engine Stopped");
    }
}


class Accessory{
    public assessoryNumber:number;
    public title:string;
    
    constructor(assessoryNumber:number,title:string){
        this.assessoryNumber = assessoryNumber;
        this.title = title;
    }
    
}

class Auto{
    
    private _basePrice:number;
    private _engine:Engine;
    make:string;
    model:string;
    accessoryList:string;
    
    constructor(baseprice:number,engine:Engine,make:string,model:string){
        this._engine = engine;
        this._basePrice = baseprice;
        this.make = make;
        this.model = model;
    }
    
    calculateTotal():number{
        var taxRate = .08;
        return this._basePrice+(taxRate*this._basePrice);
    }
    addAccessoryList(...accessories:Accessory[]){
        // we can inject multiple accessory object
        // with a comma at once
        this.accessoryList ='';
        for(var i=0;i<accessories.length;i++){
            var ac = accessories[i]; // take each accessory object
            // and then addthe property 
            // and concat to a string 
            this.accessoryList+=ac.assessoryNumber+' '+ac.title+ ' ';
        }
    }
    
}

var auto = new Auto(4000,new Engine(300,'v8'),'Chevy','silverdo');
var total:number = auto.calculateTotal();
console.log("The total number "+total);


/// applying inheritence
// in the car class
class Truck extends Auto{
    // adding own property
    bedLength:string;
    fourByFour:boolean;
    constructor(baseprice:number,engine:Engine,make:string,model:string,bedLength:string,fourByfour:boolean){
        // now feed the base constructor what it needs
        super(baseprice,engine,make,model);
        this.bedLength = bedLength;
        this.fourByFour = fourByfour;
    }
}

var truck = new Truck(4000,new Engine(300,'v8'),'Chevy','silverdo','longBed',true);
console.log("Total of the truck "+truck.calculateTotal());