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





var buyingVideoGames = confirm("Do you want to buy some Video Games today ?");

while(buyingVideoGames === true){
	 							if(customerAge < 10){
									
									alert("You can only buy E rated Video Games");
									var desiredVideoGameTitle = window.prompt("Please enter the title of the wanted game from Rated E row: ");
									shoppingCart += 25;
									
									
								}else if((customerAge >= 10) && (customerAge < 21)){
									
									alert("You can buy E and T rated Video Games");
									desiredVideoGameTitle = window.prompt("Please enter the title of the game: ");
									
									}else{
										  	alert("You can buy any rated Video Games");
									        desiredVideoGameTitle = window.prompt("Please enter the title of the game: ");
									         }
									  
									  purchasedVideoGames.push(desiredVideoGameTitle);
									  buyingVideoGames = confirm("Buying more Video Games today ?");
								}
								
								
document.getElementById("line1").innerHTML = ("Thank you for shopping in SDI Video Game Store " + customerName);
console.log("Thank you for shopping in SDI Video Game Store " + customerName);
document.getElementById("line2").innerHTML = ("Here is your receipt with total and video games titles you got: ");
console.log("Here is your receipt with total and video games titles you got:"); 

document.getElementById("line3").innerHTML = ("Games you buy today = " + purchasedVideoGames);
console.log("Games you buy today = " + purchasedVideoGames);
document.getElementById("line4").innerHTML = ("Total of your purchase is " + shoppingCart);
console.log("Total of your purchase is " + shoppingCart);
								
console.log(purchasedVideoGames);
console.log(shoppingCart);
								
								
								
								
	
										  	
								             
												 