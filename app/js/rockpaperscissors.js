////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
/* Your Expression */
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
/* Your Expression */
}

function getWinner(playerMove,computerMove) {
	// either have var playerMove and var computerMove and take these out
	// of parentheses (parameters) or keep in paren and take out var.
	while (playerMove === “rock”) {
	if (computerMove === “rock”) {
		return “tie”;
	// Not sure this makes sense—maybe return “tie” instead/ winner not def
	} else if (computerMove === “paper”) {
		return “computer”;
	} else if (computerMove === “scissors”) {
		return “player”;
		}
	}
	while (playerMove === “paper”) {
	if (computerMove === “rock”) {
		return “player”;
	} else if (computerMove === “paper”) {
		return “tie”;
	} else if (computerMove === “scissors”) {
		return “computer”;
		}
	}
	while (playerMove === “scissors”) {
	if (computerMove === “rock”) {
		return “computer”;
	} else if (computerMove === “paper”) {
		return “player”;
	} else if (computerMove === “scissors”) {
		return “tie”;
		}
	}

}
 
function playToFive() {
  console.log('Let\'s play Rock Paper Scissors');
  var playerWins = 0;
  var computerWins = 0;
  for ((playerWins < 5) && (computerWins < 5)) {
    if (winnerIsPlayer()){
	   playerWins += 1;
    }
    if (winnerIsComputer()){
	computerWins += 1; 
    }	
 	console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
   console.log('The score is currently ' + playerWins + ' to ' + computerWins);   
  return [playerWins, computerWins];
  }
}

function winnerIsPlayer() {
	return playerWinsRock() || playerWinsPaper() || playerWinsScissors();
	}

function winnerIsComputer() {
	return computerWinsRock() || computerWinsPaper()|| computerWinsScissors();
	}

function playerWinsRock() {
	return (playerMove === ‘rock’) && (computerMove === ‘scissors’);
	}

function playerWinsPaper() {
	return (playerMove === ‘paper’) && (computerMove === ‘rock’); 
	}

function playerWinsScissors() {
	return (playerMove === ‘scissors’) && (computerMove === ‘paper’);
	}

function computerWinsRock() {
	return (computerMove === ‘rock’) && (playerMove === ‘scissors’);
	}

function computerWinsPaper() {
	return (computerMove === ‘paper’) && (playerMove === ‘rock’); 
	}

function computerWinsScissors() {
	return (computerMove === ‘scissors’) && (playerMove === ‘paper’);
	}

/* I think this version of playToFive could operate independently of the getWinner function above, but it makes logical sense to me, whereas I don’t think my attempt at incorporating getWinner function (below) would work. */


/*
// here is a version of playToFive that accounts for getWinner function
function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    for ((playerWins < 5) && (computerWins < 5)) {
    //not sure while is allowed within a function.
    if (winnerIsPlayer()){
	playerWins += 1;
    }
    if (winnerIsComputer()){
	computerWins += 1; 
    }	
   console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
   console.log('The score is currently ' + playerWins + ' to ' + computerWins + ‘\n’); 
	return [playerWins, computerWins];
  }	  
}

function winnerIsPlayer() {
	return ‘player’;
	// if getWinner = “player” (not sure of syntax)
	} 	


function winnerIsComputer() {
	return ‘computer’;
	// if getWinner = “computer” (not sure of syntax)
} 
*/




