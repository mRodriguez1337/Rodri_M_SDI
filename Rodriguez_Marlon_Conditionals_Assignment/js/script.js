/*  JavaScript Document
Scalable Data Infrastructures Sec 02
Conditionals Assignment
Professor Lee Lewis
created by Marlon Rodriguez
*/

//Variables Declaration

var customerName = window.prompt(" Welcome to SDI Video Game Store,\n Please enter your name: ");
var getCustomerAge = prompt("Please enter your age: ");
var customerAge = Number(getCustomerAge);
var shoppingCart = 0;

var ratedmArray = ['Call of Duty', 'Bloodborne', 'GTA 5', 'Watch Dogs', 'The Last of Us', 'Diablo 3'];
var ratedtArray = ['Dragon Ball Z', 'Final Fantasy X', 'Bladestorm', 'Injustice', 'UFC', 'Second Son'];
var ratedeArray = ['MLB 15', 'NBA 2K15', 'MXGP', 'Fifa 15', 'Little Big Planet 3', 'Minecraft'];

var purchasedVideoGames = [];
var ratedMCounter = 0;
var ratedTCounter = 0;
var ratedECounter = 0;





var buyingVideoGames = confirm("Do you want to buy some Video Games today ?");

while(buyingVideoGames === true){
	 							if(customerAge < 10){
									
									alert("You can only buy E rated Video Games");
									var desiredVideoGameTitle = window.prompt("Please enter game title from Rated E row: ");
									shoppingCart += 25;
									ratedECounter ++;
									
									
								}else if((customerAge >= 10) && (customerAge < 21)){
									
									       alert("You can buy E and T rated Video Games");
									       var desiredVideoGameRating = window.prompt("Please enter the rating of desired Video Game :");
									
									                if((desiredVideoGameRating === "E") || (desiredVideoGameRating === "e")){
														
									                           var getNumberVideoGameTitle = window.prompt("Please enter the number of the game in Rated E row: ");
									                           var NumberVideoGameTitle = Number(getNumberVideoGameTitle);
															   NumberVideoGameTitle -= 1;
															   desiredVideoGameTitle = ratedeArray[NumberVideoGameTitle];
															   shoppingCart += 25;
															   ratedECounter ++;															   
															   
													}else if((desiredVideoGameRating === "T") || (desiredVideoGameRating === "t")){
														            
																	 var getNumberVideoGameTitle = window.prompt("Please enter the number of the game in Rated T row: ");
									                                 var NumberVideoGameTitle = Number(getNumberVideoGameTitle);
															         NumberVideoGameTitle -= 1;
															         desiredVideoGameTitle = ratedtArray[NumberVideoGameTitle];
															         shoppingCart += 40;
															         ratedTCounter ++; 
													       }
															   
															   
															   
									}else{
										  	alert("You can buy any rated Video Games");
									        desiredVideoGameTitle = window.prompt("Please enter the title of the game: ");
									         }
									  
									  purchasedVideoGames.push(desiredVideoGameTitle);
									  buyingVideoGames = confirm("Buying more Video Games today ?");
								}
								
								


//Outputs in Console and HTML.
								
								
document.getElementById("line1").innerHTML = ("Thank you for shopping in SDI Video Game Store " + customerName);
console.log("Thank you for shopping in SDI Video Game Store " + customerName);
document.getElementById("line2").innerHTML = ("Here is your receipt with total and video games titles you got: ");
console.log("Here is your receipt with total and video games titles you got:"); 

document.getElementById("line3").innerHTML = ("Games you buy today");
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
	
								
								
								
	
										  	
								             
												 