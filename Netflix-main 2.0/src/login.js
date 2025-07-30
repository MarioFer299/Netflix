// src/Login.js
import React, { useState } from 'react';

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'admin@demo.com' && password === '1234') {
      onLoginSuccess();
    } else {
      setError('Credenciales incorrectas. Intenta con admin@demo.com y 1234');
    }
  };

  return (
    <div className="login-container">
      <style>{`
        .login-container {
          background: url('https://assets.nflxext.com/ffe/siteui/vlv3/3a44e2b7-2d3d-4b2d-87d4-5db2cfaa82c1/e1a7a5a1-66b0-44b1-8f88-504ff1a0f9f2/CO-es-20230703-popsignuptwoweeks-perspective_alpha_website_medium.jpg') no-repeat center center/cover;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .login-form {
          background-color: rgba(0, 0, 0, 0.75);
          padding: 40px;
          border-radius: 10px;
          color: #fff;
          width: 300px;
          box-shadow: 0 0 20px rgba(0,0,0,0.8);
        }

        .login-form h2 {
          margin-bottom: 20px;
          font-size: 24px;
        }

        .login-form input {
          width: 100%;
          padding: 10px;
          margin-bottom: 15px;
          border: none;
          border-radius: 5px;
          background: #333;
          color: #fff;
        }

        .login-form button {
          width: 100%;
          padding: 10px;
          background-color:#e50914;
          color: white;
          border: none;
          border-radius: 5px;
          font-weight: bold;
          cursor: pointer;
        }

        .login-form button:hover {
          background-color:#f6121d;
        }

        .error-message {
          color:#e50914;
          font-size: 14px;
          margin-bottom: 10px;
          text-align: center;
        }
      `}</style>

      <form className="login-form" onSubmit={handleLogin}>
        <h2>Iniciar sesión</h2>
        {error && <div className="error-message">{error}</div>}
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
