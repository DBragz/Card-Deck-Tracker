# Card Deck Tracker

A mobile-friendly web application for tracking remaining cards in a standard 52-card deck. Perfect for card games where you need to keep track of which cards have been drawn.

## Features

- **Complete Card Deck**: Shows all 52 cards organized by suit (Hearts, Diamonds, Clubs, Spades)
- **Descending Order**: Cards are arranged from Ace (top) to 2 (bottom) for easy reference
- **Mobile Optimized**: Responsive design that works perfectly on phone screens
- **Touch-Friendly**: Large, easy-to-tap card buttons
- **Remove Cards**: Click/tap any card to completely remove it from the deck
- **Visual Feedback**: Clear distinction between red suits (Hearts, Diamonds) and black suits (Clubs, Spades)
- **Progress Tracking**: Real-time counters showing cards remaining and cards drawn
- **Reset Function**: One-click button to restore the full deck
- **Dark Mode Support**: Automatic dark/light theme switching

## How to Use

1. **View the Deck**: All 52 cards are displayed organized by suit
2. **Remove Cards**: Tap on any card that has been drawn to remove it from the display
3. **Track Progress**: Watch the counters at the top to see how many cards remain
4. **Reset**: Use the "Reset Deck" button to restore all cards and start over
5. **Empty Suits**: When all cards in a suit are drawn, the section shows "All drawn" status

## Technical Details

### Built With
- **Frontend**: React with TypeScript
- **Styling**: Tailwind CSS with responsive design
- **UI Components**: Radix UI components for accessibility
- **State Management**: React hooks for local state
- **Routing**: Wouter for client-side routing

### Project Structure
```
├── client/src/
│   ├── components/
│   │   ├── card-item.tsx      # Individual card component
│   │   ├── suit-section.tsx   # Suit group component
│   │   └── ui/               # Reusable UI components
│   ├── lib/
│   │   ├── deck.ts           # Card deck logic and utilities
│   │   └── utils.ts          # Helper functions
│   ├── pages/
│   │   └── card-deck.tsx     # Main application page
│   └── App.tsx               # Application root
├── server/                   # Express server setup
└── shared/                   # Shared types and schemas
```

### Card Organization
- **Suits**: Hearts (♥️), Diamonds (♦️), Clubs (♣️), Spades (♠️)
- **Values**: A, K, Q, J, 10, 9, 8, 7, 6, 5, 4, 3, 2 (descending order)
- **Total Cards**: 52 (13 cards per suit)

## Installation & Setup

1. **Clone the repository**
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start the development server**:
   ```bash
   npm run dev
   ```
4. **Open your browser** to the provided localhost URL

## Mobile Usage

The application is specifically optimized for mobile devices:
- Responsive grid layout that adapts to screen size
- Touch-friendly card buttons with proper spacing
- Compact header with essential information
- Smooth animations and visual feedback
- Works in both portrait and landscape orientations

## Browser Compatibility

- Modern browsers with ES6+ support
- Mobile browsers (iOS Safari, Chrome Mobile, etc.)
- Desktop browsers (Chrome, Firefox, Safari, Edge)

## Development

To run the application in development mode:
```bash
npm run dev
```

The application will start with hot module replacement enabled for rapid development.

## Authors

- **Daniel Ribeirinha-Braga** - Project Creator
- **[Editor](https://github.com/replit)** - Development Implementation

## License

This project is open source and available under standard terms.