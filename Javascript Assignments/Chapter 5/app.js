//1. Write a program that take two numbers & add them in a
//new variable. Show the result in your browser.

var a = 10;
var b = 5;
var c = a + b;
document.write("Sum of" + " " + a + " " + "and" + " " + b +" " + "is" + " " + c + "<br>");

//2. Repeat task1 for subtraction, multiplication, division &
//modulus.

var d = a - b;
document.write("Subtraction of" + " " + b + " " + "from" + " " + a +" " + "is" + " " + d  + "<br>");
var e = a * b;
document.write("Product of" + " " + a + " " + "and" + " " + b +" " + "is" + " " + e  + "<br>");
var f = a / b;
document.write("Division of" + " " + a + " " + "with" + " " + b +" " + "is" + " " + f  + "<br>");
var g = a % b;
document.write("Modulus of" + " " + a + " " + "and" + " " + b +" " + "is" + " " + g  + "<br>");



/*3. Do the following using JS Mathematic Expressions
a. Declare a variable.
b. Show the value of variable in your browser like “Value
after variable declaration is: ??”.
c. Initialize the variable with some number.
d. Show the value of variable in your browser like “Initial
value: 5”.
e. Increment the variable.
f. Show the value of variable in your browser like “Value
after increment is: 6”.
g. Add 7 to the variable.
h. Show the value of variable in your browser like “Value
MATH EXPRESSIONS | JAVASCRIPT
Page 2 of 9
after addition is: 13”.
i. Decrement the variable.
j. Show the value of variable in your browser like “Value
after decrement is: 12”.
k. Show the remainder after dividing the variable’s value
by 3.
l. Output : “The remainder is : 0”.*/


var num;
document.write("<br> Value after variable declaration is "+ num);
num = 5;
document.write("<br> Initial value:  "+ num);
var num1 = ++num;
document.write("<br> Value after increment is:  "+ num1);
var num2 = num + 7;
document.write("<br> Value after addition is:  "+ num2);
var num3 = --num2;
document.write("<br> Value after decrement is:  "+ num3);
var num4 = num3 % 3;
document.write("<br> The remainder is:  "+ num4);



/*4. Cost of one movie ticket is 600 PKR. Write a script to
store
ticket price in a variable & calculate the cost of buying 5
tickets
to a movie. Example output:*/

var ticket1 = 600;
var ticket5 = ticket1 * 5;
document.write("<br><br><br> Total cost to buy 5 tickets to a movie is" + " " + ticket5 + " " + "PKR" + "<br><br>")



//5. Write a script to display multiplication table of any
//number in your browser. E.g
document.write("<h3>Table of 6</b> </h3>")
var num6 = 6;
for(var i = 1; i<11 ; i++){
  document.write("6 x" + " " + i + "=" + " " + num6*i + "<br>" )
}




/*6. The Temperature Converter: It’s hot out! Let’s make a
converter based on the steps here.
a. Store a Celsius temperature into a variable.
b. Convert it to Fahrenheit & output “NNoC is NNoF”.
c. Now store a Fahrenheit temperature into a variable.
d. Convert it to Celsius & output “NNoF is NNoC”.*/

var celcius = 25;
var fahrenheit = ( celcius * 9 /5) + 32;
document.write( "<br><br><br>" + celcius+"<sup>o</sup>" + "C" + " " + "is" + " " + fahrenheit+"<sup>o</sup>" + "F"  )
var fahrenheit2 = 70;
var celcius2 = ( fahrenheit2 - 32) * 5/9;
document.write( "<br>" + fahrenheit2+"<sup>o</sup>" + "F" + " " + "is" + " " + celcius2+"<sup>o</sup>" + "C"  )






/*7. Write a program to implement checkout process of a
shopping cart system for an e-commerce website. Store
the following in variables
a. Price of item 1
b. Price of item 2
c. Ordered quantity of item 1
d. Ordered Quantity of item 2
e. Shipping charges
Compute the total cost & show the receipt in your browser.*/

