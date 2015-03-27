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
var powerballNumber;


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
									                  lotteryType = prompt("Do not leave this blank. \nPlease enter what lottery you want to play \n Florida or Powerball: ");
									                  timesClicked++;
									                   if(timesClicked === 5) {
										                                console.log("Thank you for visiting our lottery website,\ncomeback when you decide to play !");
										                                break;
									                                           }
								                             }
															 return lotteryType;
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

//Generating Random Powerball
function randomPowerball(max, min){
	
					var myRandomPW = Math.round(Math.random() * (max - min) + min);
					return myRandomPW;
}
					
					
						

/******************************************************************************************************************************************************************************************
*********************************************************************************************************************************************************************************************/

//Main code
myName = prompt("Enter your name please: ");
myName = nameValidation(myName);

if(myName != ""){
				 console.log("Welcome to our drawing lottery website " + myName);
                 wantToPlay = prompt("Do you want to play the lottery ? ");
                 wantToPlay = playValidation(wantToPlay);
                 if((wantToPlay === "Yes") || (wantToPlay === "yes") || (wantToPlay === "y") || (wantToPlay === "Y")){
					 					myLotteryName = prompt("What lottery do you want to play \n Florida or PowerBall ?");
										myLotteryName = lotteryTypeValidation(myLotteryName);
										console.log("The lottery you are playing today is " + myLotteryName);
										
										if((myLotteryName === "Florida") || (myLotteryName === "florida")){
										
				                                                        playingNums = randomNumGen(53, 1, 5);
                                                                        console.log("Here are your lucky numbers " + playingNums);
																		console.log(" !!! GOOD LUCK !!! ");
																		
										                }else if((myLotteryName === "Powerball")||(myLotteryName === "powerball")){
																		playingNums = randomNumGen(59, 1, 5);
																		powerballNumber = randomPowerball(35, 1);
                                                                        console.log("Here are your lucky numbers " + playingNums);
																		console.log("This is your lucky PowerBall Number " + powerballNumber);
																		console.log(" !!! GOOD LUCK !!! ");
														}else{
																console.log("I think you just want to waste our precious time. GOOD BYE !!");
																
														}
																
																					
				 }
					 	
}
console.log("YES");


