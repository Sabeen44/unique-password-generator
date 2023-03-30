# unique-password-generator

Password Generator Project

## Overview

This project allows users to randomly generate a password that meets their criteria so they can can create a strong password. A series of prompts asks if they want to tinclude uppercase letters, lowercase letters, symbols,or numbers.

## Technologies Used

- HTML - used to create elements on the DOM
- CSS - styles html elements on page
  -Javascript
- Git - version control system to track changes to source code
- GitHub - hosts repository that can be deployed to GitHub Pages

## Code Snippet

The following shows a conditional statement inside a 'for loop'. After a user has indicated that they would like to use symbols, the intended outcome is to pick random symbol from a string and use it to build a more secure password.

for (i = 0; i < pwLength / 4; i++) {
if (pwSymbol === true) {
var secureSymbol =
passwordKey.symbols[
Math.floor(Math.random() * passwordKey.symbols.length)
];
buildPassword = buildPassword + secureSymbol;
}

## Learning Points

To make a variable accessbile to mulitiple functions that follow, you need to declare the variable at the top of a program or outside of a function. This then becomes a global scope variable.
We can nest functions inside other functions and that allows us to directly access the conditions and variables used in the enclosing function
Using Math.floor(Math.Random)

## Deployed Link

## Code by

- **Sabeen Chaudhry **

* https://github.com/Sabeen44
* www.linkedin.com/in/sabeen-chaudhry

## License

This project is licensed under the MIT License

## Acknowledgments

UC Berkley Coding Bootcamp Team for providing the html and css starter code.
