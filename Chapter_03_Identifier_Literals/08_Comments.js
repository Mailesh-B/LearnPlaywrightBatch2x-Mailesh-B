// 1. Single-line comment
// This is a single-line comment using double slashes

// A sample user generated comment.

// 2. Inline comment (single-line after code)
let x = 10; // This is an inline comment

var b = "10"; // A sample inline comment by user.

// 3. Multi-line comment (block comment)
/* This is a
   multi-line block
   comment */

/* A multi
line
comment */

// 4. JSDoc comment (documentation comment)
/**
 * Calculates the sum of two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The sum
 */
function add(a, b) {
    return a + b;
}

// 5. Hashbang comment (shebang) - must be first line of file
// #!/usr/bin/env node

// 6. Comment to disable code
// console.log("This line is commented out");

/* Multi-line disabled code
console.log("Line 1");
console.log("Line 2");
*/

// 7. TODO comment
// TODO: Implement error handling

// 8. FIXME comment
// FIXME: This function has a bug

// 9. HACK comment
// HACK: Workaround for browser compatibility issue

// 10. NOTE comment
// NOTE: This logic assumes input is always positive
