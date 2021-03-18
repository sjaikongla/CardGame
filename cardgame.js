//Library class for cardgame project.
// create a stand deck of playing cards function.
function createDeck()
{
    //decalre the standard deck of playing cards contain 52 cards in each of the 4 suit
    var spades = ["Spade Ace","Spade 2","Spade 3","Spade 4","Spade 5","Spade 6","Spade 7",
    "Spade 8","Spade 9","Spade 10","Spade Jack","Spade Queen","Spade King"];
    var hearts = ["Heart Ace","Heart 2","Heart 3","Heart 4","Heart 5","Heart6",
    "Heart 7","Heart 8","Heart 9","Heart 10","Heart Jack","Heart Queen","Heart King"];
    var diamonds = ["Diamond Ace","Diamond 2","Diamond 3","Diamond 4","Diamond 5",
    "Diamond 6","Diamond 7","Diamond 8","Diamond 9","Diamond 10",
    "Diamond Jack","Diamond Queen","Diamond King"];
    var clubs = ["Club Ace","Club 2","Club 3","Club 4","Club 5","Club 6",
    "Club 7","Club 8","Club 9","Club 10","Club Jack","Club Queen","Club King"];

    var deckOfCards = [];
    //combine the card from all the suits.
    deckOfCards.push(...spades, ...hearts, ...diamonds, ...clubs);
    return deckOfCards;
}

//Create ShuffleCard function from the deck
function shuffleCard(deck)
{
    var shuffled = [...deck];
    shuffled.sort(() => Math.random() - 0.5);
    return shuffled;
}

//Create DealCard function from player cout and card that already shuffled.
function dealCard(playerCount, deckToDeal)
{
    var playerHands = [];
    numberOfCardsPerPlayer = Math.floor(deckToDeal.length/playerCount);
    //Deal card to each player 
    for(var i=0; i < playerCount; i++)
    {
       playerHands[i]= deckToDeal.splice(0,numberOfCardsPerPlayer);
    }
    
    return playerHands;
}
//export the testable functions;
module.exports.createDeck = createDeck;
module.exports.shuffleCard = shuffleCard;
module.exports.dealCard = dealCard;