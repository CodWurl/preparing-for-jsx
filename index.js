// Create a function called greeting using es5 function declaration syntax
// (using the function keyword)
// No parameters
// this function should return "hello declaration"
function greeting() {
	return "hello declaration";
}


// Create a function called greeting2 using es5 function expression syntax
// (using the function keyword)
// No parameters
// this function should return "hello expression"
const greeting2 = function() {
	return "hello expression";
}


// Create a function called greeting3 using es6 arrow function syntax
// No parameters
// this function should return "hello arrow"
const greeting3 = () => {
	return "hello arrow"
}

// Create a function called greeting4 using es6 arrow function syntax
// (using shortened syntax - one parameter, no parentheses)
// One parameter should be accepted and returned
const greeting4 = param => param


// Create a function called greeting5 using es6 arrow function syntax
// (Standard arrow syntax, two parameters)
// Return both parameters in an array [param1, param2]
const greeting5 = (param1, param2) => [param1, param2];


// Create a function called greeting6 using es6 arrow function syntax
// (This will take two paremters, greeting and personName)
// Change greeting to uppercase and return greeting + personName
const greeting6 = (greeting, personName) => greeting.toUpperCase() + personName

// Convert this to an arrow function
const greeting7 = function() {
	return "hello";
}

// Create a function called greeting8 using es6 arrow function syntax
// (This will take two parameters, greeting and personName)
// Use string interpolation `` to return "greeting, personName" -> replace greeting and personName with parameter values
const greeting8 = (greeting, personName) => `${greeting}, ${personName}`;


// Create a function called greeting9 using es6 arrow function syntax
// This takes an array called weekDays as a parameter
/*
// This is what weekDays looks like

const weekDays = ["monday", "tuesday", "wednesday", "thursday", "friday"];

*/
// Use the .map method to return a new weekDays array, but all uppercase
const greeting9 = weekDays => weekDays.map(weekDay => weekDay.toUpperCase());

// Don't touch this section
export default {
	greeting: typeof greeting !== 'undefined' ? greeting : () => null,
	greeting2: typeof greeting2 !== 'undefined' ? greeting2 : () => null,
	greeting3: typeof greeting3 !== 'undefined' ? greeting3 : () => null,
	greeting4: typeof greeting4 !== 'undefined' ? greeting4 : () => null,
	greeting5: typeof greeting5 !== 'undefined' ? greeting5 : () => null,
	greeting6: typeof greeting6 !== 'undefined' ? greeting6 : () => null,
	greeting7: typeof greeting7 !== 'undefined' ? greeting7 : () => null,
	greeting8: typeof greeting8 !== 'undefined' ? greeting8 : () => null,
	greeting9: typeof greeting9 !== 'undefined' ? greeting9 : () => null,
}