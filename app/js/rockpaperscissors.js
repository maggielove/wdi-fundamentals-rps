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
     if (move === 'rock') {
        return 'rock';
    } else if (move === 'paper') {
        return 'paper';
    } else if (move === 'scissors') {
        return 'scissors';
    } else {
        return getInput();
	}
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    if (move === 'rock') {
        return 'rock';
    } else if (move === 'paper') {
        return 'paper';
    } else if (move === 'scissors') {
        return 'scissors';
    } else {
        return randomPlay();
	}
}

function getWinner(playerMove,computerMove) {
	while (playerMove === 'rock') {
	if (computerMove === 'rock') {
		return 'tie';
	} else if (computerMove === 'paper') {
		return 'computer';
	} else if (computerMove === 'scissors') {
		return 'player';
		}
	}
	while (playerMove === 'paper') {
	if (computerMove === 'rock') {
		return 'player';
	} else if (computerMove === 'paper') {
		return 'tie';
	} else if (computerMove === 'scissors') {
		return 'computer';
		}
	}
	while (playerMove === 'scissors') {
	if (computerMove === 'rock') {
		return 'computer';
	} else if (computerMove === 'paper') {
		return 'player';
	} else if (computerMove === 'scissors') {
		return 'tie';
		}
	}

}

/* Below are 3 different versions of playToFive, none of which I’ve been able to get to work so far. */
/* Also, I assume playToFive is meant to build on getWinner, which is meant to build on getPlayerMove and getComputerMove, but I’m having trouble connecting them all without assigning the return values to variables… */

 
//VERSION 1 

function playToFive() {
  console.log('Let\'s play Rock Paper Scissors');
  var playerWins = 0;
  var computerWins = 0;
  for (playerWins = 0; playerWins < 5; playerWins += 1) {
      for (computerWins = 0; computerWins < 5; computerWins += 1) {
    if (winnerIsPlayer()){
    console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
   console.log('The score is currently ' + playerWins + ' to ' + computerWins);
	   return (playerWins === 1);
    }
    else if (winnerIsComputer()){
    console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
   console.log('The score is currently ' + playerWins + ' to ' + computerWins);
	return (computerWins === 1); 
    }	
  return [playerWins, computerWins];
  }
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


/* I think the above version of playToFive could operate independently of the getWinner function above, but it makes logical sense to me, whereas I don’t think my attempt at incorporating getWinner function (below) would work. */

/*
/* VERSION 2- Here is a version that works if I assign return values in getWinner and getPlayerMove, getComputerMove variables (ex: return (winner = ‘tie’);  ) */
function playToFive() {
  console.log('Let\'s play Rock Paper Scissors');
  var playerWins = 0;
  var computerWins = 0;
  for (playerWins = 0; playerWins < 5; playerWins += 1) {
      for (computerWins = 0; computerWins < 5; computerWins += 1) {
	if (winner === ‘player’) {
 		return playerWins += 1;
	}
	if (winner === ‘computer’) {
	    return computerWins += 1;
	} 
	console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
   console.log('The score is currently ' + playerWins + ' to ' + computerWins);  
  return [playerWins, computerWins];
  }
  }
} */



/*
// VERSION 3- here is a version of playToFive that attempts to incorporate getWinner function
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




