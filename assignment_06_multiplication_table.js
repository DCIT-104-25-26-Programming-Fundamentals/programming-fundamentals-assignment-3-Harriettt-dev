



const readlineSync = require("readline-sync");

function printTable(number) {
    console.log("\nMultiplication Table for " + number + ":");

    for (let i = 1; i <= 12; i++) {
        console.log(number + " x " + i + " = " + (number * i));
    }
}

function printTables(n) {
    if (n <= 0) {
        console.log("Error: N must be a positive integer.");
        return;
    }

    for (let i = 1; i <= n; i++) {
        printTable(i);
        console.log("---------------------------");
    }
}

function main() {
    let number = readlineSync.questionInt("Enter a number: ");
    printTable(number);

    let n = readlineSync.questionInt("\nEnter N: ");
    printTables(n);
}

main();


