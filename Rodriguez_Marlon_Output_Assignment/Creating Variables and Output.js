/* Creating Variables and Output Assignment
Scalable Data Infrastructures - Sec 02
Professor Lee Lewis
created by Marlon Rodriguez */

//Variables declaration,here you can find all global variables declared
 
//Getting host and visitor names
var hostName = "Marlon Rodriguez";
var visitorsName = window.prompt("Please enter you name:");   //visitor will be asked to type his/her name

//Getting host and visitor gender
var hostGender = "Male";
var getVisitorsGender = window.alert("are you Male ?");
if(getVisitorsGender == true){
	var visitorsGender = "Male"
}else{
	visitorsGender = "Female"
	}

//Getting host and visitor state of residence
var hostStateOfResidence = " New York ";
var getVisitorsStateOfResidence = window.prompt("What state do you live in ?");
	
//Getting host and visitor profession
var hostProfession = "IT specialist/Jr Web Developer";
var visitorsProfession = window.prompt("Please enter your profession:"); //visitor will be asked to type his/her profession

//Getting host and visitor age
var hostAge = 38;
var getVisitorsAge = window.prompt("Please enter your age:"); //visitor will be asked to type his/her age
var visitorsAge = Number(getVisitorsAge);                     //visitor age will be convert to number type

//Getting host and visitor info about children
var hostChildren = true ;
var hostNumberOfKids = 1 ;
var getVisitorsChildren = window.prompt("Do you have kids ? ");  //visitor will be asked if they have children

if ((getVisitorsChildren == 'yes')||(getVisitorsChildren == 'YES')){
    
    var visitorsChildren = true;
    var getNumberOfKids = window.prompt("How many children do you have?");  //number of visitor's children
    var visitorsNumberOfKids = Number(getNumberOfKids);
        
} else if((getVisitorsChildren == 'no')||(getVisitorsChildren == 'NO')){
        
    visitorsChildren = false;
}


document.writeln("Hello there, I am " + hostName + " Welcome to my page " + visitorsName);
document.write("<br>");
document.writeln("I am an " + hostProfession + " who loves Technology and Web ");