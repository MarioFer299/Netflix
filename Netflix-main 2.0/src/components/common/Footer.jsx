import React from 'react';

const Footer = () => {
  const footerLinks = {
    "Empresa": ["Acerca de Netflix", "Newsroom", "Empleo"],
    "Soporte": ["Centro de ayuda", "Contacta con nosotros", "Canjear tarjetas de regalo"],
    "Legal": ["Términos de uso", "Privacidad", "Preferencias de cookies"],
    "Social": ["Facebook", "Twitter", "Instagram"]
  };

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-gray-400 px-6 md:px-16 py-20 mt-24 rounded-t-3xl shadow-2xl">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white text-lg font-bold mb-4 uppercase tracking-wider border-b border-gray-700 pb-2">{category}</h3>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="hover:text-white hover:underline transition-colors duration-300 text-sm"
                      onClick={(e) => e.preventDefault()}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-gray-800 pt-6 text-center">
          <p className="text-sm text-gray-500 tracking-wide">&copy; 2025 Estamos Melos. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
