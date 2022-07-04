/*1. Write a program to take “city” name as input from user. If
user enters “Karachi”, welcome the user like this:
“Welcome to city of lights”*/
var city = prompt("City");
if(city=="karachi"){
    alert("Welcome to city of lights")
};


/*2. Write a program to take “gender” as input from user. If the
user is male, give the message: Good Morning Sir. If the
user is female, give the message: Good Morning Ma’am.*/

var gender = prompt("Gender");
if(gender=="male"){
    alert("Good Morning Sir")
}
if(gender=="female"){
    alert("Good Morning Ma'am")
}


//3. Write a program to take input color of road traffic signal
//from the user & show the message

var signalColor = prompt("Signal Color");
if(signalColor=="red"){
    alert("Must Stop")
};
if(signalColor=="yellow"){
    alert("Ready to move")
};
if(signalColor=="green"){
    alert("Move now")
};


/*4. Write a program to take input remaining fuel in car (in
    litres) from user. If the current fuel is less than 0.25litres,
    show the message “Please refill the fuel in your car”*/

    var petrol = prompt("Remaining Fuel in car(in litres)");
    if(petrol==0.25 + "litres"){
        alert("Please refill the fuel in your car")
    }
    

   /* 5. Run this script, & check whether alert message would be
displayed or not. Record the outputs.*/
 var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
 var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
 if (true){
alert("True");
}
if (false){
alert("False");
};


//Write a program to take input the marks obtained in three
//subjects & total marks. Compute & show the resulting
//percentage on your page.


document.write("<h2>Marks Sheet</h2>")
var maths = prompt("Maths Marks");
maths = +maths;
var english = prompt("English Marks");
english = +english;
var urdu = prompt("Urdu Marks");
urdu = +urdu;
var totalMarks = 300;
document.write("Total Marks:" + " " + totalMarks + "<br>")
var obtainedMarks = maths + english + urdu;
document.write("Obtained Marks:" + " " + obtainedMarks + "<br>")
var percentage = (obtainedMarks *100) / totalMarks;
document.write("Percentage:" + " " + percentage + "<br>")

if(percentage>=80){
    document.write("Grade: A-one" + "<br>");
    document.write("Remarks:Excellent"+ "<br>");
}else if(percentage>=70){
    document.write("Grade: A" + "<br>");
    document.write("Remarks:Good" + "<br>");  
}else if(percentage>=60){
    document.write("Grade: B" + "<br>");  
    document.write("Remarks:You need to improve"+ "<br>");
}else if(percentage<60){
    document.write("Fail"+ "<br>"); 
    document.write("Remarks:Sorry"); 
}


/*7. Guess game:
Store a secret number (ranging from 1 to 10) in a variable.
Prompt user to guess the secret number.
a. If user guesses the same number, show “Bingo! Correct
answer”.
b. If the guessed number +1 is the secret number, show
“Close enough to the correct answer”.*/
 var secretNum = 6;
 var guess = prompt("Guess the secret number")
 if(guess == secretNum){ 
    alert("Bingo! Correct answer")
 }
 if(guess == secretNum+1){ 
    alert("Close enough to the correct answer")
 }



 //8. Write a program to check whether the given number is
//divisible by 3. Show the message to the user if the number
//is divisible by 3.

var num3 = prompt("Give any number");
num3 = +num3;
if(num3 == ""){
    alert("You have not entered the number")
}else if(num3 % 3 == 0){
    alert("It is divisible by 3.");
}
else{
    alert("It is not divisible by 3.")
}


//9. Write a program that checks whether the given input is an
//even number or an odd number.

var number2 = prompt("Give any number");
if(number2 == ""){
    alert("You have not entered the number")}
else if(number2 % 2 ==0){
    alert("It is even number.");
}else {
    alert("It is odd number.");
}

/*10. Write a program that takes temperature as input and
shows a message based on following criteria
a. T > 40 then “It is too hot outside.”
b. T > 30 then “The Weather today is Normal.”
c. T > 20 then “Today’s Weather is cool.”
d. T > 10 then “OMG! Today’s weather is so Cool.”*/


var temperature = prompt("Write the temperature");
temperature = +temperature;
if( temperature > 40){
    alert("It is too hot outside.");
}else if( temperature > 30){
    alert("The Weather today is Normal.");
}else if(temperature > 20 ){
    alert("Today's Weather is cool.");
} else if( temperature > 10){
    alert("OMG! Today,s weather is so Cool");
}


/*11. Write a program to create a calculator for +,-,*, / & %
using if statements. Take the following input:
a. First number
b. Second number
c. Operation (+, -, *, /, %)
Compute & show the calculated result to user.*/

var firstNumber = prompt("First Number")
firstNumber = +firstNumber;
var secondNumber = prompt("Second Number")
secondNumber = +secondNumber;
var operation = prompt("Plz! Enter the Opration( +, - , * , / , %)")
if( operation == "+"){ 
   alert( firstNumber +  secondNumber)
}else if( operation == "-"){
  alert(  firstNumber - secondNumber)
}else if( operation == "*"){
 alert(firstNumber * secondNumber)
}else if( operation == "/"){
    alert(firstNumber / secondNumber)
}else if( operation == "%"){
    alert(firstNumber % secondNumber)
}

