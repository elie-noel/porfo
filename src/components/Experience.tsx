import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Développeuse Web Stagiaire",
      company: "TechSolutions",
      location: "Paris",
      period: "Juin 2023 - Août 2023",
      description: [
        "Développement de fonctionnalités front-end avec React",
        "Intégration d'API RESTful",
        "Participation aux réunions d'équipe et aux revues de code",
        "Optimisation des performances de l'application web"
      ]
    },
    {
      id: 2,
      title: "Projet Académique - Application Web",
      company: "École de Développement Web",
      location: "Paris",
      period: "Janvier 2023 - Mai 2023",
      description: [
        "Développement d'une application web de gestion de tâches",
        "Utilisation de React, Node.js et MongoDB",
        "Implémentation de l'authentification utilisateur",
        "Travail en équipe avec méthodologie Agile"
      ]
    },
    {
      id: 3,
      title: "Freelance - Site Vitrine",
      company: "Café Parisien",
      location: "Paris",
      period: "Novembre 2022 - Décembre 2022",
      description: [
        "Création d'un site vitrine responsive pour un café local",
        "Utilisation de HTML, CSS et JavaScript",
        "Optimisation SEO et performances",
        "Formation du client à la mise à jour du contenu"
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-indigo-700 border-b border-indigo-200 pb-2">
        Expérience Professionnelle
      </h2>
      
      <div className="space-y-8">
        {experiences.map((exp) => (
          <div key={exp.id} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
                <p className="text-lg text-indigo-600">{exp.company}</p>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mt-2 text-gray-600">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium text-gray-700 mb-2">Responsabilités:</h4>
              <ul className="list-disc pl-5 space-y-1">
                {exp.description.map((item, index) => (
                  <li key={index} className="text-gray-600">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;