function getStringLength(x) {
    var len = x.length;
    return len;
}
var names = ["Tanvir rahman ornob", "ornob ornik", "kazi rahat", "hasnat rabi"];
var firstName = names[0];
var length = getStringLength(firstName);
console.log("the first String length " + length);
names.forEach(function (element) {
    console.log("String Lngth : "+getStringLength(element));
});
