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

export const CARD_VALUES: Card['value'][] = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'];

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
  if (!cards || !Array.isArray(cards)) return [];
  return cards.filter(card => card.suit === suit);
}

export function countRemainingCardsBySuit(allCards: Card[], suit: Card['suit']): number {
  if (!allCards || !Array.isArray(allCards)) return 0;
  return allCards.filter(card => card.suit === suit).length;
}
