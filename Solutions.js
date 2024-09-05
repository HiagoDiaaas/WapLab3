// Exercise 1: Practice Objects (declaration, properties, methods, etc) and functions by yourself.

const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    start: function() {
      console.log(`${this.make} ${this.model} is starting.`);
    },
    drive: function(speed) {
      console.log(`${this.make} ${this.model} is driving at ${speed} km/h.`);
    }
  };
  

  car.start();
  car.drive(60);
  
  // Exercise 2: Create a function using function declaration named sum with one parameter of Array type, 
  // the returned result is the sum of all elements which are greater than 20.
  
  function sum(arr) {
    return arr.filter(num => num > 20).reduce((acc, curr) => acc + curr, 0);
  }
  
  // Test case
  console.log(sum([10, 30, 25, 5, 50])); // Output: 105
  
  // Exercise 3: Create a function using function expression named getNewArray with one parameter of String 
  // Array, return a new array which contains all strings, length is greater than and equal to 5, 
  // and contains letter ‘a’.
  
  const getNewArray = function(strArr) {
    return strArr.filter(str => str.length >= 5 && str.includes('a'));
  };
  
  // Test case
  console.log(getNewArray(['apple', 'pear', 'banana', 'grape', 'kiwi'])); // Output: ['apple', 'banana', 'grape']
  
  // Exercise 4: Use reduce only to solve the problem: 
  // Given an array of strings, find all strings to upper case which length is greater than 5.
  
  const stringsArray = ['hello', 'world', 'javascript', 'nodejs', 'express'];
  
  const upperCaseLongStrings = stringsArray.reduce((acc, str) => {
    if (str.length > 5) {
      acc.push(str.toUpperCase());
    }
    return acc;
  }, []);
  
  // Test case
  console.log(upperCaseLongStrings); // Output: ['JAVASCRIPT', 'EXPRESS']
  