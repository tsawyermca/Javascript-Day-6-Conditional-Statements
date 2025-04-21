let number = 10;

console.log(number);

if(number > 0){
    console.log("The number is positive.");
} else if (number < 0){
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}


let score = 92;
//checks a condition
if(score >= 90){
    console.log("Grade: A");
}

//checks condition but has an action if condition is not met
if(score >= 90){
    console.log("Grade: A");
} else {
    console.log("Grade: Not A");
}

//checks condition with multiple responses based on various conditions reads in sequence and only runs the first condition it fulfills
if(score >= 90){
    console.log("Grade: A");
} else if(score >= 80){
    console.log("Grade: B");
} else if(score >= 70){
    console.log("Grade: C");
} else if(score >= 60){
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}

//if statements within if statements. Checks additional conditions within conditions, known as Nested Conditionals
if(score >= 90){
    if(score === 100) {
        console.log("Grade: A+ with Honors");
    } else {
        console.log("Grade: A");
    }
} else {
    console.log("Grade: Not A");
}

//Ternary Operator
let grade = score >= 90 ? 'A' : 'Not A';
console.log("Grade: ", grade);

//Switch Statement
let g = 'B';

switch (g) {
    case 'A':
        console.log("Excellent");
        break;
    case 'B':
        console.log("Good");
        break;
    case 'C':
        console.log("Needs Improvement");
        break;
    default:
        console.log("Fail");
}