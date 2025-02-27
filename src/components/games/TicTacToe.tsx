import React, { useState, useEffect } from 'react';
import { ArrowLeft, RefreshCw } from 'lucide-react';

interface TicTacToeProps {
  onBack: () => void;
}

type Player = 'X' | 'O' | null;
type Board = (Player)[];

const TicTacToe: React.FC<TicTacToeProps> = ({ onBack }) => {
  const [board, setBoard] = useState<Board>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState<boolean>(true);
  const [winner, setWinner] = useState<Player>(null);
  const [winningLine, setWinningLine] = useState<number[] | null>(null);
  const [isDraw, setIsDraw] = useState<boolean>(false);
  const [scores, setScores] = useState({ X: 0, O: 0, draws: 0 });

  const winningPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6]             // diagonals
  ];

  useEffect(() => {
    checkGameStatus();
  }, [board]);

  const checkGameStatus = () => {
    // Check for winner
    for (const pattern of winningPatterns) {
      const [a, b, c] = pattern;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        setWinningLine(pattern);
        updateScores(board[a]);
        return;
      }
    }

    // Check for draw
    if (!board.includes(null) && !winner) {
      setIsDraw(true);
      updateScores(null);
    }
  };

  const updateScores = (winner: Player) => {
    if (winner === 'X') {
      setScores(prev => ({ ...prev, X: prev.X + 1 }));
    } else if (winner === 'O') {
      setScores(prev => ({ ...prev, O: prev.O + 1 }));
    } else {
      setScores(prev => ({ ...prev, draws: prev.draws + 1 }));
    }
  };

  const handleClick = (index: number) => {
    // Ignore click if square is filled or game is over
    if (board[index] || winner || isDraw) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
    setWinningLine(null);
    setIsDraw(false);
  };

  const renderSquare = (index: number) => {
    const isWinningSquare = winningLine?.includes(index);
    
    return (
      <button
        className={`aspect-square flex items-center justify-center text-3xl font-bold border border-gray-300 ${
          isWinningSquare ? 'bg-green-100' : 'bg-white'
        } hover:bg-indigo-50 transition-colors`}
        onClick={() => handleClick(index)}
      >
        {board[index]}
      </button>
    );
  };

  const getStatusMessage = () => {
    if (winner) {
      return `Joueur ${winner} a gagné !`;
    } else if (isDraw) {
      return "Match nul !";
    } else {
      return `Au tour du joueur ${isXNext ? 'X' : 'O'}`;
    }
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
        
        <h2 className="text-2xl font-bold text-indigo-700">Tic Tac Toe</h2>
        
        <button 
          onClick={resetGame}
          className="flex items-center text-indigo-600 hover:text-indigo-800"
        >
          <RefreshCw size={20} className="mr-1" />
          Nouvelle partie
        </button>
      </div>
      
      <div className="flex justify-center space-x-8">
        <div className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-md">
          <span className="font-medium">X: </span>
          {scores.X}
        </div>
        
        <div className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-md">
          <span className="font-medium">O: </span>
          {scores.O}
        </div>
        
        <div className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-md">
          <span className="font-medium">Nuls: </span>
          {scores.draws}
        </div>
      </div>
      
      <div className="flex justify-center">
        <div className="w-full max-w-xs">
          <div className="text-center mb-4 font-medium text-lg text-gray-700">
            {getStatusMessage()}
          </div>
          
          <div className="grid grid-cols-3 gap-2">
            {Array(9).fill(null).map((_, index) => (
              <div key={index}>
                {renderSquare(index)}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="bg-indigo-50 p-4 rounded-md">
        <h3 className="font-semibold text-indigo-700 mb-2">Comment jouer</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Les joueurs jouent à tour de rôle, en plaçant leur symbole (X ou O) sur une case vide</li>
          <li>Le premier joueur à aligner trois de ses symboles horizontalement, verticalement ou en diagonale gagne</li>
          <li>Si toutes les cases sont remplies sans alignement, la partie est déclarée nulle </li>
        </ul>
      </div>
    </div>
  );
};

export default TicTacToe;