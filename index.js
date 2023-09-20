// assignment 1 Array Operations

//Create an empty array called "fruits".
let fruits = [];

// Add the following fruits to the "fruits" array: "apple", "banana", "orange".
fruits.push("Apple", "Banana", "Orange");
console.log(fruits)

// Remove the first fruit from the array.
fruits.shift();
console.log(fruits)

// Add "Grape" to the end of the array.
fruits.push("Grape");
console.log(fruits)

// //Update the second fruit in the array to "pear".
fruits[1] = "pear";
console.log(fruits)


// assignment 2  Object Operations

// 1. Create an empty object called "person".
let person = {}

/* 2. Add the following properties to the "person" object:
  - name: "John"
  - age: 30
  - city: "New York" */
person.name = "John"
person.age = 30
person.city = "New York"

console.log(person)

// 3. Remove the "age" property from the "person" object.
delete person.age;

// 4. Add a new property called "job" with the value "Engineer" to the "person" object.
person.job = "Engineer"

// 5. Update the "city" property of the "person" object to "San Francisco".
person.city = "San Francisco"

// 6. Print the final "person" object after performing the above operations.

console.log(person)



// Assignment 3: Array of Objects Operations


// 1. Create an empty array called "cars".
let cars = []

/* 2. Add three car objects to the "cars" array. Each car object should have the following properties:
   - make: "Toyota"
   - model: "Camry"
   - year: 2018 */
// 2. Add three car objects to the "cars" array.
cars.push({
    make: "Toyota",
    model: "Camry",
    year: 2018
  });
  cars.push({
    make: "Toyota",
    model: "Camry",
    year: 2018
  });
  cars.push({
    make: "Toyota",
    model: "Camry",
    year: 2018
  });
  
  // 3. Remove the first car object from the "cars" array.
  cars.shift();
  
  // 4. Add a new car object to the "cars" array.
  cars.push({
    make: "Honda",
    model: "Civic",
    year: 2020
  });
  
  // 5. Update the "model" property of the second car object in the array to "Accord".
  if (cars.length >= 2) {
    cars[1].model = "Accord";
  }
  
  // 6. Print the final "cars" array after performing the above operations.
  console.log(cars);
[
    {
      make: "Toyota",
      model: "Camry",
      year: 2018
    },
    {
      make: "Accord",
      model: "Accord",
      year: 2018
    },
    {
      make: "Honda",
      model: "Civic",
      year: 2020
    }
  ]


