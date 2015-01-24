var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

// Above you're given a callFriend function that returns another function. 
// Do what you need to do in order to call your function and get 'Calling 
// Jake at 435-215-9248' in your console.
// Code here
var innerFn = callFriend();
console.log(innerFn("435-215-9248"));


// Write a function that accepts a function as it's only argument and returns a 
// new function (which calls the original function that was passed in) that can 
// only ever be executed once.
// Once completed, add a second arguments that allows the function to be executed 
// N number of times. After the function has been called N number of times, 
// console.log('STAHHP');
var outerFn = function(func, counter) {
  var count = 0;  
  return function() {
    if (count >= counter) {
      console.log('STAHHP');
      return
    }
    count++;
    return func();
  }
};

var timesToLoop = 5;
var innerFn = outerFn(function(){
  alert("You're not done yet");
}, timesToLoop);

for (var i = 0; i <= timesToLoop; i++) {
  if (innerFn()) {
    console.log(innerFn());
  }
}
