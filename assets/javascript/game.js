
var wins = 0;
var loss = 0;
var	guess = 0;


function startgame() {

	guess = 0;
	console.log("guess:" + guess);
	var targetNumber = Math.floor((Math.random() * 43)+1);
	console.log("target:" + targetNumber);
	var blue = Math.floor((Math.random() * 12)+1);
	var yellow = Math.floor((Math.random() * 12)+1);
	var green = Math.floor((Math.random() * 12)+1);

	$(".number-to-guess").text(targetNumber);
	$(".current").text(guess);
		
		//Beginning of Click Check
		function crystalclick() {

			$(".blue").click(function(){
				alert("BLUE: " + blue);
				addnumber(blue);
			});

			$(".yellow").click(function(){
				alert("YELLOW: " + yellow);
				addnumber(yellow);
			});

			$(".green").click(function(){
				alert("GREEN: " + green);
				addnumber(green);
			});

		} // END OF CLICK CHECK
		
		// Begin guess check
		function addnumber(x) {
			console.log("x:" + x);
			guess = guess + x;
			console.log("guess in F-AD:" + guess);
			$(".current").text(guess);

				if (guess === targetNumber) {
					alert("YOU WIN");
					wincount();
				}
				if (guess > targetNumber) {
					alert("YOU LOSE");
					losscount();
				}

		} //END OF GUESS CHECK
addnumber(0);
crystalclick();
} //END OF START GAME

function wincount() {
	wins++;
	console.log("Wins: " + wins);
	console.log("Losses: " + loss);
	$(".wins").text(wins);
	$(".losses").text(loss);
	startgame();
}

function losscount() {
	loss++;
	console.log("Wins: " + wins);
	console.log("Losses: " + loss);
	$(".wins").text(wins);
	$(".losses").text(loss);
	startgame();
}

// initializes the game
startgame();




