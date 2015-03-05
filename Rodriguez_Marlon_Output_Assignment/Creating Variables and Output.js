/* Creating Variables and Output Assignment
Scalable Data Infrastructures - Sec 02
Professor Lee Lewis
created by Marlon Rodriguez */

//Variables declaration,here you can find all global variables declared 

var hostName = "Marlon Rodriguez";
var visitorsName = window.prompt("Please enter you name:");   //visitor will be asked to type his/her name
var hostProfession = "IT specialist/Jr Web Developer";
var visitorsProfession = window.prompt("Please enter your profession:"); //visitor will be asked to type his/her profession
var hostAge = 38;
var getVisitorsAge = window.prompt("Please enter your age:"); //visitor will be asked to type his/her age
var visitorsAge = Number(getVisitorsAge);                     //visitor age will be convert to number type
var hostChildren = true ;
var hostNumberOfKids = 1 ;
var getVisitorsChildren = window.prompt("Do you have kids ? ");

if ((getVisitorsChildren == 'yes')||(getVisitorsChildren == 'YES')){
    
    var visitorsChildren = true;
    var getNumberOfKids = window.prompt("How many children do you have?");
    var visitorsNumberOfKids = Number(getNumberOfKids);
        
} else if((getVisitorsChildren == 'no')||(getVisitorsChildren == 'NO')){
        
    visitorsChildren = false;
}


document.writeln("Hello there, I am " + hostName + " Welcome to my page " + visitorsName);
document.writeln("I am an " + hostProfession + " who loves Technology and Web ");