// ============================================================
// All Casing / Naming Conventions Used in JavaScript
// ============================================================

// -------------------------------------------------------
// 1. camelCase  — variables, function names, object keys
// -------------------------------------------------------
var firstName = "John";
let lastName = "Doe";
const userAge = 30;
function getUserName() {
  return firstName + " " + lastName;
}
var isLoggedIn = true;
var totalAmount = 250.75;

var myCamelCase = "camelCase"
console.log(myCamelCase);
// -------------------------------------------------------
// 2. PascalCase (UpperCamelCase) — classes, constructors, React components
// -------------------------------------------------------
class UserAccount {
  constructor(name) {
    this.name = name;
  }
}

function Person(name) {
  this.name = name;
}

var AdminPanel = "React component placeholder";

var MyPascalCase = "PascalCase";
console.log(MyPascalCase);

// -------------------------------------------------------
// 3. SCREAMING_SNAKE_CASE  — constants (values that never change)
// -------------------------------------------------------
const MAX_RETRY_COUNT = 3;
const API_BASE_URL = "https://api.example.com";
const DEFAULT_TIMEOUT_MS = 5000;
const COLOR_RED = "#FF0000";
const PI = 3.14159;

const MY_SNAKE_CASE = "SNAKE_CASE";
console.log(MY_SNAKE_CASE);
// -------------------------------------------------------
// 4. snake_case  — less common in JS; used in some APIs, databases, or Python-influenced code
// -------------------------------------------------------
var first_name = "Alice";
var last_name = "Smith";
var user_role = "admin";
var db_connection_string = "mongodb://localhost:27017";

var my_snake_case = "my_snake_case"
console.log(my_snake_case);
// -------------------------------------------------------
// 5. Lowercase  — single-word variables, some constants
// -------------------------------------------------------
var name = "Bob";
var count = 0;
var total = 100;
var config = {};
var debug = true;

var lowercase = "lowercase";
console.log(lowercase);

// -------------------------------------------------------
// 6. UPPERCASE  — legacy constants, some enum-like values
// -------------------------------------------------------
var GRAVITY = 9.8;
var SPEED_OF_LIGHT = 299792458;
var NAME = "fallback";

var MYUPPERCASE = "MYUPPERCASE";
console.log(MYUPPERCASE);

// -------------------------------------------------------
// 7. Hungarian Notation (prefix with type)  — legacy; rarely used in modern JS
// -------------------------------------------------------
var strName = "John";
var iCount = 42;
var bIsActive = true;
var arrItems = [1, 2, 3];
var objUser = { id: 1 };

// -------------------------------------------------------
// 8. Private/protected convention (underscore prefix)  — signals private member
// -------------------------------------------------------
var _internalId = 123;
var _cache = {};
var _privateMethod = function () {
  return "internal";
};

// -------------------------------------------------------
// 9. Trailing underscore — internal pattern (rare)
// -------------------------------------------------------
var name_ = "temp";

// -------------------------------------------------------
// 10. Dollar prefix — jQuery convention, DOM references
// -------------------------------------------------------
var $element = document.querySelector(".app");
var $button = document.getElementById("submit");
var $$items = document.querySelectorAll("li");

// -------------------------------------------------------
// INVALID in JS (cannot use hyphens — these WOULD fail)
// -------------------------------------------------------
// var first-name = "invalid";     // kebab-case — NOT valid
// var user-name = "test";         // kebab-case — NOT valid
// var api-base-url = "x";         // kebab-case — NOT valid

console.log("firstName:", firstName);
console.log("MAX_RETRY_COUNT:", MAX_RETRY_COUNT);
console.log("_internalId:", _internalId);
console.log("$element:", $element);
