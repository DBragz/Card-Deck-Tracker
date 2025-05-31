import { Card, SUITS, getCardsBySuit, countRemainingCardsBySuit } from '@/lib/deck';
import { CardItem } from '@/components/card-item';

interface SuitSectionProps {
  suit: Card['suit'];
  remainingCards: Card[];
  onCardRemove: (cardId: string) => void;
}

export function SuitSection({ suit, remainingCards, onCardRemove }: SuitSectionProps) {
  const suitInfo = SUITS[suit];
  const suitCards = getCardsBySuit(remainingCards, suit);
  const remainingCount = countRemainingCardsBySuit(remainingCards, suit);
  
  const titleColor = suitInfo.color === 'red' ? 'text-red-500 dark:text-red-400' : 'text-gray-800 dark:text-gray-200';

  if (remainingCount === 0) {
    return (
      <div className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg p-4 opacity-60">
        <div className="flex items-center justify-center">
          <span className="text-2xl mr-2 grayscale">{suitInfo.emoji}</span>
          <h2 className={`text-lg font-semibold text-gray-500 dark:text-gray-400`}>
            {suitInfo.name} - All drawn
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6">
      <div className="flex items-center mb-3 sm:mb-4">
        <span className="text-2xl sm:text-3xl mr-2 sm:mr-3">{suitInfo.emoji}</span>
        <h2 className={`text-lg sm:text-xl font-semibold ${titleColor}`}>
          {suitInfo.name}
        </h2>
        <span className="ml-auto text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          {remainingCount} left
        </span>
      </div>
      <div className="grid grid-cols-5 sm:grid-cols-7 md:grid-cols-9 lg:grid-cols-13 gap-1 sm:gap-2">
        {suitCards.map(card => (
          <CardItem
            key={card.id}
            card={card}
            onRemove={onCardRemove}
          />
        ))}
      </div>
    </div>
  );
}
