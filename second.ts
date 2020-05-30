// make some variable
// with type script

var Id:number = 1;
var FirstName : string = "Tanvir";
var lastName : string  = "Rahman";
var Department: string  = "EEE";
var batchNumber:number = 143;
var  grrade1:number = 100;
var  grade2:number = 50;
var grade3:number = 70;


// defining a function to add three grade
// this will be a typescript functionb
function addNumber(n1:number,n2:number,n3:number){
    // the result will be a number
    // no need to declare
    var result = n1+n2+n3;
    
    //  msg wil be a string
    var msg:string = "sum is "+result;
    console.log(msg);
}


addNumber(grrade1,grade2,grade3);