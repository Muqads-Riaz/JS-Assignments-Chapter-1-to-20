//1. Declare an empty array using JS literal notation to store
//student names in future.
var studentNames = [    ];

//2. Declare an empty array using JS object notation to store
//student names in future.
var studentNames = {    };


//3. Declare and initialize a strings array.
var names = ["sana", "saba", "hina"];

//4. Declare and initialize a numbers array.
var num = [10, 20, 30, 40, 50];

//5. Declare and initialize a boolean array.
var arr = [true, false]

//6. Declare and initialize a mixed array.

var mixed = [ 10 , "sana" , true , " " , " ali" , "50"]

//7. Declare and Initialize an array and store available
//education qualifications in Pakistan (e.g. SSC, HSC, BCS,
//BS, BCOM, MS, M. Phil., PhD).
document.write("<h2>Ans:7</h2>")
var qualification = [ " "," SSC" , "HSC" , " BCS" , "BS" , "B.COM" , "M.S" , "M.Phil.", "PhD"]
document.write("<h2>Qualification:</h2>")
for(var i = 1; i < qualification.length; i++){
    document.write(i + ") " + qualification[i] + "<br>")
}


/*8. Write a program to store 3 student names in an array.Take
another array to store score of these three students.
Assume that total marks are 500 for each student, display
the scores & percentages of students like:*/
document.write("<h2>Ans:8</h2>")
var nam = [ "michael", "john" , "tony"];
var scores = [ 320,230,480];
var totalscore = 500;
var per1 = (scores[0] * 100) / 500;
var per2 = (scores[1] * 100) / 500;
var per3 = (scores[2] * 100) / 500;
document.write("Score of" + " " + nam[0] + " " + "is" + " " + scores[0] + ".percentage:" + per1 + "<br>");
document.write("Score of" + " " + nam[1] + " " + "is" + " " + scores[1] + ".percentage:" + per2 + "<br>");
document.write("Score of" + " " + nam[2] + " " + "is" + " " + scores[2] + ".percentage:" + per3 + "<br>");

/*9. Initialize an array with color names. Display the array
elements in your browser.
a. Ask the user what color he/she wants to add to the
beginning & add that color to the beginning of the array.
Display the updated array in your browser.
b. Ask the user what color he/she wants to add to the end
& add that color to the end of the array. Display the
updated array in your browser.
c. Add two more color to the beginning of the array.
Display the updated array in your browser.
d. Delete the first color in the array. Display the updated
array in your browser.
e. Delete the last color in the array. Display the updated
array in your browser.
f. Ask the user at which index he/she wants to add a color
& color name. Then add the color to desired
position/index. . Display the updated array in your
browser.
g. Ask the user at which index he/she wants to delete
color(s) & how many colors he/she wants to delete. Then
remove the same number of color(s) from user-defined
position/index. . Display the updated array in your
browser.*/

document.write("<h2>Ans:09</h2>")
var colors = [ "Yellow" , " green" , "blue"]
document.write(colors + "<br>");

var colors2 = prompt("Name the color which you want to add in the begining of array.");
colors.unshift(colors2);
document.write(colors + "<br>");

colors.unshift("black","white");
document.write(colors + "<br>");

colors.shift();
document.write(colors + "<br>");

colors.pop();
document.write(colors + "<br>");

var colors3 = prompt("Which color you want to add");
var position3 = prompt("At which position you want to add color");
position3 = +position3;
colors.splice(position3 ,0, colors3)
document.write(colors + "<br>");


var position4 = prompt("From which position you want to delete color");
var numOfDelete = prompt("How many colors you want to delete?");
colors.splice(position4 , numOfDelete)
document.write(colors + "<br>");



//10. Write a program to store student scores in an array &
//sort the array in ascending order using Array’s sort
//method.
document.write("<h2>Ans:10</h2>")
var scores22 = [320, 230 , 480, 120];
document.write("Scores of Students:" + scores22 + "<br>");
var scores33 = scores22.sort();
document.write("Scores of Students:" + scores33 + "<br>");

//11. Write a program to initialize an array with city names.
//Copy 3 array elements from cities array to selectedCities
//array.

document.write("<h2>Ans:11</h2>")
var cities = [ "Karachi" , "Lahore" , "Islamabad" , "Quetta" , "Peshawar"];
document.write("Cities List:" + cities + "<br>");
var selectedCities = cities.slice(2,4)
document.write("Selected Cities List:" + selectedCities + "<br>");

//12. Write a program to create a single string from the
//below mentioned array:
//var arr = [“This ”, “ is ”, “ my ”, “ cat”];

document.write("<h2>Ans:12</h2>")
var arr3 = [ "This", "is", "my", "cat"];
document.write(arr3 + "<br>");
var arr4 = arr3.join();
document.write(arr4 + "<br>");


/*13. Create a new array. Store values one by one in such a way
that you can access the values in the order in which they
were stored. (FIFO-First In First Out)*/
document.write("<h2>Ans:13</h2>")
var partsName = new Array();
partsName[0] = "keyboard";
partsName[1] = "mouse";
partsName[2] = "printer";
partsName[3] = "monitor";
document.write( "<h2>Devices:</h2>" + partsName + " <br> ")
for( var i = 0 ; i < partsName.length; i++){
    document.write("Out:" + "<br>" + partsName[i] + "<br>")
}

/*14. Create a new array. Store values one by one in such a way
that you can access the values in reverse order. (Last InFirst Out)*/
 
document.write("<h2>Ans:14</h2>")
var partsName = new Array();
partsName[0] = "keyboard";
partsName[1] = "mouse";
partsName[2] = "printer";
partsName[3] = "monitor";
document.write( "<h2>Devices:</h2>" + partsName + " <br> ")
var partsName2 =  partsName.reverse()
for( var i = 0 ; i < partsName.length; i++){
    document.write("Out:" + "<br>" + partsName2[i] + "<br>")
}
   


/*15. Write a program to store phone manufacturers (Apple,
    Samsung, Motorola, Nokia, Sony & Haier) in an array.
    Display the following dropdown/select menu in your
    browser using document.write() method:*/
    document.write("<h2>Ans:15</h2>")
    var appliances = ["Apple", "Samsung" , " Motorola", "Nokia" , "Haier"]
    document.write("<select>");
    document.write("<option>" + appliances[0] +"</option>");
    document.write("<option>" + appliances[1] +"</option>");
    document.write("<option>" + appliances[2] +"</option>");
    document.write("<option>" + appliances[3] +"</option>");
    document.write("<option>" + appliances[4] +"</option>");
    document.write("</select>")