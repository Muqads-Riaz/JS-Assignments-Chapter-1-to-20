/*1. Write a program that takes a character (number or string)
in a variable & checks whether the given input is a
number, uppercase letter or lower case letter. (Hint: ASCII
codes:- A=65, Z=90, a=97, z=122).*/

var alpha = prompt("Write a character");
asci = alpha.codePointAt();
if(asci <= 65 && asci <= 90 ){
    document.write("It is uppercase letter");
    alert("It is uppercase letter");
}else if(asci >= 97 && asci <= 122 ){
    document.write("It is lowercase letter");
    alert("It is lowercase letter");
} else {
    document.write("It is number.");
    alert("It is number.");
}

//2. Write a JavaScript program that accept two integers and
//display the larger. Also show if the two integers are equal.
document.write("<h2>Ans:2</h2>");
var integer1 = prompt("Give an integer number");
integer1 = +integer1;
var integer2 = prompt("Give another integer number");
integer2 = +integer2;
if(integer1 > integer2){
    document.write(integer1 + " " + "is greater");
}else if(integer1 < integer2){
    document.write(integer2 + " " + "is greater");
}else if(integer1 == integer2){
    document.write("Both integers are equal");
}else{
    document.write("Please enter a number.")
}


//3. Write a program that takes input a number from user &
//state whether the number is positive, negative or zero.

document.write("<h2>Ans:3</h2>");
var number = prompt("Give an number");
number = +number;
if(number > 0){
    document.write("Number is positive")
}else if(number < 0){
    document.write("Number is negative")
}else if(number == 0){
    document.write("Number is zero")
} 


//4. Write a program that takes a character (i.e. string of
   // length 1) and returns true if it is a vowel, false otherwise
 var flag = 0;
   document.write("<h2>Ans:4</h2>");
   var vowel = [ "a", "e" , "i" , "o" , "u"];
var letter = prompt("Write a character of length 1");
letter = letter.toLowerCase();
for( var i = 0;i < vowel.length; i++){
    if(letter == vowel[i]){
        document.write("True, it is vowel.")
     var flag = 1;
    }
}
if( flag== 0){
    document.write("False, it is not vowel.")
}
document.write("<br>")


/*5. Write a program that
a. Store correct password in a JS variable.
b. Asks user to enter his/her password
c. Validate the two passwords:
i. Check if user has entered password. If not, then
give message “ Please enter your password”
ii. Check if both passwords are same. If they are
same, show message “Correct! The password you
entered matches the original password”. Show
“Incorrect password” otherwise.*/
document.write("<h2>Ans:5</h2>");

var password = 123456;
var userPassword = prompt("Enter the password")
if(userPassword == ""){ 
    alert("Please enter your password");
    document.write("Please enter your password");
}else if(userPassword == password){ 
    alert("Correct! The password you entered matches the original password");
    document.write("Correct! The password you entered matches the original password");
}else{
    document.write("Incorrect password");
    alert("Incorrect password");
}



/*6. This if/else statement does not work. Try to fix it:
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
else
greeting = "Good evening";
}*/
document.write("<h2>Ans:6</h2>");
var greeting;
var hours = 13;
if (hours < 18){
    greeting = "Good day";
  } else{
    greeting = "Good evening";
    }
    document.write( greeting);


    //7. Write a program that takes time as input from user in 24
//hours clock format like: 1900 = 7pm. Implement the
//following case using if, else & else if statements
document.write("<h2>Ans:7</h2>");
 var time = prompt("Enter the time(0000-2359)");
 if(time>= 0000 && time < 1200 ){
    document.write("Good Morning!");
    alert("Good Morning!");
 }else if(time>= 1200 && time < 1700 ){
    document.write("Good Afternoon!");
    alert("Good Afternoon!");
 }else if(time>= 1700 && time < 2100 ){
    document.write("Good Evening!");
    alert("Good Evening!");
 }else if(time>= 2100 && time < 2359 ){
    document.write("Good Night!");
    alert("Good Night!");
 }else{
    document.write("Please!Enter the time");
    alert("Please!Enter the time");
 }