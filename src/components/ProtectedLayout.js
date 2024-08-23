// src/components/ProtectedLayout.jsx
import React, { useEffect } from 'react';
import MenuGeneral from './MenuGeneral';
import themes from '../theme';
import '../app.css';

const ProtectedLayout = ({ children }) => {
  const theme = themes.ocean; // Cambia a galaxy o air según sea necesario

  useEffect(() => {
    document.body.style.backgroundColor = theme.bodyBackground;
  }, [theme.bodyBackground]);

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
