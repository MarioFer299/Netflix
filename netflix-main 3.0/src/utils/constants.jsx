// API Endpoints (cuando conectes con tu backend)
export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    PROFILE: '/auth/profile'
  },
  MOVIES: {
    GET_ALL: '/movies',
    GET_BY_CATEGORY: '/movies/category',
    GET_FEATURED: '/movies/featured',
    SEARCH: '/movies/search'
  },
  USER: {
    WATCHLIST: '/user/watchlist',
    FAVORITES: '/user/favorites'
  }
};

// Configuración de la aplicación
export const APP_CONFIG = {
  ITEMS_PER_CAROUSEL: {
    MOBILE: 2,
    TABLET: 4,
    DESKTOP: 6
  },
  BREAKPOINTS: {
    MOBILE: 768,
    TABLET: 1024
  },
  ANIMATION_DURATION: 300
};

// Géneros de películas
export const MOVIE_GENRES = [
  'Acción',
  'Aventura',
  'Comedia',
  'Drama',
  'Terror',
  'Ciencia Ficción',
  'Romance',
  'Thriller',
  'Documentales',
  'Animación'
];

// Clasificaciones de edad
export const AGE_RATINGS = [
  'ATP', // Apta para todo público
  '13+', // Mayores de 13 años
  '16+', // Mayores de 16 años
  '18+'  // Mayores de 18 años
];

// Mensajes de error comunes
export const ERROR_MESSAGES = {
  REQUIRED_FIELD: 'Este campo es requerido',
  INVALID_EMAIL: 'Por favor ingresa un email válido',
  PASSWORD_MIN_LENGTH: 'La contraseña debe tener al menos 6 caracteres',
  PASSWORDS_DONT_MATCH: 'Las contraseñas no coinciden',
  LOGIN_FAILED: 'Email o contraseña incorrectos',
  REGISTER_FAILED: 'Error al crear la cuenta',
  NETWORK_ERROR: 'Error de conexión. Inténtalo de nuevo.',
  UNEXPECTED_ERROR: 'Ocurrió un error inesperado'
};

// Rutas de la aplicación
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  PROFILE: '/profile',
  MOVIE_DETAIL: '/movie/:id',
  SEARCH: '/search',
  MY_LIST: '/my-list'
};

// Datos de ejemplo para desarrollo (remover en producción)
export const DEMO_DATA = {
  HERO_CONTENT: {
    id: 1,
    title: "Stranger Things",
    description: "Cuando un niño desaparece, sus amigos, la familia y la policía local se ven envueltos en un misterio que involucra experimentos gubernamentales secretos, fuerzas sobrenaturales aterradoras y una niña muy extraña.",
    backgroundImage: "https://images.unsplash.com/photo-1489599510827-5b0c5b6bb4c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    logo: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    year: "2022",
    rating: "16+",
    seasons: "4 temporadas"
  }
};