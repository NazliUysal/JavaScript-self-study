//console.log("I like pizza!");
//console.log("It's really good!");

//window.alert("I really LOVE pizza");

//this is a comment!
/* comment
haha
*/

/* VARIABLES
var, let, const
var isn't used anymore and let can be changed and const cannot be changed

let firstName = "Nazli";
let age =  24;
let student = false;

console.log("Hello, I'm ",firstName);
console.log(age);
console.log(student);

//When we wanna display something in DOM - document object model of the page (just the page)
document.getElementById("p1").innerHTML = "Hello, " + firstName + "!";
document.getElementById("p2").innerHTML = "You are " + age + " years old.";
document.getElementById("p3").innerHTML = "Are you a student? : " + student;


// OPERATIONS 

let students = 20;
students += 1;
let extraStudents = students % 4;
console.log(students);
console.log(extraStudents);


//USER INPUT
easy way with a window prompt

let username = window.prompt("What's your name?");
console.log(username);


//difficult but practical way with a HTML textbox

document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML =  username;
    //changing the label in the html
}


// TYPE CONVERSION

//user input is string data type even if they type out a number, age is string here we need to change types
let age = window.prompt("How old are you?");
//birthday so +1
console.log(typeof age);
age = Number(age);
console.log(typeof age);
age += 1;
console.log("Happy birthday! You are " + age + " old!");

let x;
let y;
let z;

x = Number("3.14");
y = String(3.14);
z = Boolean("");

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);


// Constant
Constant cannot be changed, pi here is a set number so we should add make it a constant so it cannot be changed.
uppercase letters after const, it's just common practice
const PI = 3.14149;
let radius;
let circumference;

radius = window.prompt("Enter the radius of a circle");
radius = Number(radius);

circumference = 2 * PI * radius;

console.log("The circumference of the circle is " , circumference);



//MATH

let x = -3.14;
let y = 5;
let z = 9;
let maximum;
let minimum;

x = Math.round(x);
x = Math.floor(x);
x = Math.ceil(x);
//floor will round down, ceiling(ceil) will round up the number
x = Math.pow(x, 2);
x = Math.sqrt(x);
x = Math.abs(x, 2);
//absolute value is the distance from zero
maximum = Math.max(x, y, z);
minimum = Math.min(x, y, z);

x = Math.PI;
//the constant pi number

console.log(x);


//Hypotenuse problem

let a;
let b;
let hypo;

document.getElementById("button1").onclick = function() {
    a = document.getElementById("text1").value;
    a = Number(a);
    b = document.getElementById("text2").value;
    b = Number(b);
    hypo = Math.sqrt((Math.pow(a, 2) + Math.pow(b, 2)))

    document.getElementById("result").innerHTML = "Result: " + hypo;
}



//Simple Counter
let count = 0;

document.getElementById("decreaseBtn").onclick = function(){
    count -= 1;
    document.getElementById("countLabel").innerHTML = count;
}
document.getElementById("resetBtn").onclick = function(){
    count = 0;
    document.getElementById("countLabel").innerHTML = count;
}
document.getElementById("increaseBtn").onclick = function(){
    count += 1;
    document.getElementById("countLabel").innerHTML = count;
}


//Simple Random Number Generator

let x = Math.random();
// gives a random number between 0-1, if you want something like,
// a number between 0-6 (6 not included, do +1 if you wanna include 6) then you do Math.random()*6, 
//we rounded it down with math.floor
let y = Math.floor(Math.random() * 6);
console.log(y);

let x;
let y;
let z;

document.getElementById("rollButton").onclick = function(){
x = Math.floor(Math.random() * 10) +1;
y = Math.floor(Math.random() * 10) +1;
z = Math.floor(Math.random() * 10) +1;

document.getElementById("xlabel").innerHTML = x;
document.getElementById("ylabel").innerHTML = y;
document.getElementById("zlabel").innerHTML = z;
}

//Useful string properties

let userName = " Naz Uysal ";
let phoneNumber = "123-456-789";

console.log(userName.length);
console.log(userName.charAt(0));
console.log(userName.indexOf("a"));
console.log(userName.lastIndexOf("a"));
userName = userName.trim();
//gets rid of the empty spaces before and after
userName = userName.toUpperCase();
userName = userName.toLowerCase();
phoneNumber = phoneNumber.replaceAll("-", "/")


//Slice
let fullName = "Nazli Uysal";
let firstName;
let lastName;

//firstName =  fullName.slice(0, 5)
//lastName = fullName.slice(5);

//or, bossluk ariyoruz ki ordan kessin
//end where there is a space
firstName = fullName.slice(0, fullName.indexOf(" "));
//begin at where space is +1
lastName = fullName.slice(fullName.indexOf(" ") + 1);
console.log(firstName);


//Method chaining - calling one method after another in one continuous line of code

let userName = "nazli";
let letter = userName.charAt(0).toLocaleUpperCase();
console.log(letter);



// IF STATEMENTS

let age = 20;

if(age >= 65){
    console.log("You are ANCIENT!");
}
else if(age >= 18){
    console.log("You are an adult.");
}
else if(age < 0){
    console.log("In womb!")
}
else{
    console.log("You are a child.");
}

let online = true;
if(online){
    console.log("You are online!");
}
else{
    console.log("You are offline");
}


// Checked property
document.getElementById("myButton").onclick = function(){
    const myCheckBox = document.getElementById("myCheckBox");
    const visaBtn = document.getElementById("visaBtn");
    const masterBtn = document.getElementById("masterBtn");
    const paypalBtn = document.getElementById("paypalBtn");

    if(myCheckBox.checked){
       console.log("Subscribed.");
    }
    else{
        console.log("You are not subscribed.");
    }

    if (visaBtn.checked){
        console.log("You are paying with a visa.")
    }
    else if(masterBtn.checked){
        console.log("You are paying with a mastercard.")
    }
    else if(paypalBtn.checked){
        console.log("You are paying with paypal.")
    }
    else{
        console.log("You must select a payment type!")
    }
}

//Swicthes
//more efficient than if statements

let letterGrade = "A";

switch(letterGrade){
    case "A":
        console.log("You did great!");
        break;
    case "B":
        console.log("You did good!");
        break;
    case "C":
        console.log("You did okay!");
        break;
    case "D":
        console.log("You passed!");
        break;
    case "F":
        console.log("You failed :(");
        break;
    default:
        console.log(letterGrade, "is not a letter grade.");
}

let grade = "95";

switch(true){
    case grade >= 90:
        console.log("You did great!");
        break;
    case grade >= 80:
        console.log("You did good!");
        break;
    case grade >= 70:
        console.log("You did okay!");
        break;
    case grade >= 60:
        console.log("You passed!");
        break;
    case grade < 60:
        console.log("You failed :(");
        break;
    default:
        console.log(grade, "is not a grade.");
}


// AND &&
// OR ||

let temp = 20;
let sunny = false;

if(temp > 0 && temp <30 && sunny){
    console.log('The weather is good.');
}else{
    console.log('The weather is bad.');
}

if (temp <=0 || temp >= 30){
    console.log('The weather is bad.');
}else{
    console.log('The weather is good.');
}

//! NOT - reverse condition
let temp = -15;
let sunny = true;

if (!(temp > 0)){
    console.log("It's cold outside");
}
else{
    console.log("It's warm outside");
}

if (!sunny){
    console.log("It's cloudy outside");
}
else{
    console.log("it's sunny outside")
}

*/
