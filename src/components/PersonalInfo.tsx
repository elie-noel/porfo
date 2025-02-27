import React from 'react';

const PersonalInfo = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-indigo-700 border-b border-indigo-200 pb-2">
        Informations Personnelles
      </h2>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="Photo de profil" 
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
        </div>
        
        <div className="md:w-2/3 space-y-4">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">Marie Dupont</h3>
            <p className="text-xl text-indigo-600">Développeuse Web Junior</p>
          </div>
          
          <div className="bg-indigo-50 p-4 rounded-md">
            <h4 className="font-semibold text-indigo-700 mb-2">À propos de moi</h4>
            <p className="text-gray-700">
              Étudiante passionnée en développement web, je suis actuellement en formation pour devenir développeuse full-stack. 
              Curieuse et motivée, j'aime relever de nouveaux défis et apprendre continuellement. 
              Mon objectif est de créer des applications web intuitives et accessibles qui répondent aux besoins des utilisateurs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">Informations de base</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="font-medium text-gray-700 w-24">Âge:</span>
                  <span className="text-gray-600">23 ans</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium text-gray-700 w-24">Localisation:</span>
                  <span className="text-gray-600">Paris, France</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium text-gray-700 w-24">Langues:</span>
                  <span className="text-gray-600">Français (natif), Anglais (courant)</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">Centres d'intérêt</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-gray-600">Développement web</span>
                </li>
                <li className="flex items-center">
                  <span className="text-gray-600">Intelligence artificielle</span>
                </li>
                <li className="flex items-center">
                  <span className="text-gray-600">Photographie</span>
                </li>
                <li className="flex items-center">
                  <span className="text-gray-600">Randonnée</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;