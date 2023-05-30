console.log('Object Literals');


let card0 = {
    suit: 'Hearts',
    number: 2
} // end card0

let card1 = {
    suit: "Spades",
    number: 1
} // end card1

let card2 = {
    suit: 'Diamonds',
    number: 4
    
} // end card2




function isRed( cardToCheck ) {
    console.log('is red:', cardToCheck);
    if (cardToCheck.suit === 'Hearts' || cardToCheck.suit === "Diamonds") {
        return true;
    } // end red 
    else {
        return false;
    } // end !red
} // end isRed




console.log(isRed(card0));
console.log(isRed(card1));



function higherCard (card_1, card_2) {
    if (card_1.number < card_2.number) {
        console.log(card_2);
    }
    else {
        console.log(card_1);
    }
}

higherCard (card0, card1)

higherCard (card2, card1)