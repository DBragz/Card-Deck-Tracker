export interface Card {
  suit: 'H' | 'D' | 'C' | 'S';
  value: 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K';
  id: string;
}

export interface Suit {
  name: string;
  symbol: string;
  color: 'red' | 'black';
  emoji: string;
}

export const SUITS: Record<string, Suit> = {
  H: { name: 'Hearts', symbol: '♥', color: 'red', emoji: '♥️' },
  D: { name: 'Diamonds', symbol: '♦', color: 'red', emoji: '♦️' },
  C: { name: 'Clubs', symbol: '♣', color: 'black', emoji: '♣️' },
  S: { name: 'Spades', symbol: '♠', color: 'black', emoji: '♠️' }
};

export const CARD_VALUES: Card['value'][] = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

export function createDeck(): Card[] {
  const deck: Card[] = [];
  
  Object.keys(SUITS).forEach(suitKey => {
    CARD_VALUES.forEach(value => {
      deck.push({
        suit: suitKey as Card['suit'],
        value,
        id: `${suitKey}-${value}`
      });
    });
  });
  
  return deck;
}

export function getCardsBySuit(cards: Card[], suit: Card['suit']): Card[] {
  return cards.filter(card => card.suit === suit);
}

export function countCardsBySuit(drawnCards: Set<string>, suit: Card['suit']): number {
  let count = 0;
  drawnCards.forEach(cardId => {
    if (cardId.startsWith(suit)) {
      count++;
    }
  });
  return count;
}
