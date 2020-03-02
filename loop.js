//! READ: http://learn.ironhack.com/#/learning_unit/8206

//***************** EXAMPLE ************ //
// for(initiation; condition to keep loop; incrementer) {
//   statement
// }


// ************* PRATICE ************** //
//! Print numbers 0 to 100

for (let i = 0; i <= 100; i++) {
    console.log(i)
  }

// ######################################### //

//! Print only even numbers from 0 to 100

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0){
      console.log(i)
    }
  }

// ######################################### //

//! Print only odd numbers from 0 to 100

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 1){
      console.log(i)
    }
  }

// ######################################### //

//! Print numbers 80 to 20

for (let i = 80; i >= 20; i--) {
    console.log(i)
  }

// ######################################### //


//! Write an array called arrEx2 with length 3.

let arrEx3 = [0, 1, 2, 3]

// ######################################### //

//! Write a loop using for structure that prints all positive numbers until 48 (including 48).

for (let i = 1; i <= 48; i++) {
    console.log(i)
  }

// ######################################### //

//! Write a loop using for structure that prints all negative numbers until -30 (excluding).

for (let i = -1; i > -30; i--) {
    console.log(i)
  }

// ######################################### //

//! Write a loop using for structure that prints all numbers from 102 (including) to 32 (including) in steps of 2.

for (let i = 102; i >= 32; i -= 2) {
    console.log(i)
  }

// ######################################### //


const pets = ['dog', 'cat', 'bird', 'salamander', 'human', 'ape', 'alien', 'dinossaur'];
// Use FOR Loop to print the content of array "pets"
for (i = 0; i<pets.length; i++) {
    console.log(pets[i])
  }
  

//! Use FOR EACH to print the content of array "pets"
pets.forEach(animal => console.log(animal));


const array = [1, 'x', 3, 8, 'x', 5, 7, 3, 'x', 2, 6, 'x', 10];
// Use FOR to count and print how many times the letter x appears in the array
let xCount = 0

for (i = 0; i < array.length; i++) {
  if (array[i] === "x") {
    xCount += 1;
  }
}

//! Use FOR EACH to count and print how many times the letter x appears in the array
array.forEach(function(x) {
    console.log(x.length)
  })

const numbers = [1, 5, 6, 8, 12, 25, 65, 78];
//! Use FOR to calculate and print the sum of all numbers in the array
let sum = 0;

for (i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i];
}

//! Use FOR EACH to calculate and print the sum of all numbers in the array
let sum = 0;

numbers.forEach(function(item, index, array){
  sum = sum + item;
  console.log(sum);
})

const sentence = 'Hack your life';
//! Use FOR to print each letter of the sentence on a different line.
for (i = 0; i<sentence.length; i++) {
    let div = sentence[i].split("");
    console.log(div);
  }

//! Use FOR EACH to print each letter of the sentence on a different line.
