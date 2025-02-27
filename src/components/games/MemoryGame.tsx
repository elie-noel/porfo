import React, { useState, useEffect } from 'react';
import { ArrowLeft, RefreshCw } from 'lucide-react';

interface MemoryGameProps {
  onBack: () => void;
}

interface Card {
  id: number;
  value: string;
  flipped: boolean;
  matched: boolean;
}

const MemoryGame: React.FC<MemoryGameProps> = ({ onBack }) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);

  const emojis = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮'];
  
  const initializeGame = () => {
    // Select 6 random emojis from the list
    const selectedEmojis = [...emojis]
      .sort(() => 0.5 - Math.random())
      .slice(0, 6);
    
    // Create pairs of cards with the selected emojis
    const cardPairs = [...selectedEmojis, ...selectedEmojis]
      .sort(() => 0.5 - Math.random())
      .map((value, index) => ({
        id: index,
        value,
        flipped: false,
        matched: false
      }));
    
    setCards(cardPairs);
    setFlippedCards([]);
    setMoves(0);
    setGameOver(false);
    setStartTime(Date.now());
    setEndTime(null);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  useEffect(() => {
    // Check if all cards are matched
    if (cards.length > 0 && cards.every(card => card.matched)) {
      setGameOver(true);
      setEndTime(Date.now());
    }
  }, [cards]);

  useEffect(() => {
    // Check for matches when two cards are flipped
    if (flippedCards.length === 2) {
      const [firstIndex, secondIndex] = flippedCards;
      
      if (cards[firstIndex].value === cards[secondIndex].value) {
        // Match found
        setCards(prevCards => 
          prevCards.map((card, index) => 
            index === firstIndex || index === secondIndex
              ? { ...card, matched: true }
              : card
          )
        );
      }
      
      // Reset flipped cards after a delay
      const timer = setTimeout(() => {
        setFlippedCards([]);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [flippedCards, cards]);

  const handleCardClick = (index: number) => {
    // Ignore click if card is already flipped or matched
    if (cards[index].flipped || cards[index].matched || flippedCards.length >= 2) {
      return;
    }
    
    // Flip the card
    setCards(prevCards => 
      prevCards.map((card, i) => 
        i === index ? { ...card, flipped: true } : card
      )
    );
    
    // Add to flipped cards
    setFlippedCards(prev => [...prev, index]);
    
    // Increment moves if this is the second card
    if (flippedCards.length === 1) {
      setMoves(prev => prev + 1);
    }
  };

  const formatTime = (milliseconds: number) => {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <button 
          onClick={onBack}
          className="flex items-center text-indigo-600 hover:text-indigo-800"
        >
          <ArrowLeft size={20} className="mr-1" />
          Retour
        </button>
        
        <h2 className="text-2xl font-bold text-indigo-700">Jeu de Mémoire</h2>
        
        <button 
          onClick={initializeGame}
          className="flex items-center text-indigo-600 hover:text-indigo-800"
        >
          <RefreshCw size={20} className="mr-1" />
          Recommencer
        </button>
      </div>
      
      <div className="flex justify-center space-x-8">
        <div className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-md">
          <span className="font-medium">Coups: </span>
          {moves}
        </div>
        
        <div className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-md">
          <span className="font-medium">Temps: </span>
          {startTime && !endTime && (
            <span>{formatTime(Date.now() - startTime)}</span>
          )}
          {endTime && startTime && (
            <span>{formatTime(endTime - startTime)}</span>
          )}
        </div>
      </div>
      
      {gameOver && (
        <div className="bg-green-100 text-green-700 p-4 rounded-md text-center">
          <h3 className="text-xl font-semibold mb-2">Félicitations !</h3>
          <p>Vous avez terminé le jeu en {moves} coups et {startTime && endTime && formatTime(endTime - startTime)}.</p>
        </div>
      )}
      
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <div 
            key={card.id}
            className={`aspect-square flex items-center justify-center rounded-lg cursor-pointer text-4xl transition-all transform ${
              card.flipped || card.matched
                ? 'bg-white border-2 border-indigo-300 rotate-0'
                : 'bg-indigo-600 rotate-y-180'
            } ${card.matched ? 'bg-green-100 border-green-300' : ''}`}
            onClick={() => handleCardClick(index)}
          >
            {(card.flipped || card.matched) && card.value}
          </div>
        ))}
      </div>
      
      <div className="bg-indigo-50 p-4 rounded-md">
        <h3 className="font-semibold text-indigo-700 mb-2">Comment jouer</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Cliquez sur une carte pour la retourner</li>
          <li>Essayez de trouver les paires d'emojis identiques</li>
          <li>Le jeu est terminé lorsque toutes les paires sont trouvées</li>
        </ul>
      </div>
    </div>
  );
};

export default MemoryGame;