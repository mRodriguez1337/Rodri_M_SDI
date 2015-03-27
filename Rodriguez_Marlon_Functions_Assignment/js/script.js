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
function nameValidation(firstName) {     //first fucntion asking for user name
	
	           var timesClicked = 1;        //variable that works as a counter
			   var code;
               while (firstName === ""){    //starting while loop for validation limit
                                     firstName = prompt("Do not leave this blank. \n\n Please enter your first name");  //asking user to enter information
									 timesClicked++;
									 if(timesClicked === 5) {   //times user is allowed to enter information
										 console.log("Thank you for visiting our lottery website,\ncomeback when you decide to play !");
										 flag = 1;
										 if(flag === 0){
											 		playValidation(code);
										 }else{
										        break;
													}
										   }
                                       }
                  return firstName;  //return name of user 
				  
}

//Validating If User Wants to Play the Lottery
function playValidation(confirmPlay){
					
						          var timesClicked = 1;	 //variable that works as a counter					
						           while (confirmPlay === ""){  //starting while loop for validation limit
                                     confirmPlay = prompt("Do not leave this blank. \nPlease confirm if you want to play: "); //asking user to enter information
									 timesClicked++;
									 if(timesClicked === 5) {    //times user is allowed to enter information
										 console.log("Thank you for visiting our lottery website,\ncomeback when you decide to play !");
										 break;
										             }
                                                   }
									return confirmPlay;		 //return if user wants to play	   
}


//Validating What Lottery User Wants to Play
function lotteryTypeValidation(lotteryType){          
								  var timesClicked = 1;	   //variable that works as a counter						
						           while (lotteryType === ""){     //starting while loop for validation limit
									                  lotteryType = prompt("Do not leave this blank. \nPlease enter what lottery you want to play \n Florida or Powerball: ");
									                  timesClicked++;
									                   if(timesClicked === 5) {   //times user is allowed to enter information
										                                console.log("Thank you for visiting our lottery website,\ncomeback when you decide to play !");
										                                break;
									                                           }
								                             }
															 return lotteryType;  //return type of lottery user wants to play
}


//Generating Random Numbers
function randomNumGen(max, min, num) {    // starting function to generate lottery numbers
					
					var randomArray = [];
					for(var i = 0; i < num; i++) {
	                  
					     var myRandomNumGen = Math.round(Math.random() * (max - min) + min);
						 randomArray[i] = myRandomNumGen;
					                              }
												  
						return randomArray;	  //return array with random numbers
}

//Generating Random Powerball
function randomPowerball(max, min){  // starting function to generate powerball number
	
					var myRandomPW = Math.round(Math.random() * (max - min) + min);
					return myRandomPW;  // return powerball number
}
					
					
						

/******************************************************************************************************************************************************************************************
*********************************************************************************************************************************************************************************************/

//Main code
myName = prompt("Enter your name please: "); //ask user for name 
myName = nameValidation(myName);   //calls name validation function and assigns that to myname var

if(myName != ""){   // condition depending on name entered, if true then keeps running the code
				 console.log("Welcome to our drawing lottery website " + myName);  // some console outputs
                 wantToPlay = prompt("Do you want to play the lottery ? ");
                 wantToPlay = playValidation(wantToPlay);  //calls play validation function and assigns that to wantToPlay var
                 if((wantToPlay === "Yes") || (wantToPlay === "yes") || (wantToPlay === "y") || (wantToPlay === "Y")){ // condition depending on name entered, if true then keeps running the code
					 					myLotteryName = prompt("What lottery do you want to play \n Florida or PowerBall ?");
										myLotteryName = lotteryTypeValidation(myLotteryName);
										console.log("The lottery you are playing today is " + myLotteryName);  // some console outputs
										
										if((myLotteryName === "Florida") || (myLotteryName === "florida")){  //condition to see if user entered a valid lottery type
										
				                                                        playingNums = randomNumGen(53, 1, 5);
                                                                        console.log("Here are your lucky numbers " + playingNums);              // lucky numbers console outputs
																		console.log(" !!! GOOD LUCK !!! ");
																		
										                }else if((myLotteryName === "Powerball")||(myLotteryName === "powerball")){       //condition to see if user entered a valid lottery type
																		playingNums = randomNumGen(59, 1, 5);
																		powerballNumber = randomPowerball(35, 1);
                                                                        console.log("Here are your lucky numbers " + playingNums);                   // lucky numbers console outputst
																		console.log("This is your lucky PowerBall Number " + powerballNumber);       // powerball number console output
																		console.log(" !!! GOOD LUCK !!! ");											// some console outputs			
														}else{
																console.log("I think you just want to waste our precious time. GOOD BYE !!");      
																
														}
																
																					
				 }
					 	
}



