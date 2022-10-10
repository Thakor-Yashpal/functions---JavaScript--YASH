"use strict";

function square(number) {
  return number * number;
}

function greet(name) {
  console.log('hello' + name + '' + lastname);
}

greet('yash');
greet('harsh');

function myFunc(theObject) {
  theObject.make = 'Toyota';
}

var mycar = {
  make: 'Honda',
  model: 'Accord',
  year: 1998
}; // x gets the value "Honda"

var x = mycar.make; // the make property is changed by the function

myFunc(mycar); // y gets the value "Toyota"

var y = mycar.make;
//# sourceMappingURL=fa.dev.js.map
