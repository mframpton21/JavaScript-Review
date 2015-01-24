// Declare and Define the functions here that will make the function 
// calls below work properly

// PROBLEM 1
var first = function(array, callback) {
  return callback(array[0]);
};

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName){
  console.log('The first name in names is ', firstName)
});



// PROBLEM 2 - NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM
var last = function(array, callback) {
  return callback(array[array.length - 1])
};

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
last(names, function(lastName){
  console.log('The last name in names is ', lastName);
});



// PROBLEM 3 - NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM
// Have the contains function return a boolean value for if the name 
// is in the array or not.
var contains = function(toFind, array, callback) {
  return callback(array.indexOf(toFind) !== -1);
};

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
contains('Colt', names, function(yes){
  if (yes) {
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the list');
  }
});



// PROBLEM 4 - NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM
var numbers = [1,2,3,4,5];
// Produces a new array of values by mapping each value in list through a 
// transformation function
var map = function(array, callback) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]));
  }
  return newArray;
};

console.log(map(numbers, function(num){
  return num * 2; //returns an array of [2,4,6,8,10]
}));



// PROBLEM 5 - NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM
var uniq = function(array, callback) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (newArray.indexOf(array[i]) === -1) {
      newArray.push(array[i]);
    }
  }
  return callback(newArray);
};

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});



// PROBLEM 6 - NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM
var each = function(array, callback) {
    for (var i = 0; i < array.length; i++) {
      callback(array[i], i);
    }
    return;
};

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
each(names, function(item, indice){
  console.log('The item in the ' + indice + 'position is ' + item)
});



// PROBLEM 7 - NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM
var getUserById = function(id, array, callback) {
  for (var i = 0; i < array.length; i++) {
    if (array[i].id === id) {
      callback(array[i])
    }
  }
};

var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];
getUserById('16t', users, function(user){
  console.log('The user with the id 16t has the email of ' + user.email + 
    'the name of ' + user.name + ' and the address of ' + user.address); 
});



// PROBLEM 8 - NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM
var find = function(array, callback) {
  for (var i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return array[i];
    }
  }
};

// Looks through each value in the list, returning the first one that passes 
// a truth test 
var numbers  = [1, 2, 3, 4, 5, 6];
console.log(find(numbers, function(num){ 
  return num % 2 == 0; //should return 2
}));

