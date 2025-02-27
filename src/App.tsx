import React, { useState } from 'react';
import { Menu, X, User, Briefcase, GraduationCap, Brain, Mail, GamepadIcon } from 'lucide-react';
import PersonalInfo from './components/PersonalInfo';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Games from './components/Games';
import MemoryGame from './components/games/MemoryGame';
import TicTacToe from './components/games/TicTacToe';

function App() {
  const [activeSection, setActiveSection] = useState('personal');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeGame, setActiveGame] = useState<string | null>(null);

  const menuItems = [
    { id: 'personal', label: 'Informations Personnelles', icon: <User size={20} /> },
    { id: 'experience', label: 'Expérience', icon: <Briefcase size={20} /> },
    { id: 'education', label: 'Parcours', icon: <GraduationCap size={20} /> },
    { id: 'skills', label: 'Connaissances', icon: <Brain size={20} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={20} /> },
    { id: 'games', label: 'Espace Jeux', icon: <GamepadIcon size={20} /> },
  ];

  const renderContent = () => {
    if (activeSection === 'games' && activeGame) {
      if (activeGame === 'memory') {
        return <MemoryGame onBack={() => setActiveGame(null)} />;
      } else if (activeGame === 'tictactoe') {
        return <TicTacToe onBack={() => setActiveGame(null)} />;
      }
    }

    switch (activeSection) {
      case 'personal':
        return <PersonalInfo />;
      case 'experience':
        return <Experience />;
      case 'education':
        return <Education />;
      case 'skills':
        return <Skills />;
      case 'contact':
        return <Contact />;
      case 'games':
        return <Games onSelectGame={setActiveGame} />;
      default:
        return <PersonalInfo />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-700">Portfolio CV</h1>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop menu */}
          <nav className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setActiveGame(null);
                }}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
                  activeSection === item.id
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </header>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col px-4 py-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setMobileMenuOpen(false);
                  setActiveGame(null);
                }}
                className={`flex items-center space-x-2 px-3 py-3 rounded-md transition-colors ${
                  activeSection === item.id
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      )}
      
      {/* Main content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 min-h-[calc(100vh-12rem)]">
          {renderContent()}
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-indigo-700 text-white py-4 px-6">
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} - Portfolio CV - Tous droits réservés</p>
        </div>
      </footer>
    </div>
  );
}

export default App;