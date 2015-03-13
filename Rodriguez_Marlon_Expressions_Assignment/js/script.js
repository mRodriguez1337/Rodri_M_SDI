/*  JavaScript Document
Scalable Data Infrastructures Sec 02
Expressions Assignment
Professor Lee Lewis
created by Marlon Rodriguez
*/

//Creating Variables
var wholeTotal = 0 ;	                              																		    //variable holding grand total of purchase
var fruitsTotal = 0;																											//variable holding fruits total
var vegetablesTotal = 0;																										//variable holding vegetables total
var applesPriceEach = 1.50, mangosPriceEach = 3, orangesPriceEach = 3, papayasPriceEach = 7, pearsPriceEach = 2.50;            //Declaration of variables holding fruits price
var carrotsPriceEach = 2, cucumPriceEach = 3, peppersPriceEach = 2.50, plantainsPriceEach = 1.50, tomatoesPriceEach = 2;       //Declaration of variables holding vegetables price
var applesPromoPrice = 4, mangosPromoPrice = 4, orangesPromoPrice = 6, pearsPromoPrice = 4;                                    //Declaration of variables holding fruits promo price
var carrotsPromoPrice = 4, cucumPromoPrice = 4, peppersPromoPrice = 6, plantainsPromoPrice = 3, tomatoesPromoPrice =5;        //Declaration of variables holding vegetables promo price    
var applesCounter = 0, mangosCounter = 0, orangesCounter = 0, papayasCounter = 0, pearsCounter = 0;                            //Declaration of variables holding amount of each fruit 
var carrotsCounter = 0, cucumCounter = 0, peppersCounter = 0, plantainsCounter = 0, tomatoesCounter = 0;                       //Declaration of variables holding amount of each vegetable
var costOfFruits = [];                                                                                                         //array holding cost of fruits
var costOfVegetables = [];																								       //array holding cost of vegetables
var customersVisits = 0;                                                                                                    	// this variable will be used to store info about the customer's visits                                                                                                                                   and of course would need to be stored in a data base in server

//user input
var customerName = window.prompt("Hello welcome to SDI Micro Market, please enter your name :");                                //Prompt user for name 
customersVisits ++;																											    // variable gets data from customers data base and adds 1 visit
applesCounter = window.prompt("How many apples would you like to buy today ? " )												//asking customer how many apples he/she wants
applesCounter = Number(applesCounter);																				            //converts string from prompt window to number

papayasCounter = window.prompt("How many papayas would you like to buy today ? " )												//asking customer how many papayas he/she wants
papayasCounter = Number(papayasCounter);																						//converts string from prompt window to number

orangesCounter = window.prompt("How many oranges would you like to buy today ? " )												//asking customer how many oranges he/she wants
orangesCounter = Number(orangesCounter);																						//converts string from prompt window to number																						

pearsCounter = window.prompt("How many pears would you like to buy today ? " )													//asking customer how many pears he/she wants
pearsCounter = Number(pearsCounter);																							//converts string from prompt window to number

mangosCounter = window.prompt("How many mangos would you like to buy today ? " )												//asking customer how many mangos he/she wants
mangosCounter = Number(mangosCounter);																							//converts string from prompt window to number

carrotsCounter = window.prompt("How many carrots would you like to buy today ? " )												//asking customer how many carrots he/she wants
carrotsCounter = Number(carrotsCounter);																						//converts string from prompt window to number

cucumCounter = window.prompt("How many cucumbers would you like to buy today ? " )												//asking customer how many carrots he/she wants
cucumCounter = Number(cucumCounter);																							//converts string from prompt window to number

peppersCounter = window.prompt("How many peppers would you like to buy today ? " )												//asking customer how many peppers he/she wants
peppersCounter = Number(peppersCounter);																						//converts string from prompt window to number

plantainsCounter = window.prompt("How many plaintains would you like to buy today ? " )											//asking customer how many plantains he/she wants
plantainsCounter = Number(plantainsCounter);																					//converts string from prompt window to number

tomatoesCounter = window.prompt("How many tomatoes would you like to buy today ? " )											//asking customer how many tomatoes he/she wants											
tomatoesCounter = Number(tomatoesCounter);																						//converts string from prompt window to number


//operations, expresions and conditions
// Fruits
if(applesCounter % 3 == 0) {	//condition that checks if apples cost is promotional or regular price and store data in array pos 0
	
		costOfFruits[0] = applesCounter/3 * applesPromoPrice ;
}else{
		
		
		costOfFruits[0] = applesCounter * applesPriceEach;           

}

if(mangosCounter % 2 == 0) {   //condition that checks if mangos cost is promotional or regular price store data in array pos 1
	
		costOfFruits[1] = mangosCounter/2 * mangosPromoPrice ;
}else{
		
		
		costOfFruits[1] = mangosCounter * mangosPriceEach;           

}

if(orangesCounter % 3 == 0) {   //condition that checks if oranges cost is promotional or regular price store data in array pos 2
	
		costOfFruits[2] = orangesCounter/3 * orangesPromoPrice ;
}else{
		
		
		costOfFruits[2] = orangesCounter * orangesPriceEach;           

}

if(pearsCounter % 2 == 0) {     //condition that checks if pears cost is promotional or regular price store data in array pos 3
	
		costOfFruits[3] = pearsCounter/2 * pearsPromoPrice ;
}else{
		
		
		costOfFruits[3] = pearsCounter * pearsPriceEach;       

}

costOfFruits[4] = papayasCounter * papayasPriceEach;      //since papaya's price is the same, there is no codition and store data in array pos 4

