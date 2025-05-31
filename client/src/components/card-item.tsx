import { Card, SUITS } from '@/lib/deck';

interface CardItemProps {
  card: Card;
  onRemove: (cardId: string) => void;
}

export function CardItem({ card, onRemove }: CardItemProps) {
  const suit = SUITS[card.suit];
  const textColor = suit.color === 'red' ? 'text-red-500 dark:text-red-400' : 'text-gray-800 dark:text-gray-200';
  const hoverBorder = suit.color === 'red' ? 'hover:border-red-300' : 'hover:border-gray-400';
  
  return (
    <div
      className={`
        card-item rounded-lg p-2 sm:p-3 text-center transition-all duration-200 border-2
        bg-white dark:bg-gray-800 cursor-pointer border-gray-200 dark:border-gray-600 
        hover:shadow-md ${hoverBorder} hover:scale-105 active:scale-95
      `}
      onClick={() => onRemove(card.id)}
    >
      <div className={`text-sm sm:text-lg font-bold ${textColor}`}>
        {card.value}
      </div>
      <div className={`text-xs sm:text-base ${textColor}`}>
        {suit.symbol}
      </div>
    </div>
  );
}
