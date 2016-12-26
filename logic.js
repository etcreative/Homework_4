//GLOBAL VARIABLES
//------------------------------------------------------------------------------

//Crystal Variables
var crystal = {

	pink:
	{
		name: "pink",
		value: 0
	},
	blue:
	{
		name: "blue",
		value: 0
	},
	yellow:
	{
		name: "yellow",
		value: 0
	},
	clear:
	{
		name: "clear",
		value: 0
	},
};
//Scores (Current and Target)
var currentScore = 0;
var targetScore = 0;

//Wins and Losses
var winCount = 0;
var lossCount = 0;


//FUNCTIONS
//------------------------------------------------------------------------------

//Helper Function for getting random numbers
var getRandom = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Starts the game (and restarts the game)
var startGame = function(){

//Reset the Current Score

	currentScore = 0
	//Set a new Target Score (between 19 and 120)

	targetScore = getRandom(19, 120);
	//Set different values for each of the crystals (between 1 and 12)

	crystal.pink.value = getRandom(1, 12);
	crystal.blue.value = getRandom(1, 12);
	crystal.yellow.value = getRandom(1, 12);
	crystal.clear.value = getRandom(1, 12);


	//Change the HTML to reflect all of these changes

	$("#yourScore").html(currentScore);
	$("#targetScore").html(targetScore);

	//Testing Console
	console.log("----------------------------------------");
	console.log("TargetScore: " + targetScore);
	console.log("Pink: " + crystal.pink.value + " | Blue: " + crystal.blue.value + " | Yellow: " + crystal.yellow.value + " | Clear: " + crystal.clear.value);
	console.log("----------------------------------------")
}

// Respond to clicks on the crystals
var addValues = function(crystal) {

// Change current score
	currentScore = currentScore + crystal.value;
//Change HTML to reflect changes in score.
$("#yourScore").html(currentScore);

//Call the checkWin Function.

checkWin();

	//Testing Console
	console.log("Your Score: " + currentScore);
}
//Check to see if user won or lost and reset the game.
var checkWin = function() {

	//Check if current Score is larger than the targerScore
	if (currentScore > targetScore) {
		alert("Sorry, You Lost!");
		console.log("You Lost");

		//Add to loss counter
		lossCount++;

		//Change Loss Count
		$("#lossCount").html(lossCount);
		startGame();
	}

else if (currentScore == targetScore) {
		alert("Congrats, you Won!");
		console.log("You, Won!");

		//Add to win count
		winCount++;

		//Change Win Count
		$("#winCount").html(winCount);
		startGame();
	}

}
//MAIN PROCESS
//------------------------------------------------------------------------------

//Starts the game the first time
startGame();

//Click functions

$("#pink").click(function() {
	addValues(crystal.pink);
});

$("#blue").click(function() {
	addValues(crystal.blue);
});

$("#yellow").click(function() {
	addValues(crystal.yellow);
});

$("#clear").click(function() {
	addValues(crystal.clear);
});