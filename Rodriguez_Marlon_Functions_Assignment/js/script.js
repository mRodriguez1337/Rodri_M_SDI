/*  JavaScript Document
Scalable Data Infrastructures Sec 02
Functions Assignment
Professor Lee Lewis
created by Marlon Rodriguez
*/

//Variables Declaration
var myName = prompt("Enter your name please: ");


//Functions
function nameValidation(firstName) {
	
	           var timesClicked = 1;

               while (firstName === ""){
                                     firstName = prompt("Do not leave this blank. \n\n Please enter your first name");
									 timesClicked++;
									 if(timesClicked === 10) {
										 console.log("No time for Playing Buddy !!");
										 break;
									 
									 
									 }
}
                  return firstName;
}


//Main code
myName = nameValidation(myName);
console.log("Hello, " + myName);
