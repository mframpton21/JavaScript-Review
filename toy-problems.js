// Make sure you do these last


// PROBLEM 1
// Write a function that takes an array of integers and returns the 
// sum of the integers after adding 1 to each.
var plusOneSum = function(array) {
	var sum = 0;

	for (var i = 0; i < array.length; i++) {
		sum = sum + array[i] + 1;
	}
	return sum;
};

var result = plusOneSum([1, 2, 3, 4]); // 14
console.log(result);



// PROBLEM 2
// Write a function that accepts a multi dimensional array and returns 
// a flattened version.
var flatten = function(array) {
	var flatArray = [].concat.apply([],array);

	// handles up to 5 dimensional array
	for (var i = 0; i < 5; i++) {
    	var flatArray = [].concat.apply([],flatArray);
	}
    return flatArray.sort();
};

var result = flatten([1, 2, [3, [4], 5, 6], 7]); // [1, 2, 3, 4, 5, 6, 7]
console.log(result);



// PROBLEM 3
// Given an array [a1, a2, ..., aN, b1, b2, ..., bN, c1, c2, ..., cN] 
// convert it to [a1, b1, c1, a2, b2, c2, ..., aN, bN, cN]
var array = ["a1", "a2", "a3", "a4", "a5", "b1", "b2", "b3", "b4", "b5", "c1", "c2", "c3", "c4", "c5"];
// make sure that the array is sorted first
array.sort();
array.sort(function(a, b) {
	return a.charAt(1) - b.charAt(1);
});

var aArray = [];
var bArray = [];
var cArray = [];
var newArray = [];

for (var i = 0; i < array.length; i++) {
	switch (array[i].charAt(0)) {
	  case "a":
	    aArray.push(array[i]);
	    break;
	  case "b":
	    bArray.push(array[i]);
	    break;
	  case "c":
	    cArray.push(array[i]);
	    break;
	  default:
	    // ingnorind everything else for now.
	    break;
	}
}

for (var i = 0; i < aArray.length; i++) {
    newArray.push(aArray[i], bArray[i], cArray[i])
}
console.log(newArray);



// PROBLEM 4
// There is an array of non-negative integers. A second array is 
// formed by shuffling the elements of the first array and deleting 
// a random element. Given these two arrays, find which element is 
// missing in the second array.
var array1 = [1, 2, 3, 4, 5, 7, 9, 10, 34, 56, 67, 98];

var shuffle = function(array) {
  var newArray = array.slice();
  var currentIndex = array.length;
  var tempValue; 
  var randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element... 
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    tempValue = newArray[currentIndex];
    newArray[currentIndex] = newArray[randomIndex];
    newArray[randomIndex] = tempValue;
  }

  return newArray;
};

var missingElement = function(arr1, arr2) {
	for (var i = 0; i < arr1.length; i++) {
		if (arr2.indexOf(arr1[i]) === -1) {
			return arr1[i];
		}
	}
};

var array2 = shuffle(array1);
var x = Math.floor(Math.random() * ((array1.length - 1) - 0) + 0); 
array2.splice(x,1);
console.log("First array: ", array1);
console.log("Second array: ", array2);

var result = missingElement(array1, array2);
console.log("Missing element is: ", result);



// PROBLEM 5
// Write a function that returns the longest word(s) from a sentence. 
// The function should not return any duplicate words (case-insensitive).
// Example

// longestWords("You are just an old antidisestablishmentarian") // ["antidisestablishmentarian"]
// longestWords("I gave a present to my parents") // ["present", "parents"]
// longestWords("Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo") // ["buffalo"] or ["Buffalo"]
var longestWords = function(string) {
	var array = string.split(" ");
	var longest = array.reduce(function (a, b) { 
        return a.length > b.length ? a : b; 
    });
    return longest;
};
var result = longestWords("You are just an old antidisestablishmentarian");
console.log(result);
var result = longestWords("I gave a present to my parents");
console.log(result);
var result = longestWords("Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo")
console.log(result);



// PROBLEM 6
// If we list all the natural numbers below 10 that are multiples of 3 or 5, 
// we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.
var total = 0;
for (var i = 0; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    total += i;
  }
}
console.log("The total of all multiples of 3 or 5 below 1000 is ", total);



// PROBLEM 7
// Remove duplicate characters in a given string keeping only the first occurrences. 
// For example, if the input is ‘tree traversal’ the output will be "tre avsl".
var string = "tree traversal";
var array = string.split("");

array = array.filter(function(element, index, array) {
    return array.indexOf(element) == index;
	})

console.log(array);



// PROBLEM 8
// Write a sum method which will work properly when invoked using either syntax below.
var sum = function(a, b) {
	if(b) {
		return a + b;
	} else {
		return function(c) {
			return a + c;
		}	
	}
};

console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5


