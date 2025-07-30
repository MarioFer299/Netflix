# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


////////////////////////////
🎬 Netflix Clone - Frontend
Una réplica completa de la interfaz de Netflix construida con React, Tailwind CSS y componentes modernos.

🚀 Características
✨ Autenticación
Sistema completo de login y registro
Validación de formularios en tiempo real
Manejo de estados de carga y errores
Context API para gestión global del estado
🎭 Interfaz de Usuario
Diseño idéntico a Netflix con animaciones suaves
Header dinámico que cambia con el scroll
Carruseles de películas con navegación
Hero section con contenido destacado
Diseño completamente responsive
🎨 Componentes Reutilizables
Sistema de componentes modular
Botones personalizados con variantes
Inputs con iconos integrados
Cards de películas interactivas
📁 Estructura del Proyecto
src/
├── components/
│   ├── common/          # Componentes compartidos
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── movie/           # Componentes de películas
│   │   ├── HeroSection.jsx
│   │   ├── MovieCard.jsx
│   │   └── MovieCarousel.jsx
│   └── ui/              # Componentes de interfaz
│       ├── Button.jsx
│       └── Input.jsx
├── pages/               # Páginas principales
│   ├── HomePage.jsx
│   ├── LoginPage.jsx
│   └── RegisterPage.jsx
├── context/             # Context API
│   └── AuthContext.jsx
├── utils/               # Utilidades y constantes
│   └── constants.js
├── App.jsx              # Componente principal
├── index.js             # Punto de entrada
└── index.css            # Estilos globales
🛠️ Tecnologías Utilizadas
React 18 - Biblioteca de interfaz de usuario
Tailwind CSS - Framework de estilos utility-first
Lucide React - Iconos modernos y minimalistas
Context API - Gestión de estado global
CSS3 - Animaciones y efectos avanzados
⚡ Instalación y Configuración
1. Clonar el repositorio
bash
git clone <tu-repositorio>
cd netflix-clone-frontend
2. Instalar dependencias
bash
npm install
3. Configurar variables de entorno
bash
cp .env.example .env
Edita el archivo .env con tus configuraciones.

4. Iniciar el servidor de desarrollo
bash
npm start
La aplicación estará disponible en http://localhost:3000

📦 Scripts Disponibles
bash
npm start          # Inicia el servidor de desarrollo
npm run build      # Construye la aplicación para producción
npm test           # Ejecuta las pruebas
npm run eject      # Expone la configuración (no recomendado)
🎯 Funcionalidades Implementadas
🔐 Autenticación
 Formulario de login con validación
 Formulario de registro con confirmación de contraseña
 Manejo de errores y estados de carga
 Persistencia de sesión (simulada)
 Logout funcional
🎬 Interfaz Principal
 Header con navegación y búsqueda
 Hero section con película destacada
 Carruseles de películas por categoría
 Cards interactivas con hover effects
 Footer completo
 Diseño responsive
🎨 Experiencia de Usuario
 Animaciones suaves en todas las interacciones
 Estados de hover y focus bien definidos
 Feedback visual para acciones del usuario
 Carga optimizada de imágenes
 Manejo de errores de imágenes
🔄 Próximos Pasos
🔌 Integración con Backend
 Conectar con API REST
 Implementar autenticación real con JWT
 Cargar datos dinámicos desde base de datos
 Implementar búsqueda en tiempo real
📱 Funcionalidades Adicionales
 React Router para navegación real
 Reproductor de video
 Lista de favoritos
 Perfil de usuario
 Notificaciones push
🚀 Optimizaciones
 Code splitting y lazy loading
 Service Workers para PWA
 Optimización de imágenes
 Tests unitarios y de integración
🎨 Personalización
Colores
Los colores de Netflix están definidos en tailwind.config.js:

javascript
colors: {
  netflix: {
    red: '#E50914',
    black: '#141414',
    darkGray: '#2F2F2F',
    lightGray: '#B3B3B3'
  }
}
Componentes
Todos los componentes están diseñados para ser reutilizables y fáciles de personalizar. Consulta la documentación de cada componente para ver las props disponibles.

🤝 Contribuir
Fork el proyecto
Crea tu rama de feature (git checkout -b feature/AmazingFeature)
Commit tus cambios (git commit -m 'Add some AmazingFeature')
Push a la rama (git push origin feature/AmazingFeature)
Abre un Pull Request
📄 Licencia
Este proyecto está bajo la Licencia MIT. Ver el archivo LICENSE para más detalles.

👨‍💻 Autor
Creado con ❤️ para fines educativos.

¿Necesitas ayuda? Abre un issue en el repositorio.

