/////ALERTS/////

// alert();
// alert("Error! Please enter a valid password.");
// alert("Welcome to JS Land...\nHappy Coding!");
// alert("Welcome to JS Land...",);
// alert("Happy Coding!");
// alert("Hello...I can run JS through my web browser's console");


/////VARIABLES FOR STRINGS/////

// var username=("Bilal");
// var myName=("Bilal Asif");
// var message=("Hello World");
// alert(message);
// alert(myName);
// alert(username);
// var a=("PIZZA\nPIZZ\nPIZ\nPI\nP");
// alert(a);
// var email=("example@example.com");
// alert("My email address is " + (email));
// var book=("A smarter way to learn JavaScript");
// alert(book);
// document.write("<b>Yah! I can write HTML content through javascript</b>");
// var a=("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");
// alert(a);


//////VARIABLES FOR NUMBERS///////

// var age=(18);
// alert(age);
// var a= ("You have visited this site 1 times");
// var b= ("You have visited this site 2 times");
// var c= ("You have visited this site 3 times");
// var d= ("You have visited this site 4 times");
// var e= ("You have visited this site 5 times");
// alert(a);
// alert(b);
// alert(c);
// alert(d);
// alert(e);
// var birthYear=(2003);
// document.write("My birth year is " + birthYear);
// document.write("JohnDoe ordered 5 T-shirt(s) on XYZ Clothing store");


//////VARIABLE NAMES: LEGAL & ILLEGAL//////

// var a=3,b=2,c=1;
// document.write (a,b,c)

/////legal/////           /////illegal//////
// myName                    myname
// my$Name                   my Name
// res_ponse                 resPonse
// my1Name                   $myName
// myName1                   1myName

// document.write("<h1>Rules for naming JS variables</h1>")
// document.write("Variable names can only contain,numbers,$ and_.For example : $my_1stVariable<br>")
// document.write("Variable must begin with a letter,$ or _.For example : $name,_name or name<br>")
// document.write("Variable names are case sensitive<br>")
// document.write("Variable names should not be JS keywords<br>")

///////MATH EXPRESSIONS///////

// var a=(3+5)
// document.write("sum of 3 and 5 is "+ a)

// var b=(3*5)
// document.write("sum of 3 and 5 is "+ b)

// var c=(3/5)
// document.write("sum of 3 and 5 is "+ c)

// var d=(3%5)
// document.write("sum of 3 and 5 is "+ d)

// var a;
// document.write("Value after variable declaration is: "+a +"<br>")
// var a=5;
// document.write("Initial value: "+a+"<br>");

// document.write("Value after increment is: "+ ++a+"<br>");
// var b=a+7;
// document.write("Value after addition is: "+ b+"<br>");

// document.write("Value after decrement "+ --b+"<br>");
// var c = b%3;
// document.write("The remainder is: "+c+"<br>")

// var tickets=600*5;
// document.write("Total cost to buy 5 tickets to a movie is "+tickets+"PKR")

// document.write("Table of 4<br>4x1=4<br>4x2=8<br>4x3=12<br>4x4=16<br>4x5=20<br>4x6=24<br>4x7=28<br>4x8=32<br>4x9=36<br>4x10=40")

// var celsius="20<sup>o</sup>C";
// var f=(20*9/5)+32;
// document.write(celsius+" is "+f+"<sup>o</sup>F");

// var fahrenheit="68<sup>o</sup>F";
// var c=(68-32)*5/9;
// document.write(fahrenheit+" is "+c+"<sup>o</sup>C");

// document.write("<h1>Shopping Cart<br><br></h1>");
// var p1=650;
// var p2=100;
// var q1=3;
// var q2=7;
// var s=100;
// document.write("Price of item 1 is "+p1+"<br>");
// document.write("Quantity of item 1 is "+q1+"<br>")
// document.write("Price of item 2 is "+p2+"<br>");
// document.write("Quantity of item 2 is "+q2+"<br>")
// document.write("Shipping Charges"+s+"<br><br>")
// document.write("Total cost of your order is "+ (p1*q1+p2*q2+s))

// document.write("<h1>Marks sheet</h1>")
// var totalMarks=980;
// var marksObtained=804;
// var percentage=marksObtained/totalMarks*100;
// document.write("Total marks: 980<br>Marks obtained: 804<br>Percentage: "+percentage);

// document.write("<h1>Currency in PKR<br></h1>");
// var currency=(104.80*10+28*25);
// document.write("Total currency in PKR: "+currency);

// document.write(5*10/2);

// document.write("<h1>Age Calculator</h1>")
// var currentYear=2022;
// var birthYear=2003;
// var myAge=2022%2003;
// document.write("current year: 2022<br>birthyear: 2003<br>My Age: "+myAge);

// document.write("<h1>The Lifetime Supply Calculator</h1><br>");
// var favoriteSnack="Chocolate Chip";
// var currentAge=15;
// var maximumAge=65;
// var perDay=3;
// var total=(65-15)*3
// document.write("You will need "+total+" chocolate chip to last you until the ripe old age of "+maximumAge)

// var a=10;
// document.write(a+"<br>")
// var b=++a;
// document.write(b+"<br>")
// var c=a++;
// document.write(c+"<br>")
// var d=--a;
// document.write(d+"<br>")
// var e=a--;
// document.write(e+"<br>")

// var a=2,b=1;
// document.write("a is "+a+"<br>b is "+b)
// var result = --a - --b + ++b + b--;
// document.write("<br>result is "+result)

// var subject1="English",marks1=100,subject2="Urdu",marks2=100,subject3="Math",marks3=100;
// var obtainedMarks1=54,obtainedMarks2=54,obtainedMarks3=48;
// var per1=obtainedMarks1/marks1*100,per2=obtainedMarks2/marks2*100,per3=obtainedMarks3/marks3*100;

// document.write("<b>Subject Total Marks Obrtained Marks Percentage<br></b>")
// document.write(subject1+marks1+obtainedMarks1+per1)

// var c=prompt("city")
// if(c==="karachi"){
// document.write("Welcome to city of lights")
// }
// else{
//     document.write(undefined)
// }

// var gender=prompt("gender")
// if(gender==="male"){
//     document.write("Good Morning Sir")
// }
// else if(gender==="female"){
//     document.write("Good Morning Ma'am")
// }
// else {
//     document.write("undefined")
// }

// var a=prompt()
// if(a==="red"){
//     document.write("<h1>Must stop</h1>");
// }
// else if(a==="yellow"){
//     document.write("<h1>ready to move</h1>");
// }
// else if(a==="green"){
//     document.write("<h1>Move now</h1>");
// }
// else{
//     document.write("write signal in prompt")
// }
