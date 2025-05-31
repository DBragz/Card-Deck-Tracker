import { useState } from 'react';
import { createDeck } from '@/lib/deck';
import { SuitSection } from '@/components/suit-section';
import { Button } from '@/components/ui/button';

export default function CardDeck() {
  const [allCards] = useState(() => createDeck());
  const [drawnCards, setDrawnCards] = useState<Set<string>>(new Set());

  const handleCardToggle = (cardId: string) => {
    setDrawnCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(cardId)) {
        newSet.delete(cardId);
      } else {
        newSet.add(cardId);
      }
      return newSet;
    });
  };

  const handleReset = () => {
    setDrawnCards(new Set());
  };

  const remainingCards = 52 - drawnCards.size;
  const drawnCount = drawnCards.size;

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Card Deck Tracker</h1>
          <p className="text-gray-600 mb-6">Track remaining cards in a standard 52-card deck</p>
          
          {/* Deck Status */}
          <div className="flex justify-center items-center space-x-6 mb-6">
            <div className="bg-white rounded-lg shadow-md px-6 py-3">
              <span className="text-sm text-gray-500">Cards Remaining</span>
              <div className="text-2xl font-bold text-slate-700">{remainingCards}</div>
            </div>
            <div className="bg-white rounded-lg shadow-md px-6 py-3">
              <span className="text-sm text-gray-500">Cards Drawn</span>
              <div className="text-2xl font-bold text-red-500">{drawnCount}</div>
            </div>
            <Button 
              onClick={handleReset}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-md"
            >
              Reset Deck
            </Button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="space-y-8">
          <SuitSection
            suit="H"
            allCards={allCards}
            drawnCards={drawnCards}
            onCardToggle={handleCardToggle}
          />
          <SuitSection
            suit="D"
            allCards={allCards}
            drawnCards={drawnCards}
            onCardToggle={handleCardToggle}
          />
          <SuitSection
            suit="C"
            allCards={allCards}
            drawnCards={drawnCards}
            onCardToggle={handleCardToggle}
          />
          <SuitSection
            suit="S"
            allCards={allCards}
            drawnCards={drawnCards}
            onCardToggle={handleCardToggle}
          />
        </div>
        
        {/* Footer */}
        <div className="text-center mt-12 text-gray-500">
          <p className="text-sm">Click on any card to mark it as drawn. Use Reset Deck to restore all cards.</p>
        </div>
      </div>
    </div>
  );
}
