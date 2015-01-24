// PROBLEM 1
//create a function named 'last' that returns the last item from 'threeItems'
//alert the result of your function
var threeItems = [1,2,3];

// Code here
var last = function(array) {
	return array[array.length - 1];
};

var result = last(threeItems);
console.log(result);



// PROBLEM 2 - NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM
// Loop through evenArray removing all values that aren't even 
var evenArray = [1,2,3,6,22,98,45,23,22,12];

// Code here
for (var i = 0; i < evenArray.length; i++) {
	if ((evenArray[i] % 2) !== 0) {
		evenArray.splice(i, 1);
	}
}

console.log(evenArray);



// PROBLEM 3 - NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM
// Below you're given a function that will return a random number between 0 and 30 
// and an array full or numbers 'randomArray'. Your job is to write a function that 
// will get a random number, then loop through the array to see if that random number 
// is in the array. If it is, alert true, if it's not, alert false
var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
};
var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

// Code here
var checkRandomArray = function(array) {
	var randomNum = getRandomArbitrary();
	console.log(randomNum);

	for (var i = 0; i < array.length; i++) {
		if (array[i] === randomNum) {
			return true;
		}
	}
	return false;
};

var result = checkRandomArray(randomArray);
console.log("Random number found: " + result);



// PROBLEM 4 - NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM
// Create a copy of first and save it into second. Then, add 6 and 7 to the end of second. 
// When you run this, first should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7] 
// if you created your copy correctly.
var first = [1,2,3,4,5];
var second;

// Code here
second = first.slice();
second.splice(second.length, 0, 6,7)

alert(first) //[1,2,3,4,5];
alert(second) //[1,2,3,4,5,6,7];



// PROBLEM 5 - NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM
// Write a function called longest that takes in our sentence variable, and returns the 
// longest word in that sentence.
var sentence = "Dev Mountain is the best"

// Code here
var longest = function(str) {
	var array = str.split(" ");
	var arrayLength = 0;
	var longestElement = 0;

	for (var i = 0; i < array.length; i++) {
    	if (array[i].length > arrayLength) {
        	arrayLength = array[i].length;
        	longestElement = array[i];
        }
    }
    return longestElement;
};

var result = longest(sentence);
console.log(result);



// PROBLEM 6 - NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM
// Write a function called capitalize that takes in the myPoem variable and capitalizes 
// every word 
var myPoem = "What is a jQuery but a misunderstood object?";

// What is a jQuery but a misunderstood object? --> What Is A JQuery But A Misunderstood 
// Object?

// Code here
var capitalize = function(str) {
	var array = str.split(" ");

	for (var i = 0; i < array.length; i++) {
		array[i] = array[i].charAt(0).toUpperCase() + array[i].substring(1);
    }
    return array.join(" ").toString();
};

var result = capitalize(myPoem);
console.log(result);


// PROBLEM 7 - NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM
var theOdyssey = "function expression or function declaration? Tis an obvious choice";

//Write a function called vowelCounter that takes in a string (theOdyssey) and returns 
// how many vowels are in that string.
// Code here
var vowelCounter = function(str) {
    str = str.toLowerCase();
	var array = str.split("");	
	var vowelArray = ["a", "e", "i", "o", "u"];
	var vowelCount = 0;

	for (var i = 0; i < array.length; i++) {
		for (var j = 0; j < vowelArray.length; j++) {
			if (array[i] === vowelArray[j]) {
				vowelCount++;
			}
		}
	}
	return vowelCount;
};

var result = vowelCounter(theOdyssey);
console.log(result);
