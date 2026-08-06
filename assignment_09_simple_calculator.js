



const readlineSync = require("readline-sync");

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        console.log("Error: Cannot divide by zero.");
        return null;
    }
    return a / b;
}

function modulus(a, b) {
    return a % b;
}

function power(a, b) {
    return a ** b;
}

function main() {
    let choice;

    do {
        console.log("\n===========================");
        console.log("    SIMPLE CALCULATOR");
        console.log("===========================");
        console.log("1. Addition");
        console.log("2. Subtraction");
        console.log("3. Multiplication");
        console.log("4. Division");
        console.log("5. Modulus");
        console.log("6. Exponentiation");
        console.log("7. Quit");

        choice = readlineSync.questionInt("Select an operation (1-7): ");

        if (choice >= 1 && choice <= 6) {
            let a = readlineSync.questionFloat("Enter first number: ");
            let b = readlineSync.questionFloat("Enter second number: ");
            let result;

            switch (choice) {
                case 1:
                    result = add(a, b);
                    break;
                case 2:
                    result = subtract(a, b);
                    break;
                case 3:
                    result = multiply(a, b);
                    break;
                case 4:
                    result = divide(a, b);
                    if (result === null) break;
                    break;
                case 5:
                    result = modulus(a, b);
                    break;
                case 6:
                    result = power(a, b);
                    break;
            }

            if (result !== null) {
                console.log("Result: " + result.toFixed(2));
            }
        } else if (choice === 7) {
            console.log("Goodbye!");
        } else {
            console.log("Invalid choice.");
        }

    } while (choice !== 7);
}

main();
