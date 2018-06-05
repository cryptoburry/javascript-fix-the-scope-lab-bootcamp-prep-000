var animal = 'dog'

function myAnimal() {
  return animal;
}

function yourAnimal() {
  var animal = 'cat'
  return animal
}

function add2(n) {
  const two = 2
  return n + two

  // Feel free to move things around!
  
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.

<<<<<<< HEAD
var a = funkyFunction()

var b = a()

var theFunk = b

=======


var theFunk = funkyFunction(())
>>>>>>> d7d22cc9bed6e37edee29fade30311b64a0f314f

