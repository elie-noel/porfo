import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const educationItems = [
    {
      id: 1,
      degree: "Master MIAGE",
      institution: "UFHB",
      location: "Abidjan",
      period: "2024 - maintenant",
      description: "Formation complète en développement web full-stack, avec spécialisation en technologies JavaScript modernes. Projets pratiques en équipe et stage en entreprise."
    },
    {
      id: 2,
      degree: "Licence MIAGE",
      institution: "UFHB",
      location: "Abidjan",
      period: "2021 - 2024",
      description: "Formation généraliste en informatique couvrant les bases de la programmation, des bases de données, des réseaux et de la gestion de projet."
    },
    {
      id: 3,
      degree: "Baccalauréat Scientifique",
      institution: "Lycée 1",
      location: "Abidjan",
      period: "2017 - 2020",
      description: "Baccalauréat avec spécialité Mathématiques et option Informatique. Mention Bien."
    }
  ];

  const certifications = [
    {
      id: 1,
      name: "React - The Complete Guide",
      issuer: "Udemy",
      date: "Août 2023"
    },
    {
      id: 2,
      name: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "Mai 2023"
    },
    {
      id: 3,
      name: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "Février 2023"
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-indigo-700 border-b border-indigo-200 pb-2 mb-6">
          Parcours Académique
        </h2>
        
        <div className="space-y-6">
          {educationItems.map((item) => (
            <div key={item.id} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{item.degree}</h3>
                  <p className="text-lg text-indigo-600">{item.institution}</p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mt-2 text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h2 className="text-3xl font-bold text-indigo-700 border-b border-indigo-200 pb-2 mb-6">
          Certifications
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert) => (
            <div key={cert.id} className="bg-indigo-50 rounded-lg p-4 border border-indigo-100">
              <h3 className="font-semibold text-gray-800">{cert.name}</h3>
              <div className="mt-2 text-sm">
                <p className="text-indigo-600">{cert.issuer}</p>
                <p className="text-gray-600">{cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;