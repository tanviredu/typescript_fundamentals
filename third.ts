
// what are the modules
// module ar executed in theri own scope
// not in the global scope
// you can write variable
// function and class
// and it will not visible to other 
// unless you export the modyle

// in the code the whole module
// you can import from other program and use
// it if the module is exported  

module demo{
    
    var person:string = "Tanvir rahman";
    console.log(person.substring(1,4));
    
    // if you try to make a object
    // in the same variable 
    // ti will show error
    
    // person = {
        
    // }
    // this will show error
    var person2 = {
        name: "Tanvir rahman",
        age :23
    }
    
    console.log(person2.name.substring(1,4));
    
    
    
}

// if you export this module
// you can import this from another progran