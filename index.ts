#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "secondNumber" },
  {
    message: "select one of the operator to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition","Substraction","multiplication","Division"],
  },
]);
// conditional statement 
if( answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
} else if(answer.operator === "Substraction"){
    console.log(answer.firstNumber - answer.secondNumber);
} else if(answer.operator === "multiplication"){
    console.log(answer.firstNumber * answer.secondNumber);
} else if(answer.operator === "Division"){
    console.log(answer.firstNumber / answer.secondNumber);
} else {
    console.log("please select valid operator")
}