//Vegetables

if(carrotsCounter % 4 == 0) {                                          //condition that checks if carrots cost is promotional or regular price and store data in array pos 0
	
		costOfVegetables[0] = carrotsCounter/4 * carrotsPromoPrice ;
}else{
		
		
		costOfVegetables[0] = carrotsCounter * carrotsPriceEach;           

}

if(tomatoesCounter % 5 == 0) {										  //condition that checks if tomatoes cost is promotional or regular price and store data in array pos 1
	
		costOfVegetables[1] = tomatoesCounter/5 * tomatoesPromoPrice ;
}else{
		
		
		costOfVegetables[1] = tomatoesCounter * tomatoesPriceEach;           

}

if(cucumCounter % 2 == 0) {											//condition that checks if cucumbers cost is promotional or regular price and store data in array pos 2
	
		costOfVegetables[2] = cucumCounter/2 * cucumPromoPrice ;
}else{
		
		
		costOfVegetables[2] = cucumCounter * cucumPriceEach;           

}

if(plantainsCounter % 3 == 0) {											//condition that checks if plantains cost is promotional or regular price and store data in array pos 3
	
		costOfVegetables[3] = plantainsCounter/3 * plantainsPromoPrice ;
}else{
		
		
		costOfVegetables[3] = plantainsCounter * plantainsPriceEach;           

}

if(peppersCounter % 3 == 0) {											//condition that checks if peppers cost is promotional or regular price and store data in array pos 4
	
		costOfVegetables[4] = peppersCounter/3 * peppersPromoPrice ;
}else{
		
		
		costOfVegetables[4] = peppersCounter * peppersPriceEach;           

}

fruitsTotal = costOfFruits[0] + costOfFruits[1] + costOfFruits[2] + costOfFruits[3] + costOfFruits[4];    //Sum of all fruits 
vegetablesTotal = costOfVegetables[0] + costOfVegetables[1] + costOfVegetables[2] + costOfVegetables[3] + costOfVegetables[4]; //Sum of all vegetables

if (customersVisits != 10){                            //condition that gets data from customer's data base and check if number of visits is equal to 10 then, if so total purchase is Free
	
	       wholeTotal += fruitsTotal ;
		   wholeTotal += vegetablesTotal ;
		   
}else{
			
		console.log("Congratulations !!! this day you will shop for FREE !!! " )
		wholeTotal = 0;
}


//Outputs in console and webpage
document.getElementById("line1").innerHTML = ("Thank you for shopping in our micro market " + customerName);
console.log("Thank you for shopping in our micro market " + customerName);

document.getElementById("line2").innerHTML = ("Here is your receipt and the breakdown of payments");
console.log("Here is your receipt and the breakdown of payments"); 

document.getElementById("line3").innerHTML = ("Apples you buy today = " + applesCounter + " for $ " + costOfFruits[0] );
console.log("Apples you buy today = " + applesCounter + " for $ " + costOfFruits[0] );

document.getElementById("line4").innerHTML = ("Mangos you buy today = " + mangosCounter + " for $ " + costOfFruits[1] );
console.log("Mangos you buy today = " + mangosCounter + " for $ " + costOfFruits[1] );

document.getElementById("line5").innerHTML = ("Oranges you buy today = " + orangesCounter + " for $ " + costOfFruits[2]);
console.log("Oranges you buy today = " + orangesCounter + " for $ " + costOfFruits[2]);

document.getElementById("line6").innerHTML = ("Pears you buy today = " + pearsCounter + " for $ " + costOfFruits[3]);
console.log("Pears you buy today = " + pearsCounter + " for $ " + costOfFruits[3]);

document.getElementById("line7").innerHTML = ("Papayas you buy today = " + papayasCounter + " for $ " + costOfFruits[4]);
console.log("Papayas you buy today = " + papayasCounter + " for $ " + costOfFruits[4]);

document.getElementById("line8").innerHTML = ("Carrots you buy today = " + carrotsCounter + " for $ " + costOfVegetables[0]);
console.log("Carrots you buy today = " + carrotsCounter + " for $ " + costOfVegetables[0]);

document.getElementById("line9").innerHTML = ("Tomatoes you buy today = " + tomatoesCounter + " for $ " + costOfVegetables[1]);
console.log("Tomatoes you buy today = " + tomatoesCounter + " for $ " + costOfVegetables[1]);

document.getElementById("line10").innerHTML = ("Cucumbers you buy today = " + cucumCounter + " for $ " + costOfVegetables[2]);
console.log("Cucumbers you buy today = " + cucumCounter + " for $ " + costOfVegetables[2]);

document.getElementById("line11").innerHTML = ("Plantains you buy today = " + plantainsCounter + " for $ " + costOfVegetables[3]);
console.log("Plantains you buy today = " + plantainsCounter + " for $ " + costOfVegetables[3]);

document.getElementById("line12").innerHTML = ("Peppers you buy today = " + peppersCounter + " for $ " + costOfVegetables[4]);
console.log("Peppers you buy today = " + peppersCounter + " for $ " + costOfVegetables[4]);

 
document.getElementById("line13").innerHTML = ("Total of your shopping today is $ "  + wholeTotal);
console.log("\nTotal of your shopping today is "  + wholeTotal);

document.getElementById("line14").innerHTML = ("Thank you for shopping in your SDI Micro Market,\nHave a great Day !!!");
console.log("\nThank you for shopping in your SDI Micro Market, have a great Day !!!");