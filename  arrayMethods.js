//! Given the array below, write a function add2 that will receive the array as an argument and will return a new array with all items of the original array added by 2.

const arrEx1 = [2, 4, 6, 7, 9, 12];

const add2 = arrEx1.map (number => number + 2);


// ######################################### //

//! Given an array of numbers, write a function checkSum that returns the string 'even' if the sum of all values are even, otherwise return 'odd';

const arrEx2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const checkSum = arrEx2.reduce ((a, b) => a + b)
console.log(checkSum);

oddEven = () => {
  if (checkSum % 2 === 0) {
    console.log("Even");
  }
  else {
    console.log("Odd");
  }
}
oddEven();


// ######################################### //

//! Given an array of numbers, write a function evenNumbers that returns a new array only with the even numbers of the original array.

const arrEx3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = arrEx3.filter (number => number % 2 === 0);

console.log(evenNumbers);

// ######################################### //

//! Given an array of letters, write a function sortLetters that returns a new array of letters in alphabetical order.

const arrEx4 = ['a', 'c', 'g', 'r', 'w', 'e', 's', 'l', 'z', 'q', 'b', 'd'];

const sortLetters = arrEx4.sort();

console.log(sortLetters);

// ######################################### //

//! Make a function that takes a number and returns that number multiplied by 5.

function multiply (){
  let randomNumber = Math.floor(Math.random() * 10);
  let x5 = randomNumber * 5;
  return x5;
};

multiply();

// ######################################### //

//! Using any array method and the function built in the previous question, make a loop that print the elements of an array multiplied by 5.

const multi5 = arrEx1.map (number => number * 5);
console.log(multi5);

// ######################################### //

//! Make a function that takes a letter and returns it uppercase

let capsLetter = arrEx4.map ( a => arrEx4[4].toUpperCase());

// ######################################### //

//! Using any array method and the function built in the previous question, make a loop that print the elements upper case of an array.

let caps = arrEx4.map(a => a.toUpperCase());

console.log(caps);

// ######################################### //

//! Create a function that takes a number and returns true if the number is odd and false if the number is even

function falseTrue (){
  let anyNumber = Math.floor(Math.random() * 10);
  if (anyNumber % 2 === 0) {
    console.log(anyNumber);
    console.log("False");
  }
  else {
    console.log(anyNumber);
    console.log("True");
  }
};

falseTrue();

// ######################################### //

//! Using any array method and the function built in the previous question, make a loop that return only the odd numbers.

const oddNumbers = arrEx3.filter (number => number % 2 === 1);

console.log(oddNumbers);

// ######################################### //

//! Using any array method, make a loop that return the result of multiplying all the elements.

const checkMulti = arrEx1.reduce ((a, b) => a * b)

// ######################################### //
