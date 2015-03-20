/*  JavaScript Document
Scalable Data Infrastructures Sec 02
Conditionals Assignment
Professor Lee Lewis
created by Marlon Rodriguez
*/

//Variables Declaration

var customerName = window.prompt(" Welcome to SDI Video Game Store,\n Please enter your name: ");                         //Welcoming customer and asking for name
var getCustomerAge = prompt("Please enter your age: ");															          // Asking customer's age to determine what games he/she can buy
var customerAge = Number(getCustomerAge);																		          // Changing data enetered by customer to number data type
var shoppingCart = 0;																		                              // initializing total of purchase accumulator  

var ratedmArray = ['Call of Duty', 'Bloodborne', 'GTA 5', 'Watch Dogs', 'The Last of Us', 'Diablo 3'];					//Setting rated M games array
var ratedtArray = ['Dragon Ball Z', 'Final Fantasy X', 'Bladestorm', 'Injustice', 'UFC', 'Second Son'];					//Setting rated T games array
var ratedeArray = ['MLB 15', 'NBA 2K15', 'MXGP', 'Fifa 15', 'Little Big Planet 3', 'Minecraft'];						//Setting rated E games array

var purchasedVideoGames = [];																							//Setting purchased games array
var ratedMCounter = 0;																									// Counting how many rated M games has been purchased
var ratedTCounter = 0;																									// Counting how many rated T games has been purchased
var ratedECounter = 0;																									// Counting how many rated E games has been purchased

var extraMessage;							//just to create ternary conditional statement required in assignment list





var buyingVideoGames = confirm("Do you want to buy some Video Games today ?");                                         //asking customer if he/she wants to buy games

while(buyingVideoGames === true){																						//entering the loop where customer can buy as much games as he/she wants
	 							if(customerAge < 10){											//conditional to check customer's age and warning about what type of rating is allow to buy
									
									alert("You can only buy E rated Video Games");
									var desiredVideoGameTitle = window.prompt("Please enter game title from Rated E row: ");  //getting video game title
									shoppingCart += 25;																			//adding game price to total 
									ratedECounter ++;																				//adding 1 to rated E games counter 
									
									
								}else if((customerAge >= 10) && (customerAge < 21)){			//conditional to check customer's age and warning about what type of rating is allow to buy
									
									       alert("You can buy E and T rated Video Games");
									   var desiredVideoGameRating = window.prompt("Please enter the rating of desired Video Game :");//asking for rating of desired game to determine price and counter
									
									                if((desiredVideoGameRating === "E") || (desiredVideoGameRating === "e")){  //conditional that runs if customer input = E or e
														
									                           var getNumberVideoGameTitle = window.prompt("Please enter the number of the game in Rated E row: "); //getting position number
									                           var NumberVideoGameTitle = Number(getNumberVideoGameTitle); //converting it into numeric data type
															   NumberVideoGameTitle -= 1;   //subtracting 1 to entered position number, so can match index in array
															   desiredVideoGameTitle = ratedeArray[NumberVideoGameTitle];  //getting name of video game depending on index in array
															   shoppingCart += 25;  //adding game price to total
															   ratedECounter ++;	//adding 1 to rated E games counter 														   
															   
													}else if((desiredVideoGameRating === "T") || (desiredVideoGameRating === "t")){ //conditional that runs if customer input = T or t
														            
																	 var getNumberVideoGameTitle = window.prompt("Please enter the number of the game in Rated T row: ");
									                                 var NumberVideoGameTitle = Number(getNumberVideoGameTitle);
															         NumberVideoGameTitle -= 1;
															         desiredVideoGameTitle = ratedtArray[NumberVideoGameTitle];
															         shoppingCart += 40;  //adding game price to total
															         ratedTCounter ++;    //adding 1 to rated T games counter
													       }
															   
															   
															   
									  }else{
										  	alert("You can buy any rated Video Games");
									        var desiredVideoGameRating = window.prompt("Please enter the rating of desired Video Game :");
									
									                if((desiredVideoGameRating === "E") || (desiredVideoGameRating === "e")){ //conditional that runs if customer input = E or e
														
									                           var getNumberVideoGameTitle = window.prompt("Please enter the number of the game in Rated E row: ");
									                           var NumberVideoGameTitle = Number(getNumberVideoGameTitle);
															   NumberVideoGameTitle -= 1;
															   desiredVideoGameTitle = ratedeArray[NumberVideoGameTitle];
															   shoppingCart += 25;
															   ratedECounter ++;
															   
													}else if((desiredVideoGameRating === "T") || (desiredVideoGameRating === "t")){ //conditional that runs if customer input = T or t
														
														         var getNumberVideoGameTitle = window.prompt("Please enter the number of the game in Rated T row: ");
									                             var NumberVideoGameTitle = Number(getNumberVideoGameTitle);
															     NumberVideoGameTitle -= 1;
															     desiredVideoGameTitle = ratedtArray[NumberVideoGameTitle];
															     shoppingCart += 40;
															     ratedTCounter ++; 
																 
													        }else if((desiredVideoGameRating === "M") || (desiredVideoGameRating === "m")){ //conditional that runs if customer input = M or m
																
												                      var getNumberVideoGameTitle = window.prompt("Please enter the number of the game in Rated M row: ");
									                                  var NumberVideoGameTitle = Number(getNumberVideoGameTitle);
															          NumberVideoGameTitle -= 1;
															          desiredVideoGameTitle = ratedmArray[NumberVideoGameTitle];
															          shoppingCart += 60;	//adding game price to total
															          ratedMCounter ++;    //adding 1 to rated M games counter
																	  
															       }
									  }
									  
									  purchasedVideoGames.push(desiredVideoGameTitle);  //adding video game title to final array
									  buyingVideoGames = confirm("Buying more Video Games today ?");  // asking customer if he/she wants to buy more games
								}
								
								(customerAge>40)? extraMessage = "Uff Way to go man, like in the old times !!" : extraMessage = "You should be studying !!"  //ternary conditional statement


//Outputs in Console and HTML.
								
								
document.getElementById("line1").innerHTML = ("Thank you for shopping in SDI Video Game Store " + customerName);
console.log("Thank you for shopping in SDI Video Game Store " + customerName);
document.getElementById("line2").innerHTML = ("Here is your receipt with total and video games titles you got: ");
console.log("Here is your receipt with total and video games titles you got:"); 

document.getElementById("line3").innerHTML = ("Games you bought today");
console.log("Games you buy today");
document.getElementById("line4").innerHTML = (purchasedVideoGames);
console.log(purchasedVideoGames);
document.getElementById("line5").innerHTML = ("Total of your purchase is ");
console.log("Total of your purchase is ");
document.getElementById("line6").innerHTML = ("$ " + shoppingCart);
console.log("$ " + shoppingCart);

document.getElementById("line9").innerHTML = ("Total number of Rated M games you purchased today is " + ratedMCounter);
console.log("Total number of Rated M games you purchased today is " + ratedMCounter);

document.getElementById("line10").innerHTML = ("Total number of Rated T games you purchased today is " + ratedTCounter);
console.log("Total number of Rated M games you purchased today is " + ratedTCounter);	

document.getElementById("line11").innerHTML = ("Total number of Rated E games you purchased today is " + ratedECounter);
console.log("Total number of Rated M games you purchased today is " + ratedECounter);

document.getElementById("line13").innerHTML = (extraMessage);
console.log(extraMessage);

document.getElementById("line14").innerHTML = ("Have a Nice Day !!");
console.log("Have a Nice Day !!");


//End of JS file.	
	
								
								
								
	
										  	
								             
												 