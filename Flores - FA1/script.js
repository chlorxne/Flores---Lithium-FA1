//1
var nickname = "Juju";

var inchheight = "64";
var ftheight = (inchheight * 0.0833);

var kgweight = "53";
var lbsweight = (kgweight * 2.2046);

alert("Nickname: " + nickname) 
alert("Height: " + ftheight + " ft") 
alert("Weight: " + lbsweight + " lbs" );

//2
var qname = "Please enter your first name: "
var name = prompt(qname)

var qlname = "Please enter your last name: "
var lname = prompt(qlname)  	

var qbyr = "Please enter your birth year: "
var byr = prompt(qbyr)
var n_age = (2023 - byr);

// document.getelementbyid doesnt work. but heres the code i tried:
// document.getElementbyId("phrase").textContent = ("Hello, " + name + " " + lname "! How does it feel to be " + n_age + " years old?")

//3

var qconsent = "Do you wish to share your information to the site? "
var consent = confirm(qconsent)

if(consent == true){
document.write("Nickname: " + nickname)
/n 
document.write(" Height: " + ftheight + " ft")
/n 
document.write(" Weight: " + lbsweight + " lbs" )
}

else{
document.write("User does not wish to share his/her information.")
}
