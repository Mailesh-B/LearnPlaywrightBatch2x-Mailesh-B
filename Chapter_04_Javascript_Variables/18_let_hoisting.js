console.log(hoisting);
/* TDZ zone
Using let, 
variable cannot 
be used until
it is initialized
 Initialized variable
 can be used thenafter

*/
//ReferenceError: hoisting is not defined

let hoisting = "Hoisting throws reference error";
console.log(hoisting);