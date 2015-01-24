// Create a Animal Constructor that has the following parameters. species,
// name, legs, color, food (which is an array of foods they can eat).
// Code here
var Animal = function(species, name, legs, color, food) {
  this.species = species; 
  this.name = name; 
  this.legs = legs;
  this.color = color; 
  this.food = ["puppy chow", "table food", "meow chow", "cat nip"];
};

// Now create a person function that creates an object and returns it (not 
// in constructor form) that has the following parameters. name, age, height, gender
// Code here
var persons = function(name, age, height, gender) {
  var personObj = {
    name: name,
    age: age,
    height: height, 
    gender: gender
  };
  return personObj;
};

// Create a animal array and a person array.
// Code here
var animal = [];
var person = [];

// Create two instances of Animal and push those into your animal array
// Code here
var animal1 = new Animal("Dog", "Jonny", 4, "White", ["puppy chow", "table food"]);
var animal2 = new Animal("Cat", "Sally", 4, "Black", ["meow chow", "cat nip" ]);

animal.push(animal1);
animal.push(animal2);

console.log(animal);

// Create two instances of person and push those into your person array.
// Code here
var person1 = persons("John", 24, "5'8", "male");
var person2 = persons("Sally", 33, "5'2", "female");

// Now we want every instance of Animal to have a eat method. This method 
// will choose a random item in that instances food array, then alert 
// "(name) ' ate ' (whichever food was chosen)".
// Code here
Animal.prototype.eat = function() {
  var randomNum = Math.floor(Math.random() * this.food.length);
  alert(this.name + " ate " + this.food[randomNum]);
  
};  

animal1.eat();
animal2.eat();


// At this point, if we wanted to add something to every instance of person could we? 
// Yes or no? and why or why not?
    // No, because 'person' was not created with 'new' constructor and does not have prototype properties.


// 1) What happens when you use the 'new' keyword to call a Constructor function?
      // You will get a  reference to the Object function that also creates an instance's prototype to inherit from. 
// 2) What's a good way to describe the keyword 'this'
      // 'this' as two basis meanings.  As an object method, 'this' is set to the object the method is called with.
      // 'this' used in a constructor (function), 'this' is bound to the the 'new' object being constructed.
// 3) Can a normal function which creates an object and then returns that object use the prototype?
      // No, prototype is only available when using constructors via 'new'.
// 4) What happens if you forget to use 'new' when calling a constructor?
      // You would not be able to use the functionality of 'this' or have prototype abilities.
