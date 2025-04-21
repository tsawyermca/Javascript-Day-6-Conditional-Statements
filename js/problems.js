//Problem 1
console.log("A number between -100 and 100 will be chosen at random and determined to be a positive or negative number");
let RNG = Math.floor(Math.random() * 201) - 100;

console.log("The number is: ",RNG);

if(RNG > 0){
    console.log("The number is positive");
} else if(RNG < 0){
    console.log("The number is negative");
} else{
    console.log("The number is zero");
}

//Problem 2
console.log("A score between 0 and 100 will be graded properly");
let score = Math.floor(Math.random() * 101);

console.log(score);

if(score >=90){
    if(score >=97){
        console.log("Grade: A+");
    } else if(score >= 93){
        console.log("Grade: A");
    } else {
        console.log("Grade: A-");
    }
} else if(score >=80){
    if(score >=87){
        console.log("Grade: B+");
    } else if(score >= 83){
        console.log("Grade: B");
    } else {
        console.log("Grade: B-");
    }
} else if(score >= 70){
    if(score >= 77){
        console.log("Grade: C+");
    } else if(score >= 73){
        console.log("Grade: C");
    } else {
        console.log("Grade: C-");
    }
} else if(score >= 60){
    if(score >= 67){
        console.log("Grade: D+");
    } else if(score >= 63){
        console.log("Grade: D");
    } else {
        console.log("Grade: D-");
    }
} else {
    console.log("Grade: F");
}

//Problem 3

let age = Math.floor(Math.random() * 101);

console.log("Customer's Age: ", age);

if(age >= 65){
    console.log("Eligible for Senior's Discount");
} else {
    console.log("Not eligible for Senior's Discount");
}

//Problem 4

let hour = Math.floor(Math.random() * 25);
let minute = Math.floor(Math.random() * 61);

if(minute < 10){
    minute = ("0" + minute);
}

console.log("This will give a randomized time and a time-appropriate message");
console.log(`The time is: ${hour}:${minute}`);

if(hour >= 5 && hour < 12){
    console.log("Good Morning");
} else if(hour >= 12 && hour < 17){
    console.log("Good Afternoon");
} else if(hour >= 17 && hour < 17){
    console.log("Good Evening");
} else{
    console.log("Goodnight");
}

//Problem 5

let tickAge = Math.floor(Math.random() * 101);
console.log("This will give a random age to a customer purchasing a ticket and display the appropriate price");
console.log(`Customer Age: ${tickAge}`);

if(tickAge < 12){
    tickPrice = 5;
} else if(tickAge >= 12 && tickAge <= 64){
    tickPrice = 12;
} else if(tickAge >= 65){
    tickPrice = 8;
}

console.log(`Ticket Price: $${tickPrice}`);

//Problem 6

console.log("This will randomly select a Weight Value in Kilograms/Pounds(Within Human Averages) and a Height Value in Meters/Inches(Within Human Averages)")
let kilo = (Math.random() * 125) + 42;
let met = Math.random() + 1;
kWeight = kilo.toFixed(2);
mHeight = met.toFixed(2);
lbWeight = kWeight * 2.2;
inHeight = mHeight * 39.37;
lbWeight = lbWeight.toFixed(2);
inHeight = inHeight.toFixed(2);
console.log(`Weight in Kilograms: ${kWeight} Weight in Pounds: ${lbWeight}`);
console.log(`Height in Meters: ${mHeight} Height in Inches: ${inHeight}`);
let bmi = kWeight / (mHeight * mHeight);
bmi = bmi.toFixed(1);
if(bmi < 18.5){
    console.log(`The BMI is ${bmi}, this individual is Underweight`)
} else if(bmi < 25){
    console.log(`The BMI is ${bmi}, this individual is at Normal weight `)
} else if(bmi < 30){
    console.log(`The BMI is ${bmi}, this individual is Overweight`)
} else {
    console.log(`The BMI is ${bmi}, this individual is Obese`)
}