import React from 'react';
import { GamepadIcon, Brain } from 'lucide-react';

interface GamesProps {
  onSelectGame: (game: string) => void;
}

const Games: React.FC<GamesProps> = ({ onSelectGame }) => {
  const games = [
    {
      id: 'memory',
      name: 'Jeu de Mémoire',
      description: 'Testez votre mémoire en trouvant les paires de cartes identiques.',
      icon: <Brain size={40} className="text-indigo-600" />,
      difficulty: 'Facile'
    },
    {
      id: 'tictactoe',
      name: 'Tic Tac Toe',
      description: 'Le jeu classique de morpion. Alignez trois symboles pour gagner.',
      icon: <GamepadIcon size={40} className="text-indigo-600" />,
      difficulty: 'Facile'
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-indigo-700 border-b border-indigo-200 pb-2">
        Espace Jeux
      </h2>
      
      <p className="text-gray-700">
        Bienvenue dans l'espace jeux ! Ici, vous pouvez vous détendre et tester vos compétences avec quelques jeux simples.
        Choisissez un jeu ci-dessous pour commencer.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {games.map((game) => (
          <div 
            key={game.id}
            className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 cursor-pointer"
            onClick={() => onSelectGame(game.id)}
          >
            <div className="flex items-center mb-4">
              {game.icon}
              <h3 className="text-xl font-semibold text-gray-800 ml-3">{game.name}</h3>
            </div>
            
            <p className="text-gray-600 mb-4">{game.description}</p>
            
            <div className="flex justify-between items-center">
              <span className="text-sm bg-indigo-100 text-indigo-700 px-2 py-1 rounded">
                Difficulté: {game.difficulty}
              </span>
              
              <button 
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectGame(game.id);
                }}
              >
                Jouer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Games;