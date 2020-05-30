interface Iractange{
    height:number;
    width:number;
    getArea():number;
}

namespace Shapes{
    
    // export the class so that it can be used by another
    // module
    export class Ractangle implements Iractange{
        public height:number;
        public width:number;
        constructor(height:number,width:number){
            this.height = height;
            this.width = width;
        }
        getArea(){
            return this.height*this.width;
        }
    }
}

namespace myprogram{
    function run(){
        var rect:Iractange = new Shapes.Ractangle(2,2);
        var area:number = rect.getArea();
        console.log(area);
    }
    
    run();
}

