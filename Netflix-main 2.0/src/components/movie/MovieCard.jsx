import React, { useState } from 'react';
import { Play } from 'lucide-react';

const MovieCard = ({ movie, onPlay }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handlePlay = () => {
    if (onPlay) {
      onPlay(movie);
    } else {
      console.log('Playing movie:', movie.title);
    }
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div 
      className="relative overflow-hidden rounded-md bg-gray-800 aspect-video hover:scale-105 transition-transform duration-300 cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handlePlay}
    >
      {!imageError ? (
        <img
          src={movie.image}
          alt={movie.title}
          className="w-full h-full object-cover"
          onError={handleImageError}
        />
      ) : (
        <div className="w-full h-full bg-gray-700 flex items-center justify-center">
          <span className="text-white text-sm">{movie.title}</span>
        </div>
      )}
      
      <div className={`absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 flex items-center justify-center ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`}>
        <Play className="text-white w-8 md:w-12 h-8 md:h-12" />
      </div>
      
      <div className={`absolute bottom-0 left-0 right-0 p-2 md:p-4 bg-gradient-to-t from-black to-transparent transition-opacity duration-300 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`}>
        <h3 className="text-white text-sm md:text-base font-semibold">
          {movie.title}
        </h3>
        <div className="flex items-center space-x-2 mt-1">
          {movie.rating && (
            <span className="bg-red-600 px-1 py-0.5 rounded text-xs font-bold text-white">
              {movie.rating}
            </span>
          )}
          {movie.year && (
            <span className="text-gray-300 text-xs">{movie.year}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;