

const readlineSync = require('readline-sync');


const readlineSync = require("readline-sync");

function readMatrix(rows, cols) {
    let matrix = [];
    for (let i = 0; i < rows; i++) {
        let row = readlineSync.question(`Enter row ${i + 1}: `);
        matrix.push(row.split(" ").map(Number));
    }
    return matrix;
}

function printMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(" "));
    }
}

function transpose(matrix) {
    let result = [];
    for (let i = 0; i < matrix[0].length; i++) {
        result[i] = [];
        for (let j = 0; j < matrix.length; j++) {
            result[i][j] = matrix[j][i];
        }
    }
    return result;
}

function addMatrices(a, b) {
    let result = [];
    for (let i = 0; i < a.length; i++) {
        result[i] = [];
        for (let j = 0; j < a[0].length; j++) {
            result[i][j] = a[i][j] + b[i][j];
        }
    }
    return result;
}

function multiplyMatrices(a, b) {
    let result = [];
    for (let i = 0; i < a.length; i++) {
        result[i] = [];
        for (let j = 0; j < b[0].length; j++) {
            result[i][j] = 0;
            for (let k = 0; k < b.length; k++) {
                result[i][j] += a[i][k] * b[k][j];
            }
        }
    }
    return result;
}

function main() {
    console.log("PART A - Transpose");
    let rows = readlineSync.questionInt("Enter number of rows: ");
    let cols = readlineSync.questionInt("Enter number of columns: ");
    let matrix = readMatrix(rows, cols);

    console.log("Transposed Matrix:");
    printMatrix(transpose(matrix));

    console.log("\nPART B - Add Matrices");
    rows = readlineSync.questionInt("Enter number of rows: ");
    cols = readlineSync.questionInt("Enter number of columns: ");

    console.log("Matrix A");
    let a = readMatrix(rows, cols);

    console.log("Matrix B");
    let b = readMatrix(rows, cols);

    console.log("Sum Matrix:");
    printMatrix(addMatrices(a, b));

    console.log("\nPART C - Multiply Matrices");
    let r1 = readlineSync.questionInt("Rows of Matrix A: ");
    let c1 = readlineSync.questionInt("Columns of Matrix A: ");

    console.log("Matrix A");
    a = readMatrix(r1, c1);

    let r2 = readlineSync.questionInt("Rows of Matrix B: ");
    let c2 = readlineSync.questionInt("Columns of Matrix B: ");

    console.log("Matrix B");
    b = readMatrix(r2, c2);

    if (c1 !== r2) 
      { console.log("Matrix multiplication not possible."); }
     else 
    { console.log("Product Matrix:");
        printMatrix(multiplyMatrices(a, b));
    }
}

main();
