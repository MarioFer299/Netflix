import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MovieCard from './MovieCard';

const MovieCarousel = ({ title, movies }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(6);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(2);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(4);
      } else {
        setItemsPerView(6);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + itemsPerView >= movies.length ? 0 : prev + itemsPerView
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, movies.length - itemsPerView) : Math.max(0, prev - itemsPerView)
    );
  };

  const handlePlayMovie = (movie) => {
    console.log('Playing movie:', movie);
    // Aquí implementarías la lógica de reproducción
    // Por ejemplo, abrir un modal o navegar a una página de reproducción
  };

  if (!movies || movies.length === 0) {
    return null;
  }

  return (
    <div className="mb-8">
      <h2 className="text-white text-lg md:text-xl font-semibold mb-4 px-4 md:px-12">
        {title}
      </h2>
      <div className="relative group px-4 md:px-12">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out gap-1 md:gap-2"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
          >
            {movies.map((movie) => (
              <div 
                key={movie.id} 
                className="flex-shrink-0"
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <div className="px-1">
                  <MovieCard movie={movie} onPlay={handlePlayMovie} />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation Arrows - Solo mostrar si hay más películas que las visibles */}
        {movies.length > itemsPerView && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-opacity-75 z-10"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-opacity-75 z-10"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default MovieCarousel;