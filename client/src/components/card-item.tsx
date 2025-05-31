import { Card, SUITS } from '@/lib/deck';

interface CardItemProps {
  card: Card;
  isDrawn: boolean;
  onToggle: (cardId: string) => void;
}

export function CardItem({ card, isDrawn, onToggle }: CardItemProps) {
  const suit = SUITS[card.suit];
  const textColor = suit.color === 'red' ? 'text-red-500' : 'text-gray-800';
  const hoverBorder = suit.color === 'red' ? 'hover:border-red-300' : 'hover:border-gray-400';
  
  return (
    <div
      className={`
        card-item rounded-lg p-3 text-center transition-all duration-200 border-2
        ${isDrawn 
          ? 'bg-gray-100 opacity-50 cursor-not-allowed border-gray-300' 
          : `bg-white cursor-pointer border-gray-200 hover:shadow-md ${hoverBorder}`
        }
      `}
      onClick={() => !isDrawn && onToggle(card.id)}
    >
      <div className={`text-lg font-bold ${textColor}`}>
        {card.value}
      </div>
      <div className={textColor}>
        {suit.symbol}
      </div>
    </div>
  );
}
