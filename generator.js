const fs = require('fs');

const filename = 'my-first-calculator.js';

const minNum  = 0;
const maxNum  = 50;
const nums    = [...Array(maxNum + 1).keys()];
const signs   = ['+', '-', '/', '*'];

let outputStr = `// my-first-calculator.js by loljoho
const readlineSync = require('readline-sync');

console.log('Welcome to this calculator!');
console.log('It can add, subtract, multiply, and divide whole numbers from ${minNum} to ${maxNum}.');
let num1 = readlineSync.question('Please choose your first number: ');
let sign = readlineSync.question('What do you want to do?  +, -, /, or *: ');
let num2 = readlineSync.question('Please choose your second number: ');\n\n`;

fs.writeFileSync(filename, outputStr);

// write all the if statements to file
signs.forEach(sign => {
  nums.forEach(num1 => {
    nums.forEach(num2 => {
      let equals = eval(`${num1}${sign}${num2}`);
      // No `else if`s used because JavaScript will throw the following error:
      // RangeError: Maximum call stack size exceeded
      fs.appendFileSync(filename, 
        `if (num1 == ${num1} && sign == '${sign}' && num2 == ${num2}) {\n\tconsole.log(\`${num1} ${sign} ${num2} = ${equals}\`);\n}\n`
      );
    });
  });
});

fs.appendFileSync(filename, `\nconsole.log('Thanks for using this calculator (:');`);