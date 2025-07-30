import React from 'react';
import { Play, Info } from 'lucide-react';
import Button from '../ui/Button';

const HeroSection = ({ content }) => {
  const defaultContent = {
    id: 1,
    title: "Stranger Things",
    description: "Cuando un niño desaparece, sus amigos, la familia y la policía local se ven envueltos en un misterio que involucra experimentos gubernamentales secretos, fuerzas sobrenaturales aterradoras y una niña muy extraña.",
    backgroundImage: "https://images.unsplash.com/photo-1489599510827-5b0c5b6bb4c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    logo: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    year: "2022",
    rating: "16+",
    seasons: "4 temporadas"
  };

  const heroData = content || defaultContent;

  const handlePlay = () => {
    console.log('Playing:', heroData.title);
    // Aquí implementarías la lógica de reproducción
  };

  const handleMoreInfo = () => {
    console.log('More info for:', heroData.title);
    // Aquí implementarías la lógica para mostrar más información
  };

  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroData.backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>
      
      <div className="relative z-10 h-full flex items-center px-4 md:px-12">
        <div className="max-w-2xl">
          <img 
            src={heroData.logo} 
            alt={heroData.title}
            className="w-60 md:w-80 h-24 md:h-32 object-contain mb-4 md:mb-6"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          {/* Fallback título si no carga la imagen del logo */}
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 hidden">
            {heroData.title}
          </h1>
          
          <div className="flex items-center space-x-4 mb-4 text-white">
            <span className="bg-red-600 px-2 py-1 rounded text-sm font-bold">
              {heroData.rating}
            </span>
            <span className="text-lg">{heroData.year}</span>
            <span className="text-gray-300">{heroData.seasons}</span>
          </div>
          
          <p className="text-white text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
            {heroData.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="primary" 
              size="lg"
              onClick={handlePlay}
            >
              <Play className="w-5 h-5 fill-current" />
              Reproducir
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={handleMoreInfo}
            >
              <Info className="w-5 h-5" />
              Más información
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;