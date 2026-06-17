let hoisting = "Hoisting throws reference error";
if (true) {
    // console.log(hoisting); Throws reference error
    // TDZ starts for hoisting variable within block;
    let hoisting = "Hoisting within a block throws reference error"; //TDZ ends here
    console.log(hoisting);
}


console.log(hoisting);

/* let stills follows the block scope and global scope separately
and does not allow value to be leaked between different scopes */