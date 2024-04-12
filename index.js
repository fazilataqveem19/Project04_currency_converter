#! /usr/bin/env node
import inquirer from "inquirer";
const convertion = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    PKR: 280,
    INR: 74.57
};
let answere = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from Currency",
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'PKR', 'INR']
    },
    {
        name: "to",
        message: "Enter to Currency",
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'PKR', 'INR']
    },
    {
        name: "amount",
        message: "Enter your Amount",
        type: "number"
    }
]);
let fromAmount = convertion[answere.from];
let toAmount = convertion[answere.to];
let amount = answere.amount;
let baseAmount = amount / fromAmount; //USD is base currency
let convertedAmount = baseAmount * toAmount;
let roundedNum = convertedAmount.toFixed(2);
console.log(roundedNum);
