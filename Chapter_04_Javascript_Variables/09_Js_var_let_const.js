var w = 20;
let m = 40;
const c = 3.14;

var fruit = "apple";
var fruit = "orange"; // variable redeclared;

console.log(fruit);

fruit = "mango"; // variable reassignment
console.log(fruit);

/* var keyword is not a reliable method to declare variables 
as they allow reassignment anf redeclaration easily */

var cloud = ['aws', 'IBM', 'microsoft'];

for (var c = 0; c < cloud.length; c++) {
    console.log("cloudservices", cloud[c]);
};

console.log("Loop Leak", c); // the literal for var c is still accessible outside loop which is not a best practice.
