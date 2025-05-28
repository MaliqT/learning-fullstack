/* Setting Variables:
    var
    let
    const
    
    Only use const unless you know a variable will or needs to be changed later on. Use let, var is old.*/

const hello = "Hello, World!";
const num = 50;

/* Primitive Data Types:
    string
    numbers
    boolean
    null
    undefined
    symbol
    
    Strings can be in single or double quotes. Based on preference. Numbers can be any number even in decimal/float form. Boolean is true or false. Null is nothing or 0. Undefined doesn't have a definition or declared data type. Symbol is ...*/


// Concatenation:
console.log("My name is " + hello + " and my age is " + num);

// Template String (Template Literals):
console.log(`My name is ${hello} and I am ${num}`);


// Object property vs method:

let s = "This is a string";

// Property has no parentheses. Otherwise it would be a method
console.log(s.length);

// Method:
console.log(s.toUpperCase());

s = "technology, water, space, animal";

// Will parse the string using the comma as a delimiter
console.log(s.split(", "))


// Arrays: 

// Using the constructor of array
const numbers = new Array(1,2,3,4,5);

// Setting array manually. Note: data types do not need to be the same and size does not need to be explicit.
const fruits = ["apples", "oranges", "pears", 10, true];

console.log(numbers);
console.log(fruits);

/* Arrays can be accessed by index and like vectors can be pushed to the back of the array. */

// Adds to the end
fruits.push("grapes");

// Adds to the beginning
fruits.unshift("strawberries");

// Removes the last element
fruits.pop();

// Getting is array
console.log(Array.isArray(fruits));

// Getting index of array
console.log(fruits.indexOf("oranges"));



// Object Literals

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    hobbies: ["music", "movies", "sports"],
    address: {
        street: "50 main st",
        city: "Boston",
        state: "MA"
    }
}

console.log(person);
console.log(person.firstName);
console.log(person.lastName, person.age);
console.log(person.hobbies[2]);

// Just like classes in C++

// Can pull specific attributes out from objects and use them kind of like as a variable

// Think of "pulling" these attributes from person object.
const { firstName, lastName, address: { city }} = person;

// Then use them as need be
console.log(firstName);
console.log(city);

// Adding properties
person.email = "john@gmail.com";


// Arrays of objects:
const todos = [
    {
        id: 1,
        text: "Take out trash",
        isCompleted: true
    },
    {
        id: 2,
        text: "Meeting with client",
        isCompleted: true
    },
    {
        id: 3,
        text: "Dentist Appt",
        isCompleted: false
    }
]

console.log(todos[1].text);

// Can send data to a server

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// We get a JSON string from this output and can send it to a server this way with no errors



// For loops
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// For of loops
for (let todo of todos) {
    console.log(todo.text);
}

// High order array methods: forEach, map, filter

// forEach just loops through them
todos.forEach(function(todo) {
    console.log(todo.text);
});

// Creates a new array from the array
const todoText = todos.map(function(todo) {
    return todo.text;
});

console.log(todoText);

// Creates a new array based on a given condition
const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
});

// Can tack on more methods ontop of each other.
// Creates an array based on isCompleted filter and then maps the text from those completed todos to a new array.
const todoComplete = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
});



// While loops
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}




// If statements

let x = 10;

if (x == 10) {
    console.log("x is 10");
}

x = "10";

if (x === 10) {
    console.log("x is 10");
}

// == matches the data === matches the data and data type.
// So x = "10" will output true for x == 10 but not for x === 10 because the data types don't match. If statements are the same as C++ other than == and ===.



// Ternary Operator (Shorthand if statement)

x = 10;

// If x > 10 then (?) color is red. Else, color is blue
const color = x > 10 ? "red" : "blue";



// Switch:

switch(color) {
    case "red":
        console.log("Color is red");
        break;
    
    case "blue":
        console.log("Color is blue");
        break;

    default:
        console.log("Color is unknown");
}



// Functions:

// Can use default values that can be overridden
function addNums(num1 = 1, num2 = 2) {
    console.log(num1 + num2);
}

addNums(1, 2);

// Arrow function: curly braces are not needed if only using one line

// Default values can be overriden
const addingNums = (num1 = 1, num2 = 2) => num1 + num2;
const subtractingNums = (num3, num4) => num3 - num4;

// Template:
// () are any parameters
// => means function body after the =>

// Example:
const doThis = (() => {
    console.log("Do something");
});
// This example has no parameters and simply just outputs "Do something".

// Second example:
const notThis = (function() {
    console.log("Not this");
});

// Third example:
const doThat = (notThis())

// Last example:
const notThat = (doThis(), 5, "Hello");
// This function takes in a function as the first parameter, followed by 2 other parameters of different types.
// You can use arrow function here too

console.log(addingNums(5,5));



// Class constructor function
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}

Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}
// Instantiate object

const person1 = new Person("John", "Doe", "4-3-1980");

console.log(person1.getBirthYear);
console.log(person1.getFullName);


// Classes
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// TLDR: function Person and class Person are doing the same thing but using classes are a way for other developers from different language backgrounds to be familiar with the layout. Using classes is cleaner than using functions and automatically prototypes the methods.



