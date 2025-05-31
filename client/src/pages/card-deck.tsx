import { useState } from 'react';
import { createDeck, Card } from '@/lib/deck';
import { SuitSection } from '@/components/suit-section';
import { Button } from '@/components/ui/button';

export default function CardDeck() {
  const [remainingCards, setRemainingCards] = useState<Card[]>(() => createDeck());

  const handleCardRemove = (cardId: string) => {
    setRemainingCards(prev => prev.filter(card => card.id !== cardId));
  };

  const handleReset = () => {
    setRemainingCards(createDeck());
  };

  const totalRemaining = remainingCards.length;
  const totalDrawn = 52 - totalRemaining;

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-4 sm:mb-8">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-1 sm:mb-2">Card Deck Tracker</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">Track remaining cards in a standard 52-card deck</p>
          
          {/* Deck Status */}
          <div className="flex justify-center items-center space-x-2 sm:space-x-6 mb-4 sm:mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md px-3 sm:px-6 py-2 sm:py-3">
              <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Cards Left</span>
              <div className="text-lg sm:text-2xl font-bold text-slate-700 dark:text-slate-300">{totalRemaining}</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md px-3 sm:px-6 py-2 sm:py-3">
              <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Cards Drawn</span>
              <div className="text-lg sm:text-2xl font-bold text-red-500 dark:text-red-400">{totalDrawn}</div>
            </div>
            <Button 
              onClick={handleReset}
              className="bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors duration-200 shadow-md text-sm sm:text-base"
            >
              Reset Deck
            </Button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="space-y-3 sm:space-y-6">
          <SuitSection
            suit="H"
            remainingCards={remainingCards}
            onCardRemove={handleCardRemove}
          />
          <SuitSection
            suit="D"
            remainingCards={remainingCards}
            onCardRemove={handleCardRemove}
          />
          <SuitSection
            suit="C"
            remainingCards={remainingCards}
            onCardRemove={handleCardRemove}
          />
          <SuitSection
            suit="S"
            remainingCards={remainingCards}
            onCardRemove={handleCardRemove}
          />
        </div>
        
        {/* Footer */}
        <div className="text-center mt-8 sm:mt-12 text-gray-500 dark:text-gray-400">
          <p className="text-xs sm:text-sm">Click on any card to remove it from the deck. Use Reset Deck to restore all cards.</p>
        </div>
      </div>
    </div>
  );
}
