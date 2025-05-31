import { Card, SUITS, getCardsBySuit, countCardsBySuit } from '@/lib/deck';
import { CardItem } from '@/components/card-item';

interface SuitSectionProps {
  suit: Card['suit'];
  allCards: Card[];
  drawnCards: Set<string>;
  onCardToggle: (cardId: string) => void;
}

export function SuitSection({ suit, allCards, drawnCards, onCardToggle }: SuitSectionProps) {
  const suitInfo = SUITS[suit];
  const suitCards = getCardsBySuit(allCards, suit);
  const drawnCount = countCardsBySuit(drawnCards, suit);
  const remainingCount = 13 - drawnCount;
  
  const titleColor = suitInfo.color === 'red' ? 'text-red-500' : 'text-gray-800';

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-3">{suitInfo.emoji}</span>
        <h2 className={`text-xl font-semibold ${titleColor}`}>
          {suitInfo.name}
        </h2>
        <span className="ml-auto text-sm text-gray-500">
          {remainingCount} remaining
        </span>
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-7 lg:grid-cols-13 gap-2">
        {suitCards.map(card => (
          <CardItem
            key={card.id}
            card={card}
            isDrawn={drawnCards.has(card.id)}
            onToggle={onCardToggle}
          />
        ))}
      </div>
    </div>
  );
}
