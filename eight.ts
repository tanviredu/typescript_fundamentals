// write a compact 
// function wuth return statement
// with the arrow function

// this is a one line function
var addNumber = (first:number,second:number)=>first+second;
var ans:number = addNumber(100,200);
console.log(ans);
// making a void function
// to make a void function 
// you cant use thr equal sign
// otherwise it will search for the 
// expression
// then what will it print?
// it will print the msg with a consolelog in javascript
var greetME = (msg:string)=>{
    console.log(msg);
    console.log(msg);
};

// make the square function with the arrow function


var square = (rect:{h:number;w?:number})=>{
    if(rect.w===undefined){
        return rect.h*rect.h;
    }else{
        return rect.w * rect.h;
    }
}


// return tye is a number
var sq1:number = square({h:10});
console.log(sq1)
var sq2:number = square({h:10,w:20});
console.log(sq2)
