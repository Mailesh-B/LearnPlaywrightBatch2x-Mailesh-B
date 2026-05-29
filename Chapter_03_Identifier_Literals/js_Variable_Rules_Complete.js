// ============================================================
// Variable Naming Rules — Valid vs Invalid Examples
// ============================================================

// -------------------------------------------------------
// RULE 1: Must start with a letter, underscore (_), or dollar sign ($)
// -------------------------------------------------------
// Valid
var name = "John";
var _count = 10;
var $price = 99.99;
let _private = true;
const $currency = "USD";

// Invalid (commented out to avoid errors)
// var 1st = "first";       // starts with digit
// var 123abc = 456;        // starts with digit
// var -name = "test";      // starts with hyphen
// var .data = 42;          // starts with dot

// -------------------------------------------------------
// RULE 2: After the first character, can include letters, digits, _, $
// -------------------------------------------------------
// Valid
var userName2 = "Alice";
var data_123 = 456;
var $my_var_1 = "ok";
var a_b_c_d_1_2_3 = "many";

// Invalid
// var user-name = "bob";   // hyphen not allowed
// var first#name = "x";    // # not allowed
// var my@var = 1;          // @ not allowed
// var first+last = 2;      // + not allowed
// var first.name = "x";    // dot not allowed

// -------------------------------------------------------
// RULE 3: Case-sensitive (name and Name are different)
// -------------------------------------------------------
var title = "lowercase";
var Title = "Capitalized";
var TITLE = "UPPERCASE";

console.log("Case sensitivity:");
console.log("  title  =", title);
console.log("  Title  =", Title);
console.log("  TITLE  =", TITLE);

// -------------------------------------------------------
// RULE 4: Cannot use reserved / keywords
// -------------------------------------------------------
// Valid
var clazz = "workaround";
var typeOf = "avoid keyword";
var _new = "underscore prefix";
var $let = "dollar prefix";

// Invalid
// var let = 1;            // let is reserved
// var const = 2;          // const is reserved
// var class = "test";     // class is reserved
// var function = "fn";    // function is reserved
// var return = "val";     // return is reserved
// var if = true;          // if is reserved
// var var = "var";        // var is reserved (in strict mode / modern contexts)

// -------------------------------------------------------
// RULE 5: Cannot contain spaces
// -------------------------------------------------------
// Valid
var firstName = "Jane";
var last_name = "Doe";
var fullName = "Jane Doe";

// Invalid
// var first name = "Jane";    // space not allowed
// var  last name = "x";       // leading space not allowed
// var full name = "x";        // space in middle

// -------------------------------------------------------
// RULE 6: Unicode letters are allowed
// -------------------------------------------------------
// Valid
var 名字 = "Chinese";
var ñoño = true;
var über = "umlaut";
var café = 3;
var π = 3.14159;
var 你好 = "hello";

// -------------------------------------------------------
// RULE 7: Cannot use JavaScript special characters
// -------------------------------------------------------
// Invalid
// var "string" = 1;      // quotes not allowed
// var 'single' = 2;      // quotes not allowed
// var `template` = 3;    // backticks not allowed
// var back\slash = 4;    // backslash not allowed

// -------------------------------------------------------
// RULE 8: Cannot start with a number
// -------------------------------------------------------
// Valid
var a1 = 1;
var b2c3 = 123;
var _1st = "ok with underscore";

// Invalid
// var 1 = "one";          // just a number
// var 1stPlace = "gold";  // starts with digit
// var 99problems = "rap"; // starts with digit
// var 0x1 = 1;            // hex literal

console.log("\nAll variable rules demonstrated above.");
