let b = 10;

function greet() {
    console.log("Welcome to Playwright Learning!");

    let b = 20;
    console.log(b);

    /* let b = 30;
    if (true) {
        console.log(b);
    }*/
}

greet();

// SyntaxError: Identifier 'b' has already been declared

// let works locally within a function scope but they can't redeclared.

b = 20;
console.log(b);

// in let keyword, variables can be reassigned.

let b = 30;
console.log(b);
// but let does not allow redeclaration even under global scope.

/* let b = 30;
    ^

SyntaxError: Identifier 'b' has already been declared */