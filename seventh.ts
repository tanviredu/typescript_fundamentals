// creating an object

// this is the regular json object
var ractangle = {
    h:10,
    w:20,
    // now the function to calculate the area
    calcArea:function(){
        return this.h*this.w;
    }
}
//thats a ragularr objects

console.log(ractangle.h);
console.log(ractangle.w);
console.log(ractangle.calcArea());


// now we make a function that will accept a ractange object
// with two properties one os optional
// and calculate the area
// functioncan take ovhect with parameter too
// in type script you have to gve the parameter

var square = function (rect : {h:number;w?:number;}){
    
    // checking the properties of the object
    if(rect.w === undefined){
        // remember undefined is a type
        return rect.h*rect.h;
    }
    return rect.w * rect.h;
}

// return tye is a number
var sq1:number = square({h:10});
console.log(sq1)
var sq2:number = square({h:10,w:20});
console.log(sq2)