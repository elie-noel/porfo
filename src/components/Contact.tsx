import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setFormSubmitted(false);
    }, 3000);
  };

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-indigo-700 border-b border-indigo-200 pb-2">
        Contact
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Mes Coordonnées</h3>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <Mail className="text-indigo-600 mt-1 mr-3" size={20} />
              <div>
                <p className="font-medium text-gray-700">Email</p>
                <a href="mailto:marie.dupont@example.com" className="text-indigo-600 hover:underline">
                  marie.dupont@example.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone className="text-indigo-600 mt-1 mr-3" size={20} />
              <div>
                <p className="font-medium text-gray-700">Téléphone</p>
                <a href="tel:+33123456789" className="text-gray-600">
                  +33 1 23 45 67 89
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <MapPin className="text-indigo-600 mt-1 mr-3" size={20} />
              <div>
                <p className="font-medium text-gray-700">Localisation</p>
                <p className="text-gray-600">Paris, France</p>
              </div>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Réseaux Sociaux</h3>
          
          <div className="flex space-x-4">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-indigo-100 hover:bg-indigo-200 text-indigo-700 p-3 rounded-full transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-indigo-100 hover:bg-indigo-200 text-indigo-700 p-3 rounded-full transition-colors"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Envoyez-moi un message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Sujet
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
            >
              <Send size={18} className="mr-2" />
              Envoyer
            </button>
            
            {formSubmitted && (
              <div className="bg-green-100 text-green-700 p-3 rounded-md">
                Votre message a été envoyé avec succès !
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;