



const readlineSync = require("readline-sync");

function printFibonacci(n) {
    if (n <= 0) {
        console.log("Error: N must be a positive integer.");
        return;
    }

    let a = 0, b = 1;

    process.stdout.write("Fibonacci sequence: ");

    for (let i = 0; i < n; i++) {
        process.stdout.write(a + " ");
        let next = a + b;
        a = b;
        b = next;
    }

    console.log();
}

function isFibonacci(num) {
    let a = 0, b = 1;

    while (a < num) {
        let next = a + b;
        a = b;
        b = next;
    }

    if (a === num) {
        console.log(num + " is a Fibonacci number.");
    } else {
        console.log(num + " is NOT a Fibonacci number.");
    }
}

function main() {
    let n = readlineSync.questionInt("How many terms? ");
    printFibonacci(n);

    let number = readlineSync.questionInt("Enter a number to check: ");
    isFibonacci(number);
}

main();