var item1 = 650;
document.write("<br><br><br> Price of item 1 is" + " " + item1)
var quantity1 = 3;
document.write("<br> Quantity of item 1 is" + " " + quantity1)
var item2 = 100;
document.write("<br> Price of item 2 is" + " " + item2)
var quantity2 = 7;
document.write("<br> Quantity of item 2 is" + " " + quantity2)
var shippingCharges = 100;
document.write("<br> Shipping Charges" + " " + shippingCharges)
var total = (item1 * quantity1) + (item2 * quantity2) + shippingCharges
document.write("<br> Total Cost of your order is " + " " + total)






/*8. Store total marks & marks obtained by a student in 2
variables. Compute the percentage & show the result in
your browser*/

var totalMarks = 980;
document.write("<br><br><br> Total Marks :" + " " + totalMarks)
var marksObtained = 804;
document.write("<br> Marks Obtained :" + " " + marksObtained)
var percentage = (marksObtained*100) / totalMarks
document.write("<br> Percentage :" + " " + percentage + " " + "%")






/*9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
script to convert the total currency to Pakistani Rupees.
Perform all calculations in a single expression.
(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
and 1 Saudi Riyal = 28 Pakistani Rupee)*/

var dollars = 10;
var riyals = 25;
var dollar1 = 104.80;
var riyal1 = 28;
var totalCurrency = (dollars*dollar1) + ( riyals*riyal1)
document.write("<br><br><br> Total Currency in PKR :" + " " + totalCurrency)






/*10. Write a program to initialize a variable with some
number and do arithmetic in following sequence:
a. Add 5
b. Multiply by 10
c. Divide the result by 2
Perform all calculations in a single expression*/

var x = 5;
var y = (x + 5) *10 / 2 




/*11. The Age Calculator: Forgot how old someone is?
Calculate it!
a. Store the current year in a variable.
b. Store their birth year in a variable.
c. Calculate their 2 possible ages based on the stored
values.
Output them to the screen like so: “They are either NN or NN
years old”.*/


document.write("<br><br><br> <h2>Age Calculator</h2>")
var currentYear = 2022;
document.write("<br> Current Year :" + " " + currentYear)
var birthYear = 2000;
document.write("<br> Birth Year :" + " " + birthYear)
var age = currentYear - birthYear
document.write("<br> Your age is :" + " " + age)





/*12. The Geometrizer: Calculate properties of a circle.
a. Store a radius into a variable.
MATH EXPRESSIONS | JAVASCRIPT
Page 8 of 9
b. Calculate the circumference based on the radius, and
output “The circumference is NN”.
(Hint : Circumference of a circle = 2 π r , π = 3.142)
Calculate the area based on the radius, and output “The
area is NN”. (Hint : Area of a circle = π r2, π = 3.142)*/

document.write("<br><br><br> <h2>The Geometrizer</h2>")
var radius = 20;
document.write("<br> Radius of a circle :" + " " + radius)
var circumference = 2 * 3.14 *radius
document.write("<br> Circumference of a circle :" + " " + circumference)
var area = 3.14 * radius * radius
document.write("<br> Area of a circle :" + " " + area)





/*13. The Lifetime Supply Calculator: Ever wonder how
much a “lifetime supply” of your favorite snack is?
Wonder no more.
a. Store your favorite snack into a variable
b. Store your current age into a variable.
c. Store a maximum age into a variable.
d. Store an estimated amount per day (as a number).
e. Calculate how many would you eat total for the rest of
your life.
Output the result to the screen like so: “You will need
NNNN to last you until the ripe old age of NN”. */
  

document.write("<br><br><br> <h2>The Lifetime Supply Calculator</h2>")
var snack = "chocolate chip";
document.write("<br> Favourite Snack :" + " " + snack)
var currentAge = 15;
document.write("<br> Current Age :" + " " + currentAge)
var estimatedAge = 65;
document.write("<br> Estimated Maximum Age :" + " " + estimatedAge)
var amountOfSnacks = 3;
document.write("<br> Amount of snacks per day :" + " " + amountOfSnacks)
var daysPerYear = 365;
var totalSnack = (estimatedAge - currentAge) * amountOfSnacks * daysPerYear
document.write("<br> You will need" + " " +totalSnack+ " "+ " chocolate chip to last you until the ripe old age of 65")

