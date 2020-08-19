var location1 = 3;
var location2 = 4;
var location3 = 5;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

function play () {
	while (isSunk == false){
		guess = prompt("Ready, aim, fire! (enter a number from 0-6):")
	
		if (guess < 0 || guess > 9) {
			alert("Please enter a valid cell number!");
		} else {
			guesses = guesses + 1; 
			}
	
		if (guess == location1 || guess == location2 || guess == location3) { 
				alert("HIT!");
				hits = hits + 1; 
					if (hits == 3) {
						isSunk = true;
						alert("You sank my battleship!"); 
					}
		}   else {
				alert("MISS");
			 }
	}
	
		var stats = "You took " + guesses + " guesses to sink the battleship, " +
		"which means your shooting accuracy was " + (3/guesses); 
		alert(stats);
}

	function playAgain () {

		answer = prompt("would you like to play again? enter 1 or 2");

			if(answer == 1){
				isSunk = false;
				play();
			}

			else{
				var stats = "you took" + guesses + "guesses to sink the battleship," +
				 "which means your shooting accuracy was " + Math.floor(((3/guesses)*100


			}








	}	