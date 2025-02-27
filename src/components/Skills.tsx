import React from 'react';

const Skills = () => {
  const technicalSkills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "TypeScript", level: 70 },
    { name: "React", level: 75 },
    { name: "Node.js", level: 65 },
    { name: "Express", level: 60 },
    { name: "MongoDB", level: 55 },
    { name: "SQL", level: 50 },
    { name: "Git", level: 70 },
  ];

  const softSkills = [
    "Travail d'équipe",
    "Communication",
    "Résolution de problèmes",
    "Adaptabilité",
    "Gestion du temps",
    "Autonomie",
    "Créativité",
    "Esprit critique"
  ];

  const languages = [
    { name: "Français", level: "Natif" },
    { name: "Anglais", level: "Courant (C1)" },
    { name: "Espagnol", level: "Intermédiaire (B1)" }
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-indigo-700 border-b border-indigo-200 pb-2">
        Connaissances et Compétences
      </h2>
      
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Compétences Techniques</h3>
        <div className="space-y-4">
          {technicalSkills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="font-medium text-gray-700">{skill.name}</span>
                <span className="text-sm text-gray-500">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-indigo-600 h-2.5 rounded-full" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Compétences Personnelles</h3>
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {softSkills.map((skill, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                  <span className="text-gray-700">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Langues</h3>
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <ul className="space-y-3">
              {languages.map((lang, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">{lang.name}</span>
                  <span className="text-sm bg-indigo-100 text-indigo-700 px-2 py-1 rounded">{lang.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;