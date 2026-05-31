var b = 10; //global scope not a global variable

console.log(b);

function greet() {
    console.log("Welcome to playwright learning!");

    var b = 20; // local scope
    console.log(b);

    if (true) {
        var b = 40; // local scope
        console.log(b);
    }

}

greet();

var b = 50; // here the instead of value 20 , 50 is redeclared to var b
console.log(b);

/* An example to show the dual nature of 
using var keyword and it's inconsistency */