
var readline = require('readline-sync');
var {createDeck, shuffleCard, dealCard} = require('./cardgame');
var numberOfPlayers = -1;
var deck = createDeck();
var newDeck = shuffleCard(deck);
var userInput;

// get player count, make sure it is between 1-52
while(numberOfPlayers >= 53 || numberOfPlayers <= 0) 
{
    userInput = promptUser();
    
    // only accept numbers
    if (isNaN(userInput)) 
    {
        continue;
    }

    // number should be integer, no decimals
    if (Number.isInteger(Number(userInput))) 
    {
        numberOfPlayers = Number(userInput);
    }
}
    
// prompt user for number of players
function promptUser()
{
       return readline.question("Please enter the valid number of player (1-52)");
}

// deal cards to players to make their hands
var players = dealCard(numberOfPlayers, newDeck);

//Print the dealed cards for each player using printPlayerHand function.
players.forEach(printPlayerHand);

// prints the player number and their hand of cards
function printPlayerHand (playerHand, index) {
    console.log("player " + (index + 1) + " = " + playerHand);
}



