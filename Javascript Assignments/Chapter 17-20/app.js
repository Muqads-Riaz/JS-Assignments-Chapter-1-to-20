//1. Declare and initialize an empty multidimensional array.
//(Array of arrays)

var arr = [
    [           ],
    [           ],
    [           ],
];
   


//2. Declare and initialize a multidimensional array
//representing the following matrix:
var arr2 = [
    [ 0,1,2,3 ],
    [ 1,0,1,2 ],
    [ 2,1,0,1 ],
];
document.write("<h2>Ans:2</h2>");
document.write("<table>");
for( var i = 0; i<arr2.length; i++ ){
    document.write( "<tr>");
    for( var j = 0; j<arr2[i].length; j++ ){
        document.write("<td>" + arr2[i][j] + "</td>")
    }
    document.write( "</tr>") ;
}
document.write("</table>");


//3. Write a program to print numeric counting from 1 to 10.

document.write("<h2>Ans:3</h2>");
for ( var i = 1; i<11; i++){
    document.write(i + "<br>")
}


//4. Write a program to print multiplication table of any
//number using for loop. Table number & length should be
//taken as an input from user.

document.write("<h2>Ans:4</h2>");
var a = prompt("Enter a number to show its multiplication table");
var b = prompt("Enter length multiplication table.");
for(var i = 1; i<= b; i++){
    document.write(a + " " + "x" + " " + i + " " + "=" + " " + i * a + " " + " <br>")
};



//5. Write a program to print items of the following array
//using for loop:
document.write("<h2>Ans:5</h2>");
document.write("<br>")
var fruits = [ "apple" , "mango" , "banana" , "orange" , "strawberry"]
for( var i =0; i<fruits.length; i++){
    document.write(fruits[i] + " <br>" )
}
document.write("<br>")
for( var i =0; i<fruits.length; i++){
    document.write("Element at index" + " " + i + " " + "is" + " " + fruits[i] + " <br>" )
}




/*6. Generate the following series in your browser. See
example output.
a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k*/

document.write("<h2>Ans:6</h2>");
document.write("<h3>Counting:</h3>");
for(var i = 1; i<=15; i++){
    document.write(i + ",")
};
document.write("<h3>Reverse Counting:</h3>");
for(var i = 10; i >= 1; i--){
    document.write(i + ",");
}
document.write("<h3>Even:</h3>");
for(var i = 0; i<=20; i++){
 if(i%2==0 )document.write(i + ",")
}
document.write("<h3>Odd:</h3>");
for(var i = 0; i<=20; i++){
 if(i%2!=0 )document.write(i + ",")
}
document.write("<h3>Series:</h3>");
for(var i = 1; i<=20; i++){
 if(i%2==0 )document.write(i + "k" + ",")
}


/*7. You have an array
A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
Write a program to enable “search by user input” in an
array.
After searching, prompt the user whether the given item is
found in the list or not.*/
var bakery = ["cake", "apple pie", "cookie", "chips", "patties"]
var items = prompt("Welcome to Madina Bakery.What do you want to order sir/ma,am")
var flag = 1;
for( var i=0; i<bakery.length; i++){
    if(bakery[i] == items){
alert(items + " " + " is available at index" + " " + i + " " + "in our bakery");
flag = 0;
break;
    }
}

if(flag == 1){
    alert("We are sorry." + " " + items + " " + " is not available in our bakery");
}
   


//8. Write a program to identify the largest number in the
//given array.
document.write("<h2>Ans:8</h2>");
var num1 = [24, 53, 78, 91, 12];
document.write("Array items:" + " " + num1 + " <br>");
max = num1[0];
for( var i = 0; i < num1.length ; i++){
    if(num1[i]>max){
       max = num1[i];
    }
}
document.write("The largest number is " + " " + max);
//  var num2 = Math.max(num1);
//  document.write(num2);

 //9. Write a program to identify the smallest number in the
 //given array.
 document.write("<h2>Ans:9</h2>");
 var min1 = [24, 53, 78, 91, 12];
 document.write("Array items:" + " " + min1 + " <br>");
 max = min1[0];
for( var i = 0; i < min1.length ; i++){
    if(min1[i]<max){
      max = min1[i];
    }
}
document.write("The smallest number is " + " " + max);




//10. Write a program to print multiples of 5 ranging 1 to
//100.
document.write("<h2>Ans:10</h2>");
for(var i = 5; i<=100; i++){
 if(i%5==0 )document.write(i + ",")
}


