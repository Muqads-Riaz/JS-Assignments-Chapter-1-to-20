/*1. Write a program to take a number in a variable, do the
required arithmetic to display the following result in your
browser:*/
document.write("<h2>Ans:1</h2>")
var a = 10;
document.write("The value of a is :" + " " + a + " <br><br>")
var b = ++a;
document.write("The new value of ++a is :" + " " + b + " <br>")
document.write("Now,the new value of a is :" + " " + a + " <br><br>")
var c = a++;
document.write("The new value of a++ is :" + " " + c  + " <br>")
document.write("Now,the new value of a is :" + " " + a + " <br><br>")
var d= --a;
document.write("The new value of --a is :" + " " + d + " <br>")
document.write("Now,the new value of a is :" + " " + a + " <br><br>")
var e = a--;
document.write("The new value of a-- is :" + " " + e  + " <br>")
document.write("Now,the new value of a is :" + " " + a + " <br><br>")







/*2. What will be the output in variables a, b & result after
execution of the following script:
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
Explain the output at each stage:
--a;
--a - --b;
--a - --b + ++b;
--a - --b + ++b + b--;*/
document.write("<h2>Ans:2</h2>")

var a1 = 2;
document.write( "Value of a is " + " " + a1);
var b1 = 1;
document.write( "<br> Value of b is" + " " + b1)
var c1 = --a1 - --b1 + ++b + b--;
document.write( "<br> Result is" + " " + c1);






//3. Write a program that takes input a name from user &
//greet the user.

var data = prompt("Your Name?")
alert("Hi" + " " + data + "!" + " " + "Welcome to our website")







/*5. Write a program to take input a number from user &
display it’s multiplication table on your browser. If user
does not enter a new number, multiplication table of 5
should be displayed by default.*/

document.write("<h2>Ans:5</h2>");
var a = prompt("Enter a number to show its multiplication table","5");
for(var i = 1; i<= 10; i++){
    document.write(a + " " + "x" + " " + i + " " + "=" + " " + i * a + " " + " <br>")
};





/*6. Take
a) Take three subjects name from user and store them in 3
different variables.
b) Total marks for each subject is 100, store it in another
variable.
c) Take obtained marks for first subject from user and
stored it in different variable.
d) Take obtained marks for remaining 2 subjects from user
and store them in variables.
e) Now calculate total marks and percentage and show the
result in browser like this.*/


var subject1name = prompt(" 1st Subject Name");
var subject1 = prompt(" 1st Subject Marks");
subject1 = +subject1;
var subject2name = prompt(" 2nd Subject Name");
var subject2 = prompt(" 2nd Subject Marks");
subject2 = +subject2;
var subject3name = prompt(" 3rd Subject Name");
var subject3 = prompt(" 3rd Subject Marks");
subject3 = +subject3;
var totalEachSubject = 100;
var totalMarks = 3 * totalEachSubject;
var totalObtainedMarks = subject1 + subject2 + subject3;
var percentage = (totalObtainedMarks * 100) / totalMarks;

document.write("<h2>Ans:6</h2>");
document.write("<table border = '1' , cellspacing = '0' >");
    document.write( "<tr>");
   document.write( "<th>Subjects</th>")
   document.write(  "<th>Total Marks</th>")
   document.write( "<th>Obtained Marks</th>" )
   document.write(  "<th>Percentage</th>")
    document.write( "</tr>") ;
    document.write( "<tr>");
   document.write( "<td>"+ subject1name +"</td>")
   document.write(  "<td>"+ totalEachSubject +"</td>")
   document.write( "<td>"+ subject1 +"</td>")
   document.write( "<td>"+subject1 + "%"+"</td>" )
    document.write( "</tr>") ;
    document.write( "<tr>");
   document.write( "<td>"+ subject2name +"</td>")
   document.write( "<td>"+ totalEachSubject +"</td>" )
   document.write( "<td>"+ subject2 +"</td>")
   document.write(  "<td>"+ subject2 + "%" +"</td>")
    document.write( "</tr>") ;
    document.write( "<tr>");
   document.write("<td>"+ subject3name +"</td>") 
   document.write( "<td>"+ totalEachSubject +"</td>")  
   document.write( "<td>"+ subject3 +"</td>")
   document.write(  "<td>"+ subject3 + "%" +"</td>")
    document.write( "</tr>") ;
    document.write( "<tr>");
    document.write( "<td></td>")
    document.write( "<td>"+ totalMarks+"</td>") 
    document.write( "<td>"+ totalObtainedMarks +"</td>")
    document.write( "<td>"+ percentage +"</td>")
     document.write( "</tr>") ;
document.write("</table>");




