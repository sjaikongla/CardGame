const {createDeck, shuffleCard, dealCard} = require('./cardgame');

describe('deck should be a regular card deck and should shuffle randomly', () => {
    test('test deck building', () => {
        var deckOfCards = createDeck();
        expect(deckOfCards.length).toBe(52);
    });

    test('test card shuffling', () => {
        var deckOfCards = createDeck();
        var shufflingCard = shuffleCard(deckOfCards);
        expect(JSON.stringify(shufflingCard)).not.toBe(JSON.stringify(deckOfCards));
    });
});

describe('dealing cards to players should result in equal hand sizes', () => {
    test('test card dealing to 2 players', () => {
        var deckOfCards = createDeck();
        var playerHands = dealCard(2,deckOfCards);
        expect(playerHands.length).toBe(2);
        expect(playerHands[0].length).toBe(26);
        expect(playerHands[1].length).toBe(playerHands[0].length);
    });

    test('test card dealing to 3 players', () => {
        var deckOfCards = createDeck();
        var playerHands = dealCard(3,deckOfCards);
        expect(playerHands.length).toBe(3);
        expect(playerHands[0].length).toBe(17);
        expect(playerHands[1].length).toBe(playerHands[0].length);
        expect(playerHands[2].length).toBe(playerHands[0].length);
    });

    test('test card dealing to 4 players', () => {
        var deckOfCards = createDeck();
        var playerHands = dealCard(4,deckOfCards);
        expect(playerHands.length).toBe(4);
        for (var i=0; i<4; i++)
        {
            expect(playerHands[i].length).toBe(13);
        }
    });

    test('test card dealing to 12 players', () => {
        var deckOfCards = createDeck();
        var playerHands = dealCard(12,deckOfCards);
        expect(playerHands.length).toBe(12);
        for (var i=0; i<12; i++)
        {
            expect(playerHands[i].length).toBe(4);
        }
    });

    test('test card dealing to 52 players', () => {
        var deckOfCards = createDeck();
        var playerHands = dealCard(52,deckOfCards);
        expect(playerHands.length).toBe(52);
        for (var i=0; i<52; i++)
        {
            expect(playerHands[i].length).toBe(1);
        }
    });
});