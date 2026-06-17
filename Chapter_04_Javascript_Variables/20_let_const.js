console.log(constant);

// console.log("TDZ begins");

const constant = "3.14"; //ReferenceError: Cannot access 'constant' before initialization
console.log(constant);//TDZ Ends

/* The hoisting for const works the same
way as let */