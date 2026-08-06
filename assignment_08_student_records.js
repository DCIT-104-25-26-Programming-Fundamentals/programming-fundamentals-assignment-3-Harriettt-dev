



const readlineSync = require("readline-sync");

let students = [];

function average(scores) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return sum / scores.length;
}

function addStudent() {
    let name = readlineSync.question("Student name: ");
    let id = readlineSync.questionInt("Student ID: ");
    let n = readlineSync.questionInt("How many scores? ");

    let scores = [];
    for (let i = 0; i < n; i++) {
        scores.push(readlineSync.questionInt("Enter score " + (i + 1) + ": "));
    }

    students.push({ name: name, id: id, scores: scores });
    console.log('Student "' + name + '" added successfully.');
}

function displayStudents() {
    if (students.length === 0) {
        console.log("No students found.");
        return;
    }

    console.log("\nName\tID\tScores\tAverage");
    for (let i = 0; i < students.length; i++) {
        let s = students[i];
        console.log(
            s.name + "\t" +
            s.id + "\t" +
            s.scores.join(", ") + "\t" +
            average(s.scores).toFixed(2)
        );
    }
}

function calculateAverage() {
    let id = readlineSync.questionInt("Enter student ID: ");

    for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            console.log(
                students[i].name + "'s average score: " +
                average(students[i].scores).toFixed(2)
            );
            return;
        }
    }

    console.log("Student ID not found.");
}

function main() {
    let choice;

    do {
        console.log("\n================================");
        console.log("   STUDENT RECORD SYSTEM MENU");
        console.log("================================");
        console.log("1. Add student");
        console.log("2. Display all students");
        console.log("3. Calculate average score");
        console.log("4. Quit");

        choice = readlineSync.questionInt("Enter your choice (1-4): ");

        switch (choice) {
            case 1:
                addStudent();
                break;
            case 2:
                displayStudents();
                break;
            case 3:
                calculateAverage();
                break;
            case 4:
                console.log("Goodbye!");
                break;
            default:
                console.log("Invalid choice.");
        }
    } while (choice !== 4);
}

main();


