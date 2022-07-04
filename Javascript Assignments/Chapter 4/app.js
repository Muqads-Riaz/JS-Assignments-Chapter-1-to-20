//1. Declare 3 variables in one statement.

var a ; var b ; var c ;

//2. Declare 5 legal & 5 illegal variable names.

                   //Legal
 var name;
 var name123;
 var fullName;
 var name$ ;
 var full_name;
                   //illegal
// var 12345;
// var 123name;
// var Name;
// var full-name;
// var full name;


//3. Display this in your browser

document.write( "<h3>" + "Rules for naming JS Variables" + "</h3>" + "<br>" +
"Variable name can only contains, numbers , $ and _.For Example: $my_1stVariable" + "<br>" + "Variables must begin with a letter, $ or _.For Example:$name, _name or name." + "<br>" +"Variable names are case sensitive" + "<br>" + "Variable names should not be JS Keywords"
);

