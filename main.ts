#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let myBalance = 50000;
let pincode = 3698;

console.log(chalk.redBright('\n" Welcome to HBL Bank "\n'));

let pinAns = await inquirer.prompt([
    {
        name: "code",
        type: "number",
        message: (chalk.magentaBright("Please Enter your 4-digit pin code"))
    }
])

if(pinAns.code === pincode) {
    console.log(chalk.bgGreen("\n Your pin is correct \n"));
}
 else{
     console.log(chalk.cyanBright(" \n Your invalid pin code \n"));
     process.exit()
 }


let operationAns = await inquirer.prompt([
    {
        name:"operation",
        type: "list",
        message: (chalk.magentaBright("Please Select your options")),
        choices: ["Withdraw","Fast cash","Balance"]
    }
])

if(operationAns.operation === "Withdraw"){
    console.log(chalk.bgBlue("\n How much money do you want? \n"));

const amount = await inquirer.prompt([{
    
    type: "number",
    name: "amount1",
    prefix:">",
    message: (chalk.magentaBright("\nEnter the Amount:"))

}]);
if(amount.amount1 <= myBalance){
    console.log(chalk.yellow(`\n Now your remaining balance is: ${myBalance - amount.amount1}\n`))
}

else{
    console.log(chalk.blue("\n Insufficient Balance \n"));  
}
}

else if(operationAns.operation === "Fast cash"){
    
    let cash = await inquirer.prompt([
    {
        type: "list",
        name: "amount2",
        prefix: ">",
        message: (chalk.magentaBright(" \n Select the amount \n")),
        choices: ["5000","10000","15000","20000","40000","45000"]
    }
])
console.log(chalk.yellow(`\n Now your remaining balance is: ${myBalance - cash.amount2}\n`))
}

else if(operationAns.operation === "Balance"){
    console.log(chalk.greenBright("\n Now your current balance is =", myBalance));
    
}