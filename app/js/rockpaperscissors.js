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
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
   return move || getInput();
}

function getWinner(playerMove, computerMove) {
    var winner;
    while (playerMove === 'rock') {
	if (computerMove === 'rock') {
		winner = 'tie';
	} else if (computerMove === 'paper') {
		winner = 'computer';
	} else if (computerMove === 'scissors') {
		winner = 'player';
		}
		return winner; 
	}
	while (playerMove === 'paper') {
	if (computerMove === 'rock') {
		winner = 'player';
	} else if (computerMove === 'paper') {
		winner = 'tie';
	} else if (computerMove === 'scissors') {
		winner = 'computer';
		}
		return winner;
	}
	while (playerMove === 'scissors') {
	if (computerMove === 'rock') {
		winner = 'computer';
	} else if (computerMove === 'paper') {
		winner = 'player';
	} else if (computerMove === 'scissors') {
		winner = 'tie';
		}
		return winner;
	}
	
}

function playToFive() {
  console.log('Let\'s play Rock Paper Scissors');
  var playerWins = 0;
  var computerWins = 0;
  while ((playerWins < 5) && (computerWins < 5)) {
    var playerMove = getPlayerMove(getInput());
    var computerMove = getComputerMove(randomPlay());
    var winner = getWinner(playerMove, computerMove);
    
    if (winner === 'player') {
      playerWins++;
      console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
    }
    
    else if (winner === 'computer') {
    computerWins++; 
    console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
    } else {
    console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
    }
    console.log('The score is currently ' + playerWins + ' to ' + computerWins);
     
}
return [playerWins, computerWins];
}


playToFive ();




