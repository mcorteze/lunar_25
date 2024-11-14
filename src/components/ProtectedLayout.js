// src/components/ProtectedLayout.jsx 
import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';  // Importar Navigate para redirección
import MenuGeneral from './MenuGeneral';
import themes from '../theme';
import '../app.css';

const ProtectedLayout = ({ children }) => {
  const theme = themes.ocean; // Cambia a galaxy o air según sea necesario
  const authToken = localStorage.getItem('access_token'); // Obtener el token de autenticación

  useEffect(() => {
    document.body.style.backgroundColor = theme.bodyBackground;
  }, [theme.bodyBackground]);

  // Verificar si el token existe
  if (!authToken) {
    return <Navigate to="/signin" replace />; // Redirigir a /signin si no hay token
  }

  return (
    <div id="canvas" style={{ background: theme.background, color: theme.color, minHeight: '100vh' }}>
      <div id="mobilmenu">
        {/* Aquí puedes agregar contenido específico para el menú móvil si es necesario */}
      </div>
      <header id="header">
        <MenuGeneral />
      </header>
      <section id="page">
        {children}
      </section>
      <footer id="footer">
        {/* Aquí puedes agregar contenido para el footer si es necesario */}
      </footer>
    </div>
  );
};

export default ProtectedLayout;
