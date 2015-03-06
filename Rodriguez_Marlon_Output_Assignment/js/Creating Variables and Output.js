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
var getVisitorsGender = window.prompt("are you Male ?");
if(getVisitorsGender == "yes"){
	var visitorsGender = "Male"
}else{
	visitorsGender = "Female"
	}

//Getting host and visitor state of residence
var hostStateOfResidence = "New York";
var visitorsStateOfResidence = window.prompt("What state do you live in ?");
	
//Getting host and visitor profession
var hostProfession = "IT specialist";
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
    var getNumberOfKids = window.prompt("How many children do you have?");  //how many children visitor has
    var visitorsNumberOfKids = Number(getNumberOfKids);
        
} else if((getVisitorsChildren == 'no')||(getVisitorsChildren == 'NO')){
        
    visitorsChildren = false;
}


	

//DOCUMENT OUTPUT PARAGRAPH
document.writeln("Hello there, I am " + hostName + " Welcome to my page " + visitorsName);
document.write("<br>");
document.writeln("I am an " + hostProfession + " who loves Technology and Web ");
document.write("<br>")

//comparing Professions
if(hostProfession == visitorsProfession){
	document.writeln("I am glad that you are also a " + hostProfession + " together we can build some projects");
}
else{
	document.writeln("It is very nice to meet a " + visitorsProfession + ", you never know when you might need an expert");
}
document.write("<br>")

//comparing Place of residence
if(visitorsStateOfResidence == hostStateOfResidence ){
	document.writeln("So you also live in " + hostStateOfResidence + ", tell me how do you deal with this snow");
}else{
	document.writeln("I hope that in " + visitorsStateOfResidence + ", you can enjoy a better weather");
}
document.write("<br>")

//comparing Ages
if(hostAge < visitorsAge){
	document.writeln("I see that you are " + visitorsAge + " years old, so you have to have tons of great stories");
}else if(hostAge > visitorsAge){
	document.writeln("I am older than you and I can tell that when I was " + visitorsAge + " I wanted to reinvent the wheel");
}else{
	document.writeln("Oh, so you are the same age as I am. well we are probably twins then, lol ");
}
document.write("<br>")

//comparing number of children
if(visitorsNumberOfKids > hostNumberOfKids){
		document.writeln("I have only " + hostNumberOfKids + " kid, but Wow you have " + visitorsNumberOfKids + ", I bet your days need around 40 hours");
}else if(visitorsNumberOfKids == hostNumberOfKids){
	    document.writeln("I see you have " + hostNumberOfKids + " kid, don't you think is better for the pocket");
}else{
	   document.writeln("I guess you don't know what it is to meet an angel");
}
document.write("<br>")
//Ending Paragraph
if(visitorsGender == hostGender){
	document.writeln("Well It was a pleasure to see you around my site, one of this days we could have a beer!");
}else{
	document.writeln("Well It was a pleasure to see you around my site, one of this days we could have dinner!");
}

	    