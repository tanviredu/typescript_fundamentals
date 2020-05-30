function getStringLength(x: string){
    var len:number =x.length;
    return len;
}

var names:string[] = ["Tanvir rahman ornob","ornob ornik","kazi rahat","hasnat rabi"];
var firstName:string = names[0];
var length:number = getStringLength(firstName);
console.log("the first String length "+length);


names.forEach(element => {
    console.log(getStringLength("The length:" +element));
});
