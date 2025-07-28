import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import HeroSection from '../components/movie/HeroSection';
import MovieCarousel from '../components/movie/MovieCarousel';

// Datos de ejemplo (en un proyecto real vendrían de tu API)
const heroContent = {
  id: 1,
  title: "Stranger Things",
  description: "Cuando un niño desaparece, sus amigos, la familia y la policía local se ven envueltos en un misterio que involucra experimentos gubernamentales secretos, fuerzas sobrenaturales aterradoras y una niña muy extraña.",
  backgroundImage: "https://images.unsplash.com/photo-1489599510827-5b0c5b6bb4c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  logo: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
  year: "2022",
  rating: "16+",
  seasons: "4 temporadas"
};

const movieCategories = [
  {
    id: 1,
    title: "Tendencias ahora",
    movies: [
      { 
        id: 1, 
        title: "Avatar", 
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", 
        year: "2022", 
        rating: "13+" 
      },
      { 
        id: 2, 
        title: "The Matrix", 
        image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", 
        year: "2021", 
        rating: "16+" 
      },
      { 
        id: 3, 
        title: "Blade Runner", 
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", 
        year: "2023", 
        rating: "18+" 
      },
      { 
        id: 4, 
        title: "Dune", 
        image: "https://images.unsplash.com/photo-1635863138275-d9864d3e8ac7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", 
        year: "2021", 
        rating: "13+" 
      },
      { 
        id: 5, 
        title: "Interstellar", 
        image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", 
        year: "2022", 
        rating: "13+" 
      },
      { 
        id: 6, 
        title: "Tenet", 
        image: "https://images.unsplash.com/photo-1489599510827-5b0c5b6bb4c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", 
        year: "2023", 
        rating: "13+" 
      }
    ]
  },
  {
    id: 2,
    title: "Acción y Aventura",
    movies: [
      { 
        id: 7, 
        title: "John Wick", 
        image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", 
        year: "2023", 
        rating: "18+" 
      },
      { 
        id: 8, 
        title: "Mad Max", 
        image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", 
        year: "2022", 
        rating: "16+" 
      },
      { 
        id: 9, 
        title: "Fast & Furious", 
        image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", 
        year: "2023", 
        rating: "13+" 
      },
      { 
        id: 10, 
        title: "Mission Impossible", 
        image: "https://images.unsplash.com/photo-1489599510827-5b0c5b6bb4c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", 
        year: "2023", 
        rating: "13+" 
      },
      { 
        id: 11, 
        title: "James Bond", 
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", 
        year: "2021", 
        rating: "13+" 
      },
      { 
        id: 12, 
        title: "Die Hard", 
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", 
        year: "2022", 
        rating: "16+" 
      }
    ]
  },
  {
    id: 3,
    title: "Drama",
    movies: [
      { 
        id: 13, 
        title: "The Godfather", 
        image: "https://images.unsplash.com/photo-1489599510827-5b0c5b6bb4c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", 
        year: "2021", 
        rating: "18+" 
      },
      { 
        id: 14, 
        title: "Shawshank Redemption", 
        image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", 
        year: "2022", 
        rating: "16+" 
      },
      { 
        id: 15, 
        title: "Forrest Gump", 
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", 
        year: "2023", 
        rating: "13+" 
      },
      { 
        id: 16, 
        title: "Titanic", 
        image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", 
        year: "2021", 
        rating: "13+" 
      },
      { 
        id: 17, 
        title: "The Dark Knight", 
        image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", 
        year: "2022", 
        rating: "13+" 
      },
      { 
        id: 18, 
        title: "Inception", 
        image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", 
        year: "2023", 
        rating: "13+" 
      }
    ]
  },
  {
    id: 4,
    title: "Comedias",
    movies: [
      { 
        id: 19, 
        title: "Superbad", 
        image: "https://images.unsplash.com/photo-1489599510827-5b0c5b6bb4c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", 
        year: "2023", 
        rating: "16+" 
      },
      { 
        id: 20, 
        title: "The Hangover", 
        image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", 
        year: "2022", 
        rating: "18+" 
      },
      { 
        id: 21, 
        title: "Anchorman", 
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", 
        year: "2021", 
        rating: "13+" 
      },
      { 
        id: 22, 
        title: "Step Brothers", 
        image: "https://images.unsplash.com/photo-1635863138275-d9864d3e8ac7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", 
        year: "2023", 
        rating: "16+" 
      }
    ]
  }
];

const HomePage = () => {
  return (
    <div className="bg-black min-h-screen">
      {/* Header with transparent background initially */}
      <Header transparent />
      
      {/* Hero Section */}
      <HeroSection content={heroContent} />
      
      {/* Movie Carousels */}
      <div className="relative z-10 -mt-20 md:-mt-32">
        {movieCategories.map((category) => (
          <MovieCarousel 
            key={category.id} 
            title={category.title} 
            movies={category.movies} 
          />
        ))}
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;