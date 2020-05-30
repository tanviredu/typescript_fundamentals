// this will be the array
// and index of th e typescript declaration


var names: string[];
names = ["tanvir","rahman","ornob","ornik"]

//pull the data from the array and 
// set to the a string variable
var firstPerson : string;
firstPerson = names[0];
console.log(firstPerson);

// make a loop to make this all print
// this element
// is the variable
// of the array
names.forEach(element => {
    firstPerson = element;
    console.log(firstPerson);
});