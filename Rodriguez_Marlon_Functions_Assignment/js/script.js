/*  JavaScript Document
Scalable Data Infrastructures Sec 02
Functions Assignment
Professor Lee Lewis
created by Marlon Rodriguez
*/

//Variables Declaration
var myName; 
var wantToPlay;
var playingNums;
var myLotteryName;


//Functions Declarations
// Validating Name of the User
function nameValidation(firstName) {
	
	           var timesClicked = 1;
			   var code;
               while (firstName === ""){
                                     firstName = prompt("Do not leave this blank. \n\n Please enter your first name");
									 timesClicked++;
									 if(timesClicked === 5) {
										 console.log("Thank you for visiting our lottery website,\ncomeback when you decide to play !");
										 flag = 1;
										 if(flag === 0){
											 		playValidation(code);
										 }else{
										        break;
													}
										   }
                                       }
                  return firstName;
				  
}

//Validating If User Wants to Play the Lottery
function playValidation(confirmPlay){
					
						          var timesClicked = 1;						
						           while (confirmPlay === ""){
                                     confirmPlay = prompt("Do not leave this blank. \nPlease confirm if you want to play: ");
									 timesClicked++;
									 if(timesClicked === 5) {
										 console.log("Thank you for visiting our lottery website,\ncomeback when you decide to play !");
										 break;
										             }
                                                   }
									return confirmPlay;			   
}


//Validating What Lottery User Wants to Play
function lotteryTypeValidation(lotteryType){
								  var timesClicked = 1;						
						           while (lotteryType === ""){
									   lotteryType = prompt("Do not leave this blank. \nPlease enter what lottery you want to play: ");
									 timesClicked++;
									                    if(timesClicked === 5) {
										                      console.log("Thank you for visiting our lottery website,\ncomeback when you decide to play !");
										                      break;
									                                           }
								                             }
}


//Generating Random Numbers
function randomNumGen(max, min, num) {
					
					var randomArray = [];
					for(var i = 0; i < num; i++) {
	                  
					     var myRandomNumGen = Math.round(Math.random() * (max - min) + min);
						 randomArray[i] = myRandomNumGen;
					                              }
												  
						return randomArray;	
}




//Main code
myName = prompt("Enter your name please: ");
myName = nameValidation(myName);
console.log(myName);
if(myName != ""){
                 wantToPlay = prompt("Do you want to play the lottery ? ");
                 wantToPlay = playValidation(wantToPlay);
                 console.log(wantToPlay);

                 if((wantToPlay === "Yes") || (wantToPlay === "yes") || (wantToPlay === "y") || (wantToPlay === "Y")){
				                       playingNums = randomNumGen(53, 1, 5);
                                       console.log(playingNums);
				 }
					 	
}